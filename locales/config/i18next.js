import i18next from "i18next"
import { initReactI18next, Translation } from "react-i18next"
import en from "../en.json"
import pl from "../pl.json"

export const languageResources = {
  pl: { translation: pl },
  en: { translation: en },
}

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "pl",
  fallbackLng: "pl",
  resources: languageResources,
})

export default i18next
