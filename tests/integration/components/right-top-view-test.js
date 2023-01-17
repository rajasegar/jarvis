import { module, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | right-top-view", function (hooks) {
  setupRenderingTest(hooks);

  skip("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RightTopView />`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      <RightTopView>
        template block text
      </RightTopView>
    `);

    assert.dom(this.element).hasText("template block text");
  });
});
