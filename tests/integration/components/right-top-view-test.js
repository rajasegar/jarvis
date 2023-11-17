import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, findAll } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | right-top-view', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RightTopView />`)

    assert.strictEqual(findAll('#split-11').length, 1)
  })
})
