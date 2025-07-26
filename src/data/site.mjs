import languages from '../submodules/base/eleventy/config/languages.js'

var
environment = process.env.ELEVENTY_ENV || 'production',
url = environment === 'development' ? '/' : 'https://agenziavalcalepio.bg.it/'

export default {
    charset: languages.it?.meta?.charset,
    url: url,
    title: 'Agenzia Immobiliare VALCALEPIO',
    subtitle: 'Gestioni immobiliari a Castelli Calepio (BG)',
    description: 'Organizzazione vendite immobili residenziali e commerciali, gestioni immobiliari a Castelli Calepio (BG)',
    //keywords
    email: 'info@agenziavalcalepio.it',
    pec: 'agenziavalcalepiosrl@legalmail.it',
    phone: {
        land: '0354425438',
        mobile: '3495265122',
        fax: '0354425438'
    },
    //address - schema.org
    //openings - schema.org
    //vat
    network: {
        facebook: { name: 'Facebook', link: 'https://facebook.com/Agenzia-immobiliare-Valcalepio-551357054962575', icon: 'facebook' },
        youtube: { name: 'YouTube', link: 'https://youtube.com/@immobiliarevalcalepio', icon: 'youtube' },
        google: { name: 'Google', link: 'https://g.page/agenzia-immobiliare-valcalepio?share', icon: 'google' },
        linkedin: { name: 'LinkedIn', link: 'https://linkedin.com/in/sergio-andrea-manenti-056a42119', icon: 'linkedin' },
        website: { name: 'Sito principale', link: 'https://agenziavalcalepio.it' },
        mlsagentre: { name: 'MlsAgentRE', link: 'https://mlsagentre.it/sito/43461' }
    }
}
