<script setup>
import { useI18n } from 'vue-i18n';
import TechChip from './TechChip.vue';

const { t } = useI18n();

defineProps({
  project: { type: Object, required: true },
});
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-white/20">
    <div v-if="project.image" class="max-h-44 overflow-hidden border-b border-white/5">
      <img
        :src="project.image"
        :alt="`${project.name} screenshot`"
        class="h-44 w-full object-cover object-top"
        loading="lazy"
      />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-semibold text-white">{{ project.name }}</h3>
        <span
          v-if="project.privateProject"
          class="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] text-amber-300"
        >{{ t('projects.privateBadge') }}</span>
      </div>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <TechChip v-for="s in project.stack" :key="s" :label="s" />
      </div>
      <p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {{ t(`projects.items.${project.id}.desc`) }}
      </p>
      <div class="mt-4 flex gap-4 text-sm font-medium">
        <a
          v-if="project.live && project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener"
          class="gradient-text"
        >{{ t('platforms.openLive') }} ↗</a>
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noopener"
          class="text-zinc-400 transition hover:text-white"
        >{{ t('platforms.viewCode') }} ↗</a>
      </div>
    </div>
  </article>
</template>
