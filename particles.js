/* ============================================================
   Floating fruit particle system  +  scroll parallax
   Real transparent-PNG fruit drifting down the whole page.
   ============================================================ */
(function () {
  const layer = document.getElementById('particles');
  if (!layer) return;

  const POOL = ['images/orange.png', 'images/kiwi.png', 'images/pineapple.png', 'images/charcoal.png', 'images/charcoal.png'];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let parts = [];        // global floaters

  function rand(a, b) { return a + Math.random() * (b - a); }

  function build(count) {
    layer.innerHTML = '';
    parts = [];
    for (let i = 0; i < count; i++) {
      const src = POOL[Math.floor(Math.random() * POOL.length)];
      const el = document.createElement('div');
      el.className = 'particle';
      const size = rand(56, 124);
      const depth = rand(0.06, 0.5);
      const x = rand(0, 100);
      const yStart = rand(window.innerHeight, document.body.scrollHeight || 3000);
      el.style.width = size + 'px';
      el.style.left = x + 'vw';
      el.style.top = yStart + 'px';
      el.style.opacity = String(rand(0.55, 0.95));

      const bob = document.createElement('div');
      bob.className = 'pbob';
      bob.style.setProperty('--dur', rand(6, 13) + 's');
      bob.style.setProperty('--delay', (-rand(0, 6)) + 's');
      bob.style.setProperty('--rot', rand(-28, 28) + 'deg');
      bob.style.setProperty('--rotspin', (Math.random() > .5 ? 1 : -1) * rand(6, 16) + 'deg');
      bob.style.setProperty('--flip', Math.random() > .5 ? -1 : 1);
      const img = document.createElement('img');
      img.src = src; img.alt = ''; img.loading = 'lazy';
      bob.appendChild(img);
      el.appendChild(bob);
      layer.appendChild(el);
      parts.push({ el, depth });
    }
  }

  function update() {
  }

  let ticking = false;
  function onScroll() {
    if (ticking || reduce) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      for (const p of parts) p.el.style.transform = `translateY(${-sy * p.depth}px)`;
      ticking = false;
    });
  }

  function countFor(motion) {
    const base = Math.round((document.body.scrollHeight || 3000) / 320);
    return Math.max(5, Math.round(base * (motion / 10) * 1.2));
  }

  let currentMotion = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion')) || 8;

  function rebuild() {
    build(reduce ? Math.min(8, countFor(currentMotion)) : countFor(currentMotion));
    onScroll();
  }

  window.__setMotion = function (m) {
    currentMotion = m;
    document.documentElement.style.setProperty('--motion', m);
    rebuild();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(rebuild, 300); });

  if (document.readyState === 'complete') setTimeout(rebuild, 120);
  else window.addEventListener('load', () => setTimeout(rebuild, 120));
})();
