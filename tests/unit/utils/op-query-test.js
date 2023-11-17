import opQuery from 'jarvis/utils/op-query'
import { module, test } from 'qunit'

module('Unit | Utility | op-query', function () {
  test('it works', async function (assert) {
    let result = await opQuery('javascript', 'remove', 'foo()', 'bar()')
    assert.strictEqual(result, '.remove();')
  })

  test('opquery replace', async function (assert) {
    let result = await opQuery('javascript', 'replace', 'foo()', 'bar()')
    assert.ok(result)
  })

  test('opquery insert-before', async function (assert) {
    let result = await opQuery('javascript', 'insert-before', 'foo()', 'bar()')
    assert.ok(result)
  })

  test('opquery insert-after', async function (assert) {
    let result = await opQuery('javascript', 'insert-after', 'foo()', 'bar()')
    assert.ok(result)
  })

  test('opquery insert-at-top', async function (assert) {
    let result = await opQuery('javascript', 'insert-at-top', 'foo()', 'bar()')
    assert.ok(result)
  })

  test('opquery insert-at-bottom', async function (assert) {
    let result = await opQuery(
      'javascript',
      'insert-at-bottom',
      'foo()',
      'bar()'
    )
    assert.ok(result)
  })

  test('opquery handlebars replace', async function (assert) {
    let result = await opQuery('handlebars', 'replace', '{{foo}}', '{{bar}}')
    assert.ok(result)
  })

  test('opquery handlebars remove', async function (assert) {
    let result = await opQuery('handlebars', 'remove', '{{foo}}', '{{bar}}')
    assert.ok(result)
  })
})
