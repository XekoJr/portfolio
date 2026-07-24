import { site } from '../data/site';

const CONSENT_KEY = 'ga-consent';

export function hasConsent() {
  return localStorage.getItem(CONSENT_KEY);
}

export function grantConsent() {
  localStorage.setItem(CONSENT_KEY, 'granted');
  loadGA4();
}

export function denyConsent() {
  localStorage.setItem(CONSENT_KEY, 'denied');
}

let loaded = false;

export function loadGA4() {
  if (loaded) return;
  if (!site.gaMeasurementId || site.gaMeasurementId === 'G-XXXXXXXXXX') return;

  try {
    loaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', site.gaMeasurementId);
  } catch {
    // A blocked/failed script load must never break the page.
  }
}
