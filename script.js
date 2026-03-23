/* ============================================================
   METTINAHOLE SWACHHATHON 5K — script.js
   ============================================================ */

(() => {
  'use strict';

  /* ── DOM References ─────────────────────────────────────── */
  const header      = document.getElementById('header');
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobile-nav');
  const navOverlay  = document.getElementById('nav-overlay');
  const progressBar = document.getElementById('progress-bar');
  const backTop     = document.getElementById('back-top');
  const heroBg      = document.querySelector('.hero-parallax-bg');

  /* ── Sticky Header ──────────────────────────────────────── */
  const onScroll = () => {
    const scrollY = window.scrollY;

    // Header scroll style
    header?.classList.toggle('scrolled', scrollY > 60);

    // Progress bar
    if (progressBar) {
      const docH   = document.documentElement.scrollHeight - window.innerHeight;
      const pct    = docH > 0 ? (scrollY / docH) * 100 : 0;
      progressBar.style.width = pct + '%';
    }

    // Back to top visibility
    backTop?.classList.toggle('visible', scrollY > 400);

    // Parallax hero
    if (heroBg && scrollY < window.innerHeight * 1.5) {
      heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Hamburger / Mobile Nav ─────────────────────────────── */
  const toggleNav = (open) => {
    hamburger?.classList.toggle('open', open);
    mobileNav?.classList.toggle('open', open);
    navOverlay?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.contains('open');
    toggleNav(!isOpen);
  });

  navOverlay?.addEventListener('click', () => toggleNav(false));

  // Close nav on mobile link click
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);

        // Trigger map route drawing
        const path = entry.target.querySelector?.('.map-route-path');
        if (path) path.classList.add('animate');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  /* ── Number Counter Animation ───────────────────────────── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el) {
    const target   = parseInt(el.dataset.counter, 10);
    const prefix   = el.dataset.prefix  || '';
    const suffix   = el.dataset.suffix  || '';
    const duration = parseInt(el.dataset.duration || '1800', 10);
    const start    = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ── Tabs (Event Details) ───────────────────────────────── */
  const tabBtns     = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + target)?.classList.add('active');
    });
  });

  /* ── Accordion (FAQ) ────────────────────────────────────── */
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      // Open clicked (toggle)
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Back To Top ────────────────────────────────────────── */
  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Smooth Anchor Scrolling ────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id  = anchor.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset = 80; // header height
      const top    = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Init ───────────────────────────────────────────────── */
  onScroll(); // run once on load
  document.querySelector('.tab-btn')?.click(); // activate first tab

})();
