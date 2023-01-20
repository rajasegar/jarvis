import Component from "@glimmer/component";
import modes from "jarvis/constants/modes";
import { tracked } from "@glimmer/tracking";

export default class HeaderComponent extends Component {
  @tracked parser = this.modes["JavaScript"].parser;
  opCodes = [
    "replace",
    "remove",
    "insert-before",
    "insert-after",
    "insert-at-top",
    "insert-at-bottom",
    "wrap-around",
  ];

  modes = modes;

  get languages() {
    return Object.keys(this.modes);
  }
}
