/* ═══════════════════════════════════════════════════════════════
   main.js — John Doe Portfolio
   Author: John Doe
   Description: Main scripts for portfolio landing page
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     PORTFOLIO CAROUSEL
  ───────────────────────────────────────── */
  const track    = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const cards    = track ? track.querySelectorAll('.project-card') : [];
  const total    = cards.length;

  let current = 0;
  let cardW   = 0;
  let visible = 3;

  /**
   * Recalculate card width and how many cards are visible
   * based on current viewport width.
   */
  function calcDimensions() {
    if (!cards.length) return;
    cardW   = cards[0].offsetWidth + 20; // 20px = gap
    visible = window.innerWidth < 700  ? 1
            : window.innerWidth < 1000 ? 2
            : 3;
  }

  /**
   * Build pagination dots based on how many slides exist.
   */
  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const maxSlide = Math.max(0, total - visible);

    for (let i = 0; i <= maxSlide; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to project ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  /**
   * Update which dot is active.
   */
  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
  }

  /**
   * Slide carousel to a given index.
   * @param {number} idx - Target slide index
   */
  function goTo(idx) {
    const maxSlide = Math.max(0, total - visible);
    current = Math.max(0, Math.min(idx, maxSlide));
    if (track) track.style.transform = `translateX(-${current * cardW}px)`;
    updateDots();
  }

  // Prev / Next buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch / swipe support
  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  // Recalculate on resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      calcDimensions();
      buildDots();
      goTo(current);
    }, 150);
  });

  calcDimensions();
  buildDots();


  /* ─────────────────────────────────────────
     FADE-UP ON SCROLL (IntersectionObserver)
  ───────────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => fadeObserver.observe(el));
  } else {
    // Fallback for old browsers — show everything immediately
    fadeEls.forEach(el => el.classList.add('visible'));
  }


  /* ─────────────────────────────────────────
     ACTIVE NAV LINK ON SCROLL
  ───────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(section => navObserver.observe(section));
  }


  /* ─────────────────────────────────────────
     HEADER SHADOW ON SCROLL
  ───────────────────────────────────────── */
  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 24px rgba(0,0,0,0.5)'
        : 'none';
    }, { passive: true });
  }


  /* ─────────────────────────────────────────
     CONTACT FORM — basic client-side feedback
  ───────────────────────────────────────── */
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.btn-submit');
      const originalText = btn.innerHTML;

      // Simple visual feedback — replace with real form handler (Formspree, EmailJS, etc.)
      btn.innerHTML = 'Message sent ✓';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.opacity = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

});
