import languages from '../submodules/base/eleventy/config/languages.js'
import site from '../config/site.js'

const sharedStrings = {
  ctaAction: 'Chiama ora',
  pagination: {
    prev: languages.it?.pagination?.prev,
    next: languages.it?.pagination?.next
  }
}

const scrapAvc = (await import(`${process.cwd()}/src/config/properties.js`)).default

export default {
  meta: {
    charset: site.charset,
    url: site.url,
    productionUrl: site.productionUrl,
    title: site.title,
    description: site.description
  },
  navigation: {
    aria: {},
    items: [
      { label: 'Inizio', href: 'hero' },
      { label: 'Immobili', href: 'properties' },
      { label: 'Chi Siamo', href: 'about' },
      { label: 'Servizi', href: 'services' },
      { label: 'Contatti', href: 'contact' }
    ]
  },
  hero: {
    subtitle: site.subtitle,
    action: {
      label: sharedStrings.ctaAction,
      href: site.phone.land
    }
  },
  about: {
    title: 'Affidati a noi per trovare la casa perfetta per te!',
    copy: 'Abbiamo più di 25 anni di esperienza nel settore della compravendita immobiliare, residenziale e commerciale.',
    highlights: [
      { title: 'Mission', copy: 'Integrità, professionalità e trasparenza sono i nostri valori. Ci aggiorniamo di continuo e accogliamo il cliente come in famiglia.', icon: 'home' },
      { title: 'Location', copy: 'Siamo operativi nell’area compresa tra Bergamo e Brescia, basso lago d’Iseo, Franciacorta e Valcalepio.', icon: 'globe' },
      { title: 'Team', copy: 'L’attività è guidata da Sergio Manenti, agente immobiliare Fiaip dal 1997, con una equipe esterna per un servizio completo.', icon: 'person_pin' }
    ],
    cards: ['Lago d’Iseo', 'Sarnico e Valcalepio', 'Franciacorta'],
    counters: [
      { label: 'anni di esperienza', value: 25 },
      { label: 'esclusive su nuove costruzioni', value: 55 },
      { label: 'proprietà vendute', value: 1500 },
      { label: 'acquisizioni di mandati', value: 2500 }
    ]
  },
  properties: {
    title: 'Immobili in Vendita',
    body: await scrapAvc(),
    action: 'Dettagli',
    messages: {
      error: 'Non è stato possibile caricare gli annunci, riprova più tardi.'
    },
    more: {
      label: 'Vedi Tutti',
      link: site.network.website.link
    },
    bed: ['camera', 'camere'],
    bath: ['bagno', 'bagni'],
    pagination: {
      prev: sharedStrings.pagination.prev,
      next: sharedStrings.pagination.next
    },
    aria: {
      label: 'Navigazione Carosello'
    }
  },
  services: {
    title: 'I nostri servizi',
    pagination: {
      prev: sharedStrings.pagination.prev,
      next: sharedStrings.pagination.next
    },
    items: [
      {
        title: 'Valutazioni gratuite',
        subtitle: 'Vuoi vendere il tuo immobile?',
        copy: 'Grazie al sistema “Agent-pricing”, sempre aggiornato ai valori di mercato, ti offriamo gratuitamente il documento di stima del tuo immobile.'
      },
      {
        title: 'Intermediazione immobiliare',
        subtitle: 'Affida a noi il lavoro e rilassati!',
        copy: 'Siamo al tuo fianco nella ricerca dei cliente ideale, con l’obiettivo di creare un sereno clima di trattativa e ottenere un proficuo accordo venditore-acquirente.'
      },
      {
        title: 'Documenti',
        subtitle: 'Troppe carte da presentare?',
        copy: 'Nostro compito è assisterti dalla stipula del contratto Preliminare all’Atto Notarile, con accesso agli Atti e ricerca di tutta la documentazione necessaria.'
      },
      {
        title: 'Marketing digitale',
        subtitle: 'Vuoi il tuo annuncio sul web?',
        copy: 'Valorizziamo al massimo il tuo immobile in vendita, con servizi fotografici professionali, Render, Home Staging, Video e Pubblicità sui siti nazionali Idealista.it e Casa.it.'
      },
      {
        title: 'Collaborazioni esterne',
        subtitle: 'Insieme per una consulenza su misura',
        copy: 'Il nostro team si avvale di professionisti quali architetti, notai, fotografi, interior designer, avvocati e broker pronti a risolvere qualsiasi problematica.'
      },
      {
        title: 'Property finder',
        subtitle: 'Cerchi una casa particolare?',
        copy: 'Siamo pronti a fare una ricerca attiva dell’immobile perfetto per te, grazie al sistema di collaborazione “MLS Agent RE” che unisce una rete di agenzie in tutta Italia.'
      }
    ],
    features: [
      { title1: 'Stime immobiliari', title2: 'Certificato energetico APE', icon: 'house' },
      { title1: 'Preliminare di compravendita', title2: 'Atto notarile', icon: 'house-1' },
      { title1: 'Consulenza mutui', title2: 'Bonus ristrutturazioni', icon: 'house-3' },
      { title1: 'Contratti di locazione', title2: 'Volture utenze', icon: 'building' }
    ]
  },
  cta: {
    title: 'Passa a trovarci!',
    copy: 'Prenota un appuntamento oggi stesso, ti aiuteremo a trovare la casa dei tuoi sogni.',
    action: {
      label: sharedStrings.ctaAction,
      href: site.phone.land
    }
  },
  footer: {
    contact: {
      title: 'Contatti',
      address: 'Via Provinciale Valle Calepio 34, Castelli Calepio (BG)',
      phone: {
        land: site.phone.land,
        mobile: site.phone.mobile
      },
      email: site.email,
      pec: site.pec,
      openings: [
        'Lun 14:00–19:30',
        'Mar–Ven 08:30–12:30 14:00–19:30',
        'Sab 08:30–12:30'
      ]
    },
    coverage: {
      title: 'Aree',
      towns: [
        'Adrara S. Martino', 'Adrara S. Rocco', 'Bergamo', 'Bolgare', 'Capriolo', 'Castelli Calepio', 'Erbusco', 'Gandosso', 'Grumello d/M', 'Lovere', 'Palazzolo s/O', 'Paratico', 'Predore', 'Sarnico', 'Telgate', 'Villongo'
      ]
    },
    network: {
      title: 'Collegamenti',
      sites: site.network
    }
  },
  modals: {
    aria: {},
    privacy: {
      company: {
        name: 'Ag. Immobiliare Valcalepio',
        url: site.productionUrl.replace(/\/$/, ''),
        email: site.email,
        address: 'Via Provinciale Valle Calepio 34, 24060 Castelli Calepio (BG), Italia'
      }
    }
  }
}
