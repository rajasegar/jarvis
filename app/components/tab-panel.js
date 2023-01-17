import Component from "@glimmer/component";

export default class TabPanelComponent extends Component {
  get hidden() {
    return this.args.name === this.args.api.activeName ? "" : "is-hidden";
  }

  get panelId() {
    return `tabpanel-${this.args.name}`;
  }
}
