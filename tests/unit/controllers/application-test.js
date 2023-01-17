import { module, skip } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | application", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip("it exists", function (assert) {
    let controller = this.owner.lookup("controller:application");
    assert.ok(controller);
  });
});
