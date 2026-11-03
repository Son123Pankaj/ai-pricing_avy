import { useEffect } from 'react';

const REVEAL_SELECTORS = [
  '.reveal-on-scroll',
  '[data-reveal]',
  '.home-section-head',
  '.section-head',
  '.why-choose-head',
  '.home-pillar-card',
  '.home-service-card',
  '.plan-luxury-card',
  '.bom-card',
  '.bom-comparison-matrix-card',
  '.engine-card',
  '.telecom-service-card',
  '.alliances-box',
  '.why-choose-teal-card',
  '.who-card',
  '.why-pillar-card',
  '.ecosystem-module-card',
  '.official-proposal-signoff-card',
  '.contact-luxury-card',
  '.inquiry-form-card',
  '.quality-banner-box',
  '.calc-wrap',
  '.bill',
  '.features-visual-card',
  '.industry-card',
  '.bpa-flow-container'
].join(', ');

export function useScrollReveal(triggerDep) {
  useEffect(() => {
    // Respect user motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    let observer = null;
    let timer = null;

    const setupObserver = () => {
      const elements = Array.from(document.querySelectorAll(REVEAL_SELECTORS));
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        // If element is already revealed, skip
        if (el.classList.contains('is-revealed')) return;

        const rect = el.getBoundingClientRect();
        // If element is already in viewport (above-the-fold), reveal immediately without delay
        if (rect.top < windowHeight * 0.90) {
          el.classList.add('is-revealed');
        } else {
          // Stagger delay for adjacent cards inside grids
          const parentGrid = el.parentElement;
          if (parentGrid) {
            const siblings = Array.from(parentGrid.children);
            const idx = siblings.indexOf(el);
            if (idx >= 0 && idx < 6) {
              el.style.setProperty('--reveal-delay', `${idx * 0.08}s`);
            }
          }
          el.classList.add('reveal-init');
          observer.observe(el);
        }
      });
    };

    // Small delay to allow DOM to settle after page render
    timer = setTimeout(setupObserver, 80);

    // Fallback: Reveal all elements after 2.5 seconds to ensure zero stuck content
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-init:not(.is-revealed)').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 2500);

    return () => {
      if (timer) clearTimeout(timer);
      if (safetyTimer) clearTimeout(safetyTimer);
      if (observer) observer.disconnect();
    };
  }, [triggerDep]);
}

