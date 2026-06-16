/* ============================================================
   SHISHI LOUNGE — site behaviour (i18n-aware)
   ============================================================ */
(function () {
  'use strict';
  const I = window.I18N;

  /* ---------- NAV + SCROLL PROGRESS + SCROLL-SPY + MOBILE BAR ---------- */
  const nav = document.querySelector('.nav');
  const progressEl = document.getElementById('scrollProgress');
  const mobileBar = document.getElementById('mobileBar');
  const heroEl = document.getElementById('home');
  const navLinkEls = [...document.querySelectorAll('.nav-links a')];
  const mobLinkEls = [...document.querySelectorAll('.mobile-menu a')];
  const sectionIds = ['home', 'about', 'menu', 'reserve', 'atmosphere', 'reviews', 'events', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function setActive(id) {
    navLinkEls.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    mobLinkEls.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  }

  let navTicking = false;
  function onScroll() {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      nav.classList.toggle('scrolled', y > 40);

      if (progressEl) progressEl.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';

      // scroll-spy: section whose top is above the 38% line
      const line = y + window.innerHeight * 0.38;
      let current = sections[0] ? sections[0].id : 'home';
      for (const s of sections) { if (s.offsetTop <= line) current = s.id; }
      setActive(current);

      // sticky mobile bar: appear after the hero, hide while in reserve section
      if (mobileBar) {
        const heroH = heroEl ? heroEl.offsetHeight : window.innerHeight;
        const reserve = document.getElementById('reserve');
        const inReserve = reserve && y + window.innerHeight * 0.6 > reserve.offsetTop &&
                          y < reserve.offsetTop + reserve.offsetHeight;
        mobileBar.classList.toggle('show', y > heroH * 0.7 && !inReserve);
      }
      navTicking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  const burger = document.querySelector('.burger');
  const mobile = document.querySelector('.mobile-menu');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      burger.classList.toggle('x', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobile.classList.remove('open'); burger.classList.remove('x'); document.body.style.overflow = '';
    }));
  }

  /* ---------- SMOKE (continuous wavy plume) ---------- */
  const smoke = document.querySelector('.smoke');
  if (smoke) {
    const N = 18;
    for (let i = 0; i < N; i++) {
      const s = document.createElement('i');
      const dur = 5.5 + Math.random() * 2.5;
      s.style.setProperty('--sdur', dur + 's');
      s.style.setProperty('--sdelay', (-(i / N) * dur).toFixed(2) + 's');
      s.style.setProperty('--sz', (34 + Math.random() * 30) + 'px');
      s.style.setProperty('--x0', (Math.random() * 16 - 8) + 'px');
      s.style.setProperty('--w1', (Math.random() * 26 - 13) + 'px');
      s.style.setProperty('--w2', (Math.random() * 30 - 15) + 'px');
      s.style.setProperty('--w3', (Math.random() * 22 - 11) + 'px');
      s.style.setProperty('--sway', (4 + Math.random() * 4) + 's');
      smoke.appendChild(s);
    }
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  /* ============================================================
     MENU RENDER (bilingual, from I18N.menu())
     ============================================================ */
  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');
  if (tabsEl && panelsEl && I) {
    let activeKey = null;

    function renderMenu() {
      const lang = I.getLang();
      const MENU = I.menu();
      const bk = I.bk();
      const keys = Object.keys(MENU);
      if (!activeKey || keys.indexOf(activeKey) === -1) activeKey = keys[0];
      tabsEl.innerHTML = '';
      panelsEl.innerHTML = '';
      keys.forEach((k) => {
        const m = MENU[k];
        const tab = document.createElement('button');
        tab.className = 'menu-tab' + (k === activeKey ? ' active' : '');
        tab.dataset.k = k;
        tab.innerHTML = `<span class="ic">${m.icon}</span>${m.label[lang]}`;
        tabsEl.appendChild(tab);

        const panel = document.createElement('div');
        panel.className = 'menu-panel' + (k === activeKey ? ' active' : '');
        panel.dataset.k = k;
        const rows = m.items.map((it) => {
          const tag = it.tag === 'signature' ? `<span class="mi-tag">${bk.tag.signature}</span>`
                    : it.tag === 'popular' ? `<span class="mi-tag pop">${bk.tag.popular}</span>` : '';
          return `
          <div class="menu-item">
            <div class="mi-main">
              <div class="mi-name">${it.n[lang]}${tag}</div>
              <div class="mi-desc">${it.d[lang]}</div>
            </div>
            <div class="mi-dots"></div>
            <div class="mi-price">${it.p}<small> Kč</small></div>
          </div>`;
        }).join('');
        panel.innerHTML = `
          <p class="lead" style="margin-bottom:30px">${m.note[lang]}</p>
          <div class="menu-grid">${rows}</div>
          <p style="margin-top:30px;color:var(--muted-2);font-size:13.5px;letter-spacing:.02em">${m.foot[lang]}</p>`;
        panelsEl.appendChild(panel);
      });
    }

    renderMenu();
    document.addEventListener('i18n:change', renderMenu);

    tabsEl.addEventListener('click', (e) => {
      const tab = e.target.closest('.menu-tab');
      if (!tab) return;
      activeKey = tab.dataset.k;
      tabsEl.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t === tab));
      panelsEl.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.dataset.k === tab.dataset.k));
    });
  }

  /* ============================================================
     MULTISTEP BOOKING
     ============================================================ */
  const booking = document.getElementById('booking');
  if (booking) {
    const state = {
      experience: '', date: '', guests: 2, time: '', seating: '',
      name: '', email: '', phone: '', notes: '',
    };
    let step = 0;
    const steps = booking.querySelectorAll('.booking-step');
    const progress = booking.querySelectorAll('.bp-step');
    const total = steps.length - 1;

    const dateInput = booking.querySelector('#bk-date');
    if (dateInput) {
      const t = new Date();
      const iso = new Date(t.getTime() - t.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateInput.min = iso; dateInput.value = iso; state.date = iso;
    }

    function show(n) {
      step = n;
      steps.forEach((s, i) => s.classList.toggle('active', i === n));
      progress.forEach((p, i) => {
        p.classList.toggle('active', i === n);
        p.classList.toggle('done', i < n);
      });
    }

    booking.querySelectorAll('[data-choice]').forEach(group => {
      group.querySelectorAll('.choice').forEach(c => {
        c.addEventListener('click', () => {
          group.querySelectorAll('.choice').forEach(x => x.classList.remove('sel'));
          c.classList.add('sel');
          state[group.dataset.choice] = c.dataset.val;
          clearErr(group);
        });
      });
    });

    const timeGrid = booking.querySelector('#timeGrid');
    if (timeGrid) {
      ['14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].forEach((t, i) => {
        const b = document.createElement('div');
        b.className = 'time-slot' + (i === 4 || i === 6 ? ' full' : '');
        b.textContent = t;
        b.addEventListener('click', () => {
          timeGrid.querySelectorAll('.time-slot').forEach(x => x.classList.remove('sel'));
          b.classList.add('sel'); state.time = t; clearErr(timeGrid.parentElement);
        });
        timeGrid.appendChild(b);
      });
    }

    const gval = booking.querySelector('#guestVal');
    booking.querySelector('#gMinus').addEventListener('click', () => { state.guests = Math.max(1, state.guests - 1); gval.textContent = state.guests; });
    booking.querySelector('#gPlus').addEventListener('click', () => { state.guests = Math.min(20, state.guests + 1); gval.textContent = state.guests; });

    booking.querySelectorAll('[data-field]').forEach(inp => {
      inp.addEventListener('input', () => { state[inp.dataset.field] = inp.value; clearErr(inp.closest('.field')); });
    });
    if (dateInput) dateInput.addEventListener('input', () => state.date = dateInput.value);

    function setErr(el, msg) {
      let e = el.querySelector('.err');
      if (!e) { e = document.createElement('div'); e.className = 'err'; el.appendChild(e); }
      e.textContent = msg; e.classList.add('show');
    }
    function clearErr(el) { const e = el && el.querySelector('.err'); if (e) e.classList.remove('show'); }

    function validate(n) {
      let ok = true;
      const err = I.bk().err;
      if (n === 0) {
        if (!state.experience) { setErr(booking.querySelector('[data-choice="experience"]').parentElement, err.exp); ok = false; }
        if (!state.date) { setErr(dateInput.closest('.field'), err.date); ok = false; }
      }
      if (n === 1) {
        if (!state.time) { setErr(timeGrid.closest('.field'), err.time); ok = false; }
        if (!state.seating) { setErr(booking.querySelector('[data-choice="seating"]').parentElement, err.seat); ok = false; }
      }
      if (n === 2) {
        if (!state.name.trim()) { setErr(booking.querySelector('#bk-name').closest('.field'), err.name); ok = false; }
        const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email);
        if (!emailOk) { setErr(booking.querySelector('#bk-email').closest('.field'), err.email); ok = false; }
        if (state.phone.trim().length < 6) { setErr(booking.querySelector('#bk-phone').closest('.field'), err.phone); ok = false; }
      }
      return ok;
    }

    function fillSummary() {
      const bk = I.bk();
      const expLabel = bk.exp[state.experience] || state.experience;
      const seatLabel = bk.seat[state.seating] || state.seating;
      const d = state.date ? new Date(state.date + 'T00:00').toLocaleDateString(bk.dateLocale, { weekday: 'short', day: 'numeric', month: 'long' }) : '—';
      const map = {
        'sum-exp': expLabel, 'sum-date': d, 'sum-time': state.time,
        'sum-guests': bk.guests(state.guests),
        'sum-seat': seatLabel, 'sum-name': state.name, 'sum-contact': state.email + ' · ' + state.phone,
        'sum-notes': state.notes.trim() || bk.none,
      };
      Object.entries(map).forEach(([id, v]) => { const el = booking.querySelector('#' + id); if (el) el.textContent = v; });
    }

    booking.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => {
      if (!validate(step)) return;
      if (step === 2) fillSummary();
      show(step + 1);
    }));
    booking.querySelectorAll('[data-back]').forEach(b => b.addEventListener('click', () => show(step - 1)));

    const confirmBtn = booking.querySelector('#confirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', () => {
      const ref = 'SH-' + Math.random().toString(36).slice(2, 6).toUpperCase() + Math.floor(Math.random() * 90 + 10);
      const refEl = booking.querySelector('#bookRef'); if (refEl) refEl.textContent = ref;
      const nameEl = booking.querySelector('#doneName'); if (nameEl) nameEl.textContent = state.name.split(' ')[0] || I.bk().there;
      show(total);
    });

    const restart = booking.querySelector('#bookRestart');
    if (restart) restart.addEventListener('click', () => {
      booking.querySelectorAll('.choice.sel, .time-slot.sel').forEach(x => x.classList.remove('sel'));
      booking.querySelectorAll('[data-field]').forEach(i => i.value = '');
      Object.assign(state, { experience: '', time: '', seating: '', name: '', email: '', phone: '', notes: '', guests: 2 });
      gval.textContent = '2';
      show(0);
    });
  }

  /* ---------- HOURS: live open-now status (Europe/Prague) ---------- */
  const hoursRows = document.querySelectorAll('.hours-table tr[data-day]');
  const statusEl = document.getElementById('openStatus');
  if (hoursRows.length) {
    const COPY = {
      en: { open: 'Open now', closed: 'Closed', until: 'until', opens: 'opens',
            t: { 1: '1 AM', 2: '2 AM', 14: '2 PM' } },
      cz: { open: 'Otevřeno', closed: 'Zavřeno', until: 'do', opens: 'otevírá',
            t: { 1: '1:00', 2: '2:00', 14: '14:00' } },
    };

    function pragueNow() {
      return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Prague' }));
    }

    function compute() {
      const now = pragueNow();
      const d = now.getDay();
      const th = now.getHours() + now.getMinutes() / 60;
      const isWeekend = (x) => x === 5 || x === 6;          // Fri/Sat close at 2 AM
      const prevDay = (d + 6) % 7;
      const morningClose = isWeekend(prevDay) ? 2 : 1;

      if (th >= 14) return { open: true, until: isWeekend(d) ? 2 : 1 };
      if (th < morningClose) return { open: true, until: morningClose };
      return { open: false, opens: 14 };
    }

    function render() {
      const lang = (window.I18N && window.I18N.getLang && window.I18N.getLang()) || 'en';
      const c = COPY[lang] || COPY.en;
      const s = compute();
      const todayIdx = pragueNow().getDay();

      hoursRows.forEach(r => r.classList.toggle('today', parseInt(r.dataset.day, 10) === todayIdx));

      if (statusEl) {
        statusEl.classList.remove('is-open', 'is-closed');
        if (s.open) {
          statusEl.classList.add('is-open');
          statusEl.textContent = `${c.open} · ${c.until} ${c.t[s.until]}`;
        } else {
          statusEl.classList.add('is-closed');
          statusEl.textContent = `${c.closed} · ${c.opens} ${c.t[s.opens]}`;
        }
      }

      // mirror into the mobile sticky bar
      const mb = document.getElementById('mbStatus');
      if (mb) {
        mb.classList.remove('is-open', 'is-closed');
        if (s.open) { mb.classList.add('is-open'); mb.textContent = `${c.open} · ${c.until} ${c.t[s.until]}`; }
        else { mb.classList.add('is-closed'); mb.textContent = `${c.closed} · ${c.opens} ${c.t[s.opens]}`; }
      }
    }

    render();
    setInterval(render, 60000);
    document.addEventListener('i18n:change', render);
  }

  /* ---------- GALLERY LIGHTBOX ---------- */
  const lb = document.getElementById('lightbox');
  if (lb) {
    const items = [...document.querySelectorAll('.gallery .lb')];
    const lbImg = document.getElementById('lbImg');
    const lbCap = document.getElementById('lbCap');
    const lbCount = document.getElementById('lbCount');
    let idx = 0;

    function render() {
      const img = items[idx].querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = img.alt || '';
      lbCount.textContent = (idx + 1) + ' / ' + items.length;
    }
    function open(i) {
      idx = i; render();
      lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function go(d) { idx = (idx + d + items.length) % items.length; render(); }

    items.forEach((it, i) => it.addEventListener('click', () => open(i)));
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', () => go(-1));
    document.getElementById('lbNext').addEventListener('click', () => go(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    });
  }
})();
