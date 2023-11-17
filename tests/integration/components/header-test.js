import { module, test } from 'qunit'
import { setupRenderingTest } from 'jarvis/tests/helpers'
import { render, findAll } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    this.set('onChangeLang', () => {})
    this.set('onChangeNodeOp', () => {})
    this.set('toggleSmartUpdate', () => {})
    this.set('downloadProject', () => {})

    await render(hbs`<Header
  @lang="JavaScript"
  @opCode="replace"
  @onChangeLang={{this.onChangeLang}}
  @onChangeNodeOp={{this.onChangeNodeOp}}
  @toggleSmartUpdate={{this.toggleSmartUpdate}}
  @downloadProject={{this.downloadProject}}
 />`)

    assert.strictEqual(findAll('h1').length, 1)
  })
})
