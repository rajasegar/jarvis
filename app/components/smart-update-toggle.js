import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class SmartUpdateToggleComponent extends Component {
  @action
  handleCheck(ev) {
    this.args.onUpdate(ev.target.checked)
  }
}
