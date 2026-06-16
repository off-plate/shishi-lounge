/* ============================================================
   HERO.js — real-fruit scatter that drifts TOWARD & AWAY from
   the viewer around the hookah (top-down depth feel), driven by
   a smoothed scroll value so it never glitches with the wheel.
   ============================================================ */
(function () {
  const stage = document.getElementById('heroScatter');
  if (!stage) return;
  const hero = document.getElementById('home');
  const centerEl = stage.parentElement.querySelector('.hero-centerpiece');

  const F = {
    orange: 'images/orange.webp',
    kiwi: 'images/kiwi.webp',
    pineapple: 'images/pineapple.webp',
    charcoal: 'images/charcoal.webp',
  };

  const SCATTER = [
    { s: F.orange,    x: 6,  y: 16, w: 132, d: 0.10, r: -14 },
    { s: F.charcoal,  x: 22, y: 30, w: 74,  d: 0.22, r: 6 },
    { s: F.kiwi,      x: 17, y: 44, w: 150, d: 0.16, r: 8 },
    { s: F.pineapple, x: 9,  y: 68, w: 128, d: 0.12, r: 12, flip: true },
    { s: F.orange,    x: 26, y: 84, w: 104, d: 0.20, r: 20 },
    { s: F.charcoal,  x: 40, y: 70, w: 64,  d: 0.26, r: -8 },
    { s: F.kiwi,      x: 68, y: 15, w: 132, d: 0.14, r: -6 },
    { s: F.pineapple, x: 60, y: 32, w: 120, d: 0.18, r: -18 },
    { s: F.orange,    x: 86, y: 22, w: 120, d: 0.12, r: 16, flip: true },
    { s: F.charcoal,  x: 72, y: 50, w: 78,  d: 0.20, r: 12 },
    { s: F.kiwi,      x: 90, y: 56, w: 150, d: 0.10, r: 10 },
    { s: F.pineapple, x: 80, y: 78, w: 132, d: 0.16, r: 8 },
    { s: F.orange,    x: 50, y: 92, w: 110, d: 0.20, r: -10 },
    { s: F.charcoal,  x: 58, y: 8,  w: 60,  d: 0.18, r: -14 },
    { s: F.kiwi,      x: 30, y: 14, w: 116, d: 0.13, r: 14, flip: true },
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pieces = [];

  SCATTER.forEach((s, i) => {
    const piece = document.createElement('div');
    piece.className = 'piece';
    piece.style.left = s.x + '%';
    piece.style.top = s.y + '%';
    piece.style.width = s.w + 'px';

    const bob = document.createElement('div');
    bob.className = 'bob';
    bob.style.setProperty('--rot', s.r + 'deg');
    bob.style.setProperty('--flip', s.flip ? -1 : 1);

    const img = document.createElement('img');
    img.src = s.s; img.alt = ''; img.loading = 'eager';
    bob.appendChild(img);
    piece.appendChild(bob);
    stage.appendChild(piece);

    pieces.push({
      el: piece, fx: s.x / 100, fy: s.y / 100,
      phase: (i / SCATTER.length) * Math.PI * 2,
      dir: (i % 2 ? 1 : -1),
      amp: 0.55 + (s.d) * 1.4,          // depth/scale strength
      spread: 26 + s.d * 150,           // px in/out drift
      tilt: 5 + (i % 4) * 3,            // deg gentle rotation
      vbob: 5 + (i % 3) * 4,            // px vertical sway
      idle: 0.10 + (i % 5) * 0.012,     // rad/s slow life
    });
  });

  let cx = 0, cy = 0;

  function measure() {
    const sr = stage.getBoundingClientRect();
    cx = sr.width * 0.5; cy = sr.height * 0.64;
    if (centerEl) {
      const cr = centerEl.getBoundingClientRect();
      cx = cr.left - sr.left + cr.width / 2;
      cy = cr.top - sr.top + cr.height * 0.5;
    }
    pieces.forEach(p => {
      const w = p.el.offsetWidth, h = p.el.offsetHeight || w;
      p.bx = p.fx * sr.width + w / 2;
      p.by = p.fy * sr.height + h / 2;
      let ux = p.bx - cx, uy = p.by - cy;
      const len = Math.hypot(ux, uy) || 1;
      p.ux = ux / len; p.uy = uy / len;   // unit radial from hookah
    });
  }

  // smoothed scroll so motion is buttery regardless of wheel granularity
  let smooth = 0;
  const SCROLL_K = Math.PI / 1000;   // ~half a depth cycle per ~1000px
  const baseScaleFor = () => (window.innerWidth <= 680 ? 0.6 : 1);

  function frame(now) {
    const t = now / 1000;
    const target = window.scrollY || window.pageYOffset || 0;
    smooth += (target - smooth) * 0.075;          // ease toward real scroll
    const bs = baseScaleFor();
    const drive = smooth * SCROLL_K;
    for (const p of pieces) {
      const ang = p.phase + p.dir * drive + t * p.idle;
      const depth = Math.cos(ang);                // +1 toward viewer, -1 away
      const sc = bs * (1 + depth * 0.30 * p.amp); // forward = larger
      const out = depth * p.spread;               // drift in/out from hookah
      const tx = p.ux * out;
      const ty = p.uy * out * 0.55 + Math.sin(ang) * p.vbob - smooth * 0.02;
      const rot = Math.sin(ang) * p.tilt;
      p.el.style.transform =
        `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      p.el.style.zIndex = depth >= 0 ? 3 : 1;     // pass in front / behind hookah
      p.el.style.opacity = (0.78 + depth * 0.22).toFixed(2);
    }
    raf = requestAnimationFrame(frame);
  }

  let raf = 0;
  function start() { if (!raf && !reduce) raf = requestAnimationFrame(frame); }

  function init() {
    measure();
    if (!reduce) { frame(performance.now()); }   // immediate first paint, then loops
  }

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(measure, 150); });

  if (document.readyState === 'complete') setTimeout(init, 60);
  else window.addEventListener('load', () => setTimeout(init, 60));
  setTimeout(init, 0);
})();
