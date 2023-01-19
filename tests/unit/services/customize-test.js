import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | customize", function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test("it exists", function (assert) {
    debugger; // eslint-disable-line
    let service = this.owner.lookup("service:customize");
    assert.ok(service);
  });
});
