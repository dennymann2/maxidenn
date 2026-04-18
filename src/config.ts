// ============================================
// SITE CONFIGURATION – maxidenn
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'maxidenn',
    title: 'maxidenn – Websites für lokale Betriebe',
    description:
      'Professionelle Websites für lokale Unternehmen. Schnell, klar und ohne Baukasten-Look. Mehr Vertrauen, mehr Anfragen.',
    keywords:
      'Webdesign lokale Unternehmen, Website Gastronomie, Website Shishabar, Website Eisdiele, lokale Auffindbarkeit, Webdesign',
    email: 'hallo@maxidenn.de', // TODO: replace with real email
    phone: '+49 151 00000000', // TODO: replace with real phone
    phoneHref: 'tel:+4915100000000', // TODO: replace with real phone
    whatsapp: 'https://wa.me/4915100000000', // TODO: replace with real WhatsApp link
    location: 'Deutschland',
    googleBusinessUrl: '#', // TODO: replace with real Google Business Profile URL

    ogTitle: 'maxidenn – Websites für lokale Betriebe',
    ogDescription:
      'Professionelle Websites, die Vertrauen aufbauen und Anfragen bringen.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'maxidenn – Webdesign für lokale Betriebe',
    twitterDescription:
      'Schnell, klar und ohne Baukasten-Look. Mehr Vertrauen, mehr Anfragen.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Leistungen', href: '#features' },
      { name: 'Referenzen', href: '#testimonials' },
      { name: 'Pakete', href: '#pricing' },
      { name: 'Kontakt', href: '#contact' },
    ],
    cta: {
      text: 'Kostenloses Erstgespräch',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Websites für lokale Betriebe,',
    subheadline: 'die Vertrauen aufbauen und Anfragen bringen.',
    description:
      'Wir gestalten und entwickeln moderne Websites für lokale Betriebe – damit Kunden Sie schneller verstehen, eher vertrauen und einfacher Kontakt aufnehmen.',
    cta: {
      primary: {
        text: 'Kostenloses Erstgespräch vereinbaren',
        href: '#contact',
      },
      secondary: {
        text: 'Kurz anrufen',
        href: 'tel:+4915100000000', // TODO: replace with real phone
      },
    },
    badges: [
      'Persönlicher Ansprechpartner',
      'Sauber entwickelt, kein Baukasten',
      'Auf lokale Auffindbarkeit ausgelegt',
    ],
  },

  // ============================================
  // TRUST BAR
  // ============================================
  trustBar: {
    googleRating: '5,0',
    googleReviewCount: '12', // TODO: update with real count
    googleUrl: '#', // TODO: replace with real Google Business Profile URL
    replyTime: 'Antwortet meist innerhalb von 24 Stunden',
    industries: [
      'Gastronomie',
      'Shishalounge',
      'Eisdiele',
      'Dienstleister',
      'Handwerk',
    ],
  },

  // ============================================
  // PROBLEMS SECTION
  // ============================================
  problems: {
    title: 'Kommt Ihnen das bekannt vor?',
    subtitle:
      'Viele lokale Betriebe verlieren Kunden, bevor überhaupt ein Gespräch entsteht.',
    items: [
      {
        problem: 'Ihre Website wirkt alt oder unübersichtlich.',
        consequence:
          'Besucher verlassen die Seite in Sekunden – ohne Kontakt aufzunehmen.',
      },
      {
        problem: 'Auf dem Smartphone sieht man nicht sofort, worum es geht.',
        consequence:
          'Die meisten Kunden suchen vom Handy. Wer nicht sofort versteht, springt ab.',
      },
      {
        problem: 'Kunden finden Sie zwar, melden sich aber nicht.',
        consequence: 'Kein klarer Weg zum Kontakt bedeutet: kein Kontakt.',
      },
    ],
  },

  // ============================================
  // FEATURES / SOLUTIONS SECTION
  // ============================================
  features: {
    title: 'Was Ihre neue Website leisten soll',
    subtitle:
      'Kein Technik-Spielzeug. Nur das, was Ihrem Betrieb wirklich nützt.',
    items: [
      { icon: 'shield', title: 'Mehr Vertrauen auf den ersten Blick' },
      { icon: 'mobile', title: 'Besser auf dem Smartphone' },
      { icon: 'phone', title: 'Klare Wege zu Anruf oder Nachricht' },
      { icon: 'zap', title: 'Technisch sauber und schnell' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'So läuft es ab',
    subtitle: 'Drei Schritte – klar, persönlich, ohne Überraschungen.',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Was unsere Kunden sagen',
    subtitle: 'Echte Betriebe. Echte Ergebnisse.',
    googleUrl: '#', // TODO: replace with real Google Business Profile URL
    googleLabel: 'Alle Bewertungen auf Google ansehen',
  },

  // ============================================
  // PAKETE (ehem. Pricing)
  // ============================================
  pricing: {
    title: 'Unsere Pakete',
    subtitle:
      'Transparent, ohne versteckte Kosten. Sie wissen von Anfang an, was Sie bekommen.',
    plans: [
      {
        name: 'Starter-Website',
        price: 'ab 990 €',
        period: 'einmalig',
        description: 'Ideal für den ersten professionellen Auftritt im Netz.',
        features: [
          'Eine übersichtliche Seite',
          'Optimiert für Smartphones',
          'Kontaktformular & Telefon-Link',
          'Lokale SEO-Grundlagen',
          'Impressum & Datenschutz',
        ],
        cta: {
          text: 'Erstgespräch vereinbaren',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Business-Website',
        price: 'ab 1.890 €',
        period: 'einmalig',
        description:
          'Für Betriebe, die professionell auftreten und mehr Anfragen wollen.',
        badge: 'EMPFOHLEN',
        features: [
          'Bis zu 5 Seiten',
          'Schnelle Ladezeiten (kein Baukasten)',
          'Lokale Auffindbarkeit (Google)',
          'Google Business-Einrichtung',
          'Professionelle Texte & Struktur',
          'Direkter Kontakt zu Anruf & Nachricht',
        ],
        cta: {
          text: 'Erstgespräch vereinbaren',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Rundum-sorglos',
        price: 'Auf Anfrage',
        period: '',
        description:
          'Business-Website plus laufende Pflege und persönliche Betreuung.',
        features: [
          'Alles aus Business-Website',
          'Laufende Updates & Pflege',
          'Inhaltliche Aktualisierungen',
          'Technische Betreuung inklusive',
          'Direkter Ansprechpartner',
          'Priorität bei Änderungswünschen',
        ],
        cta: {
          text: 'Anfrage stellen',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Klar und ehrlich beantwortet – so wie wir auch arbeiten.',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Lassen Sie uns kurz besprechen, was Ihre Website leisten soll.',
    subtitle:
      'Kostenloses Erstgespräch, kein Verkaufsdruck. Einfach erzählen, was Ihr Betrieb braucht.',
    phone: '+49 151 00000000', // TODO: replace with real phone
    phoneHref: 'tel:+4915100000000', // TODO: replace with real phone
    whatsapp: 'https://wa.me/4915100000000', // TODO: replace with real WhatsApp link
    email: 'hallo@maxidenn.de', // TODO: replace with real email
    replyTime: 'Antwortet meist innerhalb von 24 Stunden',
    benefits: [
      'Ehrliche Einschätzung, was wirklich sinnvoll ist',
      'Kein Verkaufsdruck',
      'Unkomplizierter Erstkontakt',
      'Schnelle Rückmeldung',
    ],
    form: {
      cta: 'Nachricht senden',
      fields: {
        name: {
          label: 'Ihr Name',
          placeholder: 'Max Mustermann',
          required: true,
        },
        contact: {
          label: 'Telefon oder E-Mail',
          placeholder: '+49 151 … oder max@beispiel.de',
          required: true,
        },
        message: {
          label: 'Kurze Nachricht',
          placeholder:
            'Erzählen Sie kurz, was Ihr Betrieb macht und was Sie sich wünschen …',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: 'Persönliche Webentwicklung für lokale Betriebe.',
    location: 'Deutschland',
    columns: [
      {
        title: 'Navigation',
        links: [
          { name: 'Leistungen', href: '#features' },
          { name: 'Referenzen', href: '#testimonials' },
          { name: 'Pakete', href: '#pricing' },
          { name: 'FAQ', href: '#faq' },
          { name: 'Kontakt', href: '#contact' },
        ],
      },
      {
        title: 'Rechtliches',
        links: [
          { name: 'Impressum', href: '/impressum' },
          { name: 'Datenschutz', href: '/datenschutz' },
        ],
      },
    ],
    social: [
      { name: 'Instagram', href: '#', icon: 'instagram' }, // TODO: replace with real URL
      { name: 'LinkedIn', href: '#', icon: 'linkedin' }, // TODO: replace with real URL
    ],
    copyright: `${new Date().getFullYear()} maxidenn. Alle Rechte vorbehalten.`,
  },
};
