import Controller from "@ember/controller";
import { service } from "@ember/service";

export default class IndexController extends Controller {
  @service customize;
  @service codemod;
}
