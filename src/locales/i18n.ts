// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "./en/translation.json";
import translationVN from "./vn/translation.json";

// Configure i18next and react-i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      vn: { translation: translationVN },
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
