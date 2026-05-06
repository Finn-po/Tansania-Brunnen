/* ─────────────────────────────────────────────
   BRUNNEN FÜR TANSANIA — script.js (Vanilla JS)
   - i18n (DE/EN), Sprachumschalter
   - Spendenformular
   - FAQ-Akkordeon
   - Galerie (dynamisch)
   - Projektplan-Timeline
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
    'nav.build': 'Projektplan',

    'hero.location': 'Kisangasa · Tansania',
    'hero.title.1': 'Sauberes Wasser für',
    'hero.title.2': 'Kisangasa.',
    'hero.lede': 'Ein ganzes Dorf in Tansania lebt ohne sicheren Zugang zu Wasser. Gemeinsam können wir das ändern — mit einem einzigen Brunnen.',
    'hero.cta.donate': 'Jetzt spenden',
    'hero.cta.story': 'Projekt verstehen',
    'hero.tagline': 'Jeder Tropfen zählt.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'gesammelt',
    'hero.percent': 'erreicht',
    'hero.goal': 'Spendenziel',
    'hero.remaining_pre': 'Noch',
    'hero.remaining_post': 'bis zum ersten Brunnen',
    'hero.updated': 'Stand: Datum bitte aktualisieren',
    'floating.donate': 'Jetzt spenden →',

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
    'value.water.text': 'Verschmutztes Wasser ist eine der häufigsten Todesursachen für Kinder in der Region. Ein Brunnen schützt vor Krankheiten — Tag für Tag.',
    'value.school.title': 'Bildung für Kinder',
    'value.school.text': 'Kinder, vor allem Mädchen, laufen oft stundenlang für Wasser. Ein Brunnen im Dorf gibt ihnen diese Zeit zurück — Zeit für Schule und Zukunft.',
    'value.hope.title': 'Würde für die Gemeinschaft',
    'value.hope.text': 'Wasser im eigenen Dorf bedeutet mehr als Versorgung. Es bedeutet Selbstbestimmung, Sicherheit und Hoffnung für eine ganze Generation.',

    'gallery.eyebrow': 'Einblicke aus Kisangasa',
    'gallery.title.1': 'Bilder aus',
    'gallery.title.2': 'Kisangasa.',
    'gallery.aside': 'Momente, die zeigen, warum Hilfe gebraucht wird.',

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
    'event.1.text': 'Im Mortimer Englisch Club: ein „Brunnen“ aus alten Reifen, geschmückt mit Tansania-Flaggen, dazu der Verkauf einer Brunnen-Torte mit Massai-Figuren. Ein bunter Nachmittag mit den Kindern.',
    'event.1.where': 'Mortimer Englisch Club',
    'event.2.tag': 'Trödelmarkt',
    'event.2.date': '29. Mai 2025',
    'event.2.title': 'Nachttrödel',
    'event.2.text': 'Ein Stand mit Selbstgemachtem, Tansania-Souvenirs und einer Spendenbox — dazu viele Gespräche über Kisangasa und die Massai.',
    'event.2.where': 'Hattingen, Rathausplatz',
    'event.3.tag': 'Vor Ort',
    'event.3.date': 'Geplant 2026',
    'event.3.title': 'Geplanter Brunnenbau',
    'event.3.text': 'Wenn das Spendenziel erreicht ist, werden die nächsten Schritte zur Umsetzung vorbereitet und transparent dokumentiert.',
    'event.3.where': 'Kisangasa, Tansania',

    'build.eyebrow': 'Projektplan',
    'build.title.1': 'So soll der Brunnen',
    'build.title.2': 'entstehen.',
    'build.lede': 'Der Bau hat noch nicht begonnen. Diese Schritte sind geplant, sobald die Finanzierung gesichert und die Umsetzung vor Ort abgestimmt ist.',
    'build.status': 'Aktueller Stand: Spendensammlung läuft.',
    'build.step.1.label': 'Schritt 1',
    'build.step.1.title': 'Spenden sammeln',
    'build.step.1.text': 'Wir sammeln gemeinsam die Mittel, die für einen sicheren, langlebigen Brunnen nötig sind. Jeder Beitrag bringt uns näher ans Ziel.',
    'build.step.2.label': 'Schritt 2',
    'build.step.2.title': 'Mit dem Dorf abstimmen',
    'build.step.2.text': 'Sobald die Finanzierung steht, sprechen wir mit den Menschen in Kisangasa und den Verantwortlichen vor Ort — denn das Projekt soll ihnen dienen.',
    'build.step.3.label': 'Schritt 3',
    'build.step.3.title': 'Bauen vorbereiten',
    'build.step.3.text': 'Material, Handwerker und Ablauf werden geplant. Erst wenn alles steht, geben wir den Startschuss.',
    'build.step.4.label': 'Schritt 4',
    'build.step.4.title': 'Brunnen bauen',
    'build.step.4.text': 'Der Bau beginnt vor Ort — dokumentiert mit Fotos und Updates direkt aus Kisangasa.',
    'build.step.5.label': 'Schritt 5',
    'build.step.5.title': 'Übergabe ans Dorf',
    'build.step.5.text': 'Der fertige Brunnen geht in die Hände der Gemeinschaft über. Sauberes Wasser. Jeden Tag. Für hunderte Menschen.',
    'build.quote': 'Jede Unterstützung bringt uns dem Ziel näher: sauberes Wasser für Kisangasa.',
    'build.quote.sig': 'Projektstand',

    'updates.eyebrow': 'Neuigkeiten',
    'updates.title.1': 'Was bisher',
    'updates.title.2': 'passiert ist.',
    'updates.lede': 'Aktionen, Reiseeindrücke und der nächste große Schritt: das Erreichen des Spendenziels.',
    'update.1.date': 'Mai 2025',
    'update.1.title': 'Trödelmarkt-Erfolg',
    'update.1.text': 'Beim Nachttrödelmarkt am 29.05. kamen weitere Spenden zusammen — und viele neue Unterstützer.',
    'update.2.date': 'April 2025',
    'update.2.title': 'Reifen-Brunnen steht',
    'update.2.text': 'Beim Mortimer Englisch Club entstand der bunte Reifen-Brunnen — und die Brunnen-Torte ging weg wie warme Semmeln.',
    'update.3.date': 'März 2025',
    'update.3.title': 'Zurück aus Tansania',
    'update.3.text': 'Edith ist zurück. Mit Bildern, Geschichten — und einem festen Versprechen.',

    'faq.eyebrow': 'Häufige Fragen',
    'faq.title': 'Was du wissen solltest.',
    'faq.q1': 'Hat der Brunnenbau schon begonnen?',
    'faq.a1': 'Nein. Aktuell läuft die Spendensammlung. Die Umsetzung beginnt erst nach gesicherter Finanzierung und Abstimmung vor Ort.',
    'faq.q2': 'Wer steht hinter der Spendensammlung?',
    'faq.a2': 'Edith Cielma unterstützt das Projekt und sammelt Spenden für den geplanten Brunnenbau in Kisangasa.',
    'faq.q3': 'Wofür wird das Geld verwendet?',
    'faq.a3': 'Die gesammelten Spenden sind zweckgebunden für den geplanten Brunnenbau und notwendige Schritte im Zusammenhang mit der Umsetzung vorgesehen.',
    'faq.q4': 'Wie kann ich spenden?',
    'faq.a4': 'Über den externen Spendenlink auf 4fund.',
    'faq.q5': 'Was passiert, wenn das Spendenziel erreicht ist?',
    'faq.a5': 'Dann werden die nächsten Schritte zur Umsetzung vorbereitet und transparent auf dieser Website dokumentiert.',
    'faq.q6': 'Was passiert, wenn mehr Geld gesammelt wird?',
    'faq.a6': 'Zusätzliche Mittel sollen ebenfalls zweckgebunden im Zusammenhang mit dem Brunnenprojekt oder notwendiger Unterstützung vor Ort verwendet werden.',
    'faq.q7': 'Gibt es eine Spendenbescheinigung?',
    'faq.a7': 'Informationen dazu werden transparent bereitgestellt. Eine verbindliche Zusage wird erst formuliert, wenn die konkrete Abwicklung rechtssicher bestätigt ist.',
    'faq.q8': 'Wie wird der Fortschritt dokumentiert?',
    'faq.a8': 'Über Updates auf dieser Website, sobald neue gesicherte Informationen vorliegen.',
    'cta.eyebrow': 'Jetzt mithelfen',
    'cta.title.1': 'Deine Spende',
    'cta.title.2': 'verändert Leben.',
    'cta.lede': 'Die gesammelten Spenden sind zweckgebunden für den geplanten Brunnenbau in Kisangasa vorgesehen. Sobald es gesicherte neue Schritte gibt, werden sie auf dieser Seite transparent dokumentiert.',
    'cta.trust.1': 'Zweckgebunden für das Brunnenprojekt',
    'cta.trust.2': 'Informationen zur Spendenbescheinigung werden bereitgestellt',
    'cta.trust.3': 'Fortschritt wird transparent dokumentiert',
    'cta.form.label': 'Ich spende einmalig',
    'cta.impact.pre': 'Jede Spende bringt das Projekt dem Ziel näher.',
    'cta.submit': 'spenden',
    'cta.or': 'oder',

    'about.eyebrow': 'WER DAHINTER STEHT',
    'about.title.1': 'Edith',
    'about.title.2': '— die Frau hinter dem Projekt.',
    'about.p1': 'Edith ist Tagesmutter aus Deutschland — keine große NGO, keine Organisation. Auf einer Reise nach Tansania ist sie auf Kisangasa gestoßen und hat dort gesehen, wie Kinder täglich für Wasser kämpfen. Was als Begegnung begann, wurde zu einer Mission: einen Brunnen für das Dorf zu bauen.',
    'about.p2': 'Dieses Projekt ist privat, persönlich und transparent. Jede Spende geht direkt in die Umsetzung vor Ort.',
    'about.tag': 'Edith Cielma',

    'transparency.eyebrow': 'Transparenz',
    'transparency.title': 'Was aktuell gesichert ist.',
    'transparency.q1': 'Wer sammelt?',
    'transparency.a1': 'Edith Cielma.',
    'transparency.q2': 'Wofür wird gesammelt?',
    'transparency.a2': 'Für einen geplanten Brunnenbau in Kisangasa, Tansania.',
    'transparency.q3': 'Hat der Bau begonnen?',
    'transparency.a3': 'Nein. Aktuell läuft die Spendensammlung.',
    'transparency.q4': 'Wie wird gespendet?',
    'transparency.a4': 'Über die externe Plattform 4fund.',
    'transparency.q5': 'Wie wird der Fortschritt dokumentiert?',
    'transparency.a5': 'Über Updates auf dieser Website, sobald neue gesicherte Informationen vorliegen.',
    'transparency.q6': 'Spendenbescheinigung',
    'transparency.a6': 'Informationen zur Spendenbescheinigung werden transparent bereitgestellt.',

    'footer.about': 'Ein Brunnen für Kisangasa — sauberes Wasser für ein ganzes Dorf. Privat unterstützt, transparent dokumentiert.',
    'footer.pages': 'Seiten',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.receipt': 'Spendenbescheinigung',
    'footer.thanks': 'Asante sana — Vielen Dank.',

    'gallery.0.label': 'Dorf',
    'gallery.0.cap': 'Kind auf dem Weg durch das Dorf Kisangasa',
    'gallery.1.label': 'Wasser',
    'gallery.1.cap': 'Kind trägt einen schweren Wasserkanister auf dem Weg durchs Dorf',
    'gallery.2.label': 'Nähe',
    'gallery.2.cap': 'Edith hält ein Kind in den Armen',
    'gallery.3.label': 'Begegnung',
    'gallery.3.cap': 'Edith mit Kindern aus Kisangasa',
    'gallery.4.label': 'Selfie',
    'gallery.4.cap': 'Edith beim Selfie mit Kindern aus Kisangasa',
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
    'nav.build': 'Project plan',

    'hero.location': 'Kisangasa · Tanzania',
    'hero.title.1': 'Clean water for',
    'hero.title.2': 'Kisangasa.',
    'hero.lede': 'An entire village in Tanzania lives without secure access to water. Together we can change that — with a single well.',
    'hero.cta.donate': 'Donate now',
    'hero.cta.story': 'Understand the project',
    'hero.tagline': 'Every drop matters.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'raised',
    'hero.percent': 'reached',
    'hero.goal': 'goal',
    'hero.remaining_pre': 'Still',
    'hero.remaining_post': 'to the first well',
    'hero.updated': 'Status: date to be updated',
    'floating.donate': 'Donate now →',

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
    'value.water.text': 'Contaminated water is one of the most common causes of death for children in the region. A well protects against disease — day after day.',
    'value.school.title': 'Education for children',
    'value.school.text': 'Children, especially girls, often walk for hours to fetch water. A well in the village gives them that time back — time for school and a future.',
    'value.hope.title': 'Dignity for the community',
    'value.hope.text': 'Water in the village means more than supply. It means self-determination, safety, and hope for a whole generation.',

    'gallery.eyebrow': 'Glimpses from Kisangasa',
    'gallery.title.1': 'Images from',
    'gallery.title.2': 'Kisangasa.',
    'gallery.aside': 'Moments that show why help is needed.',

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
    'event.1.text': 'At the Mortimer Englisch Club: a “well” built from old tires, decorated with Tanzanian flags, plus a well-shaped cake with Maasai figurines. A colorful afternoon with the children.',
    'event.1.where': 'Mortimer Englisch Club',
    'event.2.tag': 'Flea market',
    'event.2.date': 'May 29, 2025',
    'event.2.title': 'Night flea market',
    'event.2.text': 'A stall of homemade goods, Tanzania souvenirs and a donation box — and lots of conversations about Kisangasa.',
    'event.2.where': 'Hattingen, Rathausplatz',
    'event.3.tag': 'On-site',
    'event.3.date': 'Planned 2026',
    'event.3.title': 'Planned well construction',
    'event.3.text': 'Once the donation goal is reached, the next implementation steps will be prepared and documented transparently.',
    'event.3.where': 'Kisangasa, Tanzania',

    'build.eyebrow': 'Project plan',
    'build.title.1': 'How the well is',
    'build.title.2': 'planned.',
    'build.lede': 'Construction has not started yet. These steps are planned once funding is secured and implementation has been coordinated on site.',
    'build.status': 'Current status: fundraising is ongoing.',
    'build.step.1.label': 'Step 1',
    'build.step.1.title': 'Collect donations',
    'build.step.1.text': 'Together, we collect the funds needed for a safe, lasting well. Every contribution brings us closer to the goal.',
    'build.step.2.label': 'Step 2',
    'build.step.2.title': 'Coordinate with the village',
    'build.step.2.text': 'Once funding is in place, we speak with the people in Kisangasa and the local decision-makers — because the project is meant to serve them.',
    'build.step.3.label': 'Step 3',
    'build.step.3.title': 'Prepare the build',
    'build.step.3.text': 'Materials, skilled workers, and the schedule are planned. Only when everything is ready do we give the starting signal.',
    'build.step.4.label': 'Step 4',
    'build.step.4.title': 'Build the well',
    'build.step.4.text': 'Construction begins on site — documented with photos and updates directly from Kisangasa.',
    'build.step.5.label': 'Step 5',
    'build.step.5.title': 'Hand over to the village',
    'build.step.5.text': 'The finished well is handed over to the community. Clean water. Every day. For hundreds of people.',
    'build.quote': 'Every contribution brings us closer to the goal: clean water for Kisangasa.',
    'build.quote.sig': 'Project status',

    'updates.eyebrow': 'News',
    'updates.title.1': 'What has',
    'updates.title.2': 'happened so far.',
    'updates.lede': 'Actions, travel impressions and the next big step: reaching the donation goal.',
    'update.1.date': 'May 2025',
    'update.1.title': 'Flea market success',
    'update.1.text': 'The night flea market on May 29 brought more donations — and many new supporters.',
    'update.2.date': 'April 2025',
    'update.2.title': 'Tire well is up',
    'update.2.text': 'At Mortimer Englisch Club, the colorful tire well took shape — and the cake sold out fast.',
    'update.3.date': 'March 2025',
    'update.3.title': 'Back from Tanzania',
    'update.3.text': 'Edith is back. With pictures, stories — and a firm promise.',

    'faq.eyebrow': 'Frequent questions',
    'faq.title': 'What you should know.',
    'faq.q1': 'Has construction already started?',
    'faq.a1': 'No. Fundraising is currently ongoing. Implementation starts only after secured funding and coordination on site.',
    'faq.q2': 'Who is behind the fundraising?',
    'faq.a2': 'Edith Cielma supports the project and collects donations for the planned well construction in Kisangasa.',
    'faq.q3': 'What will the money be used for?',
    'faq.a3': 'The collected donations are intended for the planned well construction and necessary steps connected with implementation.',
    'faq.q4': 'How can I donate?',
    'faq.a4': 'Via the external donation link on 4fund.',
    'faq.q5': 'What happens when the donation goal is reached?',
    'faq.a5': 'The next implementation steps will be prepared and documented transparently on this website.',
    'faq.q6': 'What happens if more money is collected?',
    'faq.a6': 'Additional funds should also be used for the well project or necessary support on site.',
    'faq.q7': 'Is there a donation receipt?',
    'faq.a7': 'Information will be provided transparently. A binding statement will only be made once the concrete handling has been legally confirmed.',
    'faq.q8': 'How will progress be documented?',
    'faq.a8': 'Through updates on this website as soon as new verified information is available.',
    'cta.eyebrow': 'Help now',
    'cta.title.1': 'Your donation',
    'cta.title.2': 'changes lives.',
    'cta.lede': 'The collected donations are intended for the planned well construction in Kisangasa. As soon as there are verified new steps, they will be documented transparently on this website.',
    'cta.trust.1': 'Dedicated to the well project',
    'cta.trust.2': 'Donation receipt information will be provided',
    'cta.trust.3': 'Progress will be documented transparently',
    'cta.form.label': 'I donate once',
    'cta.impact.pre': 'Every donation brings the project closer to its goal.',
    'cta.submit': 'donate',
    'cta.or': 'or',

    'about.eyebrow': 'WHO STANDS BEHIND IT',
    'about.title.1': 'Edith',
    'about.title.2': '— the woman behind the project.',
    'about.p1': 'Edith is a childminder from Germany — not a large NGO, not an organization. On a trip to Tanzania, she came across Kisangasa and saw children fighting for water every day. What began as an encounter became a mission: to build a well for the village.',
    'about.p2': 'This project is private, personal, and transparent. Every donation goes directly into the implementation on site.',
    'about.tag': 'Edith Cielma',

    'transparency.eyebrow': 'Transparency',
    'transparency.title': 'What is currently confirmed.',
    'transparency.q1': 'Who is collecting?',
    'transparency.a1': 'Edith Cielma.',
    'transparency.q2': 'What is being collected for?',
    'transparency.a2': 'For a planned well construction in Kisangasa, Tanzania.',
    'transparency.q3': 'Has construction started?',
    'transparency.a3': 'No. Fundraising is currently ongoing.',
    'transparency.q4': 'How can donations be made?',
    'transparency.a4': 'Via the external platform 4fund.',
    'transparency.q5': 'How will progress be documented?',
    'transparency.a5': 'Through updates on this website as soon as new verified information is available.',
    'transparency.q6': 'Donation receipt',
    'transparency.a6': 'Information about donation receipts will be provided transparently.',

    'footer.about': 'A well for Kisangasa — clean water for a whole village. Privately supported, transparently documented.',
    'footer.pages': 'Pages',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.receipt': 'Donation receipt',
    'footer.thanks': 'Asante sana — thank you.',

    'gallery.0.label': 'Village',
    'gallery.0.cap': 'Child on the path through the village of Kisangasa',
    'gallery.1.label': 'Water',
    'gallery.1.cap': 'Child carrying a heavy water canister on the path through the village',
    'gallery.2.label': 'Close',
    'gallery.2.cap': 'Edith holding a child in her arms',
    'gallery.3.label': 'Encounter',
    'gallery.3.cap': 'Edith with children from Kisangasa',
    'gallery.4.label': 'Selfie',
    'gallery.4.cap': 'Edith taking a selfie with children from Kisangasa',
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
  document.querySelectorAll('[data-lang-de]').forEach(el => el.classList.toggle('on', currentLang === 'de'));
  document.querySelectorAll('[data-lang-en]').forEach(el => el.classList.toggle('on', currentLang === 'en'));
  const upcoming = document.querySelector('[data-i18n-upcoming]');
  if (upcoming) upcoming.textContent = t('events.upcoming');
  renderGallery();
  renderBuildSteps();
}

/* ── Gallery ── */
const GALLERY_ITEMS = [
  { src: 'images/image-10.jpg', i: 0 },
  { src: 'images/image-18.jpeg', i: 1 },
  { src: 'images/image-9.jpg', i: 2 },
  { src: 'images/image-27.jpeg', i: 3 },
  { src: 'images/image-21.jpeg', i: 4 },
];

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  GALLERY_ITEMS.forEach(({ src, i }, idx) => {
    const cap = t(`gallery.${i}.cap`);
    const label = t(`gallery.${i}.label`);
    const fig = document.createElement('figure');
    fig.className = `gallery-tile gallery-tile-${idx}`;
    fig.innerHTML = `
      <img src="${src}" alt="${cap}" class="img-fit" loading="lazy"/>
      <figcaption>
        <span class="gallery-label">${label}</span>
        <span class="gallery-cap">${cap}</span>
      </figcaption>
    `;
    grid.appendChild(fig);
  });
}

/* ── Build Steps ── */
const BUILD_STEPS = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
];

function renderBuildSteps() {
  const container = document.getElementById('build-steps');
  if (!container) return;
  container.innerHTML = '';
  BUILD_STEPS.forEach(({ key }, idx) => {
    const step = document.createElement('div');
    step.className = 'build-step';
    step.innerHTML = `
      <div class="build-step-content">
        <div class="build-step-label">${t(`build.step.${key}.label`)}</div>
        <h3 class="build-step-title">${t(`build.step.${key}.title`)}</h3>
        <p class="build-step-text muted">${t(`build.step.${key}.text`)}</p>
      </div>
    `;
    container.appendChild(step);
  });
}

/* ── FAQ ── */
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
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

/* ── Floating donate button ── */
function initFloatingDonate() {
  const btn = document.getElementById('floating-donate');
  const footer = document.getElementById('kontakt');
  if (!btn) return;

  const update = () => {
    const pastHero = window.scrollY > 600;
    const footerVisible = footer && footer.getBoundingClientRect().top < window.innerHeight + 24;
    btn.classList.toggle('show', pastHero && !footerVisible);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFAQ();
  renderGallery();
  renderBuildSteps();
  applyI18n();
  initLangToggle();
  initDonateForm();
  initProgressBar();
  initFloatingDonate();
});
