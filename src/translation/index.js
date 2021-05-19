import i18n from 'i18next'
import translationEN from './en.json'
import translationCH from './ch.json'

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ch: {
    translation: translationCH
  }
}

i18n.init({
  resources,
  lng: 'ch',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
