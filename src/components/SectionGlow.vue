<script setup>
// Blob de luz difusa, posicionado por secção, para variar a atmosfera
// visual ao longo do scroll sem sair da paleta violeta/ciano do tema.
defineProps({
  color: { type: String, default: '#8b5cf6' },
  position: { type: String, default: 'top-1/4 left-1/4' },
  size: { type: String, default: 'h-96 w-96' },
});
</script>

<template>
  <div
    class="pointer-events-none absolute -z-10 rounded-full opacity-[0.12] blur-3xl"
    :class="[position, size]"
    :style="{ background: color }"
    aria-hidden="true"
  ></div>
</template>
