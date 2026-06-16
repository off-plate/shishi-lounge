# ShiShi Lounge

Marketing website for ShiShi Lounge, a hookah bar in Prague (Malá Štěpánská 19, Praha 2).

Built from a Claude Design handoff bundle and deployed as a static site.

## Live site

https://off-plate.github.io/shishi-lounge/

## Features

- Animated hero: static photographic hookah centerpiece with floating fruit and glowing charcoal that orbit toward and away on scroll, plus a continuous smoke plume
- Bilingual EN / CZ with a language picker (EN default)
- Full hookah / cocktails / drinks / food menu with prices in Kč
- 4-step reservation flow with live validation and a booking reference
- Atmosphere gallery with lightbox
- Live Prague-time "open now" status
- Scroll progress bar, scroll-spy nav, staggered section reveals
- Fully responsive with a mobile sticky reserve bar

## Tech

Plain static HTML, CSS and vanilla JS. No build step.

| File | Purpose |
|------|---------|
| `index.html` | Page markup |
| `styles.css` | All styling |
| `hero.js` | Hero scatter + scroll-driven fruit motion |
| `particles.js` | Page-wide floating particles |
| `site.js` | Nav, menu render, booking flow, lightbox, hours, scroll UI |
| `i18n.js` | EN / CZ dictionary and switcher |
| `images/` | Photos, logo, hookah and fruit cutouts |

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Notes

- Menu prices are realistic placeholder Prague numbers, swap in real ones in `i18n.js`.
- Phone, email and Instagram handle are placeholders.
