/* ─────────────────────────────────────────────
   BRUNNEN FÜR TANSANIA — script.js (Vanilla JS)
   - i18n (DE/EN), Sprachumschalter
   - Spendenformular
   - FAQ-Akkordeon
   - Projektplan-Timeline
   - Spendenbalken-Animation
   ───────────────────────────────────────────── */

/* ── i18n ── */
const I18N = {
  de: {
    'nav.story': 'Geschichte',
    'nav.gallery': 'Für wen wir sammeln',
    'nav.help': 'Für wen wir sammeln',
    'nav.help.href': '/fuer-wen-wir-sammeln/',
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
    'hero.cta.donate': 'Spenden',
    'hero.cta.story': 'Projekt verstehen',
    'hero.tagline': 'Jeder Tropfen zählt.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'gesammelt',
    'hero.percent': 'erreicht',
    'hero.goal': 'Spendenziel',
    'hero.remaining_pre': 'Noch',
    'hero.remaining_post': 'bis zum ersten Brunnen',
    'hero.updated': 'Stand: 15.05.2026',
    'floating.donate': 'Spenden',

    'story.eyebrow': 'Die Geschichte',
    'story.title.1': 'Wir können vielleicht nicht die ganze Welt verändern',
    'story.title.2': '— aber die Welt für ein Dorf.',
    'story.p1': 'Die Massai sind ein besonderes Volk in Tansania und Kenia. Sie leben einfach — aber mit einer Würde, Stärke und Wärme, die einen sofort berührt.',
    'story.p2': 'Wer ihnen begegnet, vergisst es nicht. Sie haben wenig Besitz, aber unendlich viel Herz. Ihr Leben ist eng mit der Natur verbunden. Kühe sind für sie alles: Nahrung, Sicherheit, Zukunft.',
    'story.p3': 'Doch es gibt eine Sache, die selbst die stärkste Gemeinschaft nicht aus eigener Kraft lösen kann — sauberes Wasser. In Kisangasa laufen Kinder jeden Tag stundenlang, um Wasser zu holen. Wasser, das oft nicht einmal sauber ist. Wasser, das krank macht statt zu helfen.',
    'story.p4': 'Ich war dort. Ich habe gesehen, wie Kinder für etwas kämpfen, das für uns selbstverständlich ist. Und ich konnte nicht einfach wieder gehen, ohne etwas zu tun.',
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

    'help.meta.title': 'Für wen wir sammeln – Brunnen für Tansania',
    'help.hero.eyebrow': 'DIE MENSCHEN VON KISANGASA',
    'help.hero.title.1': 'Für',
    'help.hero.title.2': 'sie',
    'help.hero.title.3': 'sammeln wir.',
    'help.hero.intro': 'Hinter jedem Brunnen stehen Menschen. Hier sind einige von ihnen — die Kinder, Mütter und Familien aus Kisangasa, für die sauberes Wasser den Alltag verändern wird.',
    'help.people.eyebrow': 'Die Menschen',
    'help.people.title': 'Die Menschen',
    'help.person.1.name': 'John',
    'help.person.1.age': '2 Jahre',
    'help.person.1.text': 'John ist noch klein — gerade zwei Jahre alt. Er entdeckt jeden Tag die Welt um sich herum, lacht viel und liebt es, von seiner Mutter herumgetragen zu werden. Damit er gesund aufwachsen kann, braucht er etwas, das jedes Kind braucht: sauberes Wasser von Anfang an.',
    'help.person.1.alt': 'John, 2 Jahre, aus Kisangasa',
    'help.person.2.name': 'Melody',
    'help.person.2.age': '6 Jahre',
    'help.person.2.text': 'Melody ist die Kleine mit dem großen Lachen. Sie versteht noch nicht ganz, warum manche Tage das Wasser krank macht. Ein Brunnen würde ihr etwas geben, das selbstverständlich sein sollte: einen gesunden Start ins Leben.',
    'help.person.2.alt': 'Melody, 6 Jahre, aus Kisangasa',
    'help.person.3.name': 'Amani',
    'help.person.3.age': '7 Jahre',
    'help.person.3.text': 'Amani ist die Älteste in ihrer Geschwisterreihe und übernimmt früh Verantwortung. Den langen Weg zum Wasserloch geht sie täglich — oft zweimal. Mit einem Brunnen im Dorf bekommt sie ein Stück Kindheit zurück.',
    'help.person.3.alt': 'Amani, 7 Jahre, aus Kisangasa',
    'help.person.4.name': 'Neema',
    'help.person.4.age': '5 Jahre',
    'help.person.4.text': 'Neema bringt ihre eigene kleine Tasse überall mit hin. Sauberes Wasser ist für sie kein Selbstverständnis — es ist ein Wunsch. Einer, den wir gemeinsam erfüllen können.',
    'help.person.4.alt': 'Neema, 5 Jahre, aus Kisangasa',
    'help.person.5.name': 'Baraka',
    'help.person.5.age': '2 Jahre',
    'help.person.5.text': 'Baraka ist neugierig, mutig und immer als Erster da, wenn etwas Neues passiert. Er träumt davon, später einmal aus seinem Dorf zu erzählen — und dass die Kinder dort gesund aufwachsen können.',
    'help.person.5.alt': 'Baraka, 2 Jahre, aus Kisangasa',
    'help.person.7.name': 'Joseph',
    'help.person.7.age': '3 Jahre',
    'help.person.7.text': 'Joseph ist ruhig, beobachtend, und passt auf seine kleinen Geschwister auf. Er weiß genau, wie weit der Weg zum Wasser ist — er geht ihn jeden Tag. Ein Brunnen würde seinen Alltag von Grund auf verändern.',
    'help.person.7.alt': 'Joseph, 3 Jahre, aus Kisangasa',
    'help.daily.eyebrow': 'Der Alltag in Kisangasa',
    'help.daily.title': 'Der Alltag in Kisangasa',
    'help.daily.1.label': 'Wie Wasser hier transportiert wird',
    'help.daily.1.text': 'Kanister, Eimer, oft auf dem Kopf oder Rücken — manchmal über mehrere Kilometer. Was wir mit einem Knopfdruck am Wasserhahn bekommen, ist hier harte tägliche Arbeit. Vor allem für Frauen und Kinder.',
    'help.daily.1.alt': 'Wassertransport mit Kanistern in Kisangasa',
    'help.daily.2.label': 'Hier soll der Brunnen entstehen',
    'help.daily.2.text': 'Dieser Ort in Kisangasa ist als Standort für den Brunnen vorgesehen — zentral im Dorf, erreichbar für alle Familien. Sobald die Finanzierung steht und die Abstimmung vor Ort erfolgt ist, beginnt hier der Bau.',
    'help.daily.2.alt': 'Geplanter Brunnenstandort in Kisangasa',
    'help.press.eyebrow': 'PRESSE',
    'help.press.title': 'Das Projekt in den Medien.',
    'help.press.source': 'RuhrkanalNews',
    'help.press.date': '1. März 2026',
    'help.press.headline': '„Hattingerin Edith Cielma sammelt Spenden für Trinkwasserbrunnen in Tansania"',
    'help.press.teaser': 'Die lokale Presse hat über das Projekt berichtet — ein wichtiger Schritt, um noch mehr Menschen für Kisangasa zu gewinnen. Hans Georg Höffken porträtiert auf RuhrkanalNews, wie aus einer Reise nach Tansania die private Hilfsinitiative wurde.',
    'help.press.cta': 'Ganzen Artikel lesen',
    'help.cta.title': 'Du kannst ihren Alltag verändern.',
    'help.cta.text': 'Jede Spende bringt Kisangasa einen Schritt näher zu sauberem Wasser — und den Menschen hier ein Stück Würde, Gesundheit und Zukunft.',
    'help.cta.button': 'Spenden',
    'help.cta.note': 'Gespendet wird über <a href="https://4fund.com/de/yhn7nt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARkhwRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadxLTn0RMiM_cF4spRfqvKI5ZluJ6rOpw2im27KDv0Z7N9_gJL4AGkHdq9Aow_aem_ghL43DMcSc4AULmgLW4beg" target="_blank" rel="noopener noreferrer">4fund.com</a>',

    'events.eyebrow': 'Aktionen & Events',
    'events.title.1': 'So sammeln wir',
    'events.title.2': '— gemeinsam.',
    'events.lede': 'Kleine Aktionen, große Wirkung. Jede einzelne bringt uns dem Ziel näher.',
    'events.idea': 'Du hast eine Idee für eine Aktion?',
    'events.contact': 'Schreib uns →',
    'events.upcoming': 'Geplant',
    'event.1.tag': 'Spendenaktion',
    'event.1.date': '11. April 2025',
    'event.1.title': 'Reifen-Brunnen & Tortenverkauf',
    'event.1.text': 'Ein selbstgebauter „Brunnen“ aus alten Reifen, geschmückt mit Tansania-Flaggen — und ein Stand mit selbstgebackenem Kuchen. Ein Nachmittag voller Begegnungen, Gespräche über Kisangasa und große Hilfsbereitschaft. 720 € kamen an diesem Tag für das Projekt zusammen.',
    'event.1.where': 'Mortimer Englisch Club, Hattingen',
    'event.2.tag': 'Geplant',
    'event.2.date': '29. Mai 2026',
    'event.2.title': 'Nachttrödel — Stand mieten & helfen',
    'event.2.text': 'Am 29. Mai 2026 findet der Nachttrödelmarkt am Rathausplatz in Hattingen statt — und du kannst dabei sein. Für 30 € kannst du dir einen eigenen Stand mieten. Die Standgebühr fließt zu 100 % direkt an die Kinder in Kisangasa. Verkauf, was du nicht mehr brauchst — und hilf dabei, einen Brunnen zu bauen.',
    'event.2.where': 'Rathausplatz Hattingen',
    'event.2.poster': 'Symbolbild',
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
    'updates.lede': 'Presse, Aktionen, Reiseeindrücke und der nächste große Schritt: das Erreichen des Spendenziels.',
    'update.1.date': '29. Mai 2026',
    'update.1.title': 'Nachttrödel steht an',
    'update.1.text': 'Am 29. Mai findet der Nachttrödel am Rathausplatz in Hattingen statt. Wer mit einem eigenen Stand dabei sein möchte, unterstützt mit der Standgebühr direkt das Brunnenprojekt.',
    'update.4.date': 'Anfang 2026',
    'update.4.title': 'Beitrag in der WAZ',
    'update.4.text': 'Anfang des Jahres berichtete die WAZ über das Brunnenprojekt und machte die Spendenaktion in der Region bekannter.',
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
    'faq.q7': 'Wie wird der Fortschritt dokumentiert?',
    'faq.a7': 'Über Updates auf dieser Website, sobald neue gesicherte Informationen vorliegen.',
    'cta.eyebrow': 'Jetzt mithelfen',
    'cta.title.1': 'Deine Spende',
    'cta.title.2': 'verändert Leben.',
    'cta.lede': 'Die gesammelten Spenden sind zweckgebunden für den geplanten Brunnenbau in Kisangasa vorgesehen. Sobald es gesicherte neue Schritte gibt, werden sie auf dieser Seite transparent dokumentiert.',
    'cta.trust.1': 'Zweckgebunden für das Brunnenprojekt',
    'cta.trust.2': 'Extern über die Spendenplattform',
    'cta.trust.3': 'Fortschritt wird transparent dokumentiert',
    'cta.form.label': 'Ich spende einmalig',
    'cta.impact.pre': 'Jede Spende bringt das Projekt dem Ziel näher.',
    'cta.submit': 'Spenden',
    'cta.or': 'oder',
    'cta.note': 'Gespendet wird über <a href="https://4fund.com/de/yhn7nt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARkhwRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadxLTn0RMiM_cF4spRfqvKI5ZluJ6rOpw2im27KDv0Z7N9_gJL4AGkHdq9Aow_aem_ghL43DMcSc4AULmgLW4beg" target="_blank" rel="noopener noreferrer">4fund.com</a>',

    'about.eyebrow': 'WER DAHINTER STEHT',
    'about.title.1': 'Edith',
    'about.title.2': '— die Frau hinter dem Projekt.',
    'about.p1': 'Edith ist Tagesmutter aus Deutschland — keine große NGO, keine Organisation. Auf einer Reise nach Tansania ist sie auf Kisangasa gestoßen und hat dort gesehen, wie Kinder täglich für Wasser kämpfen. Was als Begegnung begann, wurde zu einer Mission: einen Brunnen für das Dorf zu bauen.',
    'about.p2': 'Dieses Projekt ist privat, persönlich und transparent. Jede Spende geht direkt in die Umsetzung vor Ort.',
    'about.tag': 'Edith Cielma',

    'transparency.eyebrow': 'Versprechen',
    'transparency.title.1': 'Klar. Ehrlich.',
    'transparency.title.2': 'Direkt.',
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

    'footer.about': 'Ein Brunnen für Kisangasa — sauberes Wasser für ein ganzes Dorf. Privat unterstützt, transparent dokumentiert.',
    'footer.pages': 'Seiten',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.thanks': 'Asante sana — Vielen Dank.',

  },

  en: {
    'nav.story': 'Story',
    'nav.gallery': 'Who we help',
    'nav.help': 'Who we help',
    'nav.help.href': '/who-we-help/',
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
    'hero.cta.donate': 'Donate',
    'hero.cta.story': 'Understand the project',
    'hero.tagline': 'Every drop matters.',
    'hero.caption': 'Kisangasa, 2025',
    'hero.raised': 'raised',
    'hero.percent': 'reached',
    'hero.goal': 'goal',
    'hero.remaining_pre': 'Still',
    'hero.remaining_post': 'to the first well',
    'hero.updated': 'As of: May 15, 2026',
    'floating.donate': 'Donate',

    'story.eyebrow': 'The story',
    'story.title.1': 'We may not be able to change the whole world',
    'story.title.2': '— but the world for one village.',
    'story.p1': 'The Maasai are a remarkable people in Tanzania and Kenya. They live simply — but with a dignity, strength and warmth that touches you immediately.',
    'story.p2': 'Anyone who meets them does not forget them. They have few possessions, but endless heart. Their lives are closely connected to nature. Cattle mean everything to them: food, security, future.',
    'story.p3': 'But there is one thing even the strongest community cannot solve on its own — clean water. In Kisangasa, children walk for hours every day to fetch water. Water that is often not even clean. Water that makes people sick instead of helping them.',
    'story.p4': 'I was there. I saw children fighting for something we take for granted. And I could not simply leave again without doing something.',
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

    'help.meta.title': 'Who we help – Wells for Tanzania',
    'help.hero.eyebrow': 'THE PEOPLE OF KISANGASA',
    'help.hero.title.1': 'We collect',
    'help.hero.title.2': 'for them',
    'help.hero.title.3': '.',
    'help.hero.intro': 'Behind every well are people. Here are some of them — the children, mothers and families from Kisangasa whose everyday lives will be changed by clean water.',
    'help.people.eyebrow': 'The people',
    'help.people.title': 'The people',
    'help.person.1.name': 'John',
    'help.person.1.age': '2 years old',
    'help.person.1.text': 'John is still small — just two years old. Every day he discovers the world around him, laughs a lot and loves being carried by his mother. To grow up healthy, he needs something every child needs: clean water from the very beginning.',
    'help.person.1.alt': 'John, 2 years old, from Kisangasa',
    'help.person.2.name': 'Melody',
    'help.person.2.age': '6 years old',
    'help.person.2.text': 'Melody is the little one with the big laugh. She does not fully understand why water makes some days unsafe. A well would give her something that should be normal: a healthy start in life.',
    'help.person.2.alt': 'Melody, 6 years old, from Kisangasa',
    'help.person.3.name': 'Amani',
    'help.person.3.age': '7 years old',
    'help.person.3.text': 'Amani is the oldest among her siblings and takes on responsibility early. She walks the long way to the water hole every day — often twice. With a well in the village, she would get a piece of childhood back.',
    'help.person.3.alt': 'Amani, 7 years old, from Kisangasa',
    'help.person.4.name': 'Neema',
    'help.person.4.age': '5 years old',
    'help.person.4.text': 'Neema brings her own small cup everywhere she goes. Clean water is not something she can take for granted — it is a wish. One we can help fulfill together.',
    'help.person.4.alt': 'Neema, 5 years old, from Kisangasa',
    'help.person.5.name': 'Baraka',
    'help.person.5.age': '2 years old',
    'help.person.5.text': 'Baraka is curious, brave and always the first to show up when something new happens. He dreams of one day telling stories from his village — and of the children there growing up healthy.',
    'help.person.5.alt': 'Baraka, 2 years old, from Kisangasa',
    'help.person.7.name': 'Joseph',
    'help.person.7.age': '3 years old',
    'help.person.7.text': 'Joseph is quiet, observant and looks after his younger siblings. He knows exactly how far the way to the water is — he walks it every day. A well would change his everyday life from the ground up.',
    'help.person.7.alt': 'Joseph, 3 years old, from Kisangasa',
    'help.daily.eyebrow': 'Everyday life in Kisangasa',
    'help.daily.title': 'Everyday life in Kisangasa',
    'help.daily.1.label': 'How water is transported here',
    'help.daily.1.text': 'Canisters and buckets, often carried on the head or back — sometimes over several kilometers. What we get by turning on a tap is hard daily work here, especially for women and children.',
    'help.daily.1.alt': 'Water being transported in canisters in Kisangasa',
    'help.daily.2.label': 'Where the well is planned',
    'help.daily.2.text': 'This place in Kisangasa is planned as the location for the well — central in the village and reachable for all families. Once funding is secured and local coordination is complete, construction will begin here.',
    'help.daily.2.alt': 'Planned well location in Kisangasa',
    'help.press.eyebrow': 'PRESS',
    'help.press.title': 'The project in the media.',
    'help.press.source': 'RuhrkanalNews',
    'help.press.date': 'March 1, 2026',
    'help.press.headline': '"Hattingen resident Edith Cielma collects donations for a drinking water well in Tanzania"',
    'help.press.teaser': 'The local press reported on the project — an important step toward reaching more people for Kisangasa. On RuhrkanalNews, Hans Georg Höffken describes how a trip to Tanzania became this private aid initiative.',
    'help.press.cta': 'Read the full article',
    'help.cta.title': 'You can change their everyday life.',
    'help.cta.text': 'Every donation brings Kisangasa one step closer to clean water — and gives the people here a measure of dignity, health and future.',
    'help.cta.button': 'Donate',
    'help.cta.note': 'All donations are handled via <a href="https://4fund.com/de/yhn7nt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARkhwRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadxLTn0RMiM_cF4spRfqvKI5ZluJ6rOpw2im27KDv0Z7N9_gJL4AGkHdq9Aow_aem_ghL43DMcSc4AULmgLW4beg" target="_blank" rel="noopener noreferrer">4fund.com</a>',

    'events.eyebrow': 'Events & actions',
    'events.title.1': 'How we raise',
    'events.title.2': '— together.',
    'events.lede': 'Small actions, real impact. Each one brings us closer.',
    'events.idea': 'Got an idea for an action?',
    'events.contact': 'Get in touch →',
    'events.upcoming': 'Planned',
    'event.1.tag': 'Fundraiser',
    'event.1.date': 'April 11, 2025',
    'event.1.title': 'Tire well & cake sale',
    'event.1.text': 'A handmade “well” built from old tires, decorated with Tanzanian flags — and a stand with homemade cake. An afternoon full of encounters, conversations about Kisangasa and generous support. 720 € were raised for the project that day.',
    'event.1.where': 'Mortimer Englisch Club, Hattingen',
    'event.2.tag': 'Planned',
    'event.2.date': 'May 29, 2026',
    'event.2.title': 'Night flea market — rent a stand & help',
    'event.2.text': 'On May 29, 2026, the night flea market will take place at Rathausplatz in Hattingen — and you can be part of it. For 30 €, you can rent your own stand. The stand fee goes 100% directly to the children in Kisangasa. Sell what you no longer need — and help build a well.',
    'event.2.where': 'Rathausplatz Hattingen',
    'event.2.poster': 'Reference image',
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
    'updates.lede': 'Press coverage, actions, travel impressions and the next big step: reaching the donation goal.',
    'update.1.date': 'May 29, 2026',
    'update.1.title': 'Night flea market is coming up',
    'update.1.text': 'On May 29, the night flea market will take place at Rathausplatz in Hattingen. Anyone joining with their own stand supports the well project directly through the stand fee.',
    'update.4.date': 'Early 2026',
    'update.4.title': 'Article in the WAZ',
    'update.4.text': 'At the beginning of the year, the WAZ reported on the well project and helped make the fundraiser better known in the region.',
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
    'faq.q7': 'How will progress be documented?',
    'faq.a7': 'Through updates on this website as soon as new verified information is available.',
    'cta.eyebrow': 'Help now',
    'cta.title.1': 'Your donation',
    'cta.title.2': 'changes lives.',
    'cta.lede': 'The collected donations are intended for the planned well construction in Kisangasa. As soon as there are verified new steps, they will be documented transparently on this website.',
    'cta.trust.1': 'Dedicated to the well project',
    'cta.trust.2': 'Handled externally via the donation platform',
    'cta.trust.3': 'Progress will be documented transparently',
    'cta.form.label': 'I donate once',
    'cta.impact.pre': 'Every donation brings the project closer to its goal.',
    'cta.submit': 'Donate',
    'cta.or': 'or',
    'cta.note': 'All donations are handled via <a href="https://4fund.com/de/yhn7nt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARkhwRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadxLTn0RMiM_cF4spRfqvKI5ZluJ6rOpw2im27KDv0Z7N9_gJL4AGkHdq9Aow_aem_ghL43DMcSc4AULmgLW4beg" target="_blank" rel="noopener noreferrer">4fund.com</a>',

    'about.eyebrow': 'WHO STANDS BEHIND IT',
    'about.title.1': 'Edith',
    'about.title.2': '— the woman behind the project.',
    'about.p1': 'Edith is a childminder from Germany — not a large NGO, not an organization. On a trip to Tanzania, she came across Kisangasa and saw children fighting for water every day. What began as an encounter became a mission: to build a well for the village.',
    'about.p2': 'This project is private, personal, and transparent. Every donation goes directly into the implementation on site.',
    'about.tag': 'Edith Cielma',

    'transparency.eyebrow': 'Promise',
    'transparency.title.1': 'Clear. Honest.',
    'transparency.title.2': 'Direct.',
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

    'footer.about': 'A well for Kisangasa — clean water for a whole village. Privately supported, transparently documented.',
    'footer.pages': 'Pages',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.thanks': 'Asante sana — thank you.',

  }
};

/* ── State ── */
let currentLang = window.location.pathname.includes('who-we-help') ? 'en' : 'de';

/* ── i18n apply ── */
function t(key) {
  return I18N[currentLang]?.[key] ?? key;
}

function sitePath(route) {
  if (/^(https?:|mailto:|#)/.test(route)) return route;
  return route.startsWith('/') ? route : `/${route}`;
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  const title = document.querySelector('title[data-i18n]');
  if (title) document.title = t(title.getAttribute('data-i18n'));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    el.setAttribute('href', sitePath(t(key)));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    el.setAttribute('alt', t(key));
  });
  document.querySelectorAll('[data-i18n-lightbox-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-lightbox-alt');
    el.dataset.lightboxAlt = t(key);
  });
  document.querySelectorAll('[data-lang-de]').forEach(el => el.classList.toggle('on', currentLang === 'de'));
  document.querySelectorAll('[data-lang-en]').forEach(el => el.classList.toggle('on', currentLang === 'en'));
  const upcoming = document.querySelector('[data-i18n-upcoming]');
  if (upcoming) upcoming.textContent = t('events.upcoming');
  renderBuildSteps();
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
  for (let i = 1; i <= 7; i++) {
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
  const raised = 10830;
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
    if (document.body.dataset.routeGroup === 'help') {
      window.location.href = currentLang === 'de' ? '/who-we-help/' : '/fuer-wen-wir-sammeln/';
      return;
    }
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

/* ── Image lightbox ── */
function initImageLightbox() {
  const triggers = document.querySelectorAll('[data-lightbox-src]');
  if (!triggers.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="image-lightbox-inner">
      <button class="image-lightbox-close" type="button" aria-label="Bild schließen">×</button>
      <img src="" alt=""/>
    </div>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.image-lightbox-close');
  let lastTrigger = null;

  const close = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastTrigger = trigger;
      img.src = trigger.dataset.lightboxSrc;
      img.alt = trigger.dataset.lightboxAlt || '';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => lightbox.classList.add('open'));
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
}

/* ── Mobile Burger Navigation ── */
function initMobileNav() {
  const burger = document.getElementById('nav-burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;

  const close = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menü öffnen');
    links.classList.remove('open');
    document.body.classList.remove('nav-open');
  };
  const open = () => {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Menü schließen');
    links.classList.add('open');
    document.body.classList.add('nav-open');
  };
  const toggle = () => {
    if (links.classList.contains('open')) close();
    else open();
  };

  burger.addEventListener('click', toggle);

  // Schließen, wenn ein Link angeklickt wird
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 860px)').matches) close();
    });
  });

  // Schließen beim Klick auf den Backdrop (außerhalb des Drawers)
  document.addEventListener('click', (e) => {
    if (!links.classList.contains('open')) return;
    if (links.contains(e.target) || burger.contains(e.target)) return;
    close();
  });

  // Schließen mit Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) close();
  });

  // Bei Resize zurück auf Desktop: aufräumen
  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 860px)').matches) close();
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) window.scrollTo(0, 0);
  renderFAQ();
  renderBuildSteps();
  applyI18n();
  initLangToggle();
  initDonateForm();
  initProgressBar();
  initFloatingDonate();
  initImageLightbox();
  initMobileNav();
});
