<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionHeading from '../SectionHeading.vue';
import TechChip from '../TechChip.vue';
import SquareGrid from '../SquareGrid.vue';
import { platforms } from '../../data/projects';

const { t, tm, rt } = useI18n();
const activeId = ref(platforms[0].id);
const active = computed(() => platforms.find((p) => p.id === activeId.value));

// Monograma para plataformas sem screenshot
function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
</script>

<template>
  <section id="platforms" class="relative scroll-mt-20 overflow-hidden border-y border-white/5 bg-white/[0.015] py-24">
    <!-- Grelha animada como no hero, mas mais calma e encostada à direita -->
    <SquareGrid
      :cell="48"
      :max-cells="9"
      mask="radial-gradient(ellipse 75% 90% at 88% 40%, black 25%, transparent 95%)"
    />
    <div class="mx-auto max-w-6xl px-4 sm:px-6" v-reveal>
      <SectionHeading :title="t('platforms.title')" :sub="t('platforms.sub')" />

      <!-- Tab bar — cada tab com a cor da sua plataforma -->
      <div class="mb-8 flex flex-wrap gap-2" role="tablist">
        <button
          v-for="p in platforms"
          :key="p.id"
          role="tab"
          :aria-selected="p.id === activeId"
          class="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition"
          :class="p.id === activeId ? 'text-white' : 'border-white/10 text-zinc-400 hover:border-white/25 hover:text-white'"
          :style="p.id === activeId
            ? { borderColor: p.theme + '80', backgroundColor: p.theme + '1a' }
            : {}"
          @click="activeId = p.id"
        >
          <span class="h-2 w-2 rounded-full" :style="{ backgroundColor: p.theme }" aria-hidden="true"></span>
          {{ p.name }}
        </button>
      </div>

      <!-- Painel ativo — fundo tingido com o tema da plataforma -->
      <div
        :key="active.id"
        class="grid gap-8 rounded-2xl border p-6 sm:p-8 lg:grid-cols-2"
        role="tabpanel"
        :style="{
          borderColor: active.theme + '40',
          background: `linear-gradient(135deg, ${active.theme}14 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, ${active.theme}0d, transparent), #0a0a0b`,
        }"
      >
        <!-- Screenshot / monograma -->
        <div class="flex min-h-56 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <img
            v-if="active.image"
            :src="active.image"
            :alt="`${active.name} screenshot`"
            class="h-full w-full object-contain"
            loading="lazy"
          />
          <div
            v-else
            class="flex h-full min-h-56 w-full items-center justify-center bg-gradient-to-br from-violet-600/15 to-cyan-500/10"
          >
            <span class="gradient-text font-mono text-6xl font-bold">{{ initials(active.name) }}</span>
          </div>
        </div>

        <!-- Detalhes -->
        <div class="flex flex-col">
          <h3 class="text-xl font-bold text-white">{{ active.name }}</h3>

          <div class="mt-3 flex flex-wrap gap-1.5">
            <TechChip v-for="s in active.stack" :key="s" :label="s" />
          </div>

          <p class="mt-4 leading-relaxed text-zinc-300">
            {{ t(`platforms.items.${active.id}.desc`) }}
          </p>

          <p class="mt-5 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {{ t('platforms.highlightsLabel') }}
          </p>
          <ul class="mt-2 space-y-2">
            <li
              v-for="(h, i) in tm(`platforms.items.${active.id}.highlights`)"
              :key="i"
              class="flex gap-2 text-sm leading-relaxed text-zinc-400"
            >
              <span class="text-(--color-accent-2)">▸</span>
              <span>{{ rt(h) }}</span>
            </li>
          </ul>

          <div
            v-if="active.demo"
            class="mt-5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 font-mono text-xs text-cyan-300"
          >
            <span class="font-semibold">{{ t('platforms.demoCreds') }}:</span>
            {{ active.demo.user }} / {{ active.demo.pass }}
          </div>

          <div class="mt-6 flex flex-wrap gap-3 pt-2">
            <a
              v-if="active.live"
              :href="active.liveUrl"
              target="_blank"
              rel="noopener"
              class="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >{{ t('platforms.openLive') }} ↗</a>
            <span
              v-else
              class="cursor-default rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-500"
              :title="active.liveUrl"
            >{{ t('platforms.liveSoon') }} · {{ active.liveUrl.replace('https://', '') }}</span>
            <a
              :href="active.repo"
              target="_blank"
              rel="noopener"
              class="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-white/30 hover:text-white"
            >{{ t('platforms.viewCode') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
