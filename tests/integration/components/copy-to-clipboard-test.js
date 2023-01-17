import { module, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | copy-to-clipboard", function (hooks) {
  setupRenderingTest(hooks);

  skip("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CopyToClipboard />`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      <CopyToClipboard>
        template block text
      </CopyToClipboard>
    `);

    assert.dom(this.element).hasText("template block text");
  });
});
