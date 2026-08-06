<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import SectionGlow from '../SectionGlow.vue';
import SquareGrid from '../SquareGrid.vue';
import TechChip from '../TechChip.vue';
import { experience } from '../../data/experience';

const { t } = useI18n();
</script>

<template>
  <section id="experience" class="relative mx-auto max-w-6xl scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6">
    <SquareGrid
      :cell="48"
      :animated="false"
      :static-cells="10"
      mask="radial-gradient(ellipse 70% 90% at 88% 20%, black 25%, transparent 95%)"
    />
    <SectionGlow color="#8b5cf6" position="-top-10 -right-20" size="h-72 w-72" />
    <div v-reveal>
      <SectionHeading :title="t('experience.title')" :sub="t('experience.sub')" />
      <div class="grid gap-10 md:grid-cols-2">
        <div>
          <h3 class="font-semibold text-white">{{ experience.company }}</h3>
          <p class="mt-0.5 text-sm text-zinc-500">{{ t('experience.location') }}</p>

          <ol class="mt-6 space-y-6 border-l border-white/10 pl-6">
            <li v-for="role in experience.roles" :key="role.id" class="relative">
              <span
                class="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0b]"
                :class="role.current ? 'bg-violet-400' : 'bg-zinc-600'"
              ></span>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-medium text-white">{{ t(`experience.roles.${role.id}.title`) }}</h4>
                <TechChip :label="t(`experience.roles.${role.id}.type`)" />
              </div>
              <p class="mt-1 font-mono text-xs text-zinc-500">{{ t(`experience.roles.${role.id}.period`) }}</p>
              <p v-if="role.hasNote" class="mt-1 text-sm text-zinc-400">
                {{ t(`experience.roles.${role.id}.note`) }}
              </p>
            </li>
          </ol>
        </div>

        <div class="h-fit rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h3 class="flex items-center gap-2 font-semibold text-white">
            <span class="gradient-text font-mono">&gt;_</span> {{ t('experience.focusTitle') }}
          </h3>
          <p class="mt-3 leading-relaxed text-zinc-400">{{ t('experience.focusText') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
