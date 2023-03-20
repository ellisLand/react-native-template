import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en-US.json'
import zh from './zh-TW.json'

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
