import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TabButtonComponent extends Component {
  @action
  handleClick() {
    this.args.api.selectAction(this.args.name);
  }

  get selected() {
    return this.args.name === this.args.api.activeName;
  }

  get ariaControls() {
    return `tabpanel-${this.args.name}`;
  }
}
