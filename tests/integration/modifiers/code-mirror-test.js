import { module, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Modifier | code-mirror", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  skip("it renders", async function (assert) {
    await render(hbs`<div {{code-mirror}}></div>`);

    assert.ok(true);
  });
});
