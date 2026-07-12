<script setup>
import { useI18n } from 'vue-i18n';
import SquareGrid from '../SquareGrid.vue';
import { site } from '../../data/site';

const { t } = useI18n();
</script>

<template>
  <section class="relative flex min-h-screen items-center overflow-hidden pt-14">
    <SquareGrid />

    <!-- Brilho subtil por trás do título -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
      style="background: radial-gradient(closest-side, #8b5cf6, transparent)"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <div class="mb-6 flex items-center gap-4">
        <img
          src="/thumbs/eu.jpg"
          alt="André Pacheco"
          class="h-16 w-16 rounded-full border-2 border-white/15 object-cover sm:h-20 sm:w-20"
        />
        <p class="font-mono text-sm text-zinc-400">
          <span class="text-(--color-accent-2)">$</span> whoami
        </p>
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        {{ t('hero.greeting') }} <span class="gradient-text">André Pacheco</span>
      </h1>
      <p class="mt-3 font-mono text-lg text-zinc-400">// {{ t('hero.role') }}</p>
      <p class="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-300">
        {{ t('hero.tagline') }}
      </p>
      <p class="mt-4 max-w-2xl leading-relaxed text-zinc-500">
        {{ t('hero.sub') }}
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#platforms"
          class="group rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:opacity-90"
        >{{ t('hero.ctaPlatforms') }} <span class="inline-block transition-transform group-hover:translate-y-0.5">↓</span></a>
        <a
          :href="site.github"
          target="_blank"
          rel="noopener"
          class="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-white/30 hover:text-white"
        >{{ t('hero.ctaGithub') }} ↗</a>
      </div>
    </div>
  </section>
</template>
