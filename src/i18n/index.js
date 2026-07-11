import { createI18n } from 'vue-i18n';
import en from './en.json';
import pt from './pt.json';

// EN por defeito; PT auto-selecionado se o browser estiver em português.
// A escolha manual (localStorage) tem sempre prioridade.
function detectLocale() {
  const saved = localStorage.getItem('locale');
  if (saved === 'en' || saved === 'pt') return saved;
  return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, pt },
});

export function setLocale(locale) {
  i18n.global.locale.value = locale;
  localStorage.setItem('locale', locale);
  document.documentElement.lang = locale;
}
