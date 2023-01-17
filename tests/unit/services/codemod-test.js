import { module, skip } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | codemod", function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip("it exists", function (assert) {
    let service = this.owner.lookup("service:codemod");
    assert.ok(service);
  });
});
