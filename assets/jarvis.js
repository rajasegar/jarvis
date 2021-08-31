'use strict';



;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("jarvis/app", ["exports", "jarvis/resolver", "ember-load-initializers", "jarvis/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var App = /*#__PURE__*/function (_Ember$Application) {
    _inherits(App, _Ember$Application);

    var _super = _createSuper(App);

    function App() {
      var _this;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(_assertThisInitialized(_this), "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(_assertThisInitialized(_this), "Resolver", _resolver.default);

      return _this;
    }

    return App;
  }(Ember.Application);

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("jarvis/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberComponentManager.default;
    }
  });
});
;define("jarvis/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("jarvis/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("jarvis/components/ast-maker", ["exports", "ast-node-finder", "recast", "recastBabel", "recastBabylon", "ember-template-recast", "jscodeshift", "jarvis/utils/compile-module", "jarvis/utils/op-query", "jarvis/utils/smart-op"], function (_exports, _astNodeFinder, _recast, _recastBabel, _recastBabylon, _emberTemplateRecast, _jscodeshift, _compileModule, _opQuery3, _smartOp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var dispatchNodes = _astNodeFinder.babel.dispatchNodes;

  var _default = Ember.Component.extend({
    customize: Ember.inject.service(),
    codemod: Ember.inject.service(),
    theme: Ember.computed.reads('customize.theme'),
    allowSmartUpdate: Ember.computed.reads('customize.smartUpdate'),
    showInsertOptions: Ember.computed('mode', function () {
      return this.get('mode') === 'javascript';
    }),
    parse: Ember.computed("parser", function () {
      var parse = _recast.default.parse;

      var _parser = this.get("parser");

      switch (_parser) {
        case "babylon":
          parse = _recastBabylon.default.parse;
          break;

        case "babel":
          parse = _recastBabel.default.parse;
          break;

        case "ember-template-recast":
          parse = _emberTemplateRecast.default.parse;
          break;
      }

      return parse;
    }),
    insertOption: 'before',
    transform: Ember.computed('gistTransform', 'dest', 'parser', 'mode', function () {
      if (this.get('gistTransform')) {
        return this.get('gistTransform');
      } else {
        return this._buildCodemod();
      }
    }),
    inputNodeType: Ember.computed('code', function () {
      var _ast = this.get('parse')(this.get('code'));

      var _type = _ast.program.body[0].type;
      return _type;
    }),
    outputNodeType: Ember.computed('dest', function () {
      var _ast = this.get('parse')(this.get('dest'));

      var _type = _ast.program.body[0].type;
      return _type;
    }),
    isSmartUpdate: Ember.computed.equal('inputNodeType', 'outputNodeType'),
    output: Ember.computed('transform', 'mode', 'parser', function () {
      // TODO: Need to transpile the es6 export default
      var transformModule = (0, _compileModule.default)(this.get('transform'));
      var transform = transformModule.__esModule ? transformModule.default : transformModule;

      var _source = this.get('code');

      var _mode = this.get('mode');

      var result = '';

      if (_mode === 'javascript') {
        result = transform({
          path: 'Live.js',
          source: _source
        }, {
          jscodeshift: transformModule.parser ? _jscodeshift.default.withParser(transformModule.parser) : _jscodeshift.default
        }, {});
      } else {
        result = _emberTemplateRecast.default.transform(_source, transform).code;
      }

      return result;
    }),
    opQuery: Ember.computed('nodeOp', 'dest', 'mode', function () {
      var _mode = this.get('mode');

      var _nodeOp = this.get('nodeOp');

      var _dest = this.get('dest');

      return (0, _opQuery3.default)(_mode, _nodeOp, _dest);
    }),
    smartOp: Ember.computed('code', 'dest', function () {
      var _input = this.get('code');

      var _output = this.get('dest');

      return (0, _smartOp.default)(_input, _output);
    }),
    _buildCodemod: function _buildCodemod() {
      var parse = this.get('parse');
      var ast = parse(this.get('code'));
      var _transformTemplate = '';
      var transformLogic = '';

      var _mode = this.get('mode');

      if (_mode === 'javascript') {
        var _inputNodeType = ast.program.body[0].type;
        var outAst = parse(this.get('dest'));
        var _outputNodeType = outAst.program.body[0].type;
        var isSmartUpdate = _inputNodeType === _outputNodeType && this.get('nodeOp') === 'replace';

        var _allowSmartUpdate = this.get('allowSmartUpdate');

        transformLogic = dispatchNodes(ast).join();

        var _opQuery = isSmartUpdate && _allowSmartUpdate ? this.get('smartOp') : this.get('opQuery'); // TODO: Need to change to es6 export default


        _transformTemplate = "\n          module.exports = function transformer(file, api) {\n         const j = api.jscodeshift;\n        const root = j(file.source);\n        const body = root.get().value.program.body;\n        ".concat(transformLogic, "\n        ").concat(_opQuery, "\n        return root.toSource();\n      };");
      } else {
        var _opQuery2 = this.get('opQuery');

        transformLogic = _astNodeFinder.glimmer.dispatchNodes(ast, _opQuery2).join();
        _transformTemplate = "\n          module.exports = function(env) {\n        let b = env.syntax.builders;\n\n        ".concat(transformLogic, "\n        \n      };");
      }

      var _codemod = _recast.default.prettyPrint(_recast.default.parse(_transformTemplate), {
        tabWidth: 2
      }).code;

      this.codemod.set('codemod', _codemod);
      return _codemod;
    },
    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);

      if (this.get('gistTransform')) {
        this.set('transform', this.get('gistTransform'));
      } else {
        this.set('transform', this._buildCodemod());
      }
    },
    init: function init() {
      this._super.apply(this, arguments);
    }
  });

  _exports.default = _default;
});
;define("jarvis/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
});
;define("jarvis/components/basic-dropdown-optional-tag", ["exports", "ember-basic-dropdown/components/basic-dropdown-optional-tag"], function (_exports, _basicDropdownOptionalTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownOptionalTag.default;
    }
  });
});
;define("jarvis/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("jarvis/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});
;define("jarvis/components/dark-mode-toggle", ["exports", "ember-jarvis/components/dark-mode-toggle"], function (_exports, _darkModeToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _darkModeToggle.default;
    }
  });
});
;define("jarvis/components/ivy-codemirror", ["exports", "ivy-codemirror/components/ivy-codemirror"], function (_exports, _ivyCodemirror) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ivyCodemirror.default;
    }
  });
});
;define("jarvis/components/maybe-in-element", ["exports", "ember-maybe-in-element/components/maybe-in-element"], function (_exports, _maybeInElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _maybeInElement.default;
    }
  });
});
;define("jarvis/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectMultiple.default;
    }
  });
});
;define("jarvis/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("jarvis/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelect.default;
    }
  });
});
;define("jarvis/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _beforeOptions.default;
    }
  });
});
;define("jarvis/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _noMatchesMessage.default;
    }
  });
});
;define("jarvis/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _options.default;
    }
  });
});
;define("jarvis/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _placeholder.default;
    }
  });
});
;define("jarvis/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectGroup.default;
    }
  });
});
;define("jarvis/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _searchMessage.default;
    }
  });
});
;define("jarvis/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("jarvis/components/radio-button-input", ["exports", "ember-radio-button/components/radio-button-input"], function (_exports, _radioButtonInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _radioButtonInput.default;
    }
  });
});
;define("jarvis/components/radio-button", ["exports", "ember-radio-button/components/radio-button"], function (_exports, _radioButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _radioButton.default;
    }
  });
});
;define("jarvis/components/smart-update-toggle", ["exports", "ember-jarvis/components/smart-update-toggle"], function (_exports, _smartUpdateToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _smartUpdateToggle.default;
    }
  });
});
;define("jarvis/components/split-view-horizontal", ["exports", "ember-jarvis/components/split-view-horizontal"], function (_exports, _splitViewHorizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _splitViewHorizontal.default;
    }
  });
});
;define("jarvis/components/split-view-vertical", ["exports", "ember-jarvis/components/split-view-vertical"], function (_exports, _splitViewVertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _splitViewVertical.default;
    }
  });
});
;define("jarvis/components/x-toggle-label", ["exports", "ember-toggle/components/x-toggle-label/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _component.default;
    }
  });
});
;define("jarvis/components/x-toggle-switch", ["exports", "ember-toggle/components/x-toggle-switch/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _component.default;
    }
  });
});
;define("jarvis/components/x-toggle", ["exports", "ember-toggle/components/x-toggle/component", "jarvis/config/environment"], function (_exports, _component, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config = _environment.default['ember-toggle'] || {};

  var _default = _component.default.extend({
    /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
    theme: config.defaultTheme || 'default',
    defaultOffLabel: config.defaultOffLabel || 'Off::off',
    defaultOnLabel: config.defaultOnLabel || 'On::on',
    showLabels: config.defaultShowLabels || false,
    size: config.defaultSize || 'medium'
  });

  _exports.default = _default;
});
;define("jarvis/constants/parsers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    'Javascript': {
      'babel': {
        name: 'babel',
        version: '7.6.4'
      },
      'babylon': {
        name: 'babylon',
        version: '7.6.4'
      },
      'recast': {
        name: 'recast',
        version: '0.18.5'
      }
    },
    'Handlebars': {
      'ember-template-recast': {
        name: 'ember-template-recast',
        version: '3.2.8'
      }
    }
  };
  _exports.default = _default;
});
;define("jarvis/controllers/application", ["exports", "jarvis/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    codemod: Ember.inject.service(),
    router: Ember.inject.service(),
    emberVersion: Ember.computed(function () {
      return _environment.default.pkg.devDependencies["ember-source"];
    }),
    nodeBuilderVersion: Ember.computed(function () {
      return _environment.default.pkg.dependencies["ast-node-builder"];
    }),
    nodeFinderVersion: Ember.computed(function () {
      return _environment.default.pkg.dependencies["ast-node-finder"];
    }),
    buttonText: Ember.computed(function () {
      return 'Save';
    }),
    buttonDisabled: Ember.computed(function () {
      return false;
    }),
    actions: {
      saveGist: function saveGist() {
        var _this = this;

        this.set('buttonText', 'Saving...');
        this.set('buttonDisabled', true);
        this.codemod.saveGist().then(function (data) {
          _this.set('buttonText', 'Save');

          _this.set('buttonDisabled', false);

          _this.router.transitionTo('gists', data.id);
        });
      }
    }
  });

  _exports.default = _default;
});
;define("jarvis/controllers/gists", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    customize: Ember.inject.service(),
    codemod: Ember.inject.service(),
    version: Ember.computed('gist_id', function () {
      this.codemod.readGist(this.get('gist_id'));
      return '1.0';
    })
  });

  _exports.default = _default;
});
;define("jarvis/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    customize: Ember.inject.service(),
    codemod: Ember.inject.service(),
    theme: Ember.computed.reads('customize.theme'),
    mode: Ember.computed.reads('codemod.mode'),
    sampleCode: Ember.computed.reads('codemod.sourceCode'),
    destCode: Ember.computed.reads('codemod.destCode'),
    opCode: Ember.computed.reads('codemod.opCode'),
    parser: Ember.computed.reads('codemod.parser')
  });

  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/pan", ["exports", "ember-gestures/recognizers/pan"], function (_exports, _pan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pan.default;
  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/pinch", ["exports", "ember-gestures/recognizers/pinch"], function (_exports, _pinch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pinch.default;
  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/press", ["exports", "ember-gestures/recognizers/press"], function (_exports, _press) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _press.default;
  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/rotate", ["exports", "ember-gestures/recognizers/rotate"], function (_exports, _rotate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _rotate.default;
  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/swipe", ["exports", "ember-gestures/recognizers/swipe"], function (_exports, _swipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _swipe.default;
  _exports.default = _default;
});
;define("jarvis/ember-gestures/recognizers/tap", ["exports", "ember-gestures/recognizers/tap"], function (_exports, _tap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _tap.default;
    }
  });
});
;define("jarvis/ember-gestures/recognizers/vertical-pan", ["exports", "ember-gestures/recognizers/vertical-pan"], function (_exports, _verticalPan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _verticalPan.default;
    }
  });
});
;define("jarvis/ember-gestures/recognizers/vertical-swipe", ["exports", "ember-gestures/recognizers/vertical-swipe"], function (_exports, _verticalSwipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _verticalSwipe.default;
    }
  });
});
;define("jarvis/event_dispatcher", ["exports", "ember-gestures/event_dispatcher", "jarvis/config/environment"], function (_exports, _event_dispatcher, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var assign = Ember.assign || Ember.merge;
  var gestures = assign({}, {
    emberUseCapture: false,
    removeTracking: false,
    useFastPaths: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  var _default = _event_dispatcher.default.extend({
    useCapture: gestures.emberUseCapture,
    removeTracking: gestures.removeTracking,
    useFastPaths: gestures.useFastPaths
  });

  _exports.default = _default;
});
;define("jarvis/helpers/-clear-element", ["exports", "ember-in-element-polyfill/helpers/-clear-element"], function (_exports, _clearElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _clearElement.default;
    }
  });
});
;define("jarvis/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("jarvis/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.and;
    }
  });
});
;define("jarvis/helpers/app-version", ["exports", "jarvis/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("jarvis/helpers/assign", ["exports", "ember-assign-helper/helpers/assign"], function (_exports, _assign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _assign.default;
    }
  });
  Object.defineProperty(_exports, "assign", {
    enumerable: true,
    get: function get() {
      return _assign.assign;
    }
  });
});
;define("jarvis/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
});
;define("jarvis/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("jarvis/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("jarvis/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("jarvis/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("jarvis/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function get() {
      return _equal.equal;
    }
  });
});
;define("jarvis/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function get() {
      return _gt.gt;
    }
  });
});
;define("jarvis/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function get() {
      return _gte.gte;
    }
  });
});
;define("jarvis/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.isArray;
    }
  });
});
;define("jarvis/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
});
;define("jarvis/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function get() {
      return _isEqual.isEqual;
    }
  });
});
;define("jarvis/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function get() {
      return _lt.lt;
    }
  });
});
;define("jarvis/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function get() {
      return _lte.lte;
    }
  });
});
;define("jarvis/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function get() {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("jarvis/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.not;
    }
  });
});
;define("jarvis/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.or;
    }
  });
});
;define("jarvis/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
});
;define("jarvis/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
});
;define("jarvis/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function get() {
      return _xor.xor;
    }
  });
});
;define("jarvis/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "jarvis/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("jarvis/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("jarvis/initializers/export-application-global", ["exports", "jarvis/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("jarvis/instance-initializers/ember-gestures", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-gestures',
    initialize: function initialize(instance) {
      if (typeof instance.lookup === "function") {
        instance.lookup('service:-gestures');
      } else {
        // This can be removed when we no-longer support ember 1.12 and 1.13
        Ember.getOwner(instance).lookup('service:-gestures');
      }
    }
  };
  _exports.default = _default;
});
;define("jarvis/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didInsert.default;
    }
  });
});
;define("jarvis/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didUpdate.default;
    }
  });
});
;define("jarvis/modifiers/recognize-gesture", ["exports", "ember-gestures/modifiers/recognize-gesture"], function (_exports, _recognizeGesture) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _recognizeGesture.default;
    }
  });
});
;define("jarvis/modifiers/split-view", ["exports", "ember-split-view-modifier/modifiers/split-view"], function (_exports, _splitView) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _splitView.default;
    }
  });
});
;define("jarvis/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _style.default;
    }
  });
});
;define("jarvis/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _willDestroy.default;
    }
  });
});
;define("jarvis/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("jarvis/router", ["exports", "jarvis/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Router = /*#__PURE__*/function (_Ember$Router) {
    _inherits(Router, _Ember$Router);

    var _super = _createSuper(Router);

    function Router() {
      var _this;

      _classCallCheck(this, Router);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "location", _environment.default.locationType);

      _defineProperty(_assertThisInitialized(_this), "rootURL", _environment.default.rootURL);

      return _this;
    }

    return Router;
  }(Ember.Router);

  _exports.default = Router;
  Router.map(function () {
    this.route('gists', {
      path: '/gists/:gist_id'
    });
  });
});
;define("jarvis/routes/gists", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model: function model(params) {
      this.set('gist_id', params.gist_id);
      return params;
    },
    setupController: function setupController(controller, model) {
      controller.set('gist_id', this.get('gist_id'));

      this._super(controller, model);
    }
  });

  _exports.default = _default;
});
;define("jarvis/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("jarvis/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ensureRegistered.default;
    }
  });
});
;define("jarvis/services/-gestures", ["exports", "jarvis/config/environment", "ember-gestures/services/-gestures"], function (_exports, _environment, _gestures) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var assign = Ember.assign || Ember.merge;
  var gestures = assign({}, {
    useCapture: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  var _default = _gestures.default.extend({
    useCapture: gestures.useCapture
  });

  _exports.default = _default;
});
;define("jarvis/services/code-mirror", ["exports", "ivy-codemirror/services/code-mirror"], function (_exports, _codeMirror) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _codeMirror.default;
    }
  });
});
;define("jarvis/services/codemod", ["exports", "jarvis/constants/parsers", "@octokit/rest", "jarvis/config/environment"], function (_exports, _parsers2, _rest, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Sample code to test
  var jsInput = "foo();";
  var jsOutput = "foo.bar();";
  var hbscode = "<div class=\"entry\">\n  <h1>{{title}}</h1>\n  <div class=\"body\">\n    {{body}}\n  </div>\n</div>";
  var modes = {
    Javascript: "javascript",
    Handlebars: "handlebars"
  };
  var OPCODES = ['replace', 'remove', 'insert-before', 'insert-after'];

  var _default = Ember.Service.extend({
    language: "Javascript",
    nodeOps: OPCODES,
    opCode: 'replace',
    mode: Ember.computed("language", function () {
      return modes[this.get("language")];
    }),
    sourceCode: Ember.computed("language", function () {
      if (this.get("language") === "Javascript") {
        return jsInput;
      } else {
        return hbscode;
      }
    }),
    destCode: Ember.computed('language', function () {
      if (this.get("language") === "Javascript") {
        return jsOutput;
      } else {
        return '{{foo}}';
      }
    }),
    parser: Ember.computed('language', function () {
      return Object.keys(_parsers2.default[this.get("language")])[0];
    }),
    parsers: Ember.computed("language", function () {
      return Object.keys(_parsers2.default[this.get("language")]);
    }),
    parserVersion: Ember.computed("parser", function () {
      var _lang = this.get('language');

      var _parsers = _parsers2.default[_lang];
      return _parsers[this.get("parser")].version;
    }),
    readGist: function readGist(gist_id) {
      var _this = this;

      var _mode = this.get('mode');

      var sourceFileName = _mode === 'javascript' ? 'source.js' : 'source.hbs';
      var destFileName = _mode === 'javascript' ? 'destination.js' : 'destination.hbs';
      var octokit = new _rest.default({
        auth: _environment.default.GITHUB_API_TOKEN
      });
      octokit.gists.get({
        gist_id: gist_id
      }).then(function (_ref) {
        var data = _ref.data;
        // TODO: handle error if transform.js is not present
        //console.log(data.files);
        var config = JSON.parse(data.files['jarvis.json'].content);

        _this.set('parser', config.parser);

        _this.set('language', config.lang);

        _this.set('sourceCode', data.files[sourceFileName].content || '');

        _this.set('destCode', data.files[destFileName].content || '');

        _this.set('transform', data.files['transform.js'].content || '');
      }).catch(function (err) {
        console.log('Error: ', err); //eslint-disable-line
      });
    },
    saveGist: function saveGist() {
      var octokit = new _rest.default({
        auth: _environment.default.GITHUB_API_TOKEN
      });

      var _mode = this.get('mode');

      var sourceFileName = _mode === 'javascript' ? 'source.js' : 'source.hbs';
      var destFileName = _mode === 'javascript' ? 'destination.js' : 'destination.hbs';
      var files = {
        'jarvis.json': {
          content: "{\n       \"lang\": \"".concat(this.get('language'), "\",\n       \"parser\": \"").concat(this.get('parser'), "\",\n       \"version\": \"1.0\",\n       \"nodeOp\": \"").concat(this.get('opCode'), "\"\n      }")
        },
        'transform.js': {
          content: this.get('codemod')
        }
      };
      files[sourceFileName] = {
        content: this.get('sourceCode')
      };
      files[destFileName] = {
        content: this.get('destCode')
      };
      return octokit.gists.create({
        files: files,
        description: 'JARVIS gist v1'
      }).then(function (_ref2) {
        var data = _ref2.data;
        alert('Gist saved successfully!');
        return data;
      }).catch(function (err) {
        console.log('Error: ', err); //eslint-disable-line
      });
    },
    init: function init() {
      this._super.apply(this, arguments);

      this.set("languages", Object.keys(_parsers2.default));
    }
  });

  _exports.default = _default;
});
;define("jarvis/services/customize", ["exports", "ember-jarvis/services/customize"], function (_exports, _customize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _customize.default;
    }
  });
});
;define("jarvis/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _textMeasurer.default;
    }
  });
});
;define("jarvis/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FH2RzvuD",
    "block": "{\"symbols\":[\"opcode\",\"parser\",\"lang\"],\"statements\":[[7,\"header\",true],[8],[0,\"\\n  \"],[7,\"h1\",true],[10,\"title\",\"Write me a Codemod\"],[8],[0,\"JARVIS\"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"parser_wrapper\"],[8],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"label-text\"],[8],[5,\"link-to\",[],[[\"@route\"],[\"index\"]],{\"statements\":[[0,\"New\"]],\"parameters\":[]}],[9],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"btn btn-outline-secondary btn-sm\"],[12,\"disabled\",[22,\"buttonDisabled\"]],[12,\"type\",\"button\"],[3,\"action\",[[23,0,[]],\"saveGist\"]],[8],[0,\"\\n      \"],[1,[22,\"buttonText\"],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[5,\"power-select\",[],[[\"@selected\",\"@options\",\"@onChange\"],[[24,[\"codemod\",\"language\"]],[24,[\"codemod\",\"languages\"]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"codemod\",\"language\"]]],null]],null]]],{\"statements\":[[0,\"\\n      \"],[1,[23,3,[]],false],[0,\"\\n    \"]],\"parameters\":[3]}],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"label-text\"],[8],[0,\"Parser:\"],[9],[0,\"\\n    \"],[5,\"power-select\",[],[[\"@selected\",\"@options\",\"@onChange\"],[[24,[\"codemod\",\"parser\"]],[24,[\"codemod\",\"parsers\"]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"codemod\",\"parser\"]]],null]],null]]],{\"statements\":[[0,\"\\n      \"],[1,[23,2,[]],false],[0,\"\\n    \"]],\"parameters\":[2]}],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"label-text\"],[8],[0,\"OPCODE:\"],[9],[0,\"\\n    \"],[5,\"power-select\",[],[[\"@selected\",\"@options\",\"@onChange\"],[[24,[\"codemod\",\"opCode\"]],[24,[\"codemod\",\"nodeOps\"]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"codemod\",\"opCode\"]]],null]],null]]],{\"statements\":[[0,\"\\n      \"],[1,[23,1,[]],false],[0,\"\\n    \"]],\"parameters\":[1]}],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"id\",\"options\"],[8],[0,\"\\n    \"],[5,\"smart-update-toggle\",[],[[],[]]],[0,\"\\n    \"],[5,\"dark-mode-toggle\",[],[[],[]]],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"span\",true],[10,\"class\",\"label-text\"],[8],[1,[24,[\"codemod\",\"parser\"]],false],[0,\": \"],[7,\"strong\",true],[8],[1,[24,[\"codemod\",\"parserVersion\"]],false],[9],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"main\",true],[8],[0,\"\\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"footer\",true],[8],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"\\n    Built with \"],[7,\"a\",true],[10,\"href\",\"https://emberjs.com\"],[8],[0,\"Ember.js: \"],[1,[22,\"emberVersion\"],false],[9],[0,\" |\\n    \"],[7,\"a\",true],[10,\"href\",\"https://rajasegar.github.io/ast-builder/\"],[8],[0,\"AST-Builder\"],[9],[0,\" |\\n    \"],[7,\"a\",true],[10,\"href\",\"https://rajasegar.github.io/ast-finder/\"],[8],[0,\"AST-Finder\"],[9],[0,\" |\\n    \"],[7,\"a\",true],[10,\"href\",\"https://astexplorer.net/\"],[8],[0,\"AST-Explorer\"],[9],[0,\" |\\n    \"],[7,\"a\",true],[10,\"href\",\"https://github.com/rajasegar/jarvis\"],[8],[0,\"Github\"],[9],[0,\" |\\n    \"],[7,\"a\",true],[10,\"href\",\"https://github.com/rajasegar/jarvis/issues\"],[8],[0,\"Report issues\"],[9],[0,\" \\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "jarvis/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("jarvis/templates/components/ast-maker", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5XKA+QEI",
    "block": "{\"symbols\":[],\"statements\":[[5,\"split-view-horizontal\",[],[[],[]],{\"statements\":[[0,\"\\n  \"],[5,\"split-view-vertical\",[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[1,[28,\"ivy-codemirror\",null,[[\"value\",\"options\",\"valueUpdated\"],[[24,[\"codemod\",\"sourceCode\"]],[28,\"hash\",null,[[\"lineNumbers\",\"mode\",\"theme\"],[true,[24,[\"mode\"]],[24,[\"theme\"]]]]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"codemod\",\"sourceCode\"]]],null]],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[1,[28,\"ivy-codemirror\",null,[[\"value\",\"valueUpdated\",\"options\"],[[24,[\"codemod\",\"destCode\"]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"codemod\",\"destCode\"]]],null]],null],[28,\"hash\",null,[[\"lineNumbers\",\"mode\",\"theme\",\"foldGutter\"],[true,[24,[\"mode\"]],[24,[\"theme\"]],true]]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n  \"],[5,\"split-view-vertical\",[],[[],[]],{\"statements\":[[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[1,[28,\"ivy-codemirror\",null,[[\"value\",\"options\",\"valueUpdated\"],[[24,[\"transform\"]],[28,\"hash\",null,[[\"lineNumbers\",\"mode\",\"theme\",\"autoIndent\"],[true,\"javascript\",[24,[\"theme\"]],true]]],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"transform\"]]],null]],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[1,[28,\"ivy-codemirror\",null,[[\"value\",\"options\"],[[24,[\"output\"]],[28,\"hash\",null,[[\"lineNumbers\",\"mode\",\"theme\",\"autoIndent\"],[true,[24,[\"mode\"]],[24,[\"theme\"]],true]]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "jarvis/templates/components/ast-maker.hbs"
    }
  });

  _exports.default = _default;
});
;define("jarvis/templates/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
});
;define("jarvis/templates/components/basic-dropdown-optional-tag", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-optional-tag"], function (_exports, _basicDropdownOptionalTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownOptionalTag.default;
    }
  });
});
;define("jarvis/templates/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("jarvis/templates/components/basic-dropdown", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});
;define("jarvis/templates/gists", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lrCyg8U/",
    "block": "{\"symbols\":[],\"statements\":[[5,\"ast-maker\",[],[[\"@mode\",\"@code\",\"@dest\",\"@nodeOp\",\"@parser\",\"@gistTransform\"],[[24,[\"codemod\",\"mode\"]],[24,[\"codemod\",\"sourceCode\"]],[24,[\"codemod\",\"destCode\"]],[24,[\"codemod\",\"opCode\"]],[24,[\"codemod\",\"parser\"]],[24,[\"codemod\",\"transform\"]]]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[1,[22,\"version\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "jarvis/templates/gists.hbs"
    }
  });

  _exports.default = _default;
});
;define("jarvis/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "n1r+sw4p",
    "block": "{\"symbols\":[],\"statements\":[[5,\"ast-maker\",[],[[\"@mode\",\"@code\",\"@dest\",\"@nodeOp\",\"@parser\"],[[22,\"mode\"],[22,\"sampleCode\"],[22,\"destCode\"],[22,\"opCode\"],[22,\"parser\"]]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "jarvis/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("jarvis/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _calculatePosition.default;
    }
  });
});
;define("jarvis/utils/compile-module", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = compileModule;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function compileModule(code) {
    var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var exports = {};
    var module = {
      exports: exports
    };
    var globalNames = Object.keys(globals);
    var keys = ['module', 'exports'].concat(_toConsumableArray(globalNames));
    var values = [module, exports].concat(_toConsumableArray(globalNames.map(function (key) {
      return globals[key];
    })));
    new Function(keys.join(), code).apply(exports, values);
    return module.exports;
  }
});
;define("jarvis/utils/op-query", ["exports", "recastBabel", "ember-template-recast", "ast-node-builder"], function (_exports, _recastBabel, _emberTemplateRecast, _astNodeBuilder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = opQuery;
  var buildAST = _astNodeBuilder.es6.buildAST;

  function opQueryJS(nodeOp, dest) {
    var str = "";
    var newNode;

    switch (nodeOp) {
      case "remove":
        str = ".remove();";
        break;

      case "replace":
        newNode = buildAST(_recastBabel.default.parse(dest), false);
        str = ".replaceWith(path => {\n          return ".concat(newNode, ";\n        })");
        break;

      case "insert-before":
        newNode = buildAST(_recastBabel.default.parse(dest));
        str = ".forEach(path => {\n        path.parent.insertBefore(".concat(newNode, ");\n        })");
        break;

      case "insert-after":
        newNode = buildAST(_recastBabel.default.parse(dest));
        str = ".forEach(path => {\n        path.parent.insertAfter(".concat(newNode, ");\n        })");
        break;
    }

    return str;
  }

  function opQueryGlimmer(nodeOp, dest) {
    var str = "";

    switch (nodeOp) {
      case "remove":
        str = "return null;";
        break;

      case "replace":
        str = "return ".concat(_astNodeBuilder.glimmer.buildAST(_emberTemplateRecast.default.parse(dest)), ";");
        break;
    }

    return str;
  }

  function opQuery(mode, nodeOp, dest) {
    var _query = "";

    switch (mode) {
      case "javascript":
        _query = opQueryJS(nodeOp, dest);
        break;

      case "handlebars":
        _query = opQueryGlimmer(nodeOp, dest);
        break;
    }

    return _query;
  }
});
;define("jarvis/utils/smart-op", ["exports", "recastBabel", "deep-diff"], function (_exports, _recastBabel, _deepDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = smartOp;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function getDiff(source, dest) {
    var differences = (0, _deepDiff.diff)(source, dest, {
      prefilter: function prefilter(path, key) {
        return ~['loc', 'tokens', 'raw', 'start', 'end'].indexOf(key);
      }
    });
    return differences;
  } // Build object access path 
  // buildPath(['a','b','c']) => a.b.c


  function buildPath(items) {
    return items.map(function (i) {
      return typeof i === 'number' ? "[".concat(i, "]") : i;
    }).join('.').replace('.[', '[');
  }

  function varDeclUpdate(source, dest) {
    var differences = (0, _deepDiff.diff)(source, dest, {
      prefilter: function prefilter(path, key) {
        return ~['loc', 'tokens', 'raw', 'start', 'end'].indexOf(key);
      }
    });
    var updates = differences.map(function (d) {
      return "".concat(buildPath(['path', 'value'].concat(_toConsumableArray(d.path))), " = '").concat(d.rhs, "';");
    });
    return ".forEach(path => {\n  ".concat(updates.join('\n'), "\n  })");
  }

  function expressionUpdate(source, dest) {
    var differences = getDiff(source, dest);
    var updates = [];
    console.log(differences); //eslint-disable-line

    differences.forEach(function (diff) {
      var _update = '';

      switch (diff.kind) {
        case 'E':
          // DiffEdit
          _update = "".concat(buildPath(['path', 'value'].concat(_toConsumableArray(diff.path))), " = '").concat(diff.rhs, "';");
          updates.push(_update);
          break;

        case 'A':
          // DiffArray
          switch (diff.item.kind) {
            case 'N':
              // DiffNew
              _update = "".concat(buildPath(['path', 'value'].concat(_toConsumableArray(diff.path))), ".push(j.literal(").concat(diff.item.rhs.value, "));");
              updates.push(_update);
              break;

            case 'D':
              // DiffNew
              _update = "".concat(buildPath(['path', 'value'].concat(_toConsumableArray(diff.path))), ".removeAt(").concat(diff.index, ", 1);");
              updates.push(_update);
              break;

            default:
              break;
          }

          break;

        default:
          break;
      }
    });
    return ".forEach(path => {\n  ".concat(updates.join('\n'), "\n  })");
  }

  function smartOp(input, output) {
    var inputAst = _recastBabel.default.parse(input);

    var nodeType = inputAst.program.body[0].type;
    var sourceNode = inputAst.program.body[0];

    var outputAst = _recastBabel.default.parse(output);

    var destNode = outputAst.program.body[0];
    var str = '';

    switch (nodeType) {
      case 'VariableDeclaration':
        str = varDeclUpdate(sourceNode.declarations[0], destNode.declarations[0]);
        break;

      case 'ExpressionStatement':
        str = expressionUpdate(sourceNode.expression, destNode.expression);
        break;

      default:
        console.log('smartOp => ', nodeType); // eslint-disable-line

        break;
    }

    return str;
  }
});
;

;define('jarvis/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("jarvis/app")["default"].create({"name":"jarvis","version":"0.0.0+584ca656"});
          }
        
//# sourceMappingURL=jarvis.map
