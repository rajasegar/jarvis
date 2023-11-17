import { module, test } from 'qunit'
import { setupRenderingTest } from 'jarvis/tests/helpers'
import { render, findAll, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | help-panel', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      <HelpPanel>
        template block text
      </HelpPanel>
    `)

    assert.dom(this.element).hasText('template block text ×')

    await click('button')

    assert.strictEqual(findAll('.cm-help-panel').length, 0)
  })
})
