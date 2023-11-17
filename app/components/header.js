import Component from '@glimmer/component'
import modes from 'jarvis/constants/modes'

export default class HeaderComponent extends Component {
  opCodes = [
    'replace',
    'remove',
    'insert-before',
    'insert-after',
    'insert-at-top',
    'insert-at-bottom',
    'wrap-around',
  ]

  modes = modes

  get languages() {
    return Object.keys(this.modes)
  }

  get parser() {
    return this.modes[this.args.lang].parser
  }
}
