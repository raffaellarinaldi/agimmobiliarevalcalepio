var environment = process.env.ELEVENTY_ENV || 'production'
if ( environment === 'development' ) {
	var url = '/'
} else {
	var url = 'https://agenziavalcalepio.bg.it/'
}

module.exports = () => {
  return {
    environment: process.env.ELEVENTY_ENV,
    title: 'Agenzia Immobiliare VALCALEPIO',
    description: 'Organizzazione vendite immobili residenziali e commerciali, gestioni immobiliari a Castelli Calepio (BG)',
    url: url,
    email: 'info@agenziavalcalepio.it',
    pec: 'agenziavalcalepiosrl@legalmail.it',
    phone: {
      land: '035 4425438',
      mobile: '349 5265122',
      fax: '035 4425438'
    },
    address: 'Via Provinciale Valle Calepio 34, 24060 Castelli Calepio (BG)',
    network: [
      { name: 'facebook', link: 'https://www.facebook.com/Agenzia-immobiliare-Valcalepio-551357054962575/', icon: 'facebook' },
      { name: 'youtube', link: 'https://youtube.com/@immobiliarevalcalepio', icon: 'youtube' },
      { name: 'google', link: 'https://g.page/agenzia-immobiliare-valcalepio?share', icon: 'google' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/sergio-manenti-b7214855/', icon: 'linkedin' }
      // { name: 'instagram', link: '#', icon: 'instagram' }
    ]
  }
}
