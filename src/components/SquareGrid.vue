<script setup>
// Fundo quadriculado (o mesmo look do hero) reutilizável em qualquer secção,
// com variantes por props: tamanho da célula, animado ou estático, densidade
// e máscara. A animação pausa quando o elemento sai do viewport e respeita
// prefers-reduced-motion (cai para o modo estático).
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  cell: { type: Number, default: 48 },
  animated: { type: Boolean, default: true },
  // Cores dos "acendimentos", em componentes RGB
  colors: { type: Array, default: () => ['139, 92, 246', '34, 211, 238'] },
  lineOpacity: { type: Number, default: 0.045 },
  // Nº máximo de células acesas em simultâneo (animado) / fixas (estático)
  maxCells: { type: Number, default: 18 },
  staticCells: { type: Number, default: 14 },
  // Máscara CSS para desvanecer as margens
  mask: {
    type: String,
    default: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
  },
});

const canvas = ref(null);
let raf = 0;
let cleanup = () => {};

onMounted(() => {
  const el = canvas.value;
  const ctx = el.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animate = props.animated && !reduced;
  const CELL = props.cell;
  let w = 0;
  let h = 0;
  let cells = [];
  let inView = true;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = el.clientWidth;
    h = el.clientHeight;
    el.width = w * dpr;
    el.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawStatic();
  }

  function drawGridLines() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = `rgba(255, 255, 255, ${props.lineOpacity})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0.5; x <= w; x += CELL) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = 0.5; y <= h; y += CELL) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
  }

  function fillCell(col, row, color, alpha) {
    ctx.fillStyle = `rgba(${color}, ${alpha})`;
    ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 1, CELL - 1);
  }

  function spawn() {
    cells.push({
      col: Math.floor(Math.random() * (w / CELL)),
      row: Math.floor(Math.random() * (h / CELL)),
      color: props.colors[Math.floor(Math.random() * props.colors.length)],
      alpha: 0,
      peak: 0.10 + Math.random() * 0.12,
      rising: true,
    });
  }

  function drawStatic() {
    drawGridLines();
    if (!animate) {
      for (let i = 0; i < props.staticCells; i++) {
        fillCell(
          Math.floor(Math.random() * (w / CELL)),
          Math.floor(Math.random() * (h / CELL)),
          props.colors[i % props.colors.length],
          0.05 + Math.random() * 0.06
        );
      }
    }
  }

  function frame() {
    if (!inView) {
      raf = 0;
      return;
    }
    drawGridLines();
    if (cells.length < props.maxCells && Math.random() < 0.25) spawn();
    cells = cells.filter((c) => {
      if (c.rising) {
        c.alpha += 0.004;
        if (c.alpha >= c.peak) c.rising = false;
      } else {
        c.alpha -= 0.0025;
      }
      if (c.alpha <= 0) return false;
      fillCell(c.col, c.row, c.color, c.alpha);
      return true;
    });
    raf = requestAnimationFrame(frame);
  }

  // Pausar a animação fora do viewport — vários grids na página sem custo
  const io = new IntersectionObserver(
    (entries) => {
      inView = entries[0].isIntersecting;
      if (animate && inView && !raf) raf = requestAnimationFrame(frame);
    },
    { threshold: 0 }
  );

  resize();
  window.addEventListener('resize', resize);
  io.observe(el);
  if (animate) raf = requestAnimationFrame(frame);

  cleanup = () => {
    window.removeEventListener('resize', resize);
    io.disconnect();
    cancelAnimationFrame(raf);
  };
});

onBeforeUnmount(() => cleanup());
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <canvas
      ref="canvas"
      class="h-full w-full"
      :style="{ maskImage: mask, WebkitMaskImage: mask }"
    ></canvas>
  </div>
</template>
