import smartOp from 'jarvis/utils/smart-op'
import { module, test } from 'qunit'

module('Unit | Utility | smartOp', function () {
  test('it works', function (assert) {
    let result = smartOp('foo();', 'foo.bar();')
    assert.ok(result)
  })

  test('call expression new arguments', function (assert) {
    let result = smartOp('foo();', 'foo(a,b);')
    assert.ok(result)
  })

  test('variable declaration', function (assert) {
    let result = smartOp("const foo = 'bar';", "const bar = 'bar';")
    assert.ok(result)
  })

  test('JSX element rename attribute', function (assert) {
    let result = smartOp('<NavLink exact />;', '<NavLink end />;')
    assert.ok(result)
  })

  test('JSX element add attribute', function (assert) {
    let result = smartOp('<NavLink />;', '<NavLink end />;')
    assert.ok(result)
  })

  test('JSX element rename element', function (assert) {
    let result = smartOp('<Router />;', '<CompatRouter />;')
    assert.ok(result)
  })

  test('import declaration', function (assert) {
    let result = smartOp(
      "import { Auth } from 'src/auth';",
      "import { useAuth } from 'src/auth';"
    )
    assert.ok(result)
  })
})
