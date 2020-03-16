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

/***/ "./src/forum/addWarningControl.js":
/*!****************************************!*\
  !*** ./src/forum/addWarningControl.js ***!
  \****************************************/
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
/* harmony import */ var _components_WarningModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WarningModal */ "./src/forum/components/WarningModal.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a, 'moderationControls', function (items, post) {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.canManageWarnings()) return;
    items.add('warning', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: "fas fa-exclamation-circle",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_WarningModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          callback: function callback() {},
          user: post.user(),
          post: post
        }));
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('askvortsov-moderator-warnings.forum.post_controls.warning_button')));
  });
});

/***/ }),

/***/ "./src/forum/addWarningPage.js":
/*!*************************************!*\
  !*** ./src/forum/addWarningPage.js ***!
  \*************************************/
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
/* harmony import */ var _components_WarningPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/WarningPage */ "./src/forum/components/WarningPage.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes['user.warnings'] = {
    path: '/u/:username/warnings',
    component: _components_WarningPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    if (app.session.user.canViewWarnings() || this.user.id() === app.session.user.id()) {
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

/***/ "./src/forum/components/WarningList.js":
/*!*********************************************!*\
  !*** ./src/forum/components/WarningList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningList; });
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
/* harmony import */ var _WarningModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WarningModal */ "./src/forum/components/WarningModal.js");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__);











var WarningList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WarningList, _Component);

  function WarningList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WarningList.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.loading = true;
    this.warnings = [];
    this.user = this.props.params.user;
    this.refresh();
  };

  _proto.view = function view() {
    var loading;

    if (this.loading) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component();
    }

    return m("div", {
      className: "WarningList"
    }, m("h1", {
      className: "WarningList-warnings"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning-list.warnings', {
      strikes: this.user.strikeCount()
    })), m("div", {
      "class": "Warnings-toolbar"
    }, m("ul", {
      className: "Warnings-toolbar-action"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default()(this.actionItems().toArray()))), m("ul", {
      className: "WarningList-Warnings"
    }, this.warnings.map(function (warning) {
      return m("li", {
        key: warning.id(),
        "data-id": warning.id()
      }, _WarningListItem__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        warning: warning
      }));
    }), !this.loading && this.warnings.length === 0 && m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning-list.no-warnings'))), m("div", {
      className: "WarningList-loadMore"
    }, loading));
  };

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default.a();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user.canManageWarnings()) {
      items.add('create_warning', flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        children: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning-list.add_button'),
        className: 'Button Button--primary',
        onclick: this.handleOnClickCreate.bind(this)
      }));
    }

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

    return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find('warnings', this.user.id()).then(function (results) {
      _this.warnings = [];

      _this.parseResults(results);
    }, function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.handleOnClickCreate = function handleOnClickCreate(e) {
    e.preventDefault();
    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(new _WarningModal__WEBPACK_IMPORTED_MODULE_7__["default"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      callback: this.refresh.bind(this)
    }, this.props.params)));
  };

  return WarningList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/WarningListItem.js":
/*!*************************************************!*\
  !*** ./src/forum/components/WarningListItem.js ***!
  \*************************************************/
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
      className: "WarningListItem"
    }, m("div", {
      className: "WarningListItem-main"
    }, m("h3", {
      className: "WarningListItem-title"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(addedByUser),
      strikes: warning.strikes()
    })), formatedDate, m("ul", {
      className: "WarningListItem-info"
    }, m("li", {
      className: "item-excerpt"
    }, m("span", null, warning.public_comment())), app.session.user.canManageWarnings() ? m("li", {
      className: "item-excerpt"
    }, m("span", null, warning.private_comment())) : '')));
  };

  return WarningListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningModal.js":
/*!**********************************************!*\
  !*** ./src/forum/components/WarningModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var WarningModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningModal, _Modal);

  function WarningModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = WarningModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.publicComment = m.prop('');
    this.privateComment = m.prop('');
    this.strikes = m.prop(0);
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
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning-modal.strikes_heading'), m("input", {
      type: "number",
      className: "FormControl",
      value: this.strikes(),
      min: "0",
      max: "5",
      required: true,
      oninput: m.withAttr('value', this.strikes)
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning-modal.public_comment_heading', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.props.user)
    }), m("textarea", {
      className: "FormControl",
      value: this.publicComment(),
      required: true,
      oninput: m.withAttr('value', this.publicComment),
      rows: "6"
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning-modal.private_comment_heading', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.props.user)
    }), m("textarea", {
      className: "FormControl",
      value: this.privateComment(),
      oninput: m.withAttr('value', this.privateComment),
      rows: "6"
    })))), m("div", {
      className: "Form-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning-modal.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    var newWarning = {
      userId: this.props.user.id(),
      strikes: this.strikes(),
      public_comment: this.publicComment(),
      private_comment: this.privateComment()
    };

    if (this.props.post) {
      newWarning.postId = this.props.post.id();
    }

    app.store.createRecord('warnings').save(newWarning).then(this.hide.bind(this)).then(this.props.callback)["catch"](function () {});
  };

  return WarningModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningPage.js":
/*!*********************************************!*\
  !*** ./src/forum/components/WarningPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WarningList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WarningList */ "./src/forum/components/WarningList.js");




var WarningPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningPage, _UserPage);

  function WarningPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = WarningPage.prototype;

  _proto.init = function init() {
    _UserPage.prototype.init.call(this);

    this.loadUser(m.route.param('username'));
  };

  _proto.content = function content() {
    return m("div", {
      className: "WarningsUserPage"
    }, _WarningList__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      params: {
        user: this.user,
        sort: 'newest'
      }
    }));
  };

  return WarningPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var _addWarningPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWarningPage */ "./src/forum/addWarningPage.js");
/* harmony import */ var _addWarningControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addWarningControl */ "./src/forum/addWarningControl.js");
/* harmony import */ var _model_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Warning */ "./src/forum/model/Warning.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_7__);








flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('askvortsov/flarum-moderator-warnings', function (app) {
  app.store.models.warnings = _model_Warning__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.canViewWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('canViewWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.canManageWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('canManageWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.strikeCount = flarum_Model__WEBPACK_IMPORTED_MODULE_7___default.a.attribute('strikeCount');
  Object(_addWarningControl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_addWarningPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
var extend = [new _flarum_core_forum__WEBPACK_IMPORTED_MODULE_4__["Extend"].Model('warnings', _model_Warning__WEBPACK_IMPORTED_MODULE_3__["default"])];

/***/ }),

/***/ "./src/forum/model/Warning.js":
/*!************************************!*\
  !*** ./src/forum/model/Warning.js ***!
  \************************************/
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
  public_comment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('public_comment'),
  private_comment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('private_comment'),
  strikes: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('strikes'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  hiddenAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('hiddenAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  addedByUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('addedByUser'),
  hiddenByUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('hiddenByUser'),
  post: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('post')
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