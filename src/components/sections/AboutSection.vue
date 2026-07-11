<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import SectionGlow from '../SectionGlow.vue';
import SquareGrid from '../SquareGrid.vue';

const { t } = useI18n();
</script>

<template>
  <section id="about" class="relative mx-auto max-w-6xl scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6">
    <!-- Grelha larga e estática, concentrada no canto superior esquerdo -->
    <SquareGrid
      :cell="64"
      :animated="false"
      :static-cells="8"
      mask="radial-gradient(ellipse 70% 90% at 12% 25%, black 25%, transparent 95%)"
    />
    <SectionGlow color="#8b5cf6" position="-top-10 -left-20" size="h-72 w-72" />
    <div v-reveal>
      <SectionHeading :title="t('about.title')" />
      <div class="grid gap-10 md:grid-cols-2">
        <div class="space-y-4 leading-relaxed text-zinc-300">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
        </div>
        <div class="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h3 class="flex items-center gap-2 font-semibold text-white">
            <span class="gradient-text font-mono">&gt;_</span> {{ t('about.aiTitle') }}
          </h3>
          <p class="mt-3 leading-relaxed text-zinc-400">{{ t('about.aiText') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
