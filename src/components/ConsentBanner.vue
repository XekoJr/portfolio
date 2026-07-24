<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { hasConsent, grantConsent, denyConsent } from '../utils/analytics';

const { t } = useI18n();
const visible = ref(hasConsent() === null);

function accept() {
  grantConsent();
  visible.value = false;
}

function decline() {
  denyConsent();
  visible.value = false;
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-zinc-950/95 px-4 py-4 backdrop-blur sm:px-6"
  >
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-3 text-sm text-zinc-300 sm:flex-row sm:justify-between">
      <p>{{ t('cookieConsent.message') }}</p>
      <div class="flex shrink-0 gap-2">
        <button
          type="button"
          class="rounded-md border border-white/10 px-4 py-2 text-zinc-300 hover:text-white"
          @click="decline"
        >
          {{ t('cookieConsent.decline') }}
        </button>
        <button
          type="button"
          class="rounded-md bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-zinc-200"
          @click="accept"
        >
          {{ t('cookieConsent.accept') }}
        </button>
      </div>
    </div>
  </div>
</template>
