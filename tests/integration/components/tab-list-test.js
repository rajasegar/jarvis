import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | tab-list", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TabList />`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      <TabList>
        template block text
      </TabList>
    `);

    assert.dom(this.element).hasText("template block text");
  });
});
