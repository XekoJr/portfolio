<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import ProjectCard from '../ProjectCard.vue';
import { games, systems, mobile } from '../../data/projects';

const { t } = useI18n();
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
    <SectionHeading :title="t('projects.title')" :sub="t('projects.sub')" />

    <h3 class="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {{ t('projects.gamesTitle') }}
    </h3>
    <div class="mb-12 grid gap-5 sm:grid-cols-2">
      <ProjectCard v-for="p in games" :key="p.id" :project="p" />
    </div>

    <h3 class="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {{ t('projects.systemsTitle') }}
    </h3>
    <div class="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in systems" :key="p.id" :project="p" />
    </div>

    <h3 class="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {{ t('projects.mobileTitle') }}
    </h3>
    <div class="grid gap-5 sm:grid-cols-2">
      <ProjectCard v-for="p in mobile" :key="p.id" :project="p" />
    </div>
  </section>
</template>
