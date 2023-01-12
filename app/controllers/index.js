import Controller from "@ember/controller";
import { service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  @service customize;
  @service codemod;

  @tracked opCode = "replace";

  @action
  onUpdateOpCode(val) {
    console.log(val);
  }
}
