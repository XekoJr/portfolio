<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import SectionGlow from '../SectionGlow.vue';
import SquareGrid from '../SquareGrid.vue';
import { stack } from '../../data/stack';

const { t } = useI18n();
</script>

<template>
  <section id="stack" class="relative scroll-mt-20 overflow-hidden py-24">
    <!-- Grelha fina e densa, a desvanecer para baixo -->
    <SquareGrid
      :cell="28"
      :animated="false"
      :static-cells="16"
      :line-opacity="0.05"
      mask="linear-gradient(to bottom, black 30%, transparent 100%)"
    />
    <SectionGlow color="#22d3ee" position="top-0 right-0" size="h-80 w-80" />
    <div class="mx-auto max-w-6xl px-4 sm:px-6" v-reveal>
      <SectionHeading :title="t('stack.title')" :sub="t('stack.sub')" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cat in stack"
          :key="cat.id"
          class="rounded-xl border border-white/10 bg-[#0a0a0b] p-5"
        >
          <h3 class="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {{ t(`stack.categories.${cat.id}`) }}
          </h3>
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="item in cat.items"
              :key="item.name"
              class="group flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 transition hover:border-white/20"
              :title="item.name"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-5 w-5 shrink-0 transition"
                :style="{ fill: `#${item.icon.hex}` }"
                role="img"
                :aria-label="item.name"
              >
                <path :d="item.icon.path" />
              </svg>
              <span class="text-sm text-zinc-300">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
