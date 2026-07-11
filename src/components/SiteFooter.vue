<script setup>
import { useI18n } from 'vue-i18n';
import { site } from '../data/site';

const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-white/5 py-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-zinc-500 sm:px-6">
      <p>{{ t('footer.built') }}</p>
      <p>© {{ year }} {{ t('footer.rights') }} · <a :href="site.github" target="_blank" rel="noopener" class="hover:text-white">GitHub</a></p>
    </div>
  </footer>
</template>
