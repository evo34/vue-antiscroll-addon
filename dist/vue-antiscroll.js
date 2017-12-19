(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-antiscroll"] = factory();
	else
		root["vue-antiscroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./antiscroll.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./antiscroll.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(10),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/evox/Repos/vue-antiscroll/src/components/vue-antiscroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-antiscroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68697719", Component.options)
  } else {
    hotAPI.reload("data-v-68697719", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_antiscroll__ = __webpack_require__(3);


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const proxy = function (context, fnName) {
    var fn = context[fnName];
    return function () {
        return fn.apply(context, arguments);
    };
};
const getStyle = function (oDiv, attr) {
    if (oDiv.currentStyle) return oDiv.currentStyle[attr];
    return getComputedStyle(oDiv, false)[attr];
};
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: {
            required: false,
            type: null
        },
        width: {
            required: false,
            type: null
        },
        onScrolling: {
            required: false,
            type: Function
        },
        onScrollToBottom: {
            required: false,
            type: Function
        },
        loopCheck: {
            required: false,
            type: Boolean
        }
    },
    data() {
        return {};
    },
    mounted() {
        // var antiscrollWrap= this.$el.querySelector('.antiscroll-wrap')
        this.scroller = new __WEBPACK_IMPORTED_MODULE_0__libs_antiscroll__["a" /* default */](this.$el, {
            initialDisplay: false
        });
        this._onScroll = proxy(this, 'onScroll');
        this.scroller.inner.addEventListener('scroll', this._onScroll, false);
        this._loopCheck();
    },
    beforeDestroy() {
        this.scroller && this.scroller.destroy();
        this.scroller && this.scroller.inner.removeEventListener('scroll', this._onScroll, false);
        this.scroller = null;
        this._onScroll = null;
    },
    watch: {
        'height': '_rebuild',
        'width': '_rebuild'
    },
    computed: {
        _$styObj() {
            let {
                _$height,
                _$width
            } = this;
            let hash = {
                height: _$height
            };
            _$width && (hash['width'] = _$width);
            return hash;
        },
        _$height() {
            let {
                height
            } = this;
            height = height + '';
            if (height.lastIndexOf('px') === -1) return height + 'px';
            return height;
        },
        _$width() {
            let {
                width
            } = this;
            width = width && width + '';
            if (!width) return null;
            if (width.lastIndexOf('px') === -1) return width + 'px';
            return width;
        }
    },
    methods: {
        onScroll(evt) {
            let innerHeight = getStyle(this.scroller.inner, 'height');
            let scrollHeight = getStyle(this.scroller.inner, 'scrollHeight');
            let scrollTop = getStyle(this.scroller.inner, 'scrollTop');

            if (typeof this.onScrolling === 'function') {
                this.onScrolling.call(this, this.scroller, evt);
            }
            if (scrollHeight <= innerHeight + scrollTop) {
                if (typeof this.onScrollToBottom === 'function') {
                    this.onScrollToBottom.call(this, this.scroller, evt);
                }
            }
        },
        _rebuild() {
            let scroller = this.scroller;
            if (scroller) {
                scroller.inner.removeEventListener('scroll', this._onScroll, false);
                scroller && scroller.rebuild();
            }
        },
        _loopCheck() {
            if (this.loopCheck) {
                requestAnimationFrame(this._updateContentSize.bind(this));
            }
        },
        _updateContentSize() {
            try {
                var scroller = this.scroller;
                var arr = [];
                scroller.vertical && arr.push(scroller.vertical);
                scroller.horizontal && arr.push(scroller.horizontal);
                arr.forEach(scroller => scroller.updateViewPort());

                requestAnimationFrame(this._updateContentSize.bind(this));
            } catch (e) {
                console.info('滚动条错误辣!');
            }
        }
    }

});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var T = {
  proxy: function (context, fnName) {
    var fn = context[fnName];
    return function () {
      return fn.apply(context, arguments);
    };
  },
  getStyle: function (oDiv, attr) {
    var hasX = ['width', 'height', 'top', 'left', 'scrollWith', 'scrollHeight'];
    if (oDiv.currentStyle) return oDiv.currentStyle[attr];
    var v = getComputedStyle(oDiv, null).getPropertyValue(attr);
    if (hasX.indexOf(attr) > -1) {
      v = parseFloat(v);
    }
    return v;
  },
  addClass: function (element, cls) {
    var className = element.className;
    var classNames = className.split(/\s+/);
    if (classNames.indexOf(cls) === -1) {
      classNames.push(cls);
    }
    element.className = classNames.join(' ');
    return element;
  },
  removeClass: function (element, cls) {
    var className = element.className;
    var classNames = className.split(/\s+/);
    var index;
    if ((index = classNames.indexOf(cls)) > -1) {
      classNames.splice(index, 1);
    }
    element.className = classNames.join(' ');
    return element;
  },
  bind: function (element, eventType, fn) {
    if (document.addEventListener) {
      element.addEventListener(eventType, fn, false);
    } else if (document.attachEvent) {
      element.attachEvent('on' + eventType, fn);
    }
    return element;
  },
  unbind: function (element, eventType, fn) {
    if (document.removeEventListener) {
      element.removeEventListener(eventType, fn, false);
    } else if (document.detachEvent) {
      element.detachEvent('on' + eventType, fn);
    }
    return element;
  }

  /**
   * Antiscroll pane constructor.
   *
   * @param {Element|jQuery} main pane
   * @parma {Object} options
   * @api public
   */

};function Antiscroll(el, opts) {
  this.el = el;
  this.options = opts || {};

  this.x = false !== this.options.x || this.options.forceHorizontal;
  this.y = false !== this.options.y || this.options.forceVertical;
  this.autoHide = false !== this.options.autoHide;
  this.padding = undefined === this.options.padding ? 2 : this.options.padding;

  this.inner = this.el.querySelector('.antiscroll-inner');

  var innerWidth = T.getStyle(this.inner, 'width');
  var innerHeight = T.getStyle(this.inner, 'height');

  this.inner.style.cssText = "width: " + (innerWidth + (this.y ? scrollbarSize() : 0)) + 'px;' + "height: " + (innerHeight + (this.x ? scrollbarSize() : 0)) + 'px;';

  this.refresh();
};

/**
 * refresh scrollbars
 *
 * @api public
 */

Antiscroll.prototype.refresh = function () {
  var innerScrollWidth = this.inner.scrollWidth;
  var innerScrollHeight = this.inner.scrollHeight;
  var innerWidth = T.getStyle(this.el, 'width');
  var innerHeight = T.getStyle(this.el, 'height');
  var needHScroll = innerScrollWidth > innerWidth + (this.y ? scrollbarSize() : 0),
      needVScroll = innerScrollHeight > innerHeight + (this.x ? scrollbarSize() : 0);

  if (this.x) {
    if (!this.horizontal && needHScroll) {
      this.horizontal = new Scrollbar.Horizontal(this);
    } else if (this.horizontal && !needHScroll) {
      this.horizontal.destroy();
      this.horizontal = null;
    } else if (this.horizontal) {
      this.horizontal.update();
    }
  }

  if (this.y) {
    if (!this.vertical && needVScroll) {
      this.vertical = new Scrollbar.Vertical(this);
    } else if (this.vertical && !needVScroll) {
      this.vertical.destroy();
      this.vertical = null;
    } else if (this.vertical) {
      this.vertical.update();
    }
  }
};

/**
 * Cleans up.
 *
 * @return {Antiscroll} for chaining
 * @api public
 */

Antiscroll.prototype.destroy = function () {
  if (this.horizontal) {
    this.horizontal.destroy();
    this.horizontal = null;
  }
  if (this.vertical) {
    this.vertical.destroy();
    this.vertical = null;
  }
  return this;
};

/**
 * Rebuild Antiscroll.
 *
 * @return {Antiscroll} for chaining
 * @api public
 */

Antiscroll.prototype.rebuild = function () {
  this.destroy();
  this.inner.style.cssText = "";
  Antiscroll.call(this, this.el, this.options);
  return this;
};

/**
 * Scrollbar constructor.
 *
 * @param {Element|jQuery} element
 * @api public
 */

function Scrollbar(pane) {
  this.pane = pane;
  this.pane.el.appendChild(this.el);

  this.dragging = false;
  this.enter = false;
  this.shown = false;

  // hovering
  T.bind(this.pane.el, 'mouseenter', T.proxy(this, 'mouseenter'));
  T.bind(this.pane.el, 'mouseleave', T.proxy(this, 'mouseleave'));

  // dragging
  T.bind(this.el, 'mousedown', T.proxy(this, 'mousedown'));

  // scrolling
  this.innerPaneScrollListener = T.proxy(this, 'scroll');
  T.bind(this.pane.inner, 'scroll', T.proxy(this, 'scroll'));

  // show
  var initialDisplay = this.pane.options.initialDisplay;

  if (initialDisplay !== false) {
    this.show();
    if (this.pane.autoHide) {
      this.hiding = setTimeout(T.proxy(this, 'hide'), parseInt(initialDisplay, 10) || 3000);
    }
  }
};

/**
 * Cleans up.
 *
 * @return {Scrollbar} for chaining
 * @api public
 */

Scrollbar.prototype.destroy = function () {
  this.el.remove();
  T.unbind(this.pane.inner, 'scroll', this.innerPaneScrollListener);
  return this;
};

/**
 * check and resize.
 *
 * @return {Scrollbar} for chaining
 * @api public
 */

Scrollbar.prototype.updateViewPort = function () {
  var innerScrollHeight = this.pane.inner.scrollHeight;
  var innerScrollWidth = this.pane.inner.scrollWidth;

  if ((this.__scrollWidth !== innerScrollWidth || this.__scrollHeight !== innerScrollHeight) && this.enter) {

    if (!this.update()) {
      this.hide();
    } else {
      this.show();
    }

    this.__scrollWidth = innerScrollWidth;
    this.__scrollHeight = innerScrollHeight;
  }
};
/**
 * Called upon mouseenter.
 *
 * @api private
 */

Scrollbar.prototype.mouseenter = function () {
  this.enter = true;
  this.show();
};

/**
 * Called upon mouseleave.
 *
 * @api private
 */

Scrollbar.prototype.mouseleave = function () {
  this.enter = false;

  if (!this.dragging) {
    if (this.pane.autoHide) {
      this.hide();
    }
  }
};

/**
 * Called upon wrap scroll.
 *
 * @api private
 */

Scrollbar.prototype.scroll = function () {
  if (!this.shown) {
    this.show();
    if (!this.enter && !this.dragging) {
      if (this.pane.autoHide) {
        this.hiding = setTimeout(T.proxy(this, 'hide'), 1500);
      }
    }
  }

  this.update();
};

/**
 * Called upon scrollbar mousedown.
 *
 * @api private
 */

Scrollbar.prototype.mousedown = function (ev) {
  ev.preventDefault();

  this.dragging = true;

  this.startPageY = ev.pageY - parseInt(T.getStyle(this.el, 'top'), 10);
  this.startPageX = ev.pageX - parseInt(T.getStyle(this.el, 'left'), 10);

  // prevent crazy selections on IE
  this.el.ownerDocument.onselectstart = function () {
    return false;
  };

  var pane = this.pane,
      self = this;

  var move = T.proxy(this, 'mousemove');
  var mouseup = function () {
    self.dragging = false;
    this.onselectstart = null;

    T.unbind(this, 'mousemove', move);

    if (!self.enter) {
      self.hide();
    }
  };

  T.bind(window.document, 'mousemove', move);
  T.bind(window.document, 'mouseup', mouseup);
};

/**
 * Show scrollbar.
 *
 * @api private
 */

Scrollbar.prototype.show = function (duration) {
  if (!this.shown && this.update()) {
    T.addClass(this.el, 'antiscroll-scrollbar-shown');
    if (this.hiding) {
      clearTimeout(this.hiding);
      this.hiding = null;
    }
    this.shown = true;
  }
};

/**
 * Hide scrollbar.
 *
 * @api private
 */

Scrollbar.prototype.hide = function () {
  if (this.pane.autoHide !== false && this.shown) {
    // check for dragging
    T.removeClass(this.el, 'antiscroll-scrollbar-shown');
    this.shown = false;
  }
};

/**
 * Horizontal scrollbar constructor
 *
 * @api private
 */

Scrollbar.Horizontal = function (pane) {
  var scrollbarH = document.createElement('div');
  scrollbarH.className = 'antiscroll-scrollbar antiscroll-scrollbar-horizontal';
  this.el = pane.el.appendChild(scrollbarH);
  Scrollbar.call(this, pane);
};

/**
 * Inherits from Scrollbar.
 */

inherits(Scrollbar.Horizontal, Scrollbar);

/**
 * Updates size/position of scrollbar.
 *
 * @api private
 */

Scrollbar.Horizontal.prototype.update = function () {
  var paneWidth = T.getStyle(this.pane.el, 'width'),
      trackWidth = paneWidth - this.pane.padding * 2,
      inner = this.pane.inner;
  this.el.style.cssText = 'width: ' + trackWidth * paneWidth / inner.scrollWidth + 'px;' + 'left: ' + trackWidth * inner.scrollLeft / inner.scrollWidth + 'px;';

  return paneWidth < inner.scrollWidth;
};

/**
 * Called upon drag.
 *
 * @api private
 */

Scrollbar.Horizontal.prototype.mousemove = function (ev) {
  var trackWidth = T.getStyle(this.pane.el, 'width') - this.pane.padding * 2,
      pos = ev.pageX - this.startPageX,
      barWidth = T.getStyle(this.el, 'width'),
      inner = this.pane.inner;

  // minimum top is 0, maximum is the track height
  var y = Math.min(Math.max(pos, 0), trackWidth - barWidth);

  inner.scrollLeft = (inner.scrollWidth - T.getStyle(this.pane.el, 'width')) * y / (trackWidth - barWidth);
};

/**
 * Vertical scrollbar constructor
 *
 * @api private
 */

Scrollbar.Vertical = function (pane) {
  var scrollbarV = document.createElement('div');
  scrollbarV.className = 'antiscroll-scrollbar antiscroll-scrollbar-vertical';
  this.el = pane.el.appendChild(scrollbarV);
  Scrollbar.call(this, pane);
};

/**
 * Inherits from Scrollbar.
 */

inherits(Scrollbar.Vertical, Scrollbar);

/**
 * Updates size/position of scrollbar.
 *
 * @api private
 */

Scrollbar.Vertical.prototype.update = function () {
  var paneHeight = T.getStyle(this.pane.el, 'height'),
      trackHeight = paneHeight - this.pane.padding * 2,
      inner = this.pane.inner;

  var scrollbarHeight = trackHeight * paneHeight / inner.scrollHeight;
  scrollbarHeight = scrollbarHeight < 20 ? 20 : scrollbarHeight;

  var topPos = trackHeight * inner.scrollTop / inner.scrollHeight;

  if (topPos + scrollbarHeight > trackHeight) {
    var diff = topPos + scrollbarHeight - trackHeight;
    topPos = topPos - diff - 3;
  }

  this.el.style.cssText = 'height: ' + scrollbarHeight + 'px;top: ' + topPos + 'px';

  return paneHeight < inner.scrollHeight;
};

/**
 * Called upon drag.
 *
 * @api private
 */

Scrollbar.Vertical.prototype.mousemove = function (ev) {
  var paneHeight = T.getStyle(this.pane.el, 'height'),
      trackHeight = paneHeight - this.pane.padding * 2,
      pos = ev.pageY - this.startPageY,
      barHeight = T.getStyle(this.el, 'height'),
      inner = this.pane.inner;

  // minimum top is 0, maximum is the track height
  var y = Math.min(Math.max(pos, 0), trackHeight - barHeight);

  inner.scrollTop = (inner.scrollHeight - paneHeight) * y / (trackHeight - barHeight);
};

/**
 * Cross-browser inheritance.
 *
 * @param {Function} constructor
 * @param {Function} constructor we inherit from
 * @api private
 */

function inherits(ctorA, ctorB) {
  function f() {};
  f.prototype = ctorB.prototype;
  ctorA.prototype = new f();
};

/**
 * Scrollbar size detection.
 */

var size;

function scrollbarSize() {
  if (size === undefined) {
    var div = document.createElement('div');
    var innerDiv = document.createElement('div');
    div.className = 'antiscroll-inner';
    div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;';
    innerDiv.style.cssText = 'height:100px;width:100%';
    div.appendChild(innerDiv);

    document.body.appendChild(div);
    var w1 = T.getStyle(div, 'width');
    var w2 = T.getStyle(innerDiv, 'width');

    document.body.removeChild(div);
    size = +w1 - +w2;
  }

  return size;
};

/* harmony default export */ __webpack_exports__["a"] = (Antiscroll);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_antiscroll_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_antiscroll_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_antiscroll_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vue_antiscroll_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vue_antiscroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vue_antiscroll_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_1__components_vue_antiscroll_vue___default.a; });



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/*\n * Antiscroll: cross-browser native OS X Lion scrollbars\n * https://github.com/Automattic/antiscroll\n * v0.9\n */\n\n.antiscroll-wrap {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.antiscroll-scrollbar {\n  background: gray;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-border-radius: 7px;\n  -moz-border-radius: 7px;\n  border-radius: 7px;\n  -webkit-box-shadow: 0 0 1px #fff;\n  -moz-box-shadow: 0 0 1px #fff;\n  box-shadow: 0 0 1px #fff;\n  position: absolute;\n  opacity: 0;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  -webkit-transition: linear 300ms opacity;\n  -moz-transition: linear 300ms opacity;\n  -o-transition: linear 300ms opacity;\n}\n\n.antiscroll-scrollbar-shown {\n  opacity: 1;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n}\n\n.antiscroll-scrollbar-horizontal {\n  height: 7px;\n  margin-left: 2px;\n  bottom: 2px;\n  left: 0;\n}\n\n.antiscroll-scrollbar-vertical {\n  width: 7px;\n  margin-top: 2px;\n  right: 2px;\n  top: 0;\n}\n\n.antiscroll-inner {\n  overflow: scroll;\n}\n\n/** A bug in Chrome 25 on Lion requires each selector to have their own\n    blocks. E.g. the following:\n\n    .antiscroll-inner::-webkit-scrollbar, .antiscroll-inner::scrollbar {...}\n\n    causes the width and height rules to be ignored by the browser resulting\n    in both native and antiscroll scrollbars appearing at the same time.\n */\n.antiscroll-inner::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.antiscroll-inner::scrollbar {\n  width: 0;\n  height: 0;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "antiscroll-wrap"
  }, [_c('div', {
    staticClass: "antiscroll-inner",
    style: (_vm._$styObj)
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68697719", module.exports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-antiscroll.js.map