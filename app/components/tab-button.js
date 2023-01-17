import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TabButtonComponent extends Component {
  @action
  handleClick() {
    this.args.api.selectAction(this.args.id);
  }

  get selected() {
    return this.args.id === this.args.api.activeName;
  }

  get ariaControls() {
    return `tabpanel-${this.args.id}`;
  }
}
