<script setup>
import { useI18n } from 'vue-i18n';
import { site } from '../../data/site';

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 text-center sm:px-6">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {{ t('contact.title') }}
    </h2>
    <p class="mx-auto mt-3 max-w-xl text-zinc-400">{{ t('contact.text') }}</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a
        :href="`mailto:${site.email}`"
        class="rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:opacity-90"
      >{{ t('contact.emailCta') }} → {{ site.email }}</a>
      <a
        :href="site.linkedin"
        target="_blank"
        rel="noopener"
        class="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/30 hover:text-white"
      >LinkedIn ↗</a>
    </div>
  </section>
</template>
