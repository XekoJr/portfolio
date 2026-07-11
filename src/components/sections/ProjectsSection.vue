<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import SectionGlow from '../SectionGlow.vue';
import SquareGrid from '../SquareGrid.vue';
import ProjectCard from '../ProjectCard.vue';
import { games, firstProject, systems, mobile } from '../../data/projects';

const { t } = useI18n();
</script>

<template>
  <section id="projects" class="relative scroll-mt-20 overflow-hidden py-24">
    <!-- Grelha média e estática, concentrada no topo direito -->
    <SquareGrid
      :cell="56"
      :animated="false"
      :static-cells="10"
      mask="radial-gradient(ellipse 70% 55% at 85% 12%, black 25%, transparent 95%)"
    />
    <SectionGlow color="#8b5cf6" position="bottom-0 -left-20" size="h-96 w-96" />
    <div class="mx-auto max-w-6xl px-4 sm:px-6" v-reveal>
      <SectionHeading :title="t('projects.title')" :sub="t('projects.sub')" />

      <h3 class="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-zinc-500">
        {{ t('projects.gamesTitle') }}
      </h3>
      <div class="mb-12 grid gap-5 sm:grid-cols-2">
        <ProjectCard v-for="p in games" :key="p.id" :project="p" />
      </div>

      <h3 class="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-zinc-500">
        {{ t('projects.firstTitle') }}
      </h3>
      <div class="mb-12 grid gap-5 sm:grid-cols-2">
        <ProjectCard :project="firstProject" />
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
    </div>
  </section>
</template>
