import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, findAll } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | ast-maker", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>
    `);

    // TODO: replace with better assertions
    // Currently finding the number of .CodeMirror instances
    assert.strictEqual(findAll("footer").length, 1);
  });
});
