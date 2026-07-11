<script setup>
defineProps({
  title: { type: String, required: true },
  sub: { type: String, default: '' },
});
</script>

<template>
  <div class="mb-10">
    <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
      <span class="gradient-text font-mono text-lg align-middle mr-2">#</span>{{ title }}
    </h2>
    <p v-if="sub" class="mt-2 max-w-2xl text-zinc-400">{{ sub }}</p>
  </div>
</template>
