import { I18n } from 'i18n-js'
import enus from '@locale/en-US.json'
import zhtw from '@locale/zh-TW.json'

const i18n = new I18n({
  ...enus,
  ...zhtw,
})

export default i18n
