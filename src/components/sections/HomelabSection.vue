<script setup>
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import SectionGlow from '../SectionGlow.vue';
import SquareGrid from '../SquareGrid.vue';

const { t } = useI18n();

const cards = [
  { id: 'proxmox', icon: 'M4 6h16v10H4z M8 20h8 M12 16v4' },
  { id: 'edge', icon: 'M12 3v18 M3 12h18 M5.6 5.6l12.8 12.8 M18.4 5.6L5.6 18.4' },
  { id: 'hera', icon: 'M9 3h6v4H9z M5 11h14v10H5z M12 7v4 M9 16h.01 M15 16h.01' },
  { id: 'email', icon: 'M3 6h18v12H3z M3 7l9 6 9-6' },
];
</script>

<template>
  <section id="homelab" class="relative scroll-mt-20 overflow-hidden border-y border-white/5 bg-white/[0.015] py-24">
    <!-- Grelha compacta animada, no canto inferior esquerdo -->
    <SquareGrid
      :cell="36"
      :max-cells="7"
      mask="radial-gradient(ellipse 70% 85% at 10% 80%, black 20%, transparent 95%)"
    />
    <SectionGlow color="#22d3ee" position="bottom-0 right-0" size="h-80 w-80" />
    <div class="mx-auto max-w-6xl px-4 sm:px-6" v-reveal>
      <SectionHeading :title="t('homelab.title')" :sub="t('homelab.sub')" />
      <div class="grid gap-5 sm:grid-cols-2">
        <div
          v-for="c in cards"
          :key="c.id"
          class="rounded-xl border border-white/10 bg-[#0a0a0b] p-6 transition hover:border-white/20"
        >
          <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10">
            <svg viewBox="0 0 24 24" class="h-5 w-5 stroke-violet-400" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path :d="c.icon" />
            </svg>
          </div>
          <h3 class="font-semibold text-white">{{ t(`homelab.cards.${c.id}.title`) }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ t(`homelab.cards.${c.id}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
