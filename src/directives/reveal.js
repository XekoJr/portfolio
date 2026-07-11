// Diretiva v-reveal: fade + slide suave quando o elemento entra no viewport.
// Aplicada por secção (não no Hero, que já está visível no load).
export const revealDirective = {
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );
    io.observe(el);
  },
};
