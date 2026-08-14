'use client';
import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    // ── NAV SCROLL + SECTION-AWARE COLOR STATE ──────────────────────────────
    const nav = document.getElementById('siteNav');
    const lightSections = document.querySelectorAll('#system, #curriculum, #training, #faq');

    let lastScrollY = window.scrollY;

    function updateNav() {
      const currentScrollY = window.scrollY;

      // Always visible at the top/hero section
      if (currentScrollY <= 80) {
        nav.classList.remove('nav-hidden');
      } else if (currentScrollY > lastScrollY) {
        // Disappear while scrolling down
        nav.classList.add('nav-hidden');
      } else if (currentScrollY < lastScrollY) {
        // Reappear when scrolling back up towards hero
        nav.classList.remove('nav-hidden');
      }

      lastScrollY = currentScrollY;

      let onLight = false;
      lightSections.forEach((sec) => {
        const r = sec.getBoundingClientRect();
        if (r.top < 80 && r.bottom > 80) onLight = true;
      });
      nav.classList.toggle('on-light', onLight);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    // ── MOBILE MENU ─────────────────────────────────────────────────────────
    const burger = document.getElementById('navBurger');
    const links = document.getElementById('navLinks');
    function burgerClick() {
      burger.classList.toggle('open');
      links.classList.toggle('open');
    }
    burger.addEventListener('click', burgerClick);
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
      })
    );

    // ── VIDEO LIGHTBOX ───────────────────────────────────────────────────────
    const YT_ID = 'C5cSb4rDNfg';
    const playBtn = document.getElementById('playBtn');
    const videoBox = document.getElementById('videoBox');
    const videoMount = document.getElementById('videoMount');
    const videoClose = document.getElementById('videoClose');

    function openVideo() {
      videoMount.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' +
        YT_ID +
        '?autoplay=1&rel=0&modestbranding=1&playsinline=1" ' +
        'title="TREQO film" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" ' +
        'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      videoBox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeVideo() {
      videoBox.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        videoMount.innerHTML = '';
      }, 450);
    }

    if (playBtn) playBtn.addEventListener('click', openVideo);
    if (videoClose) videoClose.addEventListener('click', closeVideo);
    if (videoBox)
      videoBox.addEventListener('click', (e) => {
        if (e.target === videoBox) closeVideo();
      });
    function escHandler(e) {
      if (e.key === 'Escape' && videoBox.classList.contains('open')) closeVideo();
    }
    document.addEventListener('keydown', escHandler);

    // ── CURRICULUM PATH ANIMATION ────────────────────────────────────────────
    const currPath = document.getElementById('currPath');
    const pathFill = document.getElementById('pathFill');
    const steps = Array.from(document.querySelectorAll('.step'));

    const stepIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('on');
        });
      },
      { threshold: 0.4, rootMargin: '0px 0px -18% 0px' }
    );
    steps.forEach((s) => stepIO.observe(s));

    function updatePath() {
      if (!currPath || !pathFill) return;
      const r = currPath.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const pct = ((mid - r.top) / r.height) * 100;
      pathFill.style.height = Math.max(0, Math.min(100, pct)) + '%';
    }
    window.addEventListener('scroll', updatePath, { passive: true });
    window.addEventListener('resize', updatePath);
    updatePath();

    // ── REVEAL ON SCROLL ─────────────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    // ── MILESTONE SLIDER ─────────────────────────────────────────────────────
    const track = document.getElementById('sliderTrack');
    const dotsWrap = document.getElementById('sliderDots');

    if (track && dotsWrap) {
      const slides = Array.from(track.children);
      slides.forEach((s, i) => {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () =>
          slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start' })
        );
        dotsWrap.appendChild(dot);
      });
      const dotEls = Array.from(dotsWrap.children);

      function syncDots() {
        const trackLeft = track.scrollLeft;
        let closest = 0,
          min = Infinity;
        slides.forEach((s, i) => {
          const d = Math.abs(s.offsetLeft - trackLeft);
          if (d < min) {
            min = d;
            closest = i;
          }
        });
        dotEls.forEach((d, i) => d.classList.toggle('active', i === closest));
      }
      track.addEventListener('scroll', () => window.requestAnimationFrame(syncDots), {
        passive: true,
      });

      const slideNext = document.getElementById('slideNext');
      const slidePrev = document.getElementById('slidePrev');
      if (slideNext)
        slideNext.addEventListener('click', () =>
          track.scrollBy({ left: track.clientWidth * 0.85, behavior: 'smooth' })
        );
      if (slidePrev)
        slidePrev.addEventListener('click', () =>
          track.scrollBy({ left: -track.clientWidth * 0.85, behavior: 'smooth' })
        );
    }

    // ── TABS ─────────────────────────────────────────────────────────────────
    const tabBtns = document.querySelectorAll('.tab-nav button');
    tabBtns.forEach((btn) =>
      btn.addEventListener('click', () => {
        tabBtns.forEach((b) => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      })
    );

    // ── THREADLINE ───────────────────────────────────────────────────────────
    const stages = Array.from(document.querySelectorAll('[data-stage]'));
    const thread = document.getElementById('thread');
    const fill = document.getElementById('threadFill');
    const dots = [];

    function updateThread() {
      if (!thread) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fill) fill.style.height = pct * 100 + '%';
      let activeIdx = 0;
      stages.forEach((sec, i) => {
        const r = sec.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.5) activeIdx = i;
      });
      dots.forEach((d, i) => d.el.classList.toggle('active', i === activeIdx));
    }

    if (thread) {
      stages.forEach((sec) => {
        const dot = document.createElement('div');
        dot.className = 'thread-dot';
        dot.innerHTML = '<span class="thread-tag">' + sec.dataset.stage + '</span>';
        dot.addEventListener('click', () => sec.scrollIntoView({ behavior: 'smooth' }));
        thread.appendChild(dot);
        dots.push({ el: dot, sec });
      });

      window.addEventListener('scroll', updateThread, { passive: true });
      window.addEventListener('resize', updateThread);
      updateThread();
    }

    // ── CLEANUP ───────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('scroll', updatePath);
      window.removeEventListener('scroll', updateThread);
      window.removeEventListener('resize', updatePath);
      window.removeEventListener('resize', updateThread);
      document.removeEventListener('keydown', escHandler);
      if (burger) burger.removeEventListener('click', burgerClick);
      stepIO.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
