<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import StackSection from './components/sections/StackSection.vue';
import PlatformsSection from './components/sections/PlatformsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import HomelabSection from './components/sections/HomelabSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import ConsentBanner from './components/ConsentBanner.vue';
import { hasConsent, loadGA4 } from './utils/analytics';

onMounted(() => {
  if (hasConsent() === 'granted') loadGA4();
});

</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <StackSection />
    <PlatformsSection />
    <ProjectsSection />
    <HomelabSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <ConsentBanner />
</template>
