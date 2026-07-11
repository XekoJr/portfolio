import { createApp } from 'vue';
import '@fontsource-variable/inter';
import './style.css';
import { i18n } from './i18n';
import App from './App.vue';

createApp(App).use(i18n).mount('#app');
