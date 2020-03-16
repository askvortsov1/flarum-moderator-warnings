module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["extend"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addModerationWarningsControl.js":
/*!**************************************************!*\
  !*** ./src/forum/addModerationWarningsControl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WarningsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WarningsModal */ "./src/forum/components/WarningsModal.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a, 'moderationControls', function (items, post) {
    if (!post.canManageWarnings()) return;
    console.log(post);
    console.log(post.props);
    var user = post.user();
    items.add('warning', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: "fas fa-exclamation-circle",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_WarningsModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          callback: function callback() {},
          user: user
        }));
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('askvortsov-moderator-warnings.forum.post_controls.warning_button')));
  });
});

/***/ }),

/***/ "./src/forum/addWarningsPage.js":
/*!**********************************************!*\
  !*** ./src/forum/addWarningsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_WarningsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/WarningsPage */ "./src/forum/components/WarningsPage.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canViewWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('canViewWarnings');
  app.routes['user.warnings'] = {
    path: '/u/:username/warnings',
    component: _components_WarningsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    if (this.user.canViewWarnings()) {
      items.add('warnings', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        href: app.route('user.warnings', {
          username: this.user.username()
        }),
        children: app.translator.trans('askvortsov-moderator-warnings.forum.user.warnings'),
        icon: 'fas fa-exclamation-circle'
      }), 10);
    }
  });
});

/***/ }),

/***/ "./src/forum/components/Warnings.js":
/*!**************************************************!*\
  !*** ./src/forum/components/Warnings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warnings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _WarningListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WarningListItem */ "./src/forum/components/WarningListItem.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WarningsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WarningsModal */ "./src/forum/components/WarningsModal.js");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__);











var Warnings = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Warnings, _Component);

  function Warnings() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Warnings.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.loading = true;
    this.warnings = [];
    this.refresh();
  };

  _proto.view = function view() {
    var loading;

    if (this.loading) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component();
    }

    return m("div", {
      className: "DiscussionList"
    }, m("h1", {
      className: "DiscussionList-warnings"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.user.warnings')), m("div", {
      "class": "Warnings-toolbar"
    }, m("ul", {
      className: "Warnings-toolbar-action"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default()(this.actionItems().toArray()))), m("ul", {
      className: "DiscussionList-discussions"
    }, this.warnings.map(function (warning) {
      return m("li", {
        key: warning.id(),
        "data-id": warning.id()
      }, _WarningListItem__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        warning: warning
      }));
    }), !this.loading && this.warnings.length === 0 && m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.Warnings.noWarnings'))), m("div", {
      className: "DiscussionList-loadMore"
    }, loading));
  };

  _proto.actionItems = function actionItems() {
    var user = this.props.params.user;
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default.a();
    var canCreateWarning = user.canManageWarnings();
    items.add('create_warning', flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.Warnings.add_button'),
      className: 'Button Button--primary',
      onclick: this.handleOnClickCreate.bind(this),
      disabled: !canCreateWarning
    }));
    return items;
  };

  _proto.parseResults = function parseResults(results) {
    [].push.apply(this.warnings, results);
    this.loading = false;
    m.lazyRedraw();
    return results;
  };

  _proto.refresh = function refresh() {
    var _this = this;

    return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find('warnings', this.props.params.user.id()).then(function (results) {
      _this.warnings = [];

      _this.parseResults(results);
    }, function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.handleOnClickCreate = function handleOnClickCreate(e) {
    e.preventDefault();
    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(new _WarningsModal__WEBPACK_IMPORTED_MODULE_7__["default"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      callback: this.refresh.bind(this)
    }, this.props.params)));
  };

  return Warnings;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/WarningsModal.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/WarningsModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var WarningsModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningsModal, _Modal);

  function WarningsModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = WarningsModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.warningContent = m.prop('');
    this.warningPoints = m.prop(0);
  };

  _proto.className = function className() {
    return 'WarningsModal Modal--large';
  };

  _proto.title = function title() {
    return app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.create-heading');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.points_heading'), m("input", {
      type: "number",
      className: "FormControl",
      value: this.warningPoints(),
      min: "0",
      max: "5",
      oninput: m.withAttr('value', this.warningPoints)
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.input_heading', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.props.user)
    }), m("textarea", {
      className: "FormControl",
      value: this.warningContent(),
      oninput: m.withAttr('value', this.warningContent),
      rows: "6"
    })))), m("div", {
      className: "Form-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    app.store.createRecord('warnings').save({
      userId: this.props.user.id(),
      points: this.warningPoints(),
      comment: this.warningContent()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this)).then(this.props.callback)["catch"](function () {});
  };

  _proto.onerror = function onerror(error) {
    if (error.status === 422) {
      error.alert.props.children = app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.no_content_given');
    }

    _Modal.prototype.onerror.call(this, error);
  };

  return WarningsModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningsPage.js":
/*!******************************************************!*\
  !*** ./src/forum/components/WarningsPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Warnings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Warnings */ "./src/forum/components/Warnings.js");




var WarningsPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningsPage, _UserPage);

  function WarningsPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = WarningsPage.prototype;

  _proto.init = function init() {
    _UserPage.prototype.init.call(this);

    this.loadUser(m.route.param('username'));
  };

  _proto.content = function content() {
    return m("div", {
      className: "DiscussionsUserPage"
    }, _Warnings__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      params: {
        user: this.user,
        sort: 'newest'
      }
    }));
  };

  return WarningsPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningListItem.js":
/*!************************************************!*\
  !*** ./src/forum/components/WarningListItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__);





var WarningListItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningListItem, _Component);

  function WarningListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WarningListItem.prototype;

  _proto.view = function view() {
    var warning = this.props.warning;
    var addedByUser = warning.addedByUser();
    var formatedDate = flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default()(warning.createdAt());
    return m("div", {
      className: "DiscussionListItem"
    }, m("div", {
      className: "DiscussionListItem-main"
    }, m("h3", {
      className: "DiscussionListItem-title"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.list_item_heading', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(addedByUser),
      points: warning.points()
    })), formatedDate, m("ul", {
      className: "DiscussionListItem-info"
    }, m("li", {
      className: "item-excerpt"
    }, m("span", null, warning.comment())))));
  };

  return WarningListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addWarningsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWarningsPage */ "./src/forum/addWarningsPage.js");
/* harmony import */ var _addModerationWarningsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addModerationWarningsControl */ "./src/forum/addModerationWarningsControl.js");
/* harmony import */ var _model_Warnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Warnings */ "./src/forum/model/Warnings.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_7__);








flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('askvortsov/flarum-moderator-warnings', function (app) {
  app.store.models.Warnings = _model_Warnings__WEBPACK_IMPORTED_MODULE_3__["default"];
  app.store.models.warnings = _model_Warnings__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.canViewWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('canViewWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.canManageWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('canManageWarnings');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canManageWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('canManageWarnings');
  Object(_addModerationWarningsControl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_addWarningsPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
var extend = [new _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__["Extend"].Model('Warnings', _model_Warnings__WEBPACK_IMPORTED_MODULE_3__["default"])];

/***/ }),

/***/ "./src/forum/model/Warnings.js":
/*!********************************************!*\
  !*** ./src/forum/model/Warnings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warnings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);




var Warnings = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Warnings, _Model);

  function Warnings() {
    return _Model.apply(this, arguments) || this;
  }

  return Warnings;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Warnings.prototype, {
  id: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('id'),
  comment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('comment'),
  points: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('points'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  addedByUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('addedByUser')
});

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/fullTime":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/fullTime']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/fullTime'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map