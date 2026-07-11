<script setup>
defineProps({ label: { type: String, required: true } });
</script>

<template>
  <span class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-zinc-400">
    {{ label }}
  </span>
</template>
