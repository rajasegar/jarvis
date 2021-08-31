'use strict';

define("jarvis/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn.apply(void 0, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("jarvis/tests/integration/components/ast-maker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)("Integration | Component | ast-maker", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <AstMaker 
                  @mode="javascript"
                  @code="foo();"
                  @dest="foo.bar()"
                  @nodeOp="replace"
                  @parser="recast">
                </AstMaker>
                    
                */
                {
                  id: "smHyLIV8",
                  block: "{\"symbols\":[],\"statements\":[[5,\"ast-maker\",[],[[\"@mode\",\"@code\",\"@dest\",\"@nodeOp\",\"@parser\"],[\"javascript\",\"foo();\",\"foo.bar()\",\"replace\",\"recast\"]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                // TODO: replace with better assertions
                // Currently finding the number of .CodeMirror instances
                assert.equal((0, _testHelpers.findAll)(".CodeMirror").length, 4);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("jarvis/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/ast-maker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/ast-maker.js should pass ESLint\n\n');
  });
  QUnit.test('constants/parsers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/parsers.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/gists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/gists.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/gists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gists.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('services/codemod.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/codemod.js should pass ESLint\n\n');
  });
  QUnit.test('utils/compile-module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/compile-module.js should pass ESLint\n\n');
  });
  QUnit.test('utils/op-query.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/op-query.js should pass ESLint\n\n');
  });
  QUnit.test('utils/smart-op.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/smart-op.js should pass ESLint\n\n');
  });
});
define("jarvis/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('jarvis/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jarvis/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('jarvis/templates/components/ast-maker.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jarvis/templates/components/ast-maker.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('jarvis/templates/gists.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jarvis/templates/gists.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('jarvis/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'jarvis/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("jarvis/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/ast-maker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ast-maker-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/gists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/gists-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/gists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gists-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/codemod-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/codemod-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/compile-module-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/compile-module-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/op-query-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/op-query-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/smart-op-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/smart-op-test.js should pass ESLint\n\n');
  });
});
define("jarvis/tests/test-helper", ["jarvis/app", "jarvis/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("jarvis/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("jarvis/tests/unit/controllers/gists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | gists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:gists');
      assert.ok(controller);
    });
  });
});
define("jarvis/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("jarvis/tests/unit/routes/gists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | gists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:gists');
      assert.ok(route);
    });
  });
});
define("jarvis/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("jarvis/tests/unit/services/codemod-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | codemod', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:codemod');
      assert.ok(service);
    });
  });
});
define("jarvis/tests/unit/utils/compile-module-test", ["jarvis/utils/compile-module", "qunit"], function (_compileModule, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | compile-module', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      var result = (0, _compileModule.default)();
      assert.ok(result);
    });
  });
});
define("jarvis/tests/unit/utils/op-query-test", ["jarvis/utils/op-query", "qunit"], function (_opQuery, _qunit) {
  "use strict";

  (0, _qunit.module)("Unit | Utility | op-query", function () {
    (0, _qunit.test)("it works", function (assert) {
      var result = (0, _opQuery.default)("javascript", "remove");
      assert.equal(result, ".remove();");
    });
  });
});
define("jarvis/tests/unit/utils/smart-op-test", ["jarvis/utils/smart-op", "qunit"], function (_smartOp, _qunit) {
  "use strict";

  (0, _qunit.module)("Unit | Utility | smartOp", function () {
    // Replace this with your real tests.
    (0, _qunit.test)("it works", function (assert) {
      var result = (0, _smartOp.default)("foo();", "foo.bar();");
      assert.ok(result);
    });
  });
});
define('jarvis/config/environment', [], function() {
  var prefix = 'jarvis';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('jarvis/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
