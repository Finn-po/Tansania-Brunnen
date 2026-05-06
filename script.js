/* ─────────────────────────────────────────────
   BRUNNEN FÜR TANSANIA — script.js (Vanilla JS)
   - i18n (DE/EN), Sprachumschalter
   - Spendenformular & Impact-Berechnung
   - FAQ-Akkordeon
   - Galerie (dynamisch)
   - Spendenbalken-Animation
   ───────────────────────────────────────────── */

/* ── i18n ── */
const I18N = {
  de: {
    'nav.story': 'Geschichte',
    'nav.gallery': 'Galerie',
    'nav.events': 'Aktionen',
    'nav.updates': 'Updates',
    'nav.about': 'Über Edith',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Spenden',

    'hero.location': 'Kisangasa · Tansania',
    'hero.title.1': 'Ein Brunnen.',
    'hero.title.2': 'Eine Zukunft.',
    'hero.lede': 'In Kisangasa laufen Frauen und Kinder jeden Tag viele Kilometer für Wasser. Gemeinsam können wir das ändern — ein Dorf, ein Brunnen, eine Zukunft.',
    'hero.cta.donate': 'Jetzt spenden',
    'hero.cta.story': 'Die Geschichte lesen →',
    'hero.tagline': 'Jeder Tropfen zählt.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'gesammelt',
    'hero.percent': 'erreicht',
    'hero.goal': 'Spendenziel',
    'hero.remaining_pre': 'Noch',
    'hero.remaining_post': 'bis zum ersten Brunnen',

    'story.eyebrow': 'Die Geschichte',
    'story.title.1': 'Wir können vielleicht nicht die ganze Welt verändern',
    'story.title.2': '— aber die Welt für ein Dorf.',
    'story.p1': 'Die Massai sind ein besonderes Volk in Tansania und Kenia. Sie leben einfach, aber mit großer Würde, Stärke und Gemeinschaft.',
    'story.p2': 'Wenn man ihnen begegnet, sieht man sofort: Sie haben vielleicht wenig Besitz — aber sie haben so viel Herz.',
    'story.p3': 'Ihr Leben ist eng mit der Natur verbunden. Kühe bedeuten für sie alles: Nahrung, Sicherheit und Zukunft.',
    'story.p4': 'Doch vor allem die Frauen tragen eine große Last. Jeden Tag laufen sie viele Kilometer, um Wasser zu holen. Für uns ist Wasser selbstverständlich — für sie ist es ein Kampf.',
    'story.p5.pre': 'Und trotzdem… ',
    'story.p5.em': 'lachen die Kinder.',
    'story.p5.post': ' Sie spielen, sie helfen sich gegenseitig, sie sind nie allein.',
    'story.p6': 'Das hat mich tief berührt.',
    'story.quote.1': 'Denn ein Brunnen bedeutet dort nicht nur Wasser.',
    'story.quote.2': 'Ein Brunnen bedeutet Leben.',
    'story.quote.3': 'Er bedeutet Zeit, Hoffnung und eine bessere Zukunft.',
    'story.signature': 'nach ihrer Reise nach Tansania',
    'story.cap.1': 'Liebe verändert Leben.',
    'story.cap.2': 'Habari! 👋',
    'value.water.title': 'Sauberes Wasser',
    'value.water.text': 'Schützt vor Krankheiten und rettet Leben — Tag für Tag.',
    'value.school.title': 'Bildung für Kinder',
    'value.school.text': 'Ohne weite Wege zum Wasser bleibt Zeit für die Schule.',
    'value.hope.title': 'Hoffnung für die Zukunft',
    'value.hope.text': 'Ein Brunnen bedeutet Würde — und einen Anfang.',

    'gallery.eyebrow': 'Einblicke',
    'gallery.title.1': 'Bilder aus',
    'gallery.title.2': 'Kisangasa.',
    'gallery.aside': '…Worte reichen nicht.',

    'events.eyebrow': 'Aktionen & Events',
    'events.title.1': 'So sammeln wir',
    'events.title.2': '— gemeinsam.',
    'events.lede': 'Kleine Aktionen, große Wirkung. Jede einzelne bringt uns dem Ziel näher.',
    'events.idea': 'Du hast eine Idee für eine Aktion?',
    'events.contact': 'Schreib uns →',
    'events.upcoming': 'Geplant',
    'event.1.tag': 'Schul-Aktion',
    'event.1.date': '11. April 2025',
    'event.1.title': 'Reifen-Brunnen & Tortenverkauf',
    'event.1.text': 'Im Mortimer English Club: ein „Brunnen" aus alten Reifen, geschmückt mit Tansania-Flaggen, dazu der Verkauf der selbstgebackenen Brunnen-Torte mit Massai-Figuren. Ein bunter Nachmittag mit den Kindern.',
    'event.1.where': 'Mortimer English Club',
    'event.2.tag': 'Trödelmarkt',
    'event.2.date': '29. Mai 2025',
    'event.2.title': 'Nachttrödelmarkt',
    'event.2.text': 'Ein Stand mit Selbstgemachtem, Tansania-Souvenirs und einer Spendenbox — dazu viele Gespräche über Kisangasa und die Massai.',
    'event.2.where': 'Nachttrödel',
    'event.3.tag': 'Vor Ort',
    'event.3.date': 'Geplant 2026',
    'event.3.title': 'Der echte Brunnen',
    'event.3.text': 'Wenn das Spendenziel erreicht ist: Bau, Inbetriebnahme und Übergabe an die Dorfgemeinschaft in Kisangasa. Dokumentiert auf dieser Seite.',
    'event.3.where': 'Kisangasa',

    'updates.eyebrow': 'Neuigkeiten',
    'updates.title.1': 'So weit',
    'updates.title.2': 'sind wir.',
    'updates.lede': 'Stand der Aktionen, kleine Erfolge, Begegnungen.',
    'update.1.date': 'Mai 2025',
    'update.1.title': 'Trödelmarkt-Erfolg',
    'update.1.text': 'Beim Nachttrödelmarkt am 29.05. kamen weitere Spenden zusammen — und viele neue Unterstützer.',
    'update.2.date': 'April 2025',
    'update.2.title': 'Reifen-Brunnen steht',
    'update.2.text': 'Beim Mortimer English Club entstand der bunte Reifen-Brunnen — und die Brunnen-Torte ging weg wie warme Semmeln.',
    'update.3.date': 'März 2025',
    'update.3.title': 'Zurück aus Tansania',
    'update.3.text': 'Edith ist zurück. Mit Bildern, Geschichten — und einem festen Versprechen.',

    'faq.eyebrow': 'Häufige Fragen',
    'faq.title': 'Was du wissen solltest.',
    'faq.q1': 'Wo geht das Geld hin?',
    'faq.a1': '100% der Spenden fließen in den Bau des Brunnens in Kisangasa, Tansania. Material, Bohrung, Wasserqualitätsprüfung und Übergabe an die Dorfgemeinschaft sind enthalten.',
    'faq.q2': 'Bekomme ich eine Spendenbescheinigung?',
    'faq.a2': 'Eine Spendenbescheinigung ist je nach Spendenweg möglich. Details findest du im Spendenformular bei 4fund.com.',
    'faq.q3': 'Wer steckt dahinter?',
    'faq.a3': 'Edith Cielma — Mutter, Reisende und Initiatorin. Das Projekt ist privat unterstützt und wird transparent dokumentiert.',
    'faq.q4': 'Wie wird der Brunnen gebaut?',
    'faq.a4': 'Sobald das Ziel erreicht ist, koordiniert Edith mit Verantwortlichen vor Ort: Material, Bohrung, Test, Übergabe. Bilder und Updates erscheinen hier.',
    'faq.q5': 'Was, wenn mehr zusammenkommt?',
    'faq.a5': 'Mehrspenden fließen in Folgeprojekte rund um den Brunnen — z.B. Wasserleitungen, Schulversorgung oder einen zweiten Brunnen.',
    'faq.q6': 'Wie kann ich helfen, ohne Geld?',
    'faq.a6': 'Aktion in deiner Schule oder Firma starten, Seite teilen, Edith schreiben. Jede Idee ist willkommen.',

    'cta.eyebrow': 'Jetzt mithelfen',
    'cta.title.1': 'Deine Spende',
    'cta.title.2': 'verändert Leben.',
    'cta.lede': 'Jeder Euro fließt direkt in den Bau des Brunnens in Kisangasa. Edith dokumentiert jeden Schritt vor Ort.',
    'cta.trust.1': '100% gehen ins Projekt',
    'cta.trust.2': 'Spendenbescheinigung möglich',
    'cta.trust.3': 'Persönlich vor Ort begleitet',
    'cta.form.label': 'Ich spende einmalig',
    'cta.impact.pre': 'Tage sauberes Trinkwasser für eine Familie',
    'cta.submit': 'spenden',
    'cta.or': 'oder',

    'about.eyebrow': 'Wer dahintersteht',
    'about.title.1': 'Eine Mutter, eine Reise,',
    'about.title.2': 'ein',
    'about.title.3': 'Versprechen.',
    'about.p1': 'Edith ist Mutter, Reisende und vor allem: jemand, der nicht wegschauen kann. Auf ihrer Reise nach Tansania traf sie Menschen, die mit so wenig so viel Würde leben — und beschloss, etwas zurückzugeben.',
    'about.p2': 'Seitdem organisiert sie Aktionen, bäckt Brunnen-Torten, malt Reifen an, und sammelt — Euro für Euro, Herz für Herz — für einen echten Brunnen in Kisangasa.',
    'about.quote': '„Ich kann vielleicht nicht die ganze Welt verändern, aber die Welt für ein Dorf."',
    'about.tag': 'Edith Cielma',

    'footer.about': 'Ein Brunnen für Kisangasa — sauberes Wasser für ein ganzes Dorf. Privat unterstützt, transparent dokumentiert.',
    'footer.pages': 'Seiten',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.receipt': 'Spendenbescheinigung',
    'footer.thanks': 'Asante sana — Vielen Dank.',

    'gallery.0.label': 'Vor Ort',
    'gallery.0.cap': 'Edith mit einem der Kinder',
    'gallery.1.label': 'Dorf',
    'gallery.1.cap': 'Auf dem Weg durchs Dorf',
    'gallery.2.label': 'Kinder',
    'gallery.2.cap': 'Hier wie dort — Kinder, die lachen',
    'gallery.3.label': 'Wasser',
    'gallery.3.cap': 'Wasserkanister mit Foto eines Kindes',
    'gallery.4.label': 'Begegnung',
    'gallery.4.cap': 'Edith mit Kindern aus zwei Welten',
    'gallery.5.label': 'Lächeln',
    'gallery.5.cap': 'Selfie aus Kisangasa',
  },

  en: {
    'nav.story': 'Story',
    'nav.gallery': 'Gallery',
    'nav.events': 'Events',
    'nav.updates': 'Updates',
    'nav.about': 'About Edith',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',

    'hero.location': 'Kisangasa · Tanzania',
    'hero.title.1': 'One well.',
    'hero.title.2': 'One future.',
    'hero.lede': 'In Kisangasa, women and children walk for kilometers every day to fetch water. Together we can change that — one village, one well, one future.',
    'hero.cta.donate': 'Donate now',
    'hero.cta.story': 'Read the story →',
    'hero.tagline': 'Every drop matters.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'raised',
    'hero.percent': 'reached',
    'hero.goal': 'goal',
    'hero.remaining_pre': 'Still',
    'hero.remaining_post': 'to the first well',

    'story.eyebrow': 'The story',
    'story.title.1': 'We may not be able to change the whole world',
    'story.title.2': '— but the world for one village.',
    'story.p1': 'The Maasai are a remarkable people in Tanzania and Kenya. They live simply — with great dignity, strength and community.',
    'story.p2': 'When you meet them, you see it instantly: they may have few possessions — but they have so much heart.',
    'story.p3': 'Their lives are deeply tied to nature. Cattle mean everything to them: food, security, future.',
    'story.p4': 'But above all, the women carry a heavy burden. Every day, they walk many kilometers to fetch water. For us, water is a given — for them, it is a struggle.',
    'story.p5.pre': 'And yet… ',
    'story.p5.em': 'the children laugh.',
    'story.p5.post': ' They play, they help one another, they are never alone.',
    'story.p6': 'That moved me deeply.',
    'story.quote.1': 'Because there, a well does not just mean water.',
    'story.quote.2': 'A well means life.',
    'story.quote.3': 'It means time, hope, and a better future.',
    'story.signature': 'after her trip to Tanzania',
    'story.cap.1': 'Love changes lives.',
    'story.cap.2': 'Habari! 👋',
    'value.water.title': 'Clean water',
    'value.water.text': 'Protects from disease and saves lives — every day.',
    'value.school.title': 'Education',
    'value.school.text': 'No long walks for water means time for school.',
    'value.hope.title': 'Hope for the future',
    'value.hope.text': 'A well means dignity — and a beginning.',

    'gallery.eyebrow': 'Glimpses',
    'gallery.title.1': 'Images from',
    'gallery.title.2': 'Kisangasa.',
    'gallery.aside': '…words are not enough.',

    'events.eyebrow': 'Events & actions',
    'events.title.1': 'How we raise',
    'events.title.2': '— together.',
    'events.lede': 'Small actions, real impact. Each one brings us closer.',
    'events.idea': 'Got an idea for an action?',
    'events.contact': 'Get in touch →',
    'events.upcoming': 'Planned',
    'event.1.tag': 'School action',
    'event.1.date': 'April 11, 2025',
    'event.1.title': 'Tire well & cake sale',
    'event.1.text': 'At the Mortimer English Club: a "well" built from old tires, decorated with Tanzanian flags, plus the famous handmade well-cake with Maasai figurines. A colorful afternoon with the kids.',
    'event.1.where': 'Mortimer English Club',
    'event.2.tag': 'Flea market',
    'event.2.date': 'May 29, 2025',
    'event.2.title': 'Night flea market',
    'event.2.text': 'A stall of homemade goods, Tanzania souvenirs and a donation box — and lots of conversations about Kisangasa.',
    'event.2.where': 'Night market',
    'event.3.tag': 'On-site',
    'event.3.date': 'Planned 2026',
    'event.3.title': 'The real well',
    'event.3.text': 'Once the goal is reached: construction, commissioning and handover to the village community in Kisangasa.',
    'event.3.where': 'Kisangasa',

    'updates.eyebrow': 'News',
    'updates.title.1': 'How',
    'updates.title.2': 'far we are.',
    'updates.lede': 'Status of actions, small wins, encounters.',
    'update.1.date': 'May 2025',
    'update.1.title': 'Flea market success',
    'update.1.text': 'The night flea market on May 29 brought more donations — and many new supporters.',
    'update.2.date': 'April 2025',
    'update.2.title': 'Tire well is up',
    'update.2.text': 'At Mortimer English Club, the colorful tire well took shape — and the cake sold out fast.',
    'update.3.date': 'March 2025',
    'update.3.title': 'Back from Tanzania',
    'update.3.text': 'Edith is back. With pictures, stories — and a firm promise.',

    'faq.eyebrow': 'Frequent questions',
    'faq.title': 'What you should know.',
    'faq.q1': 'Where does the money go?',
    'faq.a1': '100% of donations go into building the well in Kisangasa, Tanzania. Material, drilling, water quality testing and handover to the village are included.',
    'faq.q2': 'Do I get a donation receipt?',
    'faq.a2': 'A receipt is possible depending on the channel. Details are in the donation form on 4fund.com.',
    'faq.q3': 'Who is behind this?',
    'faq.a3': 'Edith Cielma — mother, traveler, initiator. The project is privately supported and transparently documented.',
    'faq.q4': 'How is the well built?',
    'faq.a4': 'Once the goal is reached, Edith coordinates with on-site partners: material, drilling, testing, handover. Pictures and updates appear here.',
    'faq.q5': 'What if more is collected?',
    'faq.a5': 'Surplus goes into follow-up projects — water lines, school supply, or a second well.',
    'faq.q6': 'How can I help without money?',
    'faq.a6': 'Run an action at school or work, share this page, write to Edith. Every idea is welcome.',

    'cta.eyebrow': 'Help now',
    'cta.title.1': 'Your donation',
    'cta.title.2': 'changes lives.',
    'cta.lede': 'Every euro goes directly into the well in Kisangasa. Edith documents every step on site.',
    'cta.trust.1': '100% goes to the project',
    'cta.trust.2': 'Donation receipt possible',
    'cta.trust.3': 'Personally accompanied on site',
    'cta.form.label': 'I donate once',
    'cta.impact.pre': 'days of clean water for a family',
    'cta.submit': 'donate',
    'cta.or': 'or',

    'about.eyebrow': 'Who is behind it',
    'about.title.1': 'A mother, a journey,',
    'about.title.2': 'a',
    'about.title.3': 'promise.',
    'about.p1': 'Edith is a mother, a traveler, and above all someone who cannot look away. On her trip to Tanzania she met people who live with so little dignity — and decided to give back.',
    'about.p2': 'Since then she has organized actions, baked well-cakes, painted tires, and collected — euro by euro, heart by heart — for a real well in Kisangasa.',
    'about.quote': '"I may not change the whole world, but the world for one village."',
    'about.tag': 'Edith Cielma',

    'footer.about': 'A well for Kisangasa — clean water for a whole village. Privately supported, transparently documented.',
    'footer.pages': 'Pages',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.receipt': 'Donation receipt',
    'footer.thanks': 'Asante sana — thank you.',

    'gallery.0.label': 'On site',
    'gallery.0.cap': 'Edith with one of the kids',
    'gallery.1.label': 'Village',
    'gallery.1.cap': 'On the path through the village',
    'gallery.2.label': 'Children',
    'gallery.2.cap': 'Here and there — children who laugh',
    'gallery.3.label': 'Water',
    'gallery.3.cap': "Water canister with a child's photo",
    'gallery.4.label': 'Encounter',
    'gallery.4.cap': 'Edith with kids from two worlds',
    'gallery.5.label': 'Smile',
    'gallery.5.cap': 'Selfie from Kisangasa',
  }
};

/* ── State ── */
let currentLang = 'de';

/* ── i18n apply ── */
function t(key) {
  return I18N[currentLang]?.[key] ?? key;
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  // Sprachumschalter
  document.querySelectorAll('[data-lang-de]').forEach(el => el.classList.toggle('on', currentLang === 'de'));
  document.querySelectorAll('[data-lang-en]').forEach(el => el.classList.toggle('on', currentLang === 'en'));
  // Geplant-Badge
  const upcoming = document.querySelector('[data-i18n-upcoming]');
  if (upcoming) upcoming.textContent = t('events.upcoming');
  // Galerie neu rendern (Captions)
  renderGallery();
}

/* ── Gallery ── */
const GALLERY_ITEMS = [
  'images/edith-liebe.jpg',
  'images/kind-im-dorf.jpg',
  'images/kinder-collage.jpg',
  'images/wasserkanister-kind.jpg',
  'images/edith-mit-kindern.jpg',
  'images/edith-selfie.jpg',
];

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  GALLERY_ITEMS.forEach((src, i) => {
    const cap = t(`gallery.${i}.cap`);
    const label = t(`gallery.${i}.label`);
    const fig = document.createElement('figure');
    fig.className = `gallery-tile gallery-tile-${i}`;
    fig.innerHTML = `
      <img src="${src}" alt="${cap}" class="img-fit"/>
      <figcaption>
        <span class="gallery-label">${label}</span>
        <span class="gallery-cap">${cap}</span>
      </figcaption>
    `;
    grid.appendChild(fig);
  });
}

/* ── FAQ ── */
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
    const item = document.createElement('div');
    item.className = 'faq-item';
    if (i === 1) item.classList.add('open');
    item.innerHTML = `
      <button class="faq-q" type="button">
        <span data-i18n="faq.q${i}">${t(`faq.q${i}`)}</span>
        <span class="faq-icon" aria-hidden="true">${i === 1 ? '−' : '+'}</span>
      </button>
      <div class="faq-a" data-i18n="faq.a${i}">${t(`faq.a${i}`)}</div>
    `;
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        const ic = el.querySelector('.faq-icon');
        if (ic) ic.textContent = '+';
      });
      if (!wasOpen) {
        item.classList.add('open');
        item.querySelector('.faq-icon').textContent = '−';
      }
    });
    list.appendChild(item);
  }
}

/* ── Donation form ── */
function setDonateAmount(amount) {
  amount = Math.max(1, Math.round(amount) || 0);
  document.querySelectorAll('.donate-preset').forEach(b => {
    b.classList.toggle('active', Number(b.dataset.amount) === amount);
  });
  const customInput = document.getElementById('donate-custom');
  if (customInput && Number(customInput.value) !== amount) customInput.value = amount;
  const days = Math.round(amount * 1.8);
  const daysEl = document.getElementById('donate-days');
  if (daysEl) daysEl.textContent = days;
  const btnAmt = document.getElementById('donate-btn-amount');
  if (btnAmt) btnAmt.textContent = amount;
}

function initDonateForm() {
  document.querySelectorAll('.donate-preset').forEach(btn => {
    btn.addEventListener('click', () => setDonateAmount(Number(btn.dataset.amount)));
  });
  const customInput = document.getElementById('donate-custom');
  if (customInput) {
    customInput.addEventListener('input', e => setDonateAmount(Number(e.target.value)));
  }
  setDonateAmount(50);
}

/* ── Hero progress bar ── */
function initProgressBar() {
  const goal = 11000;
  const raised = 8520;
  const remaining = goal - raised;
  const pct = Math.round((raised / goal) * 100);
  const fmt = n => n.toLocaleString('de-DE');

  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('don-raised', `${fmt(raised)} €`);
  set('don-goal', `${fmt(goal)} €`);
  set('don-pct', `${pct}%`);
  set('don-remaining', `${fmt(remaining)} €`);

  setTimeout(() => {
    const fill = document.getElementById('don-bar');
    const drop = document.getElementById('don-drop');
    if (fill) fill.style.width = pct + '%';
    if (drop) drop.style.left = `calc(${pct}% - 14px)`;
  }, 350);
}

/* ── Language toggle ── */
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    applyI18n();
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFAQ();
  renderGallery();
  applyI18n();
  initLangToggle();
  initDonateForm();
  initProgressBar();
});
