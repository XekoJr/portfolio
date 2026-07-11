<script setup>
// Modal de vídeo (trailer local) — overlay escuro, fecha com Esc,
// clique fora ou botão. O vídeo só carrega quando a modal abre.
import { onMounted, onBeforeUnmount } from 'vue';

defineProps({
  src: { type: String, required: true },
  title: { type: String, required: true },
});

const emit = defineEmits(['close']);

function onKey(e) {
  if (e.key === 'Escape') emit('close');
}

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => document.removeEventListener('keydown', onKey));
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
      @click.self="emit('close')"
    >
      <div class="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0b] shadow-2xl">
        <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h3 class="font-semibold text-white">{{ title }}</h3>
          <button
            class="rounded-md p-1 text-zinc-400 transition hover:text-white"
            aria-label="Close"
            @click="emit('close')"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <video :src="src" class="aspect-video w-full bg-black" controls autoplay></video>
      </div>
    </div>
  </Teleport>
</template>
