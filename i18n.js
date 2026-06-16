/* ============================================================
   i18n.js — EN / CZ bilingual engine for ShiShi Lounge
   EN is default. Language persists in localStorage.
   ============================================================ */
(function () {
  const STR = {
    en: {
      /* nav */
      'nav.about': 'About', 'nav.menu': 'Menu', 'nav.reserve': 'Reserve',
      'nav.atmosphere': 'Atmosphere', 'nav.events': 'Events', 'nav.contact': 'Contact',
      'nav.reserveBtn': 'Reserve a table',
      'mb.sub': 'Malá Štěpánská 19 · Praha 2',
      /* hero */
      'hero.tagline': 'Hookahs · Tobacco · Cocktails · Accessories',
      'hero.cta1': 'Reserve a table', 'hero.cta2': 'Explore the menu', 'hero.scroll': 'Scroll',
      /* marquee */
      'mq.1': 'Premium Hookah', 'mq.2': 'Signature Cocktails', 'mq.3': 'Brick Cellar',
      'mq.4': 'Board Games & PS5', 'mq.5': 'Open Till 2 AM', 'mq.6': 'Private Parties',
      /* about */
      'about.eyebrow': 'Your second home',
      'about.title': 'A safe spot<br/>to <span class="script">slow down</span>',
      'about.p1': 'ShiShi Lounge started eight years ago as a small room with big pipes. Today it\u2019s a candle-lit cellar where the city exhales \u2014 soft leather, warm brick and smoke that curls toward the vaulted ceiling.',
      'about.p2': 'Pick a flavour, pour a drink, grab a board game or a controller, and let the night take its time. No rush. No clock. Just you, the people you came with, and the slow burn of good coal.',
      'about.stat1': 'years in Prague', 'about.stat2': 'hookah flavours', 'about.stat3': 'weekend close',
      'about.btn': 'Book your spot',
      /* menu */
      'menu.eyebrow': 'Flavours without limits',
      'menu.title': 'The <span class="script">menu</span>',
      'menu.intro': 'Flavours of every kind, drinks built to match the smoke, and bites to keep the table happy. Prices in K\u010d.',
      'menu.recEyebrow': 'We recommend',
      'menu.recTitle': 'Our recommendations',
      'feat1.name': 'Signature ShiShi Blend', 'feat1.sub': 'House hookah · double apple & mint',
      'feat2.name': 'Smoke & Mirrors', 'feat2.sub': 'Mezcal · ginger · chilli',
      'feat3.name': 'Mezze Board for Two', 'feat3.sub': 'Hummus · olives · warm pita',
      'feat4.name': 'Moroccan Mint Tea', 'feat4.sub': 'Gunpowder green · fresh mint',
      /* cta band 1 */
      'cta1.title': 'Come sit with us',
      'cta1.text': 'Weekends fill fast. Lock in your sofa, pick your flavour and let us handle the rest.',
      'cta1.btn': 'Reserve a table',
      /* reservation */
      'res.eyebrow': 'Reservation',
      'res.title': 'Book your <span class="script">night</span>',
      'res.intro': 'Four quick steps. We\u2019ll hold your table, prep your coal and have the first round ready when you walk in.',
      'res.li1b': 'Choose your vibe', 'res.li1': 'Hookah, drinks or a full celebration.',
      'res.li2b': 'Time & spot', 'res.li2': 'Sofa, bar, cellar or a private room.',
      'res.li3b': 'Your details', 'res.li3': 'So we can confirm by text.',
      'res.li4b': 'Done', 'res.li4': 'Instant confirmation with your booking ref.',
      /* booking */
      'bk.s1title': 'What\u2019s the occasion?', 'bk.s1sub': 'Tell us how you want to spend the night.',
      'bk.lblExperience': 'Experience',
      'bk.expHookahB': 'Hookah & lounge', 'bk.expHookahS': 'Classic smoke session',
      'bk.expDrinksB': 'Drinks & bar', 'bk.expDrinksS': 'Cocktails first',
      'bk.expCelebB': 'Celebration', 'bk.expCelebS': 'Birthday / group',
      'bk.lblDate': 'Date', 'bk.lblGuests': 'Guests', 'bk.continue': 'Continue',
      'bk.s2title': 'When & where?', 'bk.s2sub': 'Pick a time slot and your favourite corner.',
      'bk.lblTime': 'Arrival time', 'bk.lblSeating': 'Seating',
      'bk.seatSofaB': 'Lounge sofa', 'bk.seatSofaS': 'Soft & low-lit',
      'bk.seatBarB': 'Bar seats', 'bk.seatBarS': 'By the action',
      'bk.seatCellarB': 'Brick cellar', 'bk.seatCellarS': 'Cosy & quiet',
      'bk.seatPrivateB': 'Private room', 'bk.seatPrivateS': 'For your group',
      'bk.back': '\u2190 Back',
      'bk.s3title': 'Your details', 'bk.s3sub': 'We\u2019ll send a confirmation \u2014 no spam, promise.',
      'bk.lblName': 'Full name', 'bk.lblEmail': 'Email', 'bk.lblPhone': 'Phone',
      'bk.lblRequests': 'Special requests', 'bk.optional': '(optional)',
      'bk.phName': 'Jana Nov\u00e1kov\u00e1', 'bk.phNotes': 'Allergies, occasion, flavour preferences\u2026',
      'bk.review': 'Review booking',
      'bk.s4title': 'Looks good?', 'bk.s4sub': 'Double-check and confirm your reservation.',
      'bk.sumExp': 'Experience', 'bk.sumDate': 'Date', 'bk.sumTime': 'Time', 'bk.sumGuests': 'Guests',
      'bk.sumSeat': 'Seating', 'bk.sumName': 'Name', 'bk.sumContact': 'Contact', 'bk.sumNotes': 'Requests',
      'bk.confirm': 'Confirm reservation \u2713',
      'bk.doneHi': 'See you soon',
      'bk.done1': 'Your table is held. Booking reference', 'bk.done2': 'We\u2019ve sent the details to your email \u2014 flash the ref at the door.',
      'bk.restart': 'Make another booking',
      /* atmosphere */
      'atm.eyebrow': 'Our atmosphere', 'atm.title': 'The <span class="script">room</span>',
      'atm.intro': 'Low light, warm brick, soft leather and a haze of fruit smoke \u2014 the kind of room you never quite want to leave.',
      /* reviews */
      'rev.eyebrow': 'Reviews', 'rev.title': 'Loved by <span class="script">Praha</span>',
      'rev1.text': 'Best hookah in Prague, full stop. The signature blend is unreal and the cellar feels like a secret. We never want to leave.',
      'rev1.meta': 'Local Guide · 2 weeks ago',
      'rev2.text': 'Came for a birthday, stayed till close. Staff treated us like family, the cocktails were gorgeous and the smoke was smooth all night.',
      'rev2.meta': 'Google review · 1 month ago',
      'rev3.text': 'My second living room. Great flavours, board games, comfy sofas and people who actually remember your order. Eight years strong.',
      'rev3.meta': 'Regular · 3 weeks ago',
      /* events */
      'ev.eyebrow': 'Even the big celebrations', 'ev.title': 'Events & <span class="script">private</span>',
      'ev.intro': 'From small groups to a full buy-out of the cellar \u2014 we\u2019ll set the night up for you.',
      'ev1.title': 'Birthdays', 'ev1.text': 'Reserved sofas, a welcome round and the first hookah on us for the guest of honour.', 'ev1.link': 'Plan it \u2197',
      'ev2.title': 'Private Cellar', 'ev2.text': 'Book the brick room for up to 20 \u2014 your own bar, your own playlist, your own night.', 'ev2.link': 'Enquire \u2197',
      'ev3.title': 'Game & Quiz Nights', 'ev3.text': 'Weekly quizzes, board games and PS5 tournaments. New questions every single week.', 'ev3.link': 'Join in \u2197',
      /* cta band 2 */
      'cta2.eyebrow': 'Open till late', 'cta2.title': 'Tonight feels like a ShiShi night',
      'cta2.text': 'Sun\u2013Thu till 1 AM · Fri\u2013Sat till 2 AM. Walk in, or hold your spot in 30 seconds.',
      'cta2.btn1': 'Reserve a table', 'cta2.btn2': '\u260e Call us',
      /* contact */
      'con.eyebrow': 'Contact', 'con.title': 'Find <span class="script">us</span>',
      'con.addr': 'Address', 'con.res': 'Reservations', 'con.hours': 'Opening hours',
      'con.d1': 'Monday', 'con.d2': 'Tuesday', 'con.d3': 'Wednesday', 'con.d4': 'Thursday',
      'con.d5': 'Friday', 'con.d6': 'Saturday', 'con.d0': 'Sunday',
      'con.tWeek': '2 PM \u2013 1 AM', 'con.tWeekend': '2 PM \u2013 2 AM',
      'con.reserveBtn': 'Reserve a table',
      /* footer */
      'foot.tagline': 'Your second home for smoke, slow nights and good company in the heart of Prague.',
      'foot.explore': 'Explore', 'foot.visit': 'Visit', 'foot.hours': 'Hours',
      'foot.findus': 'Find us',
      'foot.h1': 'Sun\u2013Thu · 2 PM \u2013 1 AM', 'foot.h2': 'Fri\u2013Sat · 2 PM \u2013 2 AM',
      'foot.copy': '\u00a9 2026 ShiShi Lounge · Hookah Bar Praha', 'foot.legal': '18+ only · Drink & smoke responsibly',
    },
    cz: {
      /* nav */
      'nav.about': 'O n\u00e1s', 'nav.menu': 'Menu', 'nav.reserve': 'Rezervace',
      'nav.atmosphere': 'Atmosf\u00e9ra', 'nav.events': 'Akce', 'nav.contact': 'Kontakt',
      'nav.reserveBtn': 'Rezervovat st\u016fl',
      'mb.sub': 'Mal\u00e1 \u0160t\u011bp\u00e1nsk\u00e1 19 \u00b7 Praha 2',
      /* hero */
      'hero.tagline': 'Vodn\u00ed d\u00fdmky · Tab\u00e1k · Koktejly · Dopl\u0148ky',
      'hero.cta1': 'Rezervovat st\u016fl', 'hero.cta2': 'Prohl\u00e9dnout menu', 'hero.scroll': 'Dol\u016f',
      /* marquee */
      'mq.1': 'Pr\u00e9miov\u00e9 d\u00fdmky', 'mq.2': 'Signature koktejly', 'mq.3': 'Cihlov\u00fd sklep',
      'mq.4': 'Deskovky & PS5', 'mq.5': 'Otev\u0159eno do 2:00', 'mq.6': 'Soukrom\u00e9 akce',
      /* about */
      'about.eyebrow': 'Tv\u016fj druh\u00fd domov',
      'about.title': 'M\u00edsto, kde<br/>se d\u00e1 <span class="script">zpomalit</span>',
      'about.p1': 'ShiShi Lounge za\u010dal p\u0159ed osmi lety jako mal\u00fd pokoj s velk\u00fdmi d\u00fdmkami. Dnes je to sv\u00ed\u010dkami osv\u011btlen\u00fd sklep, kde m\u011bsto vydechne \u2014 m\u011bkk\u00e1 k\u016f\u017ee, tepl\u00e9 cihly a kou\u0159 stoupaj\u00edc\u00ed ke klenut\u00e9mu stropu.',
      'about.p2': 'Vyber si p\u0159\u00edchu\u0165, nalej drink, popadni deskovku nebo ovlada\u010d a nech ve\u010der pl\u00ddt vlastn\u00edm tempem. \u017d\u00e1dn\u00fd sp\u011bch. \u017d\u00e1dn\u00e9 hodiny. Jen ty, lid\u00e9 kolem a pomal\u00fd \u017dhav\u00fd uhl\u00edk.',
      'about.stat1': 'let v Praze', 'about.stat2': 'p\u0159\u00edchut\u00ed d\u00fdmek', 'about.stat3': 'v\u00edkendov\u00e9 zav\u00edr\u00e1n\u00ed',
      'about.btn': 'Zarezervuj si m\u00edsto',
      /* menu */
      'menu.eyebrow': 'Chut\u011b bez limitu',
      'menu.title': 'Na\u0161e <span class="script">menu</span>',
      'menu.intro': 'P\u0159\u00edchut\u011b v\u0161eho druhu, drinky lad\u011bn\u00e9 ke kou\u0159i a pochutiny, aby byl st\u016fl spokojen\u00fd. Ceny v K\u010d.',
      'menu.recEyebrow': 'Doporu\u010dujeme',
      'menu.recTitle': 'Na\u0161e doporu\u010den\u00ed',
      'feat1.name': 'Signature ShiShi sm\u011bs', 'feat1.sub': 'Dom\u00e1c\u00ed d\u00fdmka · dvojit\u00e9 jablko & m\u00e1ta',
      'feat2.name': 'Smoke & Mirrors', 'feat2.sub': 'Mezcal · zázvor · chilli',
      'feat3.name': 'Mezze prk\u00e9nko pro dva', 'feat3.sub': 'Hummus · olivy · tepl\u00e1 pita',
      'feat4.name': 'Marock\u00fd m\u00e1tov\u00fd \u010daj', 'feat4.sub': 'Zelen\u00fd gunpowder · \u010derstv\u00e1 m\u00e1ta',
      /* cta band 1 */
      'cta1.title': 'P\u0159ij\u010f k n\u00e1m posed\u011bt',
      'cta1.text': 'V\u00edkendy se pln\u00ed rychle. Zajisti si pohovku, vyber p\u0159\u00edchu\u0165 a zbytek nech na n\u00e1s.',
      'cta1.btn': 'Rezervovat st\u016fl',
      /* reservation */
      'res.eyebrow': 'Rezervace',
      'res.title': 'Rezervuj si <span class="script">ve\u010der</span>',
      'res.intro': '\u010cty\u0159i rychl\u00e9 kroky. Podr\u017e\u00edme ti st\u016fl, p\u0159iprav\u00edme uhl\u00edky a prvn\u00ed rundu m\u00e1\u0161 hotovou, kdy\u017e doraz\u00ed\u0161.',
      'res.li1b': 'Vyber n\u00e1ladu', 'res.li1': 'D\u00fdmka, drinky nebo velk\u00e1 oslava.',
      'res.li2b': '\u010cas & m\u00edsto', 'res.li2': 'Pohovka, bar, sklep nebo soukrom\u00fd pokoj.',
      'res.li3b': 'Tvoje \u00fadaje', 'res.li3': 'Abychom ti mohli potvrdit rezervaci.',
      'res.li4b': 'Hotovo', 'res.li4': 'Okam\u017eit\u00e9 potvrzen\u00ed s k\u00f3dem rezervace.',
      /* booking */
      'bk.s1title': 'Jak\u00e1 je p\u0159\u00edle\u017eitost?', 'bk.s1sub': '\u0158ekni n\u00e1m, jak chce\u0161 str\u00e1vit ve\u010der.',
      'bk.lblExperience': 'Z\u00e1\u017eitek',
      'bk.expHookahB': 'D\u00fdmka & lounge', 'bk.expHookahS': 'Klasick\u00e9 posezen\u00ed',
      'bk.expDrinksB': 'N\u00e1poje & bar', 'bk.expDrinksS': 'Nejd\u0159\u00edv koktejly',
      'bk.expCelebB': 'Oslava', 'bk.expCelebS': 'Narozeniny / skupina',
      'bk.lblDate': 'Datum', 'bk.lblGuests': 'Host\u00e9', 'bk.continue': 'Pokra\u010dovat',
      'bk.s2title': 'Kdy a kde?', 'bk.s2sub': 'Vyber \u010das p\u0159\u00edchodu a obl\u00edben\u00fd kout.',
      'bk.lblTime': '\u010cas p\u0159\u00edchodu', 'bk.lblSeating': 'Posezen\u00ed',
      'bk.seatSofaB': 'Lounge pohovka', 'bk.seatSofaS': 'M\u011bkk\u00e1 & tlumen\u00e1',
      'bk.seatBarB': 'M\u00edsta u baru', 'bk.seatBarS': 'V centru d\u011bn\u00ed',
      'bk.seatCellarB': 'Cihlov\u00fd sklep', 'bk.seatCellarS': '\u00datuln\u00fd & klidn\u00fd',
      'bk.seatPrivateB': 'Soukrom\u00fd pokoj', 'bk.seatPrivateS': 'Pro tvou skupinu',
      'bk.back': '\u2190 Zp\u011bt',
      'bk.s3title': 'Tvoje \u00fadaje', 'bk.s3sub': 'Po\u0161leme ti potvrzen\u00ed \u2014 \u017e\u00e1dn\u00fd spam, slibujeme.',
      'bk.lblName': 'Jm\u00e9no a p\u0159\u00edjmen\u00ed', 'bk.lblEmail': 'E-mail', 'bk.lblPhone': 'Telefon',
      'bk.lblRequests': 'Speci\u00e1ln\u00ed p\u0159\u00e1n\u00ed', 'bk.optional': '(nepovinn\u00e9)',
      'bk.phName': 'Jana Nov\u00e1kov\u00e1', 'bk.phNotes': 'Alergie, p\u0159\u00edle\u017eitost, oblíben\u00e9 p\u0159\u00edchut\u011b\u2026',
      'bk.review': 'Zkontrolovat',
      'bk.s4title': 'V\u0161e v po\u0159\u00e1dku?', 'bk.s4sub': 'Zkontroluj a potvr\u010f svou rezervaci.',
      'bk.sumExp': 'Z\u00e1\u017eitek', 'bk.sumDate': 'Datum', 'bk.sumTime': '\u010cas', 'bk.sumGuests': 'Host\u00e9',
      'bk.sumSeat': 'Posezen\u00ed', 'bk.sumName': 'Jm\u00e9no', 'bk.sumContact': 'Kontakt', 'bk.sumNotes': 'P\u0159\u00e1n\u00ed',
      'bk.confirm': 'Potvrdit rezervaci \u2713',
      'bk.doneHi': 'Brzy na vid\u011bnou',
      'bk.done1': 'Tv\u016fj st\u016fl je rezervovan\u00fd. K\u00f3d rezervace', 'bk.done2': 'Detaily jsme poslali na tv\u016fj e-mail \u2014 u dve\u0159\u00ed uka\u017e k\u00f3d.',
      'bk.restart': 'Vytvo\u0159it dal\u0161\u00ed rezervaci',
      /* atmosphere */
      'atm.eyebrow': 'Na\u0161e atmosf\u00e9ra', 'atm.title': 'N\u00e1\u0161 <span class="script">prostor</span>',
      'atm.intro': 'Tlumen\u00e9 sv\u011btlo, tepl\u00e9 cihly, m\u011bkk\u00e1 k\u016f\u017ee a opar ovocn\u00e9ho kou\u0159e \u2014 prostor, ze kter\u00e9ho se ti nebude cht\u00edt odej\u00edt.',
      /* reviews */
      'rev.eyebrow': 'Recenze', 'rev.title': 'Milov\u00e1no <span class="script">Prahou</span>',
      'rev1.text': 'Nejlep\u0161\u00ed d\u00fdmka v Praze, te\u010dka. Signature sm\u011bs je nesku\u010den\u00e1 a sklep p\u016fsob\u00ed jako tajemstv\u00ed. Nikdy se n\u00e1m nechce odej\u00edt.',
      'rev1.meta': 'M\u00edstn\u00ed pr\u016fvodce · p\u0159ed 2 t\u00fddny',
      'rev2.text': 'P\u0159i\u0161li jsme na narozeniny a z\u016fstali do zav\u00edra\u010dky. Person\u00e1l se k n\u00e1m choval jako k rodin\u011b, koktejly byly skv\u011bl\u00e9 a kou\u0159 jemn\u00fd cel\u00fd ve\u010der.',
      'rev2.meta': 'Google recenze · p\u0159ed m\u011bs\u00edcem',
      'rev3.text': 'M\u016fj druh\u00fd ob\u00fdvk. Skv\u011bl\u00e9 p\u0159\u00edchut\u011b, deskovky, pohodln\u00e9 pohovky a lid\u00e9, kte\u0159\u00ed si pamatuj\u00ed tvou objedn\u00e1vku. U\u017e osm let.',
      'rev3.meta': 'St\u00e1l\u00fd host · p\u0159ed 3 t\u00fddny',
      /* events */
      'ev.eyebrow': 'I velk\u00e9 oslavy', 'ev.title': 'Akce & <span class="script">soukrom\u00ed</span>',
      'ev.intro': 'Od mal\u00fdch skupin po pron\u00e1jem cel\u00e9ho sklepa \u2014 ve\u010der p\u0159iprav\u00edme za tebe.',
      'ev1.title': 'Narozeniny', 'ev1.text': 'Rezervovan\u00e9 pohovky, uv\u00edtac\u00ed runda a prvn\u00ed d\u00fdmka na n\u00e1s pro oslavence.', 'ev1.link': 'Napl\u00e1novat \u2197',
      'ev2.title': 'Soukrom\u00fd sklep', 'ev2.text': 'Pronajmi si cihlov\u00fd pokoj a\u017e pro 20 lid\u00ed \u2014 vlastn\u00ed bar, vlastn\u00ed playlist, vlastn\u00ed ve\u010der.', 'ev2.link': 'Popt\u00e1vka \u2197',
      'ev3.title': 'Hern\u00ed & kv\u00edzov\u00e9 ve\u010dery', 'ev3.text': 'T\u00fddenn\u00ed kv\u00edzy, deskovky a PS5 turnaje. Nov\u00e9 ot\u00e1zky ka\u017ed\u00fd t\u00fdden.', 'ev3.link': 'P\u0159idej se \u2197',
      /* cta band 2 */
      'cta2.eyebrow': 'Otev\u0159eno dlouho', 'cta2.title': 'Dne\u0161n\u00ed ve\u010der je jako stvo\u0159en\u00fd pro ShiShi',
      'cta2.text': 'Ne\u2013\u010ct do 1:00 · P\u00e1\u2013So do 2:00. P\u0159ij\u010f rovnou, nebo si m\u00edsto zajisti za 30 vte\u0159in.',
      'cta2.btn1': 'Rezervovat st\u016fl', 'cta2.btn2': '\u260e Zavolej n\u00e1m',
      /* contact */
      'con.eyebrow': 'Kontakt', 'con.title': 'Najdi <span class="script">n\u00e1s</span>',
      'con.addr': 'Adresa', 'con.res': 'Rezervace', 'con.hours': 'Otev\u00edrac\u00ed doba',
      'con.d1': 'Pond\u011bl\u00ed', 'con.d2': '\u00dater\u00fd', 'con.d3': 'St\u0159eda', 'con.d4': '\u010ctvrtek',
      'con.d5': 'P\u00e1tek', 'con.d6': 'Sobota', 'con.d0': 'Ned\u011ble',
      'con.tWeek': '14:00 \u2013 1:00', 'con.tWeekend': '14:00 \u2013 2:00',
      'con.reserveBtn': 'Rezervovat st\u016fl',
      /* footer */
      'foot.tagline': 'Tv\u016fj druh\u00fd domov pro kou\u0159, pomal\u00e9 ve\u010dery a dobrou spole\u010dnost v srdci Prahy.',
      'foot.explore': 'Objevit', 'foot.visit': 'Nav\u0161tivte', 'foot.hours': 'Otev\u00edrac\u00ed doba',
      'foot.findus': 'Najdi n\u00e1s',
      'foot.h1': 'Ne\u2013\u010ct · 14:00 \u2013 1:00', 'foot.h2': 'P\u00e1\u2013So · 14:00 \u2013 2:00',
      'foot.copy': '\u00a9 2026 ShiShi Lounge · Hookah Bar Praha', 'foot.legal': 'Pouze 18+ · Pij a kou\u0159 zodpov\u011bdn\u011b',
    },
  };

  /* ---- bilingual menu data (names + descriptions) ---- */
  const MENU_DATA = {
    hookah: {
      icon: '\uD83D\uDD42', label: { en: 'Hookah', cz: 'Vodn\u00ed d\u00fdmka' },
      note: { en: 'Premium tobacco packed fresh · natural coconut coal · served on glass bases', cz: 'Pr\u00e9miov\u00fd tab\u00e1k \u010derstv\u011b nap\u011bchovan\u00fd · p\u0159\u00edrodn\u00ed kokosov\u00e9 uhl\u00ed · podáv\u00e1me na sklen\u011bn\u00fdch basech' },
      foot: { en: 'Coal refills 60 K\u010d · Extra hose 80 K\u010d · Ice-base upgrade 90 K\u010d', cz: 'V\u00fdm\u011bna uhl\u00edk\u016f 60 K\u010d · Hadice nav\u00edc 80 K\u010d · Ledov\u00fd base +90 K\u010d' },
      items: [
        { n: { en: 'Signature ShiShi Blend', cz: 'Signature ShiShi sm\u011bs' }, d: { en: 'House mix \u2014 double apple, mint & a whisper of anise', cz: 'Dom\u00e1c\u00ed sm\u011bs \u2014 dvojit\u00e9 jablko, m\u00e1ta a \u0161petka an\u00fdzu' }, p: 590, tag: 'signature' },
        { n: { en: 'Prague Sunset', cz: 'Prague Sunset' }, d: { en: 'Peach, passionfruit & blood orange', cz: 'Broskev, marakuja a krvav\u00fd pomeran\u010d' }, p: 520, tag: 'popular' },
        { n: { en: 'Velvet Grape', cz: 'Velvet Grape' }, d: { en: 'Dark grape, blackberry & cool berry', cz: 'Tmav\u00e9 hrozno, ostru\u017eina a chladiv\u00e9 bobule' }, p: 490, tag: '' },
        { n: { en: 'Coconut Cloud', cz: 'Coconut Cloud' }, d: { en: 'Toasted coconut, vanilla & cream', cz: 'Pra\u017een\u00fd kokos, vanilka a smetana' }, p: 510, tag: '' },
        { n: { en: 'Mojito Garden', cz: 'Mojito Garden' }, d: { en: 'Lime, fresh mint & soda lift', cz: 'Limetka, \u010derstv\u00e1 m\u00e1ta a sodov\u00e1 sv\u011b\u017eest' }, p: 480, tag: 'popular' },
        { n: { en: 'Golden Melon', cz: 'Golden Melon' }, d: { en: 'Honeydew, cantaloupe & ice', cz: 'Medov\u00fd meloun, cantaloupe a led' }, p: 470, tag: '' },
        { n: { en: 'Black Cherry Smoke', cz: 'Black Cherry Smoke' }, d: { en: 'Sour cherry, cola & spice', cz: 'Vi\u0161e\u0148, kola a ko\u0159en\u00ed' }, p: 500, tag: '' },
        { n: { en: 'Citrus Storm', cz: 'Citrus Storm' }, d: { en: 'Lemon, orange, grapefruit zest', cz: 'Citron, pomeran\u010d a grapefruitov\u00e1 k\u016fra' }, p: 480, tag: '' },
        { n: { en: 'Lady Mint', cz: 'Lady Mint' }, d: { en: 'Spearmint, eucalyptus & lime', cz: 'M\u00e1ta, eukalyptus a limetka' }, p: 460, tag: '' },
        { n: { en: 'Arabian Nights', cz: 'Arabian Nights' }, d: { en: 'Date, fig, cardamom & rose', cz: 'Datle, f\u00edk, kardamom a r\u016f\u017ee' }, p: 540, tag: 'signature' },
        { n: { en: 'Berry Bashe', cz: 'Berry Bashe' }, d: { en: 'Strawberry, raspberry & cream', cz: 'Jahoda, malina a smetana' }, p: 490, tag: '' },
        { n: { en: 'Ice Watermelon', cz: 'Ice Watermelon' }, d: { en: 'Watermelon candy & frost', cz: 'Melounov\u00e9 bonb\u00f3ny a mr\u00e1z' }, p: 470, tag: 'popular' },
      ],
    },
    cocktails: {
      icon: '\uD83C\uDF78', label: { en: 'Cocktails', cz: 'Koktejly' },
      note: { en: 'Built by our bartenders to pair with the smoke', cz: 'Nam\u00edchan\u00e9 na\u0161imi barmany k d\u00fdmce' },
      foot: { en: 'Zero-proof versions of any cocktail available \u2014 145 K\u010d', cz: 'Nealko verze jak\u00e9hokoli koktejlu \u2014 145 K\u010d' },
      items: [
        { n: { en: 'Smoke & Mirrors', cz: 'Smoke & Mirrors' }, d: { en: 'Mezcal, ginger, lime, chilli tincture', cz: 'Mezcal, z\u00e1zvor, limetka, chilli tinktura' }, p: 245, tag: 'signature' },
        { n: { en: 'ShiShi Old Fashioned', cz: 'ShiShi Old Fashioned' }, d: { en: 'Bourbon, fig syrup, orange bitters', cz: 'Bourbon, f\u00edkov\u00fd sirup, pomeran\u010dov\u00fd bitter' }, p: 235, tag: 'popular' },
        { n: { en: 'Prague Spritz', cz: 'Prague Spritz' }, d: { en: 'Aperol, prosecco, blood orange', cz: 'Aperol, prosecco, krvav\u00fd pomeran\u010d' }, p: 195, tag: '' },
        { n: { en: 'Coconut Negroni', cz: 'Coconut Negroni' }, d: { en: 'Gin, campari, coconut-washed vermouth', cz: 'Gin, campari, kokosem promyt\u00fd vermut' }, p: 225, tag: '' },
        { n: { en: 'Velvet Espresso', cz: 'Velvet Espresso' }, d: { en: 'Vodka, cold brew, vanilla, tonka', cz: 'Vodka, cold brew, vanilka, tonka' }, p: 215, tag: 'popular' },
        { n: { en: 'Garden Gimlet', cz: 'Garden Gimlet' }, d: { en: 'Gin, cucumber, basil, lime cordial', cz: 'Gin, okurka, bazalka, limetkov\u00fd cordial' }, p: 205, tag: '' },
        { n: { en: 'Pomegranate Sour', cz: 'Pomegranate Sour' }, d: { en: 'Whiskey, pomegranate, egg white', cz: 'Whiskey, gran\u00e1tov\u00e9 jablko, b\u00edlek' }, p: 220, tag: '' },
        { n: { en: 'Midnight Mule', cz: 'Midnight Mule' }, d: { en: 'Spiced rum, ginger beer, lime', cz: 'Ko\u0159en\u011bn\u00fd rum, z\u00e1zvorov\u00e9 pivo, limetka' }, p: 195, tag: '' },
      ],
    },
    drinks: {
      icon: '\uD83C\uDF75', label: { en: 'Drinks & Tea', cz: 'N\u00e1poje & \u010caj' },
      note: { en: 'Soft drinks, teas, fresh juice & a tight wine list', cz: 'Nealko, \u010daje, \u010derstv\u00e9 \u0161\u0165\u00e1vy a vybran\u00e1 v\u00edna' },
      foot: { en: 'Full wine & spirits list available at the bar', cz: 'Kompletn\u00ed vinn\u00fd a lihov\u00fd l\u00edstek u baru' },
      items: [
        { n: { en: 'Moroccan Mint Tea (pot)', cz: 'Marock\u00fd m\u00e1tov\u00fd \u010daj (konvi\u010dka)' }, d: { en: 'Gunpowder green, fresh mint, honey', cz: 'Zelen\u00fd gunpowder, \u010derstv\u00e1 m\u00e1ta, med' }, p: 130, tag: 'popular' },
        { n: { en: 'Masala Chai (pot)', cz: 'Masala chai (konvi\u010dka)' }, d: { en: 'Black tea, milk, warming spice', cz: '\u010cern\u00fd \u010daj, ml\u00e9ko, h\u0159ejiv\u00e9 ko\u0159en\u00ed' }, p: 130, tag: '' },
        { n: { en: 'Fresh Citrus Lemonade', cz: '\u010cerstv\u00e1 citrusov\u00e1 limon\u00e1da' }, d: { en: 'House-pressed, rosemary', cz: 'Doma lisovan\u00e1, rozmar\u00fdn' }, p: 120, tag: '' },
        { n: { en: 'Orange / Apple Juice', cz: 'Pomeran\u010dov\u00fd / jable\u010dn\u00fd d\u017eus' }, d: { en: 'Freshly squeezed', cz: '\u010cerstv\u011b vyma\u010dkan\u00fd' }, p: 95, tag: '' },
        { n: { en: 'Turkish Coffee', cz: 'Tureck\u00e1 k\u00e1va' }, d: { en: 'Cardamom, served sweet', cz: 'Kardamom, sladk\u00e1' }, p: 90, tag: '' },
        { n: { en: 'Still / Sparkling Water', cz: 'Neperliv\u00e1 / perliv\u00e1 voda' }, d: { en: '0.75 L bottle', cz: 'L\u00e1hev 0,75 l' }, p: 75, tag: '' },
        { n: { en: 'House Wine', cz: 'Dom\u00e1c\u00ed v\u00edno' }, d: { en: 'Glass \u2014 red, white or ros\u00e9', cz: 'Sklenka \u2014 \u010derven\u00e9, b\u00edl\u00e9 nebo ros\u00e9' }, p: 110, tag: '' },
        { n: { en: 'Czech Lager (draft)', cz: '\u010cesk\u00e9 pivo (to\u010den\u00e9)' }, d: { en: '0.5 L, Prague brewed', cz: '0,5 l, pra\u017esk\u00fd pivovar' }, p: 75, tag: 'popular' },
        { n: { en: 'Prosecco', cz: 'Prosecco' }, d: { en: 'Glass', cz: 'Sklenka' }, p: 130, tag: '' },
      ],
    },
    food: {
      icon: '\uD83E\uDED2', label: { en: 'Food & Bites', cz: 'J\u00eddlo & Pochutiny' },
      note: { en: 'Mezze, sharing boards & sweet things to keep the night going', cz: 'Mezze, sd\u00edlec\u00ed prk\u00e9nka a sladkosti na cel\u00fd ve\u010der' },
      foot: { en: 'Kitchen open until 30 min before close · vegan options marked at the table', cz: 'Kuchyn\u011b do 30 min p\u0159ed zav\u00edrac\u00ed dobou · vegansk\u00e9 volby ozna\u010deny na l\u00edstku' },
      items: [
        { n: { en: 'Mezze Board for Two', cz: 'Mezze prk\u00e9nko pro dva' }, d: { en: 'Hummus, baba ganoush, olives, warm pita', cz: 'Hummus, baba ganoush, olivy, tepl\u00e1 pita' }, p: 320, tag: 'popular' },
        { n: { en: 'Loaded Nachos', cz: 'Nachos se v\u0161\u00edm' }, d: { en: 'Cheese, jalape\u00f1o, salsa, guacamole', cz: 'S\u00fdr, jalape\u00f1o, salsa, guacamole' }, p: 210, tag: '' },
        { n: { en: 'Halloumi Fries', cz: 'Halloumi hranolky' }, d: { en: 'Fried halloumi, honey & chilli', cz: 'Sma\u017een\u00e9 halloumi, med a chilli' }, p: 195, tag: 'signature' },
        { n: { en: 'Chicken Shish Skewers', cz: 'Ku\u0159ec\u00ed \u0161i\u0161 sp\u00edzy' }, d: { en: 'Marinated, grilled, garlic yoghurt', cz: 'Marinovan\u00e9, grilovan\u00e9, \u010desnekov\u00fd jogurt' }, p: 280, tag: '' },
        { n: { en: 'Falafel Plate', cz: 'Falafel tal\u00ed\u0159' }, d: { en: 'Crispy falafel, tahini, pickles', cz: 'K\u0159upav\u00fd falafel, tahini, nakl\u00e1dan\u00e1 zelenina' }, p: 220, tag: '' },
        { n: { en: 'Truffle Fries', cz: 'Lan\u00fd\u017eov\u00e9 hranolky' }, d: { en: 'Parmesan & truffle oil', cz: 'Parmaz\u00e1n a lan\u00fd\u017eov\u00fd olej' }, p: 165, tag: '' },
        { n: { en: 'Baklava Trio', cz: 'Baklava trio' }, d: { en: 'Pistachio, walnut, honey', cz: 'Pist\u00e1cie, vla\u0161sk\u00e9 o\u0159echy, med' }, p: 150, tag: 'popular' },
        { n: { en: 'Dark Chocolate Fondant', cz: 'Fondant z ho\u0159k\u00e9 \u010dokol\u00e1dy' }, d: { en: 'Molten centre, vanilla cream', cz: 'Tekut\u00e9 nitro, vanilkov\u00e1 smetana' }, p: 175, tag: '' },
      ],
    },
  };

  /* ---- booking dynamic strings ---- */
  const BK = {
    en: {
      exp: { hookah: 'Hookah & lounge', drinks: 'Drinks & bar', celebration: 'Celebration / group' },
      seat: { sofa: 'Lounge sofa', bar: 'Bar seats', cellar: 'Brick cellar', private: 'Private room' },
      tag: { signature: 'Signature', popular: 'Popular' },
      none: 'None', dateLocale: 'en-GB',
      guests: (n) => n + (n === 1 ? ' guest' : ' guests'),
      err: { exp: 'Please choose an experience', date: 'Pick a date', time: 'Pick a time slot', seat: 'Choose your spot', name: 'Your name, please', email: 'Enter a valid email', phone: 'Enter a phone number' },
      there: 'there',
    },
    cz: {
      exp: { hookah: 'D\u00fdmka & lounge', drinks: 'N\u00e1poje & bar', celebration: 'Oslava / skupina' },
      seat: { sofa: 'Lounge pohovka', bar: 'M\u00edsta u baru', cellar: 'Cihlov\u00fd sklep', private: 'Soukrom\u00fd pokoj' },
      tag: { signature: 'Signature', popular: 'Obl\u00edben\u00e9' },
      none: '\u017d\u00e1dn\u00e9', dateLocale: 'cs-CZ',
      guests: (n) => n + ' ' + (n === 1 ? 'host' : (n >= 2 && n <= 4) ? 'host\u00e9' : 'host\u016f'),
      err: { exp: 'Vyber pros\u00edm z\u00e1\u017eitek', date: 'Vyber datum', time: 'Vyber \u010das', seat: 'Vyber m\u00edsto', name: 'Zadej pros\u00edm jm\u00e9no', email: 'Zadej platn\u00fd e-mail', phone: 'Zadej telefonn\u00ed \u010d\u00edslo' },
      there: 't\u011b\u0161\u00edme se',
    },
  };

  let lang = (function () { try { return localStorage.getItem('shishi_lang') || 'en'; } catch (e) { return 'en'; } })();
  if (lang !== 'en' && lang !== 'cz') lang = 'en';

  function t(key) { return (STR[lang] && STR[lang][key] != null) ? STR[lang][key] : (STR.en[key] != null ? STR.en[key] : key); }

  function apply() {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = t(el.getAttribute('data-i18n')); if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = t(el.getAttribute('data-i18n-html')); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = t(el.getAttribute('data-i18n-ph')); if (v != null) el.setAttribute('placeholder', v); });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }
  function setLang(l) { if (l !== 'en' && l !== 'cz') return; lang = l; try { localStorage.setItem('shishi_lang', l); } catch (e) {} apply(); }

  window.I18N = {
    t, setLang, apply,
    getLang: () => lang,
    menu: () => MENU_DATA,
    bk: () => BK[lang],
  };

  function boot() {
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
