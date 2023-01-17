import { module, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | right-bottom-view", function (hooks) {
  setupRenderingTest(hooks);

  skip("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RightBottomView />`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      <RightBottomView>
        template block text
      </RightBottomView>
    `);

    assert.dom(this.element).hasText("template block text");
  });
});
