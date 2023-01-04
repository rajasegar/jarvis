import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class SmartUpdateToggleComponent extends Component {
  @service codemod;
}
