import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, findAll } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | copy-to-clipboard', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    await render(hbs`<CopyToClipboard />`)

    assert.strictEqual(findAll('button').length, 1)
  })
})
