// i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import translationEN from './en/translation.json'
import translationVN from './vn/translation.json'

// Configure i18next and react-i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // load translation files
      },
      vn: {
        translation: translationVN,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation file not found
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  })

export default i18n
