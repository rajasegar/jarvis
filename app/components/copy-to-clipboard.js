import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class CopyToClipboardComponent extends Component {
  @action
  copyCodemod() {
    navigator.clipboard.writeText(this.args.content).then(
      () => {
        alert(`Successfully copied to clipboard!!\n\n${this.args.content}`)
      },
      () => {
        alert('Copy to clipboard failed!!')
      }
    )
  }
}
