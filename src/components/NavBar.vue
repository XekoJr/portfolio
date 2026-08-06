<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from '../i18n';
import { site } from '../data/site';

const { t, locale } = useI18n();
const open = ref(false);

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'platforms', key: 'nav.platforms' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'homelab', key: 'nav.homelab' },
  { id: 'contact', key: 'nav.contact' },
];

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'pt' : 'en');
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur">
    <nav class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a href="#" class="font-mono text-sm font-bold tracking-tight text-white">
        <span class="gradient-text">ap</span><span class="text-zinc-500">.</span>pt
      </a>

      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          class="text-sm text-zinc-400 transition hover:text-white"
        >{{ t(l.key) }}</a>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-zinc-400 transition hover:border-white/25 hover:text-white"
          :aria-label="locale === 'en' ? 'Mudar para português' : 'Switch to English'"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'PT' : 'EN' }}
        </button>
        <a
          :href="site.github"
          target="_blank"
          rel="noopener"
          class="hidden text-zinc-400 transition hover:text-white sm:block"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <button
          class="text-zinc-400 md:hidden"
          aria-label="Menu"
          @click="open = !open"
        >
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current stroke-2"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="border-t border-white/5 px-4 pb-3 md:hidden">
      <a
        v-for="l in links"
        :key="l.id"
        :href="`#${l.id}`"
        class="block py-2 text-sm text-zinc-400 hover:text-white"
        @click="open = false"
      >{{ t(l.key) }}</a>
    </div>
  </header>
</template>
