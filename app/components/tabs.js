import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class TabsComponent extends Component {
  @tracked activeName;

  constructor() {
    super(...arguments);
    this.activeName = this.args.activeName;
  }
  @action
  select(tab) {
    this.activeName = tab;
  }

  @action
  register() {}
}
