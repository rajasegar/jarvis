import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class HelpPanelComponent extends Component {
  @tracked showHelp = true;

  @action closeHelp() {
    this.showHelp = false;
  }
}
