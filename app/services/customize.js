import Service from '@ember/service'
import { action } from '@ember/object'

export default class CustomizeService extends Service {
  darkMode = false
  smartUpdate = false

  get theme() {
    return this.darkMode ? 'solarized dark' : 'default'
  }

  @action
  toggleDarkMode() {
    let dm = this.darkMode
    this.darkMode = !dm
    if (dm) {
      document.body.classList.remove('dark-mode')
    } else {
      document.body.classList.add('dark-mode')
    }
  }
}
