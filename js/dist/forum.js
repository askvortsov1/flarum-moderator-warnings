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

/***/ "./src/forum/addModeratorStrikesPage.js":
/*!**********************************************!*\
  !*** ./src/forum/addModeratorStrikesPage.js ***!
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
/* harmony import */ var _components_ModeratorStrikesPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ModeratorStrikesPage */ "./src/forum/components/ModeratorStrikesPage.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canViewModeratorStrikes = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('canViewModeratorStrikes');
  app.routes['user.strikes'] = {
    path: '/u/:username/strikes',
    component: _components_ModeratorStrikesPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    if (this.user.canViewModeratorStrikes()) {
      items.add('strikes', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        href: app.route('user.strikes', {
          username: this.user.username()
        }),
        children: app.translator.trans('askvortsov-moderator-strikes.forum.user.strikes'),
        icon: 'fas fa-exclamation-circle'
      }), 10);
    }
  });
});

/***/ }),

/***/ "./src/forum/components/ModeratorStrikes.js":
/*!**************************************************!*\
  !*** ./src/forum/components/ModeratorStrikes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeratorStrikes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StrikeListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StrikeListItem */ "./src/forum/components/StrikeListItem.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ModeratorStrikesModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModeratorStrikesModal */ "./src/forum/components/ModeratorStrikesModal.js");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9__);











var ModeratorStrikes = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ModeratorStrikes, _Component);

  function ModeratorStrikes() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ModeratorStrikes.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.loading = true;
    this.strikes = [];
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
      className: "DiscussionList-strikes"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-strikes.forum.user.strikes')), m("div", {
      "class": "ModeratorStrikes-toolbar"
    }, m("ul", {
      className: "ModeratorStrikes-toolbar-action"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default()(this.actionItems().toArray()))), m("ul", {
      className: "DiscussionList-discussions"
    }, this.strikes.map(function (strike) {
      return m("li", {
        key: strike.id(),
        "data-id": strike.id()
      }, _StrikeListItem__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        strike: strike
      }));
    }), !this.loading && this.strikes.length === 0 && m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.noStrikes'))), m("div", {
      className: "DiscussionList-loadMore"
    }, loading));
  };

  _proto.actionItems = function actionItems() {
    var user = this.props.params.user;
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default.a();
    var canCreateStrike = user.canManageModeratorStrikes();
    items.add('create_strike', flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.add_button'),
      className: 'Button Button--primary',
      onclick: this.handleOnClickCreate.bind(this),
      disabled: !canCreateStrike
    }));
    return items;
  };

  _proto.parseResults = function parseResults(results) {
    [].push.apply(this.strikes, results);
    this.loading = false;
    m.lazyRedraw();
    return results;
  };

  _proto.refresh = function refresh() {
    var _this = this;

    return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find('strikes', this.props.params.user.id()).then(function (results) {
      _this.strikes = [];

      _this.parseResults(results);
    }, function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.handleOnClickCreate = function handleOnClickCreate(e) {
    e.preventDefault();
    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(new _ModeratorStrikesModal__WEBPACK_IMPORTED_MODULE_7__["default"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      callback: this.refresh.bind(this)
    }, this.props.params)));
  };

  return ModeratorStrikes;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/ModeratorStrikesModal.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/ModeratorStrikesModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeratorStrikesCreate; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var ModeratorStrikesCreate = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ModeratorStrikesCreate, _Modal);

  function ModeratorStrikesCreate() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ModeratorStrikesCreate.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.strikeContent = m.prop('');
    this.strikePoints = m.prop(0);
  };

  _proto.className = function className() {
    return 'ModeratorStrikesCreateModal Modal--large';
  };

  _proto.title = function title() {
    return app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.create-heading');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.points_heading'), m("input", {
      type: "number",
      className: "FormControl",
      value: this.strikePoints(),
      min: "0",
      max: "5",
      oninput: m.withAttr('value', this.strikePoints)
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.input_heading', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.props.user)
    }), m("textarea", {
      className: "FormControl",
      value: this.strikeContent(),
      oninput: m.withAttr('value', this.strikeContent),
      rows: "6"
    })))), m("div", {
      className: "Form-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    app.store.createRecord('strikes').save({
      userId: this.props.user.id(),
      points: this.strikePoints(),
      comment: this.strikeContent()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this)).then(this.props.callback)["catch"](function () {});
  };

  _proto.onerror = function onerror(error) {
    if (error.status === 422) {
      error.alert.props.children = app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.no_content_given');
    }

    _Modal.prototype.onerror.call(this, error);
  };

  return ModeratorStrikesCreate;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ModeratorStrikesPage.js":
/*!******************************************************!*\
  !*** ./src/forum/components/ModeratorStrikesPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeratorStrikesPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModeratorStrikes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModeratorStrikes */ "./src/forum/components/ModeratorStrikes.js");




var ModeratorStrikesPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ModeratorStrikesPage, _UserPage);

  function ModeratorStrikesPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = ModeratorStrikesPage.prototype;

  _proto.init = function init() {
    _UserPage.prototype.init.call(this);

    this.loadUser(m.route.param('username'));
  };

  _proto.content = function content() {
    return m("div", {
      className: "DiscussionsUserPage"
    }, _ModeratorStrikes__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      params: {
        user: this.user,
        sort: 'newest'
      }
    }));
  };

  return ModeratorStrikesPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/StrikeListItem.js":
/*!************************************************!*\
  !*** ./src/forum/components/StrikeListItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StrikeListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__);





var StrikeListItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StrikeListItem, _Component);

  function StrikeListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = StrikeListItem.prototype;

  _proto.view = function view() {
    var strike = this.props.strike;
    var addedByUser = strike.addedByUser();
    var formatedDate = flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default()(strike.createdAt());
    return m("div", {
      className: "DiscussionListItem"
    }, m("div", {
      className: "DiscussionListItem-main"
    }, m("h3", {
      className: "DiscussionListItem-title"
    }, app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.list_item_heading', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(addedByUser),
      points: strike.points()
    })), formatedDate, m("ul", {
      className: "DiscussionListItem-info"
    }, m("li", {
      className: "item-excerpt"
    }, m("span", null, strike.comment())))));
  };

  return StrikeListItem;
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
/* harmony import */ var _addModeratorStrikesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addModeratorStrikesPage */ "./src/forum/addModeratorStrikesPage.js");
/* harmony import */ var _model_ModeratorStrike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/ModeratorStrike */ "./src/forum/model/ModeratorStrike.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_5__);






flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('askvortsov/flarum-moderator-strikes', function (app) {
  app.store.models.moderatorStrike = _model_ModeratorStrike__WEBPACK_IMPORTED_MODULE_2__["default"];
  app.store.models.strikes = _model_ModeratorStrike__WEBPACK_IMPORTED_MODULE_2__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canViewModeratorStrikes = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canViewModeratorStrikes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canManageModeratorStrikes = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canManageModeratorStrikes');
  Object(_addModeratorStrikesPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
var extend = [new _flarum_core_forum__WEBPACK_IMPORTED_MODULE_3__["Extend"].Model('moderatorStrikes', _model_ModeratorStrike__WEBPACK_IMPORTED_MODULE_2__["default"])];

/***/ }),

/***/ "./src/forum/model/ModeratorStrike.js":
/*!********************************************!*\
  !*** ./src/forum/model/ModeratorStrike.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModeratorStrike; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);




var ModeratorStrike = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ModeratorStrike, _Model);

  function ModeratorStrike() {
    return _Model.apply(this, arguments) || this;
  }

  return ModeratorStrike;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(ModeratorStrike.prototype, {
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

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map