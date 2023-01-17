import { module, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Modifier | split-js", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  skip("it renders", async function (assert) {
    await render(hbs`<div {{split-js}}></div>`);

    assert.ok(true);
  });
});
