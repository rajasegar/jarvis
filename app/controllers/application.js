import Controller from "@ember/controller";
import ENV from "jarvis/config/environment";
import { service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @service codemod;
  @service router;

  @tracked opCode = "replace";

  get emberVersion() {
    return ENV.pkg.devDependencies["ember-source"];
  }

  get nodeBuilderVersion() {
    return ENV.pkg.dependencies["ast-node-builder"];
  }

  get nodeFinderVersion() {
    return ENV.pkg.dependencies["ast-node-finder"];
  }

  get buttonText() {
    return "Save";
  }

  buttonDisabled = false;

  @action
  saveGist() {
    this.set("buttonText", "Saving...");
    this.set("buttonDisabled", true);
    this.codemod.saveGist().then((data) => {
      this.set("buttonText", "Save");
      this.set("buttonDisabled", false);
      this.router.transitionTo("gists", data.id);
    });
  }

  @action
  onChangeNodeOp(val) {
    console.log(val);
    this.opCode = val;
  }
}
