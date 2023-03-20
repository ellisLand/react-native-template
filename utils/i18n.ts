import { I18n } from 'i18n-js'
import enus from '../locales/en-US.json'
import zhtw from '../locales/zh-TW.json'

const i18n = new I18n({
  ...enus,
  ...zhtw,
})

export default i18n
