const
getCookieConsentConfig = require('cookies'),
{ runIframeManager } = require('iframes')

window.addEventListener('load', () => {
  const im = runIframeManager()

  const config = getCookieConsentConfig({
    autoShow: false,
    categories: {
      analytics: {
        services: {
          googleMaps: {
            label: 'Google Maps',
            onAccept: () => im.acceptService('googleMaps'),
            onReject: () => im.rejectService('googleMaps')
          }
        }
      }
    },
    language: {
      translations: {
        it: {
          consentModal: {
            footer: '<a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Informativa sulla Privacy</a>'
          },
          preferencesModal: {
            sections: [
              {
                title: 'Maggiori informazioni',
                description: 'Per qualsiasi domanda relativa alla nostra politica sui cookie e alle tue scelte, <a class="cc-link" href="mailto:info@agenziavalcalepio.it">contattaci</a>.'
              }
            ]
          }
        }
      }
    }
  })

  CookieConsent.run(config)
})
