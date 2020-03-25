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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

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
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/UserControls */ "flarum/utils/UserControls");
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_WarningModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WarningModal */ "./src/forum/components/WarningModal.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default.a, 'moderationControls', function (items, post) {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user || !flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.canManageWarnings()) return;
    items.add('warning', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: "fas fa-exclamation-circle",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_WarningModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
          callback: function callback() {
            location.reload();
          },
          user: post.user(),
          post: post
        }));
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('askvortsov-moderator-warnings.forum.post_controls.warning_button')));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default.a, 'moderationControls', function (items, user) {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user || !flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.canManageWarnings()) return;
    items.add('warning', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: "fas fa-exclamation-circle",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_WarningModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
          callback: function callback() {
            location.reload();
          },
          user: user
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




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes['user.warnings'] = {
    path: '/u/:username/warnings',
    component: _components_WarningPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    if (app.session.user && (app.session.user.canViewWarnings() || this.user.id() === app.session.user.id() && this.user.visibleWarningCount() > 0)) {
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

/***/ "./src/forum/addWarningsToPosts.js":
/*!*****************************************!*\
  !*** ./src/forum/addWarningsToPosts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addWarningsToPosts; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostWarningList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PostWarningList */ "./src/forum/components/PostWarningList.js");





function addWarningsToPosts() {
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.warnings = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('warnings');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'footerItems', function (items) {
    var post = this.props.post;
    var warnings = post.warnings();
    if (!warnings) return;
    items.add("warnings", _components_PostWarningList__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      post: post
    }));
  });
}

/***/ }),

/***/ "./src/forum/components/PostWarning.js":
/*!*********************************************!*\
  !*** ./src/forum/components/PostWarning.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostWarning; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WarningPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WarningPreview */ "./src/forum/components/WarningPreview.js");






var PostWarning = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostWarning, _Component);

  function PostWarning() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PostWarning.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.warning = this.props.warning;
  };

  _proto.view = function view() {
    return m("div", {
      className: "Post-warning"
    }, m("span", {
      className: "Post-warning-summary"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-exclamation-circle'), this.warning.strikes() ? app.translator.trans('askvortsov-moderator-warnings.forum.post.warning', {
      strikes: this.warning.strikes(),
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.warning.addedByUser())
    }) : app.translator.trans('askvortsov-moderator-warnings.forum.post.warning_no_strikes', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.warning.addedByUser())
    })));
  };

  _proto.config = function config(isInitialized) {
    var _this = this;

    if (isInitialized) return;
    var warning = this.warning;
    var timeout;

    var hidePreview = function hidePreview() {
      _this.$('.Post-warning-preview').removeClass('in').one('transitionend', function () {
        $(this).hide();
      });
    };

    var $preview = $('<ul class="Dropdown-menu Post-warning-preview fade"/>');
    this.$().append($preview);
    this.$().children().hover(function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (!$preview.hasClass('in') && $preview.is(':visible')) return; // When the user hovers their mouse over the list of people who have
        // replied to the post, render a list of reply previews into a
        // popup.

        m.render($preview[0], m("li", {
          "data-id": warning.id()
        }, _WarningPreview__WEBPACK_IMPORTED_MODULE_4__["default"].component({
          warning: warning
        })));
        $preview.show();
        setTimeout(function () {
          return $preview.off('transitionend').addClass('in');
        });
      }, 200);
    }, function () {
      clearTimeout(timeout);
      timeout = setTimeout(hidePreview, 250);
    }); // Whenever the user hovers their mouse over a particular name in the
    // list of repliers, highlight the corresponding post in the preview
    // popup.

    $('.Post-warning').find('.Post-warning-summary a').hover(function () {
      $('.Post-warning').find('[data-number="' + $(this).data('number') + '"]').addClass('active');
    }, function () {
      $('.Post-warning').find('[data-number]').removeClass('active');
    });
  };

  return PostWarning;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostWarningList.js":
/*!*************************************************!*\
  !*** ./src/forum/components/PostWarningList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostWarningList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostWarning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostWarning */ "./src/forum/components/PostWarning.js");
/* harmony import */ var _WarningPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WarningPreview */ "./src/forum/components/WarningPreview.js");





var PostWarningList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostWarningList, _Component);

  function PostWarningList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PostWarningList.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.post = this.props.post;
  };

  _proto.view = function view() {
    return m("div", {
      className: "Post-warning-list"
    }, this.props.post.warnings().map(function (warning) {
      return _PostWarning__WEBPACK_IMPORTED_MODULE_2__["default"].component({
        warning: warning
      });
    }));
  };

  return PostWarningList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningControls.js":
/*!*************************************************!*\
  !*** ./src/forum/components/WarningControls.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Separator */ "flarum/components/Separator");
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Separator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The `WarningControls` utility constructs a list of buttons for a warning which
 * perform actions on it.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Get a list of controls for a warning.
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @public
   */
  controls: function controls(warning, context) {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    ['user', 'moderation', 'destructive'].forEach(function (section) {
      var controls = _this[section + 'Controls'](warning, context).toArray();

      if (controls.length) {
        controls.forEach(function (item) {
          return items.add(item.itemName, item);
        });
        items.add(section + 'Separator', flarum_components_Separator__WEBPACK_IMPORTED_MODULE_1___default.a.component());
      }
    });
    return items;
  },

  /**
   * Get controls for a warning pertaining to the current user (e.g. report).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  userControls: function userControls(warning, context) {
    return new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
  },

  /**
   * Get controls for a warning pertaining to moderation (e.g. edit).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  moderationControls: function moderationControls(warning, context) {
    return new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
  },

  /**
   * Get controls for a warning that are destructive (e.g. delete).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  destructiveControls: function destructiveControls(warning, context) {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (!warning.isHidden() && app.session.user.canManageWarnings()) {
      items.add('hide', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
        icon: 'far fa-trash-alt',
        children: app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.delete_button'),
        onclick: this.hideAction.bind(warning)
      }));
    }

    if (warning.isHidden() && app.session.user.canManageWarnings()) {
      items.add('restore', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
        icon: 'fas fa-reply',
        children: app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.restore_button'),
        onclick: this.restoreAction.bind(warning)
      }));
    }

    if (warning.isHidden() && app.session.user.canDeleteWarnings()) {
      items.add('delete', flarum_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a.component({
        icon: 'fas fa-times',
        children: app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.delete_forever_button'),
        onclick: this.deleteAction.bind(warning, context)
      }));
    }

    return items;
  },

  /**
   * Hide a warning.
   *
   * @return {Promise}
   */
  hideAction: function hideAction() {
    this.pushAttributes({
      hiddenAt: new Date(),
      hiddenUser: app.session.user
    });
    return this.save({
      isHidden: true
    }).then(function () {
      return m.redraw();
    });
  },

  /**
   * Restore a warning.
   *
   * @return {Promise}
   */
  restoreAction: function restoreAction() {
    this.pushAttributes({
      hiddenAt: null,
      hiddenUser: null
    });
    return this.save({
      isHidden: false
    }).then(function () {
      return m.redraw();
    });
  },

  /**
   * Delete a warning.
   *
   * @return {Promise}
   */
  deleteAction: function deleteAction(context) {
    if (context) context.loading = true;
    return this["delete"]().then(function () {})["catch"](function () {}).then(function () {
      if (context) context.loading = false;
      location.reload();
    });
  }
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
    }, this.strikeCount() ? flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning_list.warnings', {
      strikes: this.strikeCount()
    }) : flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning_list.warnings_no_strikes')), m("div", {
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
    }), !this.loading && this.warnings.length === 0 && m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning_list.no-warnings'))), m("div", {
      className: "WarningList-loadMore"
    }, loading));
  };

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_9___default.a();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user.canManageWarnings()) {
      items.add('create_warning', flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
        children: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('askvortsov-moderator-warnings.forum.warning_list.add_button'),
        className: 'Button Button--primary',
        onclick: this.handleOnClickCreate.bind(this)
      }));
    }

    return items;
  };

  _proto.strikeCount = function strikeCount() {
    return this.warnings.filter(function (warning) {
      return !warning.isHidden();
    }).map(function (warning) {
      return warning.strikes();
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
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
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _WarningPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WarningPost */ "./src/forum/components/WarningPost.js");
/* harmony import */ var _WarningControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WarningControls */ "./src/forum/components/WarningControls.js");









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
    var controls = _WarningControls__WEBPACK_IMPORTED_MODULE_7__["default"].controls(warning, this).toArray();
    var attrs = this.attrs();
    return m("div", attrs, controls.length ? flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      icon: 'fas fa-ellipsis-v',
      children: controls,
      className: 'WarningListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
    }) : '', m("div", {
      className: "WarningListItem-main"
    }, m("h3", {
      className: "WarningListItem-title"
    }, warning.isHidden() ? app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading_hidden', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(addedByUser),
      strikes: warning.strikes()
    }) : app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading', {
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(addedByUser),
      strikes: warning.strikes()
    })), formatedDate, m("br", null), m("ul", {
      className: "WarningListItem-info"
    }, warning.post() ? m("li", {
      className: "item-excerpt"
    }, m("h4", {
      className: "WarningListItem-subtitle"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.linked_post')), _WarningPost__WEBPACK_IMPORTED_MODULE_6__["default"].component({
      post: warning.post()
    })) : '', m("li", {
      className: "item-excerpt"
    }, m("h4", {
      className: "WarningListItem-subtitle"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.public_comment')), m("span", null, warning.public_comment())), app.session.user.canManageWarnings() ? m("li", {
      className: "item-excerpt"
    }, m("h4", {
      className: "WarningListItem-subtitle"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.private_comment')), m("span", null, warning.private_comment())) : '')));
  };

  _proto.attrs = function attrs() {
    var warning = this.props.warning;
    var attrs = {};
    attrs.className = (attrs.className || '') + ' ' + flarum_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()({
      'WarningListItem': true,
      'WarningListItem--hidden': warning.isHidden()
    });
    return attrs;
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
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.strikes_heading'), m("input", {
      type: "number",
      className: "FormControl",
      value: this.strikes(),
      min: "0",
      max: "5",
      oninput: m.withAttr('value', this.strikes)
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.public_comment_heading', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.props.user)
    }), m("textarea", {
      className: "FormControl",
      value: this.publicComment(),
      required: true,
      oninput: m.withAttr('value', this.publicComment),
      rows: "6"
    })))), m("div", {
      className: "Form-group"
    }, m("div", null, m("label", null, app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.private_comment_heading', {
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
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    if (!this.strikes()) {
      this.strikes(0);
    }

    var newWarning = {
      userId: this.props.user.id(),
      strikes: this.strikes(),
      public_comment: this.publicComment(),
      private_comment: this.privateComment()
    };

    if (this.props.post) {
      newWarning.post = this.props.post;
    }

    app.store.createRecord('warnings').save(newWarning).then(this.hide.bind(this)).then(this.props.callback)["catch"](function () {});
  };

  return WarningModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningNotification.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/WarningNotification.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__);





var WarningNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningNotification, _Notification);

  function WarningNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = WarningNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-exclamation-circle';
  };

  _proto.href = function href() {
    return app.route('user.warnings', {
      username: app.session.user.username()
    });
  };

  _proto.content = function content() {
    var warning = this.props.notification.subject();

    if (warning.strikes()) {
      return app.translator.trans('askvortsov-moderator-warnings.forum.notifications.warning_text', {
        mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(this.props.notification.fromUser()),
        strikes: warning.strikes()
      });
    } else {
      return app.translator.trans('askvortsov-moderator-warnings.forum.notifications.warning_no_strikes_text', {
        mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(this.props.notification.fromUser())
      });
    }
  };

  return WarningNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



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

/***/ "./src/forum/components/WarningPost.js":
/*!*********************************************!*\
  !*** ./src/forum/components/WarningPost.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningPost; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/PostPreview */ "flarum/components/PostPreview");
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__);




var WarningPost = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningPost, _Component);

  function WarningPost() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WarningPost.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "WarningPost"
    }, m("ul", {
      "class": "Dropdown-menu PostPreview-preview fade in"
    }, m("li", null, flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      post: this.props.post
    }))));
  };

  _proto.config = function config(isInitialized) {
    if (isInitialized) return;
    var timeout;
    this.$('.PostPreview-preview').show().css('position', 'relative');
  };

  return WarningPost;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/WarningPreview.js":
/*!************************************************!*\
  !*** ./src/forum/components/WarningPreview.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WarningPreview; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var WarningPreview = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WarningPreview, _Component);

  function WarningPreview() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WarningPreview.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.warning = this.props.warning;
  };

  _proto.view = function view() {
    var formatedDate = flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_2___default()(this.warning.createdAt());
    return m("a", {
      className: "WarningPreview",
      href: app.route('user.warnings', {
        username: this.warning.warnedUser().username()
      }),
      config: m.route
    }, m("div", {
      className: "WarningListItem-main"
    }, m("h3", {
      className: "WarningListItem-title"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.post.warning', {
      strikes: this.warning.strikes(),
      mod_username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.warning.addedByUser())
    })), formatedDate, m("br", null), m("ul", {
      className: "WarningListItem-info"
    }, m("li", null, m("h4", {
      className: "WarningListItem-subtitle"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.public_comment')), m("span", null, this.warning.public_comment())), app.session.user.canManageWarnings() ? m("li", null, m("h4", {
      className: "WarningListItem-subtitle"
    }, app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.private_comment')), m("span", null, this.warning.private_comment())) : '')));
  };

  return WarningPreview;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/NotificationGrid */ "flarum/components/NotificationGrid");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addWarningControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addWarningControl */ "./src/forum/addWarningControl.js");
/* harmony import */ var _addWarningPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addWarningPage */ "./src/forum/addWarningPage.js");
/* harmony import */ var _addWarningsToPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addWarningsToPosts */ "./src/forum/addWarningsToPosts.js");
/* harmony import */ var _components_WarningNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/WarningNotification */ "./src/forum/components/WarningNotification.js");
/* harmony import */ var _model_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/Warning */ "./src/forum/model/Warning.js");











flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('askvortsov/flarum-moderator-warnings', function (app) {
  app.store.models.warnings = _model_Warning__WEBPACK_IMPORTED_MODULE_10__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canViewWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canViewWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canManageWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canManageWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canDeleteWarnings = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canDeleteWarnings');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.visibleWarningCount = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('visibleWarningCount');
  Object(_addWarningControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_addWarningPage__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_addWarningsToPosts__WEBPACK_IMPORTED_MODULE_8__["default"])();
  app.notificationComponents.warning = _components_WarningNotification__WEBPACK_IMPORTED_MODULE_9__["default"];
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'notificationTypes', function (items) {
    items.add('warning', {
      name: 'warning',
      icon: 'fas fa-exclamation-circle',
      label: app.translator.trans('askvortsov-moderator-warnings.forum.settings.warning_notification_label')
    });
  });
});

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
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);





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
  isHidden: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('hiddenAt', function (hiddenAt) {
    return !!hiddenAt;
  }),
  hiddenAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('hiddenAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  warnedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('warnedUser'),
  hiddenByUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('hiddenByUser'),
  addedByUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('addedByUser'),
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

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

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

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/NotificationGrid":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationGrid']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationGrid'];

/***/ }),

/***/ "flarum/components/PostPreview":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/PostPreview']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostPreview'];

/***/ }),

/***/ "flarum/components/Separator":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/Separator']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Separator'];

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

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

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

/***/ }),

/***/ "flarum/utils/UserControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/UserControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/UserControls'];

/***/ }),

/***/ "flarum/utils/classList":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/classList']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/classList'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map