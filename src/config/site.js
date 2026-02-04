import languages from '../submodules/base/eleventy/config/languages.js'

var environment = process.env.ELEVENTY_ENV || 'production'

export default {
    charset: languages.it?.meta?.charset,
    url: environment === 'development' ? '/' : process.env.SITE_URL,
    productionUrl: process.env.SITE_URL,
    title: 'Agenzia Immobiliare VALCALEPIO',
    subtitle: 'Gestioni immobiliari a Castelli Calepio (BG)',
    description: 'Organizzazione vendite immobili residenziali e commerciali, gestioni immobiliari a Castelli Calepio (BG)',
    email: 'info@agenziavalcalepio.it',
    pec: 'agenziavalcalepiosrl@legalmail.it',
    phone: {
        land: '0354425438',
        mobile: '3495265122',
        fax: '0354425438'
    },
    address: 'Via Provinciale Valle Calepio 34, 24060 Castelli Calepio (BG)',
    //openings
    vat: '02633820168',
    network: {
        facebook: { name: 'Facebook', link: 'https://facebook.com/Agenzia-immobiliare-Valcalepio-551357054962575', icon: 'facebook' },
        google: { name: 'Google', link: 'https://g.page/agenzia-immobiliare-valcalepio?share', icon: 'google' },
        linkedin: { name: 'LinkedIn', link: 'https://linkedin.com/in/sergio-andrea-manenti-056a42119', icon: 'linkedin' },
        mlsagentre: { name: 'MlsAgentRE', link: 'https://mlsagentre.it/sito/43461' },
        website: { name: 'Sito principale', link: 'https://agenziavalcalepio.it' },
        youtube: { name: 'YouTube', link: 'https://youtube.com/@immobiliarevalcalepio', icon: 'youtube' }
    }
}
