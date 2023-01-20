import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, findAll } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | tab-button", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set("selectAction", () => {});
    this.set("registerAction", () => {});

    await render(hbs`
{{#let
    (hash
      selectAction=this.selectAction
      registerAction=this.registerAction
      activeName='tab-2'
      name='tab-1'
      activeData=""
    )
    as |api|
  }}
<TabButton @api={{api}}/>
{{/let}}`);

    assert.strictEqual(findAll("button").length, 1);
  });
});
