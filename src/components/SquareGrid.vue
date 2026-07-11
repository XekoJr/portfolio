<script setup>
// Fundo quadriculado animado do hero: grelha em canvas com células a
// "acender" aleatoriamente nas cores de destaque. Respeita
// prefers-reduced-motion (render estático, sem animação).
import { onMounted, onBeforeUnmount, ref } from 'vue';

const canvas = ref(null);
let raf = 0;
let cleanup = () => {};

const CELL = 48;
const COLORS = ['139, 92, 246', '34, 211, 238']; // accent / accent-2

onMounted(() => {
  const el = canvas.value;
  const ctx = el.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0;
  let h = 0;
  let cells = []; // { col, row, color, alpha, decay }

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
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.045)';
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
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0,
      peak: 0.10 + Math.random() * 0.12,
      rising: true,
    });
  }

  function drawStatic() {
    drawGridLines();
    if (reduced) {
      // Algumas células fixas para não perder o efeito por completo
      for (let i = 0; i < 14; i++) {
        fillCell(
          Math.floor(Math.random() * (w / CELL)),
          Math.floor(Math.random() * (h / CELL)),
          COLORS[i % 2],
          0.08
        );
      }
    }
  }

  function frame() {
    drawGridLines();
    if (cells.length < 18 && Math.random() < 0.25) spawn();
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

  resize();
  window.addEventListener('resize', resize);
  if (!reduced) raf = requestAnimationFrame(frame);

  cleanup = () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(raf);
  };
});

onBeforeUnmount(() => cleanup());
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <canvas ref="canvas" class="grid-canvas h-full w-full"></canvas>
  </div>
</template>

<style scoped>
/* Fade nas margens para a grelha não terminar de forma abrupta */
.grid-canvas {
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%);
}
</style>
