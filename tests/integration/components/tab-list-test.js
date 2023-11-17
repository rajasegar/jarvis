import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, findAll } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | tab-list', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TabList />`)
    assert.strictEqual(findAll('[role="tablist"]').length, 1)
  })
})
