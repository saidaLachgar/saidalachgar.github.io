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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getBody = getBody;

function getBody() {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.resetFakeBody = resetFakeBody;

var _docElementJs = __webpack_require__(5);

function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElementJs.docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElementJs.docElement.offsetHeight;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setFakeBody = setFakeBody;

var _docElementJs = __webpack_require__(5);

function setFakeBody(body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElementJs.docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElementJs.docElement.style.overflow = 'hidden';
    _docElementJs.docElement.appendChild(body);
  }

  return docOverflow;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classListSupportJs = __webpack_require__(18);

var hasClass = _classListSupportJs.classListSupport ? function (el, str) {
    return el.classList.contains(str);
} : function (el, str) {
    return el.className.indexOf(str) >= 0;
};

exports.classListSupport = _classListSupportJs.classListSupport;
exports.hasClass = hasClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var win = window;

var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
  return setTimeout(cb, 16);
};
exports.raf = raf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var docElement = document.documentElement;
exports.docElement = docElement;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodeList = isNodeList;

function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined";
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Test via a getter in the options object to see if the passive property is accessed


Object.defineProperty(exports, "__esModule", {
  value: true
});
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;
exports.passiveOption = passiveOption;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

__webpack_require__(10);

var _tinySliderSrcTinySlider = __webpack_require__(44);

var _fancyappsUi = __webpack_require__(56);

function resize() {
    var nav = document.querySelector("#nav").offsetHeight;
    document.querySelector("#container").style.marginTop = nav * -1 + "px";
}
resize();
window.onresize = resize();

// scrollToTop
var scrollToTopButton = document.querySelector('#js-top');
var scrollFunc = function scrollFunc() {
    var y = window.scrollY;
    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};
window.addEventListener("scroll", scrollFunc);

//lazy load
// document.addEventListener("DOMContentLoaded", function () {
//     const elements = document.querySelectorAll('img');
//     Array.from(elements).forEach((el) => {
//         el.classList.add('loaded');
//     });
// });
//slider

var slider = (0, _tinySliderSrcTinySlider.tns)({
    container: '.slider-01',
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    slideBy: 1,
    mouseDrag: true,
    autoplay: true,
    nav: false,
    autoplayButtonOutput: false,
    controls: false,
    speed: 600,
    autoplayTimeout: 2000
});
// stretched link
document.querySelectorAll('.link-stretched img, .link-stretched p').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.target.closest(".link-stretched").querySelector("a").click();
    });
});
// typer
var Typer = function Typer(element) {
    this.element = element;
    var delim = element.dataset.delim || ",";
    var words = element.dataset.words || "override these,sample typing";
    this.words = words.split(delim).filter(function (v) {
        return v;
    }); // non empty words
    this.delay = element.dataset.delay || 200;
    this.loop = element.dataset.loop || "true";
    if (this.loop === "false") {
        this.loop = 1;
    }
    this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

    this.progress = { word: 0, char: 0, building: true, looped: 0 };
    this.typing = true;

    var colors = element.dataset.colors || "black";
    this.colors = colors.split(",");
    this.element.style.color = this.colors[0];
    this.colorIndex = 0;

    this.doTyping();
};
Typer.prototype.start = function () {
    if (!this.typing) {
        this.typing = true;
        this.doTyping();
    }
};
Typer.prototype.stop = function () {
    this.typing = false;
};
Typer.prototype.doTyping = function () {
    var _this = this;

    var e = this.element;
    var p = this.progress;
    var w = p.word;
    var c = p.char;
    var currentDisplay = [].concat(_toConsumableArray(this.words[w])).slice(0, c).join("");
    var atWordEnd;
    if (this.cursor) {
        this.cursor.element.style.opacity = "1";
        this.cursor.on = true;
        clearInterval(this.cursor.interval);
        this.cursor.interval = setInterval(function () {
            return _this.cursor.updateBlinkState();
        }, 400);
    }

    e.innerHTML = currentDisplay;

    if (p.building) {
        atWordEnd = p.char === this.words[w].length;
        if (atWordEnd) {
            p.building = false;
        } else {
            p.char += 1;
        }
    } else {
        if (p.char === 0) {
            p.building = true;
            p.word = (p.word + 1) % this.words.length;
            this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            this.element.style.color = this.colors[this.colorIndex];
        } else {
            p.char -= 1;
        }
    }

    if (p.word === this.words.length - 1) {
        p.looped += 1;
    }

    if (!p.building && this.loop <= p.looped) {
        this.typing = false;
    }

    setTimeout(function () {
        if (_this.typing) {
            _this.doTyping();
        };
    }, atWordEnd ? this.deleteDelay : this.delay);
};
var Cursor = function Cursor(element) {
    var _this2 = this;

    this.element = element;
    this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
    element.innerHTML = this.cursorDisplay;
    this.on = true;
    element.style.transition = "all 0.1s";
    this.interval = setInterval(function () {
        return _this2.updateBlinkState();
    }, 400);
};
Cursor.prototype.updateBlinkState = function () {
    if (this.on) {
        this.element.style.opacity = "0";
        this.on = false;
    } else {
        this.element.style.opacity = "1";
        this.on = true;
    }
};
function TyperSetup() {
    var typers = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = document.getElementsByClassName("typer")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            typers[e.id] = new Typer(e);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        var _loop = function () {
            var e = _step2.value;

            var owner = typers[e.dataset.owner];
            e.onclick = function () {
                return owner.stop();
            };
        };

        for (var _iterator2 = document.getElementsByClassName("typer-stop")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        var _loop2 = function () {
            var e = _step3.value;

            var owner = typers[e.dataset.owner];
            e.onclick = function () {
                return owner.start();
            };
        };

        for (var _iterator3 = document.getElementsByClassName("typer-start")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            _loop2();
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                _iterator3["return"]();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = document.getElementsByClassName("cursor")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var e = _step4.value;

            var t = new Cursor(e);
            t.owner = typers[e.dataset.owner];
            t.owner.cursor = t;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                _iterator4["return"]();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}
TyperSetup();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(function (t, e) {
   true ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
})(undefined, function () {
  "use strict";var t = function t(_t2) {
    do {
      _t2 += Math.floor(1e6 * Math.random());
    } while (document.getElementById(_t2));return _t2;
  },
      e = function e(t) {
    var e = t.getAttribute("data-bs-target");if (!e || "#" === e) {
      var _i = t.getAttribute("href");if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;_i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }return e;
  },
      i = function i(t) {
    var i = e(t);return i && document.querySelector(i) ? i : null;
  },
      s = function s(t) {
    var i = e(t);return i ? document.querySelector(i) : null;
  },
      n = function n(t) {
    if (!t) return 0;
    var _window$getComputedStyle = window.getComputedStyle(t);

    var e = _window$getComputedStyle.transitionDuration;
    var i = _window$getComputedStyle.transitionDelay;
    var s = Number.parseFloat(e),
        n = Number.parseFloat(i);return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
  },
      o = function o(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      r = function r(t) {
    return (t[0] || t).nodeType;
  },
      a = function a(t, e) {
    var i = !1;var s = e + 5;t.addEventListener("transitionend", function e() {
      i = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      i || o(t);
    }, s);
  },
      l = function l(t, e, i) {
    Object.keys(i).forEach(function (s) {
      var n = i[s],
          o = e[s],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : ({}).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if (!new RegExp(n).test(a)) throw new TypeError(t.toUpperCase() + ": " + ("Option \"" + s + "\" provided type \"" + a + "\" ") + ("but expected type \"" + n + "\"."));
    });
  },
      c = function c(t) {
    if (!t) return !1;if (t.style && t.parentNode && t.parentNode.style) {
      var _e2 = getComputedStyle(t),
          _i2 = getComputedStyle(t.parentNode);return "none" !== _e2.display && "none" !== _i2.display && "hidden" !== _e2.visibility;
    }return !1;
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(_x10) {
    var _again2 = true;

    _function2: while (_again2) {
      var t = _x10;
      _again2 = false;
      if (!document.documentElement.attachShadow) return null;if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();return _e3 instanceof ShadowRoot ? _e3 : null;
      }if (t instanceof ShadowRoot) {
        return t;
      } else {
        if (t.parentNode) {
          _x10 = t.parentNode;
          _again2 = true;
          _e3 = undefined;
          continue _function2;
        } else {
          return null;
        }
      }
    }
  },
      f = function f() {
    return function () {};
  },
      u = function u(t) {
    return t.offsetHeight;
  },
      p = function p() {
    var t = window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      g = function g() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t, e) {
    var i;i = function () {
      var i = p();if (i) {
        (function () {
          var s = i.fn[t];i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = function () {
            return i.fn[t] = s, e.jQueryInterface;
          };
        })();
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i();
  },
      _ = new Map();var b = { set: function set(t, e, i) {
      _.has(t) || _.set(t, new Map());var s = _.get(t);s.has(e) || 0 === s.size ? s.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: " + Array.from(s.keys())[0] + ".");
    }, get: function get(t, e) {
      return _.has(t) && _.get(t).get(e) || null;
    }, remove: function remove(t, e) {
      if (!_.has(t)) return;var i = _.get(t);i["delete"](e), 0 === i.size && _["delete"](t);
    } };var v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      E = {};var T = 1;var A = { mouseenter: "mouseover", mouseleave: "mouseout" },
      L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);function O(t, e) {
    return e && e + "::" + T++ || t.uidEvent || T++;
  }function k(t) {
    var e = O(t);return t.uidEvent = e, E[e] = E[e] || {}, E[e];
  }function D(t, e) {
    var i = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var s = Object.keys(t);for (var _n = 0, o = s.length; _n < o; _n++) {
      var _o = t[s[_n]];if (_o.originalHandler === e && _o.delegationSelector === i) return _o;
    }return null;
  }function x(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e;var o = t.replace(y, "");var r = A[o];return r && (o = r), L.has(o) || (o = t), [s, n, o];
  }function C(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;i || (i = s, s = null);
    var _x2 = x(e, i, s);

    var _x22 = _slicedToArray(_x2, 3);

    var o = _x22[0];
    var r = _x22[1];
    var a = _x22[2];var l = k(t);var c = l[a] || (l[a] = {});var d = D(c, r, o ? i : null);if (d) return void (d.oneOff = d.oneOff && n);var h = O(r, e.replace(v, "")),
        f = o ? (function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);for (var _e4 = n.target; _e4 && _e4 !== this; _e4 = _e4.parentNode) {
          for (var _r = o.length; _r--;) {
            if (o[_r] === _e4) return n.delegateTarget = _e4, s.oneOff && N.off(t, n.type, i), i.apply(_e4, [n]);
          }
        }return null;
      };
    })(t, i, s) : (function (t, e) {
      return function i(s) {
        return s.delegateTarget = t, i.oneOff && N.off(t, s.type, e), e.apply(t, [s]);
      };
    })(t, i);f.delegationSelector = o ? i : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = h, c[h] = f, t.addEventListener(a, f, o);
  }function S(t, e, i, s, n) {
    var o = D(e[i], s, n);o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }var N = { on: function on(t, e, i, s) {
      C(t, e, i, s, !1);
    }, one: function one(t, e, i, s) {
      C(t, e, i, s, !0);
    }, off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;
      var _x3 = x(e, i, s);

      var _x32 = _slicedToArray(_x3, 3);

      var n = _x32[0];
      var o = _x32[1];
      var r = _x32[2];var a = r !== e;var l = k(t);var c = e.startsWith(".");if (void 0 !== o) {
        if (!l || !l[r]) return;return void S(t, l, r, o, n ? i : null);
      }c && Object.keys(l).forEach(function (i) {
        !(function (t, e, i, s) {
          var n = e[i] || {};Object.keys(n).forEach(function (o) {
            if (o.includes(s)) {
              var _s = n[o];S(t, e, i, _s.originalHandler, _s.delegationSelector);
            }
          });
        })(t, l, i, e.slice(1));
      });var d = l[r] || {};Object.keys(d).forEach(function (i) {
        var s = i.replace(w, "");if (!a || e.includes(s)) {
          var _e5 = d[i];S(t, l, r, _e5.originalHandler, _e5.delegationSelector);
        }
      });
    }, trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;var s = p(),
          n = e.replace(y, ""),
          o = e !== n,
          r = L.has(n);var a = undefined,
          l = !0,
          c = !0,
          d = !1,
          h = null;return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(n, l, !0)) : h = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(h, t, { get: function get() {
            return i[t];
          } });
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
    } };
  var j = (function () {
    function j(t) {
      _classCallCheck(this, j);

      (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, b.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(j, [{
      key: "dispose",
      value: function dispose() {
        b.remove(this._element, this.constructor.DATA_KEY), this._element = null;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return b.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.0-beta3";
      }
    }]);

    return j;
  })();

  var P = (function (_j) {
    _inherits(P, _j);

    function P() {
      _classCallCheck(this, P);

      _get(Object.getPrototypeOf(P.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(P, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return N.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this = this;

        if ((t.classList.remove("show"), !t.classList.contains("fade"))) return void this._destroyElement(t);var e = n(t);N.one(t, "transitionend", function () {
          return _this._destroyElement(t);
        }), a(t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), N.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.alert");e || (e = new P(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.alert";
      }
    }]);

    return P;
  })(j);

  N.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', P.handleDismiss(new P())), m("alert", P);
  var I = (function (_j2) {
    _inherits(I, _j2);

    function I() {
      _classCallCheck(this, I);

      _get(Object.getPrototypeOf(I.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(I, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.button");e || (e = new I(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]);

    return I;
  })(j);

  function M(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }function R(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }N.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();var e = t.target.closest('[data-bs-toggle="button"]');var i = b.get(e, "bs.button");i || (i = new I(e)), i.toggle();
  }), m("button", I);var B = { setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + R(e), i);
    }, removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + R(e));
    }, getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};var e = {};return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var s = i.replace(/^bs/, "");s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = M(t.dataset[i]);
      }), e;
    }, getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-" + R(e)));
    }, offset: function offset(t) {
      var e = t.getBoundingClientRect();return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft };
    }, position: function position(t) {
      return { top: t.offsetTop, left: t.offsetLeft };
    } },
      H = { find: function find(t) {
      var _ref;

      var e = arguments.length <= 1 || arguments[1] === undefined ? document.documentElement : arguments[1];
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    }, findOne: function findOne(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? document.documentElement : arguments[1];
      return Element.prototype.querySelector.call(e, t);
    }, children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    }, parents: function parents(t, e) {
      var i = [];var s = t.parentNode;for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;return i;
    }, prev: function prev(t, e) {
      var i = t.previousElementSibling;for (; i;) {
        if (i.matches(e)) return [i];i = i.previousElementSibling;
      }return [];
    }, next: function next(t, e) {
      var i = t.nextElementSibling;for (; i;) {
        if (i.matches(e)) return [i];i = i.nextElementSibling;
      }return [];
    } },
      W = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      $ = "next",
      F = "prev",
      z = "left",
      K = "right";
  var Y = (function (_j3) {
    _inherits(Y, _j3);

    function Y(t, e) {
      _classCallCheck(this, Y);

      _get(Object.getPrototypeOf(Y.prototype), "constructor", this).call(this, t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = H.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }

    _createClass(Y, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide($);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(F);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), H.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this2 = this;

        this._activeElement = H.findOne(".active.carousel-item", this._element);var e = this._getItemIndex(this._activeElement);if (t > this._items.length - 1 || t < 0) return;if (this._isSliding) return void N.one(this._element, "slid.bs.carousel", function () {
          return _this2.to(t);
        });if (e === t) return this.pause(), void this.cycle();var i = t > e ? $ : F;this._slide(i, this._items[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, _get(Object.getPrototypeOf(Y.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _extends({}, W, t), l("carousel", t, U), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);if (t <= 40) return;var e = t / this.touchDeltaX;this.touchDeltaX = 0, e && this._slide(e > 0 ? K : z);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this3 = this;

        this._config.keyboard && N.on(this._element, "keydown.bs.carousel", function (t) {
          return _this3._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this3.pause(t);
        }), N.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this3.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this4 = this;

        var t = function t(_t3) {
          !_this4._pointerEvent || "pen" !== _t3.pointerType && "touch" !== _t3.pointerType ? _this4._pointerEvent || (_this4.touchStartX = _t3.touches[0].clientX) : _this4.touchStartX = _t3.clientX;
        },
            e = function e(t) {
          _this4.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this4.touchStartX;
        },
            i = function i(t) {
          !_this4._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this4.touchDeltaX = t.clientX - _this4.touchStartX), _this4._handleSwipe(), "hover" === _this4._config.pause && (_this4.pause(), _this4.touchTimeout && clearTimeout(_this4.touchTimeout), _this4.touchTimeout = setTimeout(function (t) {
            return _this4.cycle(t);
          }, 500 + _this4._config.interval));
        };H.find(".carousel-item img", this._element).forEach(function (t) {
          N.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (N.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), N.on(this._element, "pointerup.bs.carousel", function (t) {
          return i(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), N.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), N.on(this._element, "touchend.bs.carousel", function (t) {
          return i(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(K)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? H.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === $,
            s = t === F,
            n = this._getItemIndex(e),
            o = this._items.length - 1;if ((s && 0 === n || i && n === o) && !this._config.wrap) return e;var r = (n + (s ? -1 : 1)) % this._items.length;return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            s = this._getItemIndex(H.findOne(".active.carousel-item", this._element));return N.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: s, to: i });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e6 = H.findOne(".active", this._indicatorsElement);_e6.classList.remove("active"), _e6.removeAttribute("aria-current");var _i3 = H.find("[data-bs-target]", this._indicatorsElement);for (var _e7 = 0; _e7 < _i3.length; _e7++) {
            if (Number.parseInt(_i3[_e7].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i3[_e7].classList.add("active"), _i3[_e7].setAttribute("aria-current", "true");break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || H.findOne(".active.carousel-item", this._element);if (!t) return;var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this5 = this;

        var i = this._directionToOrder(t),
            s = H.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = e || this._getItemByOrder(i, s),
            l = this._getItemIndex(r),
            c = Boolean(this._interval),
            d = i === $,
            h = d ? "carousel-item-start" : "carousel-item-end",
            f = d ? "carousel-item-next" : "carousel-item-prev",
            p = this._orderToDirection(i);if (r && r.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(r, p).defaultPrevented && s && r) {
          if ((this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide"))) {
            r.classList.add(f), u(r), s.classList.add(h), r.classList.add(h);var _t4 = n(s);N.one(s, "transitionend", function () {
              r.classList.remove(h, f), r.classList.add("active"), s.classList.remove("active", f, h), _this5._isSliding = !1, setTimeout(function () {
                N.trigger(_this5._element, "slid.bs.carousel", { relatedTarget: r, direction: p, from: o, to: l });
              }, 0);
            }), a(s, _t4);
          } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, N.trigger(this._element, "slid.bs.carousel", { relatedTarget: r, direction: p, from: o, to: l });c && this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [K, z].includes(t) ? g() ? t === K ? F : $ : t === K ? $ : F : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [$, F].includes(t) ? g() ? t === $ ? z : K : t === $ ? K : z : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = b.get(t, "bs.carousel"),
            s = _extends({}, W, B.getDataAttributes(t));"object" == typeof e && (s = _extends({}, s, e));var n = "string" == typeof e ? e : s.slide;if ((i || (i = new Y(t, s)), "number" == typeof e)) i.to(e);else if ("string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError("No method named \"" + n + "\"");i[n]();
        } else s.interval && s.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Y.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);if (!e || !e.classList.contains("carousel")) return;var i = _extends({}, B.getDataAttributes(e), B.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");n && (i.interval = !1), Y.carouselInterface(e, i), n && b.get(e, "bs.carousel").to(n), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return W;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]);

    return Y;
  })(j);

  N.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Y.dataApiClickHandler), N.on(window, "load.bs.carousel.data-api", function () {
    var t = H.find('[data-bs-ride="carousel"]');for (var _e8 = 0, _i4 = t.length; _e8 < _i4; _e8++) {
      Y.carouselInterface(t[_e8], b.get(t[_e8], "bs.carousel"));
    }
  }), m("carousel", Y);var q = { toggle: !0, parent: "" },
      V = { toggle: "boolean", parent: "(string|element)" };
  var X = (function (_j4) {
    _inherits(X, _j4);

    function X(t, e) {
      var _this6 = this;

      _classCallCheck(this, X);

      _get(Object.getPrototypeOf(X.prototype), "constructor", this).call(this, t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = H.find("[data-bs-toggle=\"collapse\"][href=\"#" + this._element.id + "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#" + this._element.id + "\"]");var s = H.find('[data-bs-toggle="collapse"]');for (var _t5 = 0, e = s.length; _t5 < e; _t5++) {
        var _e9 = s[_t5],
            _n2 = i(_e9),
            _o2 = H.find(_n2).filter(function (t) {
          return t === _this6._element;
        });null !== _n2 && _o2.length && (this._selector = _n2, this._triggerArray.push(_e9));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    _createClass(X, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this7 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;var t = undefined,
            e = undefined;this._parent && (t = H.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this7._config.parent ? t.getAttribute("data-bs-parent") === _this7._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));var i = H.findOne(this._selector);if (t) {
          var _s2 = t.find(function (t) {
            return i !== t;
          });if ((e = _s2 ? b.get(_s2, "bs.collapse") : null, e && e._isTransitioning)) return;
        }if (N.trigger(this._element, "show.bs.collapse").defaultPrevented) return;t && t.forEach(function (t) {
          i !== t && X.collapseInterface(t, "hide"), e || b.set(t, "bs.collapse", null);
        });var s = this._getDimension();this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);var o = "scroll" + (s[0].toUpperCase() + s.slice(1)),
            r = n(this._element);N.one(this._element, "transitionend", function () {
          _this7._element.classList.remove("collapsing"), _this7._element.classList.add("collapse", "show"), _this7._element.style[s] = "", _this7.setTransitioning(!1), N.trigger(_this7._element, "shown.bs.collapse");
        }), a(this._element, r), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this8 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;if (N.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;var t = this._getDimension();this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", u(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");var e = this._triggerArray.length;if (e > 0) for (var _t6 = 0; _t6 < e; _t6++) {
          var _e10 = this._triggerArray[_t6],
              _i5 = s(_e10);_i5 && !_i5.classList.contains("show") && (_e10.classList.add("collapsed"), _e10.setAttribute("aria-expanded", !1));
        }this.setTransitioning(!0), this._element.style[t] = "";var i = n(this._element);N.one(this._element, "transitionend", function () {
          _this8.setTransitioning(!1), _this8._element.classList.remove("collapsing"), _this8._element.classList.add("collapse"), N.trigger(_this8._element, "hidden.bs.collapse");
        }), a(this._element, i);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(Object.getPrototypeOf(X.prototype), "dispose", this).call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _extends({}, q, t)).toggle = Boolean(t.toggle), l("collapse", t, V), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this9 = this;

        var t = this._config.parent;
        r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = H.findOne(t);var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"" + t + "\"]";return H.find(e, t).forEach(function (t) {
          var e = s(t);_this9._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;var i = t.classList.contains("show");e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = b.get(t, "bs.collapse");var s = _extends({}, q, B.getDataAttributes(t), "object" == typeof e && e ? e : {});if ((!i && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), i || (i = new X(t, s)), "string" == typeof e)) {
          if (void 0 === i[e]) throw new TypeError("No method named \"" + e + "\"");i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          X.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return q;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]);

    return X;
  })(j);

  N.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();var e = B.getDataAttributes(this),
        s = i(this);H.find(s).forEach(function (t) {
      var i = b.get(t, "bs.collapse");var s = undefined;i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), s = "toggle") : s = e, X.collapseInterface(t, s);
    });
  }), m("collapse", X);var Q = "top",
      G = "bottom",
      Z = "right",
      J = "left",
      tt = [Q, G, Z, J],
      et = tt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      it = [].concat(tt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      st = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];function nt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }function ot(t) {
    if (null == t) return window;if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;return e && e.defaultView || window;
    }return t;
  }function rt(t) {
    return t instanceof ot(t).Element || t instanceof Element;
  }function at(t) {
    return t instanceof ot(t).HTMLElement || t instanceof HTMLElement;
  }function lt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ot(t).ShadowRoot || t instanceof ShadowRoot);
  }var ct = { name: "applyStyles", enabled: !0, phase: "write", fn: function fn(t) {
      var e = t.state;Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            s = e.attributes[t] || {},
            n = e.elements[t];at(n) && nt(n) && (Object.assign(n.style, i), Object.keys(s).forEach(function (t) {
          var e = s[t];!1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    }, effect: function effect(t) {
      var e = t.state,
          i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var s = e.elements[t],
              n = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});at(s) && nt(s) && (Object.assign(s.style, o), Object.keys(n).forEach(function (t) {
            s.removeAttribute(t);
          }));
        });
      };
    }, requires: ["computeStyles"] };function dt(t) {
    return t.split("-")[0];
  }function ht(t) {
    var e = t.getBoundingClientRect();return { width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top };
  }function ft(t) {
    var e = ht(t),
        i = t.offsetWidth,
        s = t.offsetHeight;return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: s };
  }function ut(t, e) {
    var i = e.getRootNode && e.getRootNode();if (t.contains(e)) return !0;if (i && lt(i)) {
      var s = e;do {
        if (s && t.isSameNode(s)) return !0;s = s.parentNode || s.host;
      } while (s);
    }return !1;
  }function pt(t) {
    return ot(t).getComputedStyle(t);
  }function gt(t) {
    return ["table", "td", "th"].indexOf(nt(t)) >= 0;
  }function mt(t) {
    return ((rt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }function _t(t) {
    return "html" === nt(t) ? t : t.assignedSlot || t.parentNode || (lt(t) ? t.host : null) || mt(t);
  }function bt(t) {
    return at(t) && "fixed" !== pt(t).position ? t.offsetParent : null;
  }function vt(t) {
    for (var e = ot(t), i = bt(t); i && gt(i) && "static" === pt(i).position;) i = bt(i);return i && ("html" === nt(i) || "body" === nt(i) && "static" === pt(i).position) ? e : i || (function (t) {
      for (var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), i = _t(t); at(i) && ["html", "body"].indexOf(nt(i)) < 0;) {
        var s = pt(i);if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;i = i.parentNode;
      }return null;
    })(t) || e;
  }function yt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }var wt = Math.max,
      Et = Math.min,
      Tt = Math.round;function At(t, e, i) {
    return wt(t, Et(e, i));
  }function Lt(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }function Ot(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }var kt = { name: "arrow", enabled: !0, phase: "main", fn: function fn(t) {
      var e,
          i = t.state,
          s = t.name,
          n = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = dt(i.placement),
          l = yt(a),
          c = [J, Z].indexOf(a) >= 0 ? "height" : "width";if (o && r) {
        var d = (function (t, e) {
          return Lt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : Ot(t, tt));
        })(n.padding, i),
            h = ft(o),
            f = "y" === l ? Q : J,
            u = "y" === l ? G : Z,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            g = r[l] - i.rects.reference[l],
            m = vt(o),
            _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            b = p / 2 - g / 2,
            v = d[f],
            y = _ - h[c] - d[u],
            w = _ / 2 - h[c] / 2 + b,
            E = At(v, w, y),
            T = l;i.modifiersData[s] = ((e = {})[T] = E, e.centerOffset = E - w, e);
      }
    }, effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          s = void 0 === i ? "[data-popper-arrow]" : i;null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && ut(e.elements.popper, s) && (e.elements.arrow = s);
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] },
      Dt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };function xt(t) {
    var e,
        i = t.popper,
        s = t.popperRect,
        n = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? (function (t) {
      var e = t.x,
          i = t.y,
          s = window.devicePixelRatio || 1;return { x: Tt(Tt(e * s) / s) || 0, y: Tt(Tt(i * s) / s) || 0 };
    })(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        f = void 0 === h ? 0 : h,
        u = d.y,
        p = void 0 === u ? 0 : u,
        g = o.hasOwnProperty("x"),
        m = o.hasOwnProperty("y"),
        _ = J,
        b = Q,
        v = window;if (l) {
      var y = vt(i),
          w = "clientHeight",
          E = "clientWidth";y === ot(i) && "static" !== pt(y = mt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, n === Q && (b = G, p -= y[w] - s.height, p *= a ? 1 : -1), n === J && (_ = Z, f -= y[E] - s.width, f *= a ? 1 : -1);
    }var T,
        A = Object.assign({ position: r }, l && Dt);return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? f + "px" : "", e.transform = "", e));
  }var Ct = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = i.gpuAcceleration,
          n = void 0 === s || s,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = { placement: dt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: n };null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, xt(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, xt(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
    }, data: {} },
      St = { passive: !0 },
      Nt = { name: "eventListeners", enabled: !0, phase: "write", fn: function fn() {}, effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          s = t.options,
          n = s.scroll,
          o = void 0 === n || n,
          r = s.resize,
          a = void 0 === r || r,
          l = ot(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, St);
      }), a && l.addEventListener("resize", i.update, St), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, St);
        }), a && l.removeEventListener("resize", i.update, St);
      };
    }, data: {} },
      jt = { left: "right", right: "left", bottom: "top", top: "bottom" };function Pt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return jt[t];
    });
  }var It = { start: "end", end: "start" };function Mt(t) {
    return t.replace(/start|end/g, function (t) {
      return It[t];
    });
  }function Rt(t) {
    var e = ot(t);return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }function Bt(t) {
    return ht(mt(t)).left + Rt(t).scrollLeft;
  }function Ht(t) {
    var e = pt(t),
        i = e.overflow,
        s = e.overflowX,
        n = e.overflowY;return (/auto|scroll|overlay|hidden/.test(i + n + s)
    );
  }function Wt(t, e) {
    var i;void 0 === e && (e = []);var s = (function t(_x11) {
      var _again3 = true;

      _function3: while (_again3) {
        var e = _x11;
        _again3 = false;
        if (["html", "body", "#document"].indexOf(nt(e)) >= 0) {
          return e.ownerDocument.body;
        } else {
          if (at(e) && Ht(e)) {
            return e;
          } else {
            _x11 = _t(e);
            _again3 = true;
            continue _function3;
          }
        }
      }
    })(t),
        n = s === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ot(s),
        r = n ? [o].concat(o.visualViewport || [], Ht(s) ? s : []) : s,
        a = e.concat(r);return n ? a : a.concat(Wt(_t(r)));
  }function Ut(t) {
    return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
  }function $t(t, e) {
    return "viewport" === e ? Ut((function (t) {
      var e = ot(t),
          i = mt(t),
          s = e.visualViewport,
          n = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;return s && (n = s.width, o = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), { width: n, height: o, x: r + Bt(t), y: a };
    })(t)) : at(e) ? (function (t) {
      var e = ht(t);return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    })(e) : Ut((function (t) {
      var e,
          i = mt(t),
          s = Rt(t),
          n = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = wt(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
          r = wt(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
          a = -s.scrollLeft + Bt(t),
          l = -s.scrollTop;return "rtl" === pt(n || i).direction && (a += wt(i.clientWidth, n ? n.clientWidth : 0) - o), { width: o, height: r, x: a, y: l };
    })(mt(t)));
  }function Ft(t) {
    return t.split("-")[1];
  }function zt(t) {
    var e,
        i = t.reference,
        s = t.element,
        n = t.placement,
        o = n ? dt(n) : null,
        r = n ? Ft(n) : null,
        a = i.x + i.width / 2 - s.width / 2,
        l = i.y + i.height / 2 - s.height / 2;switch (o) {case Q:
        e = { x: a, y: i.y - s.height };break;case G:
        e = { x: a, y: i.y + i.height };break;case Z:
        e = { x: i.x + i.width, y: l };break;case J:
        e = { x: i.x - s.width, y: l };break;default:
        e = { x: i.x, y: i.y };}var c = o ? yt(o) : null;if (null != c) {
      var d = "y" === c ? "height" : "width";switch (r) {case "start":
          e[c] = e[c] - (i[d] / 2 - s[d] / 2);break;case "end":
          e[c] = e[c] + (i[d] / 2 - s[d] / 2);}
    }return e;
  }function Kt(t, e) {
    void 0 === e && (e = {});var i = e,
        s = i.placement,
        n = void 0 === s ? t.placement : s,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        f = void 0 !== h && h,
        u = i.padding,
        p = void 0 === u ? 0 : u,
        g = Lt("number" != typeof p ? p : Ot(p, tt)),
        m = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[f ? m : d],
        y = (function (t, e, i) {
      var s = "clippingParents" === e ? (function (t) {
        var e = Wt(_t(t)),
            i = ["absolute", "fixed"].indexOf(pt(t).position) >= 0 && at(t) ? vt(t) : t;return rt(i) ? e.filter(function (t) {
          return rt(t) && ut(t, i) && "body" !== nt(t);
        }) : [];
      })(t) : [].concat(e),
          n = [].concat(s, [i]),
          o = n[0],
          r = n.reduce(function (e, i) {
        var s = $t(t, i);return e.top = wt(s.top, e.top), e.right = Et(s.right, e.right), e.bottom = Et(s.bottom, e.bottom), e.left = wt(s.left, e.left), e;
      }, $t(t, o));return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    })(rt(v) ? v : v.contextElement || mt(t.elements.popper), r, l),
        w = ht(_),
        E = zt({ reference: w, element: b, strategy: "absolute", placement: n }),
        T = Ut(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = { top: y.top - A.top + g.top, bottom: A.bottom - y.bottom + g.bottom, left: y.left - A.left + g.left, right: A.right - y.right + g.right },
        O = t.modifiersData.offset;if ("popper" === d && O) {
      var k = O[n];Object.keys(L).forEach(function (t) {
        var e = [Z, G].indexOf(t) >= 0 ? 1 : -1,
            i = [Q, G].indexOf(t) >= 0 ? "y" : "x";L[t] += k[i] * e;
      });
    }return L;
  }function Yt(t, e) {
    void 0 === e && (e = {});var i = e,
        s = i.placement,
        n = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? it : l,
        d = Ft(s),
        h = d ? a ? et : et.filter(function (t) {
      return Ft(t) === d;
    }) : tt,
        f = h.filter(function (t) {
      return c.indexOf(t) >= 0;
    });0 === f.length && (f = h);var u = f.reduce(function (e, i) {
      return e[i] = Kt(t, { placement: i, boundary: n, rootBoundary: o, padding: r })[dt(i)], e;
    }, {});return Object.keys(u).sort(function (t, e) {
      return u[t] - u[e];
    });
  }var qt = { name: "flip", enabled: !0, phase: "main", fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name;if (!e.modifiersData[s]._skip) {
        for (var n = i.mainAxis, o = void 0 === n || n, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, f = i.altBoundary, u = i.flipVariations, p = void 0 === u || u, g = i.allowedAutoPlacements, m = e.options.placement, _ = dt(m), b = l || (_ !== m && p ? (function (t) {
          if ("auto" === dt(t)) return [];var e = Pt(t);return [Mt(t), e, Mt(e)];
        })(m) : [Pt(m)]), v = [m].concat(b).reduce(function (t, i) {
          return t.concat("auto" === dt(i) ? Yt(e, { placement: i, boundary: d, rootBoundary: h, padding: c, flipVariations: p, allowedAutoPlacements: g }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L],
              k = dt(O),
              D = "start" === Ft(O),
              x = [Q, G].indexOf(k) >= 0,
              C = x ? "width" : "height",
              S = Kt(e, { placement: O, boundary: d, rootBoundary: h, altBoundary: f, padding: c }),
              N = x ? D ? Z : J : D ? G : Q;y[C] > w[C] && (N = Pt(N));var j = Pt(N),
              P = [];if ((o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every(function (t) {
            return t;
          }))) {
            A = O, T = !1;break;
          }E.set(O, P);
        }if (T) for (var I = function I(t) {
          var e = v.find(function (e) {
            var i = E.get(e);if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });if (e) return A = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--);e.placement !== A && (e.modifiersData[s]._skip = !0, e.placement = A, e.reset = !0);
      }
    }, requiresIfExists: ["offset"], data: { _skip: !1 } };function Vt(t, e, i) {
    return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x };
  }function Xt(t) {
    return [Q, Z, G, J].some(function (e) {
      return t[e] >= 0;
    });
  }var Qt = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function fn(t) {
      var e = t.state,
          i = t.name,
          s = e.rects.reference,
          n = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Kt(e, { elementContext: "reference" }),
          a = Kt(e, { altBoundary: !0 }),
          l = Vt(r, s),
          c = Vt(a, n, o),
          d = Xt(l),
          h = Xt(c);e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h });
    } },
      Gt = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name,
          n = i.offset,
          o = void 0 === n ? [0, 0] : n,
          r = it.reduce(function (t, i) {
        return t[i] = (function (t, e, i) {
          var s = dt(t),
              n = [J, Q].indexOf(s) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i,
              r = o[0],
              a = o[1];return r = r || 0, a = (a || 0) * n, [J, Z].indexOf(s) >= 0 ? { x: a, y: r } : { x: r, y: a };
        })(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[s] = r;
    } },
      Zt = { name: "popperOffsets", enabled: !0, phase: "read", fn: function fn(t) {
      var e = t.state,
          i = t.name;e.modifiersData[i] = zt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
    }, data: {} },
      Jt = { name: "preventOverflow", enabled: !0, phase: "main", fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name,
          n = i.mainAxis,
          o = void 0 === n || n,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          d = i.altBoundary,
          h = i.padding,
          f = i.tether,
          u = void 0 === f || f,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Kt(e, { boundary: l, rootBoundary: c, padding: h, altBoundary: d }),
          _ = dt(e.placement),
          b = Ft(e.placement),
          v = !b,
          y = yt(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          T = e.rects.reference,
          A = e.rects.popper,
          L = "function" == typeof g ? g(Object.assign({}, e.rects, { placement: e.placement })) : g,
          O = { x: 0, y: 0 };if (E) {
        if (o || a) {
          var k = "y" === y ? Q : J,
              D = "y" === y ? G : Z,
              x = "y" === y ? "height" : "width",
              C = E[y],
              S = E[y] + m[k],
              N = E[y] - m[D],
              j = u ? -A[x] / 2 : 0,
              P = "start" === b ? T[x] : A[x],
              I = "start" === b ? -A[x] : -T[x],
              M = e.elements.arrow,
              R = u && M ? ft(M) : { width: 0, height: 0 },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
              H = B[k],
              W = B[D],
              U = At(0, T[x], R[x]),
              $ = v ? T[x] / 2 - j - U - H - L : P - U - H - L,
              F = v ? -T[x] / 2 + j + U + W + L : I + U + W + L,
              z = e.elements.arrow && vt(e.elements.arrow),
              K = z ? "y" === y ? z.clientTop || 0 : z.clientLeft || 0 : 0,
              Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              q = E[y] + $ - Y - K,
              V = E[y] + F - Y;if (o) {
            var X = At(u ? Et(S, q) : S, C, u ? wt(N, V) : N);E[y] = X, O[y] = X - C;
          }if (a) {
            var tt = "x" === y ? Q : J,
                et = "x" === y ? G : Z,
                it = E[w],
                st = it + m[tt],
                nt = it - m[et],
                ot = At(u ? Et(st, q) : st, it, u ? wt(nt, V) : nt);E[w] = ot, O[w] = ot - it;
          }
        }e.modifiersData[s] = O;
      }
    }, requiresIfExists: ["offset"] };function te(t, e, i) {
    void 0 === i && (i = !1);var s,
        n,
        o = mt(e),
        r = ht(t),
        a = at(e),
        l = { scrollLeft: 0, scrollTop: 0 },
        c = { x: 0, y: 0 };return (a || !a && !i) && (("body" !== nt(e) || Ht(o)) && (l = (s = e) !== ot(s) && at(s) ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop } : Rt(s)), at(e) ? ((c = ht(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Bt(o))), { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height };
  }var ee = { placement: "bottom", modifiers: [], strategy: "absolute" };function ie() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }function se(t) {
    void 0 === t && (t = {});var e = t,
        i = e.defaultModifiers,
        s = void 0 === i ? [] : i,
        n = e.defaultOptions,
        o = void 0 === n ? ee : n;return function (t, e, i) {
      void 0 === i && (i = o);var n,
          r,
          a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ee, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
          l = [],
          c = !1,
          d = { state: a, setOptions: function setOptions(i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = { reference: rt(t) ? Wt(t) : t.contextElement ? Wt(t.contextElement) : [], popper: Wt(e) };var n,
              r,
              c = (function (t) {
            var e = (function (t) {
              var e = new Map(),
                  i = new Set(),
                  s = [];return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || (function t(n) {
                  i.add(n.name), [].concat(n.requires || [], n.requiresIfExists || []).forEach(function (s) {
                    if (!i.has(s)) {
                      var n = e.get(s);n && t(n);
                    }
                  }), s.push(n);
                })(t);
              }), s;
            })(t);return st.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          })((n = [].concat(s, a.options.modifiers), r = n.reduce(function (t, e) {
            var i = t[e.name];return t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                s = void 0 === i ? {} : i,
                n = t.effect;if ("function" == typeof n) {
              var o = n({ state: a, name: e, instance: d, options: s });l.push(o || function () {});
            }
          }), d.update();
        }, forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;if (ie(e, i)) {
              a.rects = { reference: te(e, vt(i), "fixed" === a.options.strategy), popper: ft(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });for (var s = 0; s < a.orderedModifiers.length; s++) if (!0 !== a.reset) {
                var n = a.orderedModifiers[s],
                    o = n.fn,
                    r = n.options,
                    l = void 0 === r ? {} : r,
                    h = n.name;"function" == typeof o && (a = o({ state: a, options: l, name: h, instance: d }) || a);
              } else a.reset = !1, s = -1;
            }
          }
        }, update: (n = function () {
          return new Promise(function (t) {
            d.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(n());
            });
          })), r;
        }), destroy: function destroy() {
          h(), c = !0;
        } };if (!ie(t, e)) return d;function h() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }return d.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), d;
    };
  }var ne = se(),
      oe = se({ defaultModifiers: [Nt, Zt, Ct, ct] }),
      re = se({ defaultModifiers: [Nt, Zt, Ct, ct, Gt, qt, Jt, kt, Qt] }),
      ae = Object.freeze({ __proto__: null, popperGenerator: se, detectOverflow: Kt, createPopperBase: ne, createPopper: re, createPopperLite: oe, top: Q, bottom: G, right: Z, left: J, auto: "auto", basePlacements: tt, start: "start", end: "end", clippingParents: "clippingParents", viewport: "viewport", popper: "popper", reference: "reference", variationPlacements: et, placements: it, beforeRead: "beforeRead", read: "read", afterRead: "afterRead", beforeMain: "beforeMain", main: "main", afterMain: "afterMain", beforeWrite: "beforeWrite", write: "write", afterWrite: "afterWrite", modifierPhases: st, applyStyles: ct, arrow: kt, computeStyles: Ct, eventListeners: Nt, flip: qt, hide: Qt, offset: Gt, popperOffsets: Zt, preventOverflow: Jt });var le = new RegExp("ArrowUp|ArrowDown|Escape"),
      ce = g() ? "top-end" : "top-start",
      de = g() ? "top-start" : "top-end",
      he = g() ? "bottom-end" : "bottom-start",
      fe = g() ? "bottom-start" : "bottom-end",
      ue = g() ? "left-start" : "right-start",
      pe = g() ? "right-start" : "left-start",
      ge = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null },
      me = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)" };
  var _e = (function (_j5) {
    _inherits(_e, _j5);

    function _e(t, e) {
      _classCallCheck(this, _e);

      _get(Object.getPrototypeOf(_e.prototype), "constructor", this).call(this, t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    _createClass(_e, [{
      key: "toggle",
      value: function toggle() {
        if (this._element.disabled || this._element.classList.contains("disabled")) return;var t = this._element.classList.contains("show");_e.clearMenus(), t || this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;var t = _e.getParentFromElement(this._element),
            e = { relatedTarget: this._element };if (!N.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) B.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var _e11 = this._element;"parent" === this._config.reference ? _e11 = t : r(this._config.reference) ? (_e11 = this._config.reference, void 0 !== this._config.reference.jquery && (_e11 = this._config.reference[0])) : "object" == typeof this._config.reference && (_e11 = this._config.reference);var _i6 = this._getPopperConfig(),
                _s3 = _i6.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });this._popper = re(_e11, this._menu, _i6), _s3 && B.setDataAttribute(this._menu, "popper", "static");
          }"ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return N.on(t, "mouseover", null, function () {});
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), N.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;var t = { relatedTarget: this._element };N.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), _get(Object.getPrototypeOf(_e.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this10 = this;

        N.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this10.toggle();
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ((t = _extends({}, this.constructor.Default, B.getDataAttributes(this._element), t), l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect)) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return H.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;if (t.classList.contains("dropend")) return ue;if (t.classList.contains("dropstart")) return pe;var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup") ? e ? de : ce : e ? fe : he;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this11 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this11._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), _extends({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = b.get(t, "bs.dropdown");if ((i || (i = new _e(t, "object" == typeof e ? e : null)), "string" == typeof e)) {
          if (void 0 === i[e]) throw new TypeError("No method named \"" + e + "\"");i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          _e.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;if (/input|select|textarea|form/i.test(t.target.tagName)) return;
        }var e = H.find('[data-bs-toggle="dropdown"]');for (var _i7 = 0, s = e.length; _i7 < s; _i7++) {
          var _s4 = b.get(e[_i7], "bs.dropdown"),
              _n3 = { relatedTarget: e[_i7] };if ((t && "click" === t.type && (_n3.clickEvent = t), !_s4)) continue;var _o3 = _s4._menu;if (e[_i7].classList.contains("show")) {
            var _ref4;

            if (t) {
              if ([_s4._element].some(function (e) {
                return t.composedPath().includes(e);
              })) continue;if ("keyup" === t.type && "Tab" === t.key && _o3.contains(t.target)) continue;
            }N.trigger(e[_i7], "hide.bs.dropdown", _n3).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
              return N.off(t, "mouseover", null, function () {});
            }), e[_i7].setAttribute("aria-expanded", "false"), _s4._popper && _s4._popper.destroy(), _o3.classList.remove("show"), e[_i7].classList.remove("show"), B.removeDataAttribute(_o3, "popper"), N.trigger(e[_i7], "hidden.bs.dropdown", _n3));
          }
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !le.test(t.key)) return;if ((t.preventDefault(), t.stopPropagation(), this.disabled || this.classList.contains("disabled"))) return;var e = _e.getParentFromElement(this),
            i = this.classList.contains("show");if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void _e.clearMenus();if (!i && ("ArrowUp" === t.key || "ArrowDown" === t.key)) return void (this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();if (!i || "Space" === t.key) return void _e.clearMenus();var s = H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(c);if (!s.length) return;var n = s.indexOf(t.target);"ArrowUp" === t.key && n > 0 && n--, "ArrowDown" === t.key && n < s.length - 1 && n++, n = -1 === n ? 0 : n, s[n].focus();
      }
    }, {
      key: "Default",
      get: function get() {
        return ge;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return me;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]);

    return _e;
  })(j);

  N.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', _e.dataApiKeydownHandler), N.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", _e.dataApiKeydownHandler), N.on(document, "click.bs.dropdown.data-api", _e.clearMenus), N.on(document, "keyup.bs.dropdown.data-api", _e.clearMenus), N.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), _e.dropdownInterface(this);
  }), m("dropdown", _e);var be = { backdrop: !0, keyboard: !0, focus: !0 },
      ve = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
  var ye = (function (_j6) {
    _inherits(ye, _j6);

    function ye(t, e) {
      _classCallCheck(this, ye);

      _get(Object.getPrototypeOf(ye.prototype), "constructor", this).call(this, t), this._config = this._getConfig(e), this._dialog = H.findOne(".modal-dialog", this._element), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    _createClass(ye, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this12 = this;

        if (this._isShown || this._isTransitioning) return;this._isAnimated() && (this._isTransitioning = !0);var e = N.trigger(this._element, "show.bs.modal", { relatedTarget: t });this._isShown || e.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), N.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this12.hide(t);
        }), N.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          N.one(_this12._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this12._element && (_this12._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this12._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this13 = this;

        if ((t && t.preventDefault(), !this._isShown || this._isTransitioning)) return;if (N.trigger(this._element, "hide.bs.modal").defaultPrevented) return;this._isShown = !1;var e = this._isAnimated();if ((e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), N.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.modal"), N.off(this._dialog, "mousedown.dismiss.bs.modal"), e)) {
          var _t7 = n(this._element);N.one(this._element, "transitionend", function (t) {
            return _this13._hideModal(t);
          }), a(this._element, _t7);
        } else this._hideModal();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._element, this._dialog].forEach(function (t) {
          return N.off(t, ".bs.modal");
        }), _get(Object.getPrototypeOf(ye.prototype), "dispose", this).call(this), N.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _extends({}, be, t), l("modal", t, ve), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this14 = this;

        var e = this._isAnimated(),
            i = H.findOne(".modal-body", this._dialog);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();var s = function s() {
          _this14._config.focus && _this14._element.focus(), _this14._isTransitioning = !1, N.trigger(_this14._element, "shown.bs.modal", { relatedTarget: t });
        };if (e) {
          var _t8 = n(this._dialog);N.one(this._dialog, "transitionend", s), a(this._dialog, _t8);
        } else s();
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this15 = this;

        N.off(document, "focusin.bs.modal"), N.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this15._element === t.target || _this15._element.contains(t.target) || _this15._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this16 = this;

        this._isShown ? N.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this16._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this16.hide()) : _this16._config.keyboard || "Escape" !== t.key || _this16._triggerBackdropTransition();
        }) : N.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this17 = this;

        this._isShown ? N.on(window, "resize.bs.modal", function () {
          return _this17._adjustDialog();
        }) : N.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this18 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          document.body.classList.remove("modal-open"), _this18._resetAdjustments(), _this18._resetScrollbar(), N.trigger(_this18._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_removeBackdrop",
      value: function _removeBackdrop() {
        this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this19 = this;

        var e = this._isAnimated();if (this._isShown && this._config.backdrop) {
          if ((this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), N.on(this._element, "click.dismiss.bs.modal", function (t) {
            _this19._ignoreBackdropClick ? _this19._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === _this19._config.backdrop ? _this19._triggerBackdropTransition() : _this19.hide());
          }), e && u(this._backdrop), this._backdrop.classList.add("show"), !e)) return void t();var _i8 = n(this._backdrop);N.one(this._backdrop, "transitionend", t), a(this._backdrop, _i8);
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");var _i9 = function _i9() {
            _this19._removeBackdrop(), t();
          };if (e) {
            var _t9 = n(this._backdrop);N.one(this._backdrop, "transitionend", _i9), a(this._backdrop, _t9);
          } else _i9();
        } else t();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this20 = this;

        if (N.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;var t = this._element.scrollHeight > document.documentElement.clientHeight;t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");var e = n(this._dialog);N.off(this._element, "transitionend"), N.one(this._element, "transitionend", function () {
          _this20._element.classList.remove("modal-static"), t || (N.one(_this20._element, "transitionend", function () {
            _this20._element.style.overflowY = "";
          }), a(_this20._element, e));
        }), a(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;(!this._isBodyOverflowing && t && !g() || this._isBodyOverflowing && !t && g()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !g() || !this._isBodyOverflowing && t && g()) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }, {
      key: "_checkScrollbar",
      value: function _checkScrollbar() {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: "_setScrollbar",
      value: function _setScrollbar() {
        var _this21 = this;

        this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (t) {
          return t + _this21._scrollbarWidth;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (t) {
          return t - _this21._scrollbarWidth;
        }), this._setElementAttributes("body", "paddingRight", function (t) {
          return t + _this21._scrollbarWidth;
        })), document.body.classList.add("modal-open");
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this22 = this;

        H.find(t).forEach(function (t) {
          if (t !== document.body && window.innerWidth > t.clientWidth + _this22._scrollbarWidth) return;var s = t.style[e],
              n = window.getComputedStyle(t)[e];B.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(n)) + "px";
        });
      }
    }, {
      key: "_resetScrollbar",
      value: function _resetScrollbar() {
        this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        H.find(t).forEach(function (t) {
          var i = B.getDataAttribute(t, e);void 0 === i && t === document.body ? t.style[e] = "" : (B.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_getScrollbarWidth",
      value: function _getScrollbarWidth() {
        var t = document.createElement("div");t.className = "modal-scrollbar-measure", document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = b.get(this, "bs.modal");var s = _extends({}, be, B.getDataAttributes(this), "object" == typeof t && t ? t : {});if ((i || (i = new ye(this, s)), "string" == typeof t)) {
            if (void 0 === i[t]) throw new TypeError("No method named \"" + t + "\"");i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]);

    return ye;
  })(j);

  N.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this23 = this;

    var e = s(this);"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), N.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || N.one(e, "hidden.bs.modal", function () {
        c(_this23) && _this23.focus();
      });
    });var i = b.get(e, "bs.modal");if (!i) {
      var _t10 = _extends({}, B.getDataAttributes(e), B.getDataAttributes(this));i = new ye(e, _t10);
    }i.toggle(this);
  }), m("modal", ye);var we = function we() {
    var t = document.documentElement.clientWidth;return Math.abs(window.innerWidth - t);
  },
      Ee = function Ee(t, e, i) {
    var s = we();H.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + s) return;var n = t.style[e],
          o = window.getComputedStyle(t)[e];B.setDataAttribute(t, e, n), t.style[e] = i(Number.parseFloat(o)) + "px";
    });
  },
      Te = function Te(t, e) {
    H.find(t).forEach(function (t) {
      var i = B.getDataAttribute(t, e);void 0 === i && t === document.body ? t.style.removeProperty(e) : (B.removeDataAttribute(t, e), t.style[e] = i);
    });
  },
      Ae = { backdrop: !0, keyboard: !0, scroll: !1 },
      Le = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  var Oe = (function (_j7) {
    _inherits(Oe, _j7);

    function Oe(t, e) {
      _classCallCheck(this, Oe);

      _get(Object.getPrototypeOf(Oe.prototype), "constructor", this).call(this, t), this._config = this._getConfig(e), this._isShown = !1, this._addEventListeners();
    }

    _createClass(Oe, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || N.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || (function () {
          var t = arguments.length <= 0 || arguments[0] === undefined ? we() : arguments[0];
          document.body.style.overflow = "hidden", Ee(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", function (e) {
            return e + t;
          }), Ee(".sticky-top", "marginRight", function (e) {
            return e - t;
          }), Ee("body", "paddingRight", function (e) {
            return e + t;
          });
        })(), this._element.classList.add("offcanvas-toggling"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(function () {
          _this24._element.classList.remove("offcanvas-toggling"), N.trigger(_this24._element, "shown.bs.offcanvas", { relatedTarget: t }), _this24._enforceFocusOnElement(_this24._element);
        }, n(this._element)));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && (N.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"), N.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(function () {
          _this25._element.setAttribute("aria-hidden", !0), _this25._element.removeAttribute("aria-modal"), _this25._element.removeAttribute("role"), _this25._element.style.visibility = "hidden", _this25._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), _this25._config.scroll || (document.body.style.overflow = "auto", Te(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"), Te(".sticky-top", "marginRight"), Te("body", "paddingRight")), N.trigger(_this25._element, "hidden.bs.offcanvas"), _this25._element.classList.remove("offcanvas-toggling");
        }, n(this._element))));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _extends({}, Ae, B.getDataAttributes(this._element), "object" == typeof t ? t : {}), l("offcanvas", t, Le), t;
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        N.off(document, "focusin.bs.offcanvas"), N.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this26 = this;

        N.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this26.hide();
        }), N.on(document, "keydown", function (t) {
          _this26._config.keyboard && "Escape" === t.key && _this26.hide();
        }), N.on(document, "click.bs.offcanvas.data-api", function (t) {
          var e = H.findOne(i(t.target));_this26._element.contains(t.target) || e === _this26._element || _this26.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.offcanvas") || new Oe(this, "object" == typeof t ? t : {});if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"" + t + "\"");e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.offcanvas";
      }
    }]);

    return Oe;
  })(j);

  N.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this27 = this;

    var e = s(this);if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this))) return;N.one(e, "hidden.bs.offcanvas", function () {
      c(_this27) && _this27.focus();
    });var i = H.findOne(".offcanvas.show, .offcanvas-toggling");i && i !== e || (b.get(e, "bs.offcanvas") || new Oe(e)).toggle(this);
  }), N.on(window, "load.bs.offcanvas.data-api", function () {
    H.find(".offcanvas.show").forEach(function (t) {
      return (b.get(t, "bs.offcanvas") || new Oe(t)).show();
    });
  }), m("offcanvas", Oe);var ke = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ce = function Ce(t, e) {
    var i = t.nodeName.toLowerCase();if (e.includes(i)) return !ke.has(i) || Boolean(De.test(t.nodeValue) || xe.test(t.nodeValue));var s = e.filter(function (t) {
      return t instanceof RegExp;
    });for (var _t11 = 0, _e12 = s.length; _t11 < _e12; _t11++) {
      if (s[_t11].test(i)) return !0;
    }return !1;
  };function Se(t, e, i) {
    var _ref5;

    if (!t.length) return t;if (i && "function" == typeof i) return i(t);var s = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(s.body.querySelectorAll("*")));
    var _loop = function (_t12, _i10) {
      var _ref6;

      var i = o[_t12],
          s = i.nodeName.toLowerCase();if (!n.includes(s)) {
        i.parentNode.removeChild(i);return "continue";
      }var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[s] || []);r.forEach(function (t) {
        Ce(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i10 = o.length; _t12 < _i10; _t12++) {
      var _ret2 = _loop(_t12, _i10);

      if (_ret2 === "continue") continue;
    }return s.body.innerHTML;
  }var Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      je = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Pe = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" },
      Ie = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" },
      Me = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
      Re = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
  var Be = (function (_j8) {
    _inherits(Be, _j8);

    function Be(t, e) {
      _classCallCheck(this, Be);

      if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");_get(Object.getPrototypeOf(Be.prototype), "constructor", this).call(this, t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    _createClass(Be, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);_e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element, this.constructor.EVENT_KEY), N.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, _get(Object.getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this28 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");if (!this.isWithContent() || !this._isEnabled) return;var e = N.trigger(this._element, this.constructor.Event.SHOW),
            i = h(this._element),
            s = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);if (e.defaultPrevented || !s) return;var o = this.getTipElement(),
            r = t(this.constructor.NAME);o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
            c = this._getAttachment(l);this._addAttachmentClass(c);var d = this._getContainer();b.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), N.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = re(this._element, o, this._getPopperConfig(c)), o.classList.add("show");var f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;f && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(f.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          N.on(t, "mouseover", function () {});
        });var u = function u() {
          var t = _this28._hoverState;_this28._hoverState = null, N.trigger(_this28._element, _this28.constructor.Event.SHOWN), "out" === t && _this28._leave(null, _this28);
        };if (this.tip.classList.contains("fade")) {
          var _t13 = n(this.tip);N.one(this.tip, "transitionend", u), a(this.tip, _t13);
        } else u();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this29 = this;

        if (!this._popper) return;var t = this.getTipElement(),
            e = function e() {
          _this29._isWithActiveTrigger() || ("show" !== _this29._hoverState && t.parentNode && t.parentNode.removeChild(t), _this29._cleanTipClass(), _this29._element.removeAttribute("aria-describedby"), N.trigger(_this29._element, _this29.constructor.Event.HIDDEN), _this29._popper && (_this29._popper.destroy(), _this29._popper = null));
        };if (!N.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var _ref8;

          if ((t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
            return N.off(t, "mouseover", f);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade"))) {
            var _i11 = n(t);N.one(t, "transitionend", e), a(t, _i11);
          } else e();this._hoverState = "";
        }
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;var t = document.createElement("div");return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();this.setElementContent(H.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return "object" == typeof e && r(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;return (e = e || b.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), b.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this30 = this;

        var t = this.config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this30._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this31 = this;

        var e = { placement: t, modifiers: [{ name: "flip", options: { altBoundary: !0, fallbackPlacements: this.config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this.config.boundary } }, { name: "arrow", options: { element: "." + this.constructor.NAME + "-arrow" } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: function fn(t) {
              return _this31._handlePopperPlacementChange(t);
            } }], onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this31._handlePopperPlacementChange(t);
          } };return _extends({}, e, "function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContainer",
      value: function _getContainer() {
        return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : H.findOne(this.config.container);
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ie[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this32 = this;

        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) N.on(_this32._element, _this32.constructor.Event.CLICK, _this32.config.selector, function (t) {
            return _this32.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = "hover" === t ? _this32.constructor.Event.MOUSEENTER : _this32.constructor.Event.FOCUSIN,
                _i12 = "hover" === t ? _this32.constructor.Event.MOUSELEAVE : _this32.constructor.Event.FOCUSOUT;N.on(_this32._element, _e14, _this32.config.selector, function (t) {
              return _this32._enter(t);
            }), N.on(_this32._element, _i12, _this32.config.selector, function (t) {
              return _this32._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this32._element && _this32.hide();
        }, N.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = _extends({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = typeof this._element.getAttribute("data-bs-original-title");(t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e.config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e.config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t14 in this._activeTrigger) {
          if (this._activeTrigger[_t14]) return !0;
        }return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = B.getDataAttributes(this._element);return Object.keys(e).forEach(function (t) {
          je.has(t) && delete e[t];
        }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = _extends({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};if (this.config) for (var _e15 in this.config) {
          this.constructor.Default[_e15] !== this.config[_e15] && (t[_e15] = this.config[_e15]);
        }return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ne);null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.tooltip");var i = "object" == typeof t && t;if ((e || !/dispose|hide/.test(t)) && (e || (e = new Be(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Me;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pe;
      }
    }]);

    return Be;
  })(j);

  m("tooltip", Be);var He = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      We = _extends({}, Be.Default, { placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      Ue = _extends({}, Be.DefaultType, { content: "(string|element|function)" }),
      $e = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
  var Fe = (function (_Be) {
    _inherits(Fe, _Be);

    function Fe() {
      _classCallCheck(this, Fe);

      _get(Object.getPrototypeOf(Fe.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Fe, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();this.setElementContent(H.findOne(".popover-header", t), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this._element)), this.setElementContent(H.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this.config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(He);null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.popover");var i = "object" == typeof t ? t : null;if ((e || !/dispose|hide/.test(t)) && (e || (e = new Fe(this, i), b.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return We;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return $e;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ue;
      }
    }]);

    return Fe;
  })(Be);

  m("popover", Fe);var ze = { offset: 10, method: "auto", target: "" },
      Ke = { offset: "number", method: "string", target: "(string|element)" };
  var Ye = (function (_j9) {
    _inherits(Ye, _j9);

    function Ye(t, e) {
      var _this33 = this;

      _classCallCheck(this, Ye);

      _get(Object.getPrototypeOf(Ye.prototype), "constructor", this).call(this, t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link, " + this._config.target + " .list-group-item, " + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, N.on(this._scrollElement, "scroll.bs.scrollspy", function () {
        return _this33._process();
      }), this.refresh(), this._process();
    }

    _createClass(Ye, [{
      key: "refresh",
      value: function refresh() {
        var _this34 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), H.find(this._selector).map(function (t) {
          var n = i(t),
              o = n ? H.findOne(n) : null;if (o) {
            var _t15 = o.getBoundingClientRect();if (_t15.width || _t15.height) return [B[e](o).top + s, n];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this34._offsets.push(t[0]), _this34._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(Object.getPrototypeOf(Ye.prototype), "dispose", this).call(this), N.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(e) {
        if ("string" != typeof (e = _extends({}, ze, "object" == typeof e && e ? e : {})).target && r(e.target)) {
          var _i13 = e.target.id;
          _i13 || (_i13 = t("scrollspy"), e.target.id = _i13), e.target = "#" + _i13;
        }return l("scrollspy", e, Ke), e;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
          var _t16 = this._targets[this._targets.length - 1];this._activeTarget !== _t16 && this._activate(_t16);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var _e16 = this._offsets.length; _e16--;) {
            this._activeTarget !== this._targets[_e16] && t >= this._offsets[_e16] && (void 0 === this._offsets[_e16 + 1] || t < this._offsets[_e16 + 1]) && this._activate(this._targets[_e16]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();var e = this._selector.split(",").map(function (e) {
          return e + "[data-bs-target=\"" + t + "\"]," + e + "[href=\"" + t + "\"]";
        }),
            i = H.findOne(e.join(","));i.classList.contains("dropdown-item") ? (H.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), H.parents(i, ".nav, .list-group").forEach(function (t) {
          H.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), H.prev(t, ".nav-item").forEach(function (t) {
            H.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), N.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        H.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.scrollspy");if ((e || (e = new Ye(this, "object" == typeof t && t)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ze;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]);

    return Ye;
  })(j);

  N.on(window, "load.bs.scrollspy.data-api", function () {
    H.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Ye(t, B.getDataAttributes(t));
    });
  }), m("scrollspy", Ye);
  var qe = (function (_j10) {
    _inherits(qe, _j10);

    function qe() {
      _classCallCheck(this, qe);

      _get(Object.getPrototypeOf(qe.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(qe, [{
      key: "show",
      value: function show() {
        var _this35 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || d(this._element)) return;var t = undefined;var e = s(this._element),
            i = this._element.closest(".nav, .list-group");if (i) {
          var _e17 = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";t = H.find(_e17, i), t = t[t.length - 1];
        }var n = t ? N.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null;if (N.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== n && n.defaultPrevented) return;this._activate(this._element, i);var o = function o() {
          N.trigger(t, "hidden.bs.tab", { relatedTarget: _this35._element }), N.trigger(_this35._element, "shown.bs.tab", { relatedTarget: t });
        };e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this36 = this;

        var s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? H.children(e, ".active") : H.find(":scope > li > .active", e))[0],
            o = i && s && s.classList.contains("fade"),
            r = function r() {
          return _this36._transitionComplete(t, s, i);
        };if (s && o) {
          var _t17 = n(s);s.classList.remove("show"), N.one(s, "transitionend", r), a(s, _t17);
        } else r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");var _t18 = H.findOne(":scope > .dropdown-menu .active", e.parentNode);_t18 && _t18.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && H.find(".dropdown-toggle").forEach(function (t) {
          return t.classList.add("active");
        }), t.setAttribute("aria-expanded", !0)), i && i();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.tab") || new qe(this);if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");e[t]();
          }
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tab";
      }
    }]);

    return qe;
  })(j);

  N.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    t.preventDefault(), (b.get(this, "bs.tab") || new qe(this)).show();
  }), m("tab", qe);var Ve = { animation: "boolean", autohide: "boolean", delay: "number" },
      Xe = { animation: !0, autohide: !0, delay: 5e3 };
  var Qe = (function (_j11) {
    _inherits(Qe, _j11);

    function Qe(t, e) {
      _classCallCheck(this, Qe);

      _get(Object.getPrototypeOf(Qe.prototype), "constructor", this).call(this, t), this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    _createClass(Qe, [{
      key: "show",
      value: function show() {
        var _this37 = this;

        if (N.trigger(this._element, "show.bs.toast").defaultPrevented) return;this._clearTimeout(), this._config.animation && this._element.classList.add("fade");var t = function t() {
          _this37._element.classList.remove("showing"), _this37._element.classList.add("show"), N.trigger(_this37._element, "shown.bs.toast"), _this37._config.autohide && (_this37._timeout = setTimeout(function () {
            _this37.hide();
          }, _this37._config.delay));
        };if ((this._element.classList.remove("hide"), u(this._element), this._element.classList.add("showing"), this._config.animation)) {
          var _e18 = n(this._element);N.one(this._element, "transitionend", t), a(this._element, _e18);
        } else t();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this38 = this;

        if (!this._element.classList.contains("show")) return;if (N.trigger(this._element, "hide.bs.toast").defaultPrevented) return;var t = function t() {
          _this38._element.classList.add("hide"), N.trigger(_this38._element, "hidden.bs.toast");
        };if ((this._element.classList.remove("show"), this._config.animation)) {
          var _e19 = n(this._element);N.one(this._element, "transitionend", t), a(this._element, _e19);
        } else t();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.toast"), _get(Object.getPrototypeOf(Qe.prototype), "dispose", this).call(this), this._config = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _extends({}, Xe, B.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), l("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        N.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this39.hide();
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.toast");if ((e || (e = new Qe(this, "object" == typeof t && t)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"" + t + "\"");e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ve;
      }
    }, {
      key: "Default",
      get: function get() {
        return Xe;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]);

    return Qe;
  })(j);

  return m("toast", Qe), { Alert: P, Button: I, Carousel: Y, Collapse: X, Dropdown: _e, Modal: ye, Offcanvas: Oe, Popover: Fe, ScrollSpy: Ye, Tab: qe, Toast: Qe, Tooltip: Be };
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// cross browsers addRule method


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addCSSRule = addCSSRule;

var _rafJs = __webpack_require__(4);

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
  'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index);
  // });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hasClassJs = __webpack_require__(3);

var addClass = _hasClassJs.classListSupport ? function (el, str) {
  if (!(0, _hasClassJs.hasClass)(el, str)) {
    el.classList.add(str);
  }
} : function (el, str) {
  if (!(0, _hasClassJs.hasClass)(el, str)) {
    el.className += ' ' + str;
  }
};

exports.addClass = addClass;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addEvents = addEvents;

var _passiveOptionJs = __webpack_require__(7);

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOptionJs.passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFromNodeList = arrayFromNodeList;

function arrayFromNodeList(nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var win = window;

var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function (id) {
  clearTimeout(id);
};
exports.caf = caf;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// get css-calc
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc();


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.calc = calc;

var _getBodyJs = __webpack_require__(0);

var _setFakeBodyJs = __webpack_require__(2);

var _resetFakeBodyJs = __webpack_require__(1);

function calc() {
  var doc = document,
      body = (0, _getBodyJs.getBody)(),
      docOverflow = (0, _setFakeBodyJs.setFakeBody)(body),
      div = doc.createElement('div'),
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) {
        result = val.replace(str, '');
        break;
      }
    }
  } catch (e) {}

  body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : div.remove();

  return result;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.checkStorageValue = checkStorageValue;

function checkStorageValue(value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var classListSupport = ('classList' in document.createElement('_'));
exports.classListSupport = classListSupport;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// create and append style sheet


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleSheet = createStyleSheet;

function createStyleSheet(media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) {
    style.setAttribute("media", media);
  }

  // Add nonce attribute for Content Security Policy
  if (nonce) {
    style.setAttribute("nonce", nonce);
  }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
}

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = Events;

function Events() {
  return {
    topics: {},
    on: function on(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function off(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function emit(eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function (fn) {
          fn(data, eventName);
        });
      }
    }
  };
}

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;

function extend() {
  var obj,
      name,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;

function forEach(arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAttr = getAttr;

function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getCssRulesLength = getCssRulesLength;

function getCssRulesLength(sheet) {
  var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getEndProperty = getEndProperty;

function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getSlideId = getSlideId;

function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;

  return 'tns' + window.tnsId;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getTouchDirection = getTouchDirection;

function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));

  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.has3DTransforms = has3DTransforms;

var _getBodyJs = __webpack_require__(0);

var _setFakeBodyJs = __webpack_require__(2);

var _resetFakeBodyJs = __webpack_require__(1);

function has3DTransforms(tf) {
    if (!tf) {
        return false;
    }
    if (!window.getComputedStyle) {
        return false;
    }

    var doc = document,
        body = (0, _getBodyJs.getBody)(),
        docOverflow = (0, _setFakeBodyJs.setFakeBody)(body),
        el = doc.createElement('p'),
        has3d,
        cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

    cssTF += 'transform';

    // Add it to the body to get the computed style
    body.insertBefore(el, null);

    el.style[tf] = 'translate3d(1px,1px,1px)';
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

    body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : el.remove();

    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasAttr = hasAttr;

function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.hideElement = hideElement;

function hideElement(el, forceHide) {
  if (el.style.display !== 'none') {
    el.style.display = 'none';
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isVisible = isVisible;

function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.jsTransform = jsTransform;

function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = to.indexOf('%') >= 0 ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.mediaquerySupport = mediaquerySupport;

var _getBodyJs = __webpack_require__(0);

var _setFakeBodyJs = __webpack_require__(2);

var _resetFakeBodyJs = __webpack_require__(1);

function mediaquerySupport() {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }

  var doc = document,
      body = (0, _getBodyJs.getBody)(),
      docOverflow = (0, _setFakeBodyJs.setFakeBody)(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : div.remove();

  return position === "absolute";
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// get subpixel support value
// @return - boolean


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.percentageLayout = percentageLayout;

var _getBodyJs = __webpack_require__(0);

var _setFakeBodyJs = __webpack_require__(2);

var _resetFakeBodyJs = __webpack_require__(1);

function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = (0, _getBodyJs.getBody)(),
      docOverflow = (0, _setFakeBodyJs.setFakeBody)(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAttrs = removeAttrs;

var _isNodeListJs = __webpack_require__(6);

function removeAttrs(els, attrs) {
  els = (0, _isNodeListJs.isNodeList)(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// cross browsers addRule method


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.removeCSSRule = removeCSSRule;

var _rafJs = __webpack_require__(4);

function removeCSSRule(sheet, index) {
  // return raf(function() {
  'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
  // });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hasClassJs = __webpack_require__(3);

var removeClass = _hasClassJs.classListSupport ? function (el, str) {
  if ((0, _hasClassJs.hasClass)(el, str)) {
    el.classList.remove(str);
  }
} : function (el, str) {
  if ((0, _hasClassJs.hasClass)(el, str)) {
    el.className = el.className.replace(str, '');
  }
};

exports.removeClass = removeClass;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.removeEvents = removeEvents;

var _passiveOptionJs = __webpack_require__(7);

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOptionJs.passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttrs = setAttrs;

var _isNodeListJs = __webpack_require__(6);

function setAttrs(els, attrs) {
  els = (0, _isNodeListJs.isNodeList)(els) || els instanceof Array ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') {
    return;
  }

  for (var i = els.length; i--;) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalStorage = setLocalStorage;

function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {}
  }
  return value;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.showElement = showElement;

function showElement(el, forceHide) {
  if (el.style.display === 'none') {
    el.style.display = '';
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDegree = toDegree;

function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.whichProperty = whichProperty;

function whichProperty(props) {
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];

    prefixes.forEach(function (prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (el.style[prop] !== undefined) {
      return prop;
    }
  }

  return false; // explicit for ie9-
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Object.keys


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _helpersRafJs = __webpack_require__(4);

var _helpersCafJs = __webpack_require__(15);

var _helpersExtendJs = __webpack_require__(21);

var _helpersCheckStorageValueJs = __webpack_require__(17);

var _helpersSetLocalStorageJs = __webpack_require__(40);

var _helpersGetSlideIdJs = __webpack_require__(26);

var _helpersCalcJs = __webpack_require__(16);

var _helpersPercentageLayoutJs = __webpack_require__(34);

var _helpersMediaquerySupportJs = __webpack_require__(33);

var _helpersCreateStyleSheetJs = __webpack_require__(19);

var _helpersAddCSSRuleJs = __webpack_require__(11);

var _helpersRemoveCSSRuleJs = __webpack_require__(36);

var _helpersGetCssRulesLengthJs = __webpack_require__(24);

var _helpersToDegreeJs = __webpack_require__(42);

var _helpersGetTouchDirectionJs = __webpack_require__(27);

var _helpersForEachJs = __webpack_require__(22);

var _helpersHasClassJs = __webpack_require__(3);

var _helpersAddClassJs = __webpack_require__(12);

var _helpersRemoveClassJs = __webpack_require__(37);

var _helpersHasAttrJs = __webpack_require__(29);

var _helpersGetAttrJs = __webpack_require__(23);

var _helpersSetAttrsJs = __webpack_require__(39);

var _helpersRemoveAttrsJs = __webpack_require__(35);

var _helpersArrayFromNodeListJs = __webpack_require__(14);

var _helpersHideElementJs = __webpack_require__(30);

var _helpersShowElementJs = __webpack_require__(41);

var _helpersIsVisibleJs = __webpack_require__(31);

var _helpersWhichPropertyJs = __webpack_require__(43);

var _helpersHas3DTransformsJs = __webpack_require__(28);

var _helpersGetEndPropertyJs = __webpack_require__(25);

var _helpersAddEventsJs = __webpack_require__(13);

var _helpersRemoveEventsJs = __webpack_require__(38);

var _helpersEventsJs = __webpack_require__(20);

var _helpersJsTransformJs = __webpack_require__(32);

if (!Object.keys) {
  Object.keys = function (object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

var tns = function tns(options) {
  options = (0, _helpersExtendJs.extend)({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date();

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) {
        tnsStorage = {};
      }
    } catch (e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
          tnsStorage.removeItem(item);
        });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tC']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tC', (0, _helpersCalcJs.calc)(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tPL']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tPL', (0, _helpersPercentageLayoutJs.percentageLayout)(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tMQ']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tMQ', (0, _helpersMediaquerySupportJs.mediaquerySupport)(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tTf']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tTf', (0, _helpersWhichPropertyJs.whichProperty)('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['t3D']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 't3D', (0, _helpersHas3DTransformsJs.has3DTransforms)(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tTDu']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tTDu', (0, _helpersWhichPropertyJs.whichProperty)('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tTDe']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tTDe', (0, _helpersWhichPropertyJs.whichProperty)('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tADu']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tADu', (0, _helpersWhichPropertyJs.whichProperty)('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tADe']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tADe', (0, _helpersWhichPropertyJs.whichProperty)('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tTE']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tTE', (0, _helpersGetEndPropertyJs.getEndProperty)(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? (0, _helpersCheckStorageValueJs.checkStorageValue)(tnsStorage['tAE']) : (0, _helpersSetLocalStorageJs.setLocalStorage)(tnsStorage, 'tAE', (0, _helpersGetEndPropertyJs.getEndProperty)(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function (item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn('Can\'t find', options[item]);
        }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn('No slides found in', options.container);
    }
    return;
  }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = (0, _helpersExtendJs.extend)(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? { items: val } : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions(obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') {
          obj[key] = 'page';
        }
        if (key === 'edgePadding') {
          obj[key] = false;
        }
        if (key === 'autoHeight') {
          obj[key] = false;
        }
      }

      // update responsive options
      if (key === 'responsive') {
        updateOptions(obj[key]);
      }
    }
  }
  if (!carousel) {
    updateOptions(options);
  }

  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) {
    setBreakpointZone();
  }
  if (carousel) {
    container.className += ' tns-vpfix';
  }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = (0, _helpersCreateStyleSheetJs.createStyleSheet)(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions,
      // collection of slide positions
  slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,

  // transform
  transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',

  // index
  getIndexMax = (function () {
    if (fixedWidth) {
      return function () {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function () {
        for (var i = 0; i < slideCountNew; i++) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function () {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,

  // resize
  resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpersEventsJs.Events(),

  // id, class
  newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || (0, _helpersGetSlideIdJs.getSlideId)(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
    'click': onControlsClick,
    'keydown': onControlsKeydown
  },
      navEvents = {
    'click': onNavClick,
    'keydown': onNavKeydown
  },
      hoverEvents = {
    'mouseover': mouseoverPause,
    'mouseout': mouseoutRestart
  },
      visibilityEvent = { 'visibilitychange': onVisibilityChange },
      docmentKeydownEvent = { 'keydown': onDocumentKeydown },
      touchEvents = {
    'touchstart': onPanStart,
    'touchmove': onPanMove,
    'touchend': onPanEnd,
    'touchcancel': onPanEnd
  },
      dragEvents = {
    'mousedown': onPanStart,
    'mousemove': onPanMove,
    'mouseup': onPanEnd,
    'mouseleave': onPanEnd
  },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
    'load': onImgLoaded,
    'error': onImgFailed
  },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? function (a, b) {
      return a.x - b.x;
    } : function (a, b) {
      return a.y - b.y;
    };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) {
    resetVariblesWhenDisable(disable || freeze);
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }
  }

  if (carousel) {
    container.className = container.className.replace('tns-vpfix', '');
  }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable(condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide() {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) {
      tem += slideCount;
    }
    return tem % slideCount + 1;
  }

  function getStartIndex(ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }

    if (carousel) {
      i -= cloneCount;
    }
    while (i < 0) {
      i += slideCount;
    }

    return Math.floor(i % slideCount);
  }

  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) {
      result = pages - 1;
    }

    return result;
  }

  function getItemsMax() {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || fixedWidth && !viewportMax) {
      return slideCount - 1;
      // most cases
    } else {
        var str = fixedWidth ? 'fixedWidth' : 'items',
            arr = [];

        if (fixedWidth || options[str] < slideCount) {
          arr.push(options[str]);
        }

        if (responsive) {
          for (var bp in responsive) {
            var tem = responsive[bp][str];
            if (tem && (fixedWidth || tem < slideCount)) {
              arr.push(tem);
            }
          }
        }

        if (!arr.length) {
          arr.push(0);
        }

        return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
      }
  }

  function getCloneCountForLoop() {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth() {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition(pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth(_x) {
    var _left;

    var _again = true;

    _function: while (_again) {
      var el = _x;
      _again = false;

      if (el == null) {
        return;
      }
      var div = doc.createElement('div'),
          rect,
          width;
      el.appendChild(div);
      rect = div.getBoundingClientRect();
      width = rect.right - rect.left;
      div.remove();

      if (_left = width) {
        return _left;
      }

      _x = el.parentNode;
      _again = true;
      div = rect = width = undefined;
      continue _function;
    }
  }

  function getViewportWidth() {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption(item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) {
            return true;
          }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption(item, ww) {
    if (ww == null) {
      ww = windowWidth;
    }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) {
              result = responsive[bp][item];
            }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') {
        result = getOption('items');
      }
      if (!carousel && (item === 'slideBy' || item === 'items')) {
        result = Math.floor(result);
      }

      return result;
    }
  }

  function getSlideMarginLeft(i) {
    return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) {
        gap -= gutterTem;
      }
      str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';';
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
      str += getTransitionDurationStyle(speedTem);
    }
    return str;
  }

  function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = fixedWidthTem + gutterTem + 'px';
    } else {
      if (!carousel) {
        itemsTem = Math.floor(itemsTem);
      }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle(gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop + dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix(name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) {
      prefix = '-' + prefix + '-';
    }

    return prefix;
  }

  function getTransitionDurationStyle(speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle(speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure() {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') {
      container.id = slideId;
    }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) {
      newContainerClasses += ' tns-autowidth';
    }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    (0, _helpersForEachJs.forEach)(slideItems, function (item, i) {
      (0, _helpersAddClassJs.addClass)(item, 'tns-item');
      if (!item.id) {
        item.id = slideId + '-item' + i;
      }
      if (!carousel && animateNormal) {
        (0, _helpersAddClassJs.addClass)(item, animateNormal);
      }
      (0, _helpersSetAttrsJs.setAttrs)(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j % slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        (0, _helpersAddClassJs.addClass)(cloneFirst, slideClonedClass);
        (0, _helpersRemoveAttrsJs.removeAttrs)(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          (0, _helpersAddClassJs.addClass)(cloneLast, slideClonedClass);
          (0, _helpersRemoveAttrsJs.removeAttrs)(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function initSliderTransform() {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      (0, _helpersForEachJs.forEach)(imgs, function (img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            (0, _helpersAddEventsJs.addEvents)(img, imgEvents);
            (0, _helpersAddClassJs.addClass)(img, 'loading');

            img.src = src;
            // data img
          } else {
              imgLoaded(img);
            }
        }
      });

      // set imgsComplete
      (0, _helpersRafJs.raf)(function () {
        imgsLoadedCheck((0, _helpersArrayFromNodeListJs.arrayFromNodeList)(imgs), function () {
          imgsComplete = true;
        });
      });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) {
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
      }

      lazyload ? initSliderTransformStyleCheck() : (0, _helpersRafJs.raf)(function () {
        imgsLoadedCheck((0, _helpersArrayFromNodeListJs.arrayFromNodeList)(imgs), initSliderTransformStyleCheck);
      });
    } else {
      // set container transform property
      if (carousel) {
        doContainerTransformSilent();
      }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck() {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function () {
          stylesApplicationCheck();
        }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }

  function initSliderTransformCore() {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) {
          freeze = getFreeze();
        }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) {
      doContainerTransformSilent();
    }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet() {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        (0, _helpersAddClassJs.addClass)(item, animateIn);
        (0, _helpersRemoveClassJs.removeClass)(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId, 'font-size:0;', (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
      } else if (carousel) {
        (0, _helpersForEachJs.forEach)(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }

    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + '-mw', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + '-iw', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }
        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId, str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) {
        str += getSlideGutterStyle(options.gutter);
      }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }
        if (ANIMATIONDURATION) {
          str += getAnimationDurationStyle(speed);
        }
      }
      if (str) {
        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
      }

      // non CSS mediaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)
    } else {
        // middle wrapper styles
        update_carousel_transition_duration();

        // inner wrapper styles
        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

        // container styles
        if (carousel && horizontal && !autoWidth) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        }

        // slide styles
        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
        if (gutter) {
          str += getSlideGutterStyle(gutter);
        }

        // append to the last line
        if (str) {
          (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
        }
      }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) {
            slideStr += getTransitionDurationStyle(speedBP);
          }
          if (ANIMATIONDURATION) {
            slideStr += getAnimationDurationStyle(speedBP);
          }
        }
        if (slideStr) {
          slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
        }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools() {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        (0, _helpersSetAttrsJs.setAttrs)(autoplayButton, { 'data-action': txt });
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        (0, _helpersAddEventsJs.addEvents)(autoplayButton, { 'click': toggleAutoplay });
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) {
          (0, _helpersAddEventsJs.addEvents)(container, hoverEvents);
        }
        if (autoplayResetOnVisibility) {
          (0, _helpersAddEventsJs.addEvents)(container, visibilityEvent);
        }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        (0, _helpersSetAttrsJs.setAttrs)(navContainer, { 'aria-label': 'Carousel Pagination' });
        navItems = navContainer.children;
        (0, _helpersForEachJs.forEach)(navItems, function (item, i) {
          (0, _helpersSetAttrsJs.setAttrs)(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId
          });
        });

        // generated nav
      } else {
          var navHtml = '',
              hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
          for (var i = 0; i < slideCount; i++) {
            // hide nav items by default
            navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
          }
          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

          navContainer = outerWrapper.querySelector('.tns-nav');
          navItems = navContainer.children;
        }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '[aria-controls^=' + slideId + '-item]', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
      }

      (0, _helpersSetAttrsJs.setAttrs)(navItems[navCurrentIndex], { 'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent });
      (0, _helpersRemoveAttrsJs.removeAttrs)(navItems[navCurrentIndex], 'tabindex');
      (0, _helpersAddClassJs.addClass)(navItems[navCurrentIndex], navActiveClass);

      // add events
      (0, _helpersAddEventsJs.addEvents)(navContainer, navEvents);
    }

    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        (0, _helpersSetAttrsJs.setAttrs)(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        (0, _helpersSetAttrsJs.setAttrs)([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        (0, _helpersSetAttrsJs.setAttrs)(prevButton, { 'data-controls': 'prev' });
        (0, _helpersSetAttrsJs.setAttrs)(nextButton, { 'data-controls': 'next' });
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        (0, _helpersAddEventsJs.addEvents)(controlsContainer, controlsEvents);
      } else {
        (0, _helpersAddEventsJs.addEvents)(prevButton, controlsEvents);
        (0, _helpersAddEventsJs.addEvents)(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents() {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0, _helpersAddEventsJs.addEvents)(container, eve);
    }

    if (touch) {
      (0, _helpersAddEventsJs.addEvents)(container, touchEvents, options.preventScrollOnTouch);
    }
    if (mouseDrag) {
      (0, _helpersAddEventsJs.addEvents)(container, dragEvents);
    }
    if (arrowKeys) {
      (0, _helpersAddEventsJs.addEvents)(doc, docmentKeydownEvent);
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      (0, _helpersAddEventsJs.addEvents)(win, { 'resize': onResize });
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) {
        doAutoHeight();
      }
    }

    doLazyLoad();
    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') {
      events.emit('innerLoaded', info());
    }
    if (typeof onInit === 'function') {
      onInit(info());
    }
    isOn = true;
  }

  function destroy() {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) {
      sheet.ownerNode.remove();
    }

    // remove win event listeners
    (0, _helpersRemoveEventsJs.removeEvents)(win, { 'resize': onResize });

    // arrowKeys, controls, nav
    if (arrowKeys) {
      (0, _helpersRemoveEventsJs.removeEvents)(doc, docmentKeydownEvent);
    }
    if (controlsContainer) {
      (0, _helpersRemoveEventsJs.removeEvents)(controlsContainer, controlsEvents);
    }
    if (navContainer) {
      (0, _helpersRemoveEventsJs.removeEvents)(navContainer, navEvents);
    }

    // autoplay
    (0, _helpersRemoveEventsJs.removeEvents)(container, hoverEvents);
    (0, _helpersRemoveEventsJs.removeEvents)(container, visibilityEvent);
    if (autoplayButton) {
      (0, _helpersRemoveEventsJs.removeEvents)(autoplayButton, { 'click': toggleAutoplay });
    }
    if (autoplay) {
      clearInterval(autoplayTimer);
    }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0, _helpersRemoveEventsJs.removeEvents)(container, eve);
    }
    if (touch) {
      (0, _helpersRemoveEventsJs.removeEvents)(container, touchEvents);
    }
    if (mouseDrag) {
      (0, _helpersRemoveEventsJs.removeEvents)(container, dragEvents);
    }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function (item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });

    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') {
        this[a] = null;
      }
    }
    isOn = false;
  }

  // === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize(e) {
    (0, _helpersRafJs.raf)(function () {
      resizeTasks(getEvent(e));
    });
  }

  function resizeTasks(e) {
    if (!isOn) {
      return;
    }
    if (nested === 'outer') {
      events.emit('outerResized', info(e));
    }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) {
        events.emit('newBreakpointStart', info(e));
      }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
      // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
      // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) {
          indexMax = getIndexMax();
        } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
      // <= fixedWidth: fixedWidth, gutter, rightBoundary
      // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) {
      autoplayHoverPause = autoplayResetOnVisibility = false;
    }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ? (0, _helpersAddEventsJs.addEvents)(doc, docmentKeydownEvent) : (0, _helpersRemoveEventsJs.removeEvents)(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          (0, _helpersShowElementJs.showElement)(controlsContainer);
        } else {
          if (prevButton) {
            (0, _helpersShowElementJs.showElement)(prevButton);
          }
          if (nextButton) {
            (0, _helpersShowElementJs.showElement)(nextButton);
          }
        }
      } else {
        if (controlsContainer) {
          (0, _helpersHideElementJs.hideElement)(controlsContainer);
        } else {
          if (prevButton) {
            (0, _helpersHideElementJs.hideElement)(prevButton);
          }
          if (nextButton) {
            (0, _helpersHideElementJs.hideElement)(nextButton);
          }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        (0, _helpersShowElementJs.showElement)(navContainer);
        updateNavVisibility();
      } else {
        (0, _helpersHideElementJs.hideElement)(navContainer);
      }
    }
    if (touch !== touchTem) {
      touch ? (0, _helpersAddEventsJs.addEvents)(container, touchEvents, options.preventScrollOnTouch) : (0, _helpersRemoveEventsJs.removeEvents)(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ? (0, _helpersAddEventsJs.addEvents)(container, dragEvents) : (0, _helpersRemoveEventsJs.removeEvents)(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) {
          (0, _helpersShowElementJs.showElement)(autoplayButton);
        }
        if (!animating && !autoplayUserPaused) {
          startAutoplay();
        }
      } else {
        if (autoplayButton) {
          (0, _helpersHideElementJs.hideElement)(autoplayButton);
        }
        if (animating) {
          stopAutoplay();
        }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ? (0, _helpersAddEventsJs.addEvents)(container, hoverEvents) : (0, _helpersRemoveEventsJs.removeEvents)(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ? (0, _helpersAddEventsJs.addEvents)(doc, visibilityEvent) : (0, _helpersRemoveEventsJs.removeEvents)(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) {
        needContainerTransform = true;
      }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) {
          innerWrapper.style.height = '';
        }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) {
        needContainerTransform = true;
      }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) {
        additionalUpdates();
      }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) {
      updateGallerySlidePositions();
    }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          (0, _helpersRemoveCSSRuleJs.removeCSSRule)(sheet, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet) - 1);
          (0, _helpersAddCSSRuleJs.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0, _helpersGetCssRulesLengthJs.getCssRulesLength)(sheet));
        }
      }

      // auto height
      if (autoHeight) {
        doAutoHeight();
      }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) {
      events.emit('newBreakpointEnd', info(e));
    }
  }

  // === INITIALIZATION FUNCTIONS === //
  function getFreeze() {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone() {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) {
        breakpointZone = bp;
      }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? carousel ?
    // loop + carousel
    function () {
      var leftEdge = indexMin,
          rightEdge = indexMax;

      leftEdge += slideBy;
      rightEdge -= slideBy;

      // adjust edges when has edge paddings
      // or fixed-width slider with extra space on the right side
      if (edgePadding) {
        leftEdge += 1;
        rightEdge -= 1;
      } else if (fixedWidth) {
        if ((viewport + gutter) % (fixedWidth + gutter)) {
          rightEdge -= 1;
        }
      }

      if (cloneCount) {
        if (index > rightEdge) {
          index -= slideCount;
        } else if (index < leftEdge) {
          index += slideCount;
        }
      }
    } :
    // loop + gallery
    function () {
      if (index > indexMax) {
        while (index >= indexMin + slideCount) {
          index -= slideCount;
        }
      } else if (index < indexMin) {
        while (index <= indexMax - slideCount) {
          index += slideCount;
        }
      }
    } :
    // non-loop
    function () {
      index = Math.max(indexMin, Math.min(indexMax, index));
    };
  })();

  function disableUI() {
    if (!autoplay && autoplayButton) {
      (0, _helpersHideElementJs.hideElement)(autoplayButton);
    }
    if (!nav && navContainer) {
      (0, _helpersHideElementJs.hideElement)(navContainer);
    }
    if (!controls) {
      if (controlsContainer) {
        (0, _helpersHideElementJs.hideElement)(controlsContainer);
      } else {
        if (prevButton) {
          (0, _helpersHideElementJs.hideElement)(prevButton);
        }
        if (nextButton) {
          (0, _helpersHideElementJs.hideElement)(nextButton);
        }
      }
    }
  }

  function enableUI() {
    if (autoplay && autoplayButton) {
      (0, _helpersShowElementJs.showElement)(autoplayButton);
    }
    if (nav && navContainer) {
      (0, _helpersShowElementJs.showElement)(navContainer);
    }
    if (controls) {
      if (controlsContainer) {
        (0, _helpersShowElementJs.showElement)(controlsContainer);
      } else {
        if (prevButton) {
          (0, _helpersShowElementJs.showElement)(prevButton);
        }
        if (nextButton) {
          (0, _helpersShowElementJs.showElement)(nextButton);
        }
      }
    }
  }

  function freezeSlider() {
    if (frozen) {
      return;
    }

    // remove edge padding from inner wrapper
    if (edgePadding) {
      innerWrapper.style.margin = '0px';
    }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) {
          (0, _helpersAddClassJs.addClass)(slideItems[i], str);
        }
        (0, _helpersAddClassJs.addClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider() {
    if (!frozen) {
      return;
    }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) {
      innerWrapper.style.margin = '';
    }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) {
          (0, _helpersRemoveClassJs.removeClass)(slideItems[i], str);
        }
        (0, _helpersRemoveClassJs.removeClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider() {
    if (disabled) {
      return;
    }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    (0, _helpersRemoveAttrsJs.removeAttrs)(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          (0, _helpersHideElementJs.hideElement)(slideItems[j]);
        }
        (0, _helpersHideElementJs.hideElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) {
      (0, _helpersRemoveAttrsJs.removeAttrs)(innerWrapper, ['style']);
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        (0, _helpersRemoveAttrsJs.removeAttrs)(item, ['style']);
        (0, _helpersRemoveClassJs.removeClass)(item, animateIn);
        (0, _helpersRemoveClassJs.removeClass)(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider() {
    if (!disabled) {
      return;
    }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          (0, _helpersShowElementJs.showElement)(slideItems[j]);
        }
        (0, _helpersShowElementJs.showElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        (0, _helpersAddClassJs.addClass)(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion() {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) {
      liveregionCurrent.innerHTML = str;
    }
  }

  function getLiveRegionStr() {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }
    var start = index,
        end,
        rangestart,
        rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = -(parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function (point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }
          if (rangeend - point >= 0.5) {
            end = i;
          }
        }
      });

      // - check percentage width, fixed width
    } else {

        if (fixedWidth) {
          var cell = fixedWidth + gutter;
          if (center || edgePadding) {
            start = Math.floor(rangestart / cell);
            end = Math.ceil(rangeend / cell - 1);
          } else {
            end = start + Math.ceil(viewport / cell) - 1;
          }
        } else {
          if (center || edgePadding) {
            var a = items - 1;
            if (center) {
              start -= a / 2;
              end = index + a / 2;
            } else {
              end = index + a;
            }

            if (edgePadding) {
              var b = edgePadding * items / viewport;
              start -= b;
              end += b;
            }

            start = Math.floor(start);
            end = Math.ceil(end);
          } else {
            end = start + items - 1;
          }
        }

        start = Math.max(start, 0);
        end = Math.min(end, slideCountNew - 1);
      }

    return [start, end];
  }

  function doLazyLoad() {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!(0, _helpersHasClassJs.hasClass)(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) {
            e.stopPropagation();
          };
          (0, _helpersAddEventsJs.addEvents)(img, eve);

          (0, _helpersAddEventsJs.addEvents)(img, imgEvents);

          // update src
          img.src = (0, _helpersGetAttrJs.getAttr)(img, 'data-src');

          // update srcset
          var srcset = (0, _helpersGetAttrJs.getAttr)(img, 'data-srcset');
          if (srcset) {
            img.srcset = srcset;
          }

          (0, _helpersAddClassJs.addClass)(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded(e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed(e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded(img) {
    (0, _helpersAddClassJs.addClass)(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed(img) {
    (0, _helpersAddClassJs.addClass)(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted(img) {
    (0, _helpersAddClassJs.addClass)(img, imgCompleteClass);
    (0, _helpersRemoveClassJs.removeClass)(img, 'loading');
    (0, _helpersRemoveEventsJs.removeEvents)(img, imgEvents);
  }

  function getImageArray(start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) {
      imgSelector = 'img';
    }

    while (start <= end) {
      (0, _helpersForEachJs.forEach)(slideItems[start].querySelectorAll(imgSelector), function (img) {
        imgs.push(img);
      });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight() {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    (0, _helpersRafJs.raf)(function () {
      imgsLoadedCheck(imgs, updateInnerWrapperHeight);
    });
  }

  function imgsLoadedCheck(imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) {
      return cb();
    }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) {
        imgCompleted(img);
      } // Check image.complete
      if ((0, _helpersHasClassJs.hasClass)(img, imgCompleteClass)) {
        imgs.splice(index, 1);
      }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) {
      return cb();
    }

    // otherwise execute this functiona again
    (0, _helpersRafJs.raf)(function () {
      imgsLoadedCheck(imgs, cb);
    });
  }

  function additionalUpdates() {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }

  function update_carousel_transition_duration() {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight(slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + 'px';
    }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    (0, _helpersForEachJs.forEach)(slideItems, function (item, i) {
      // skip the first slide
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      }
      // add the end edge
      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  }

  // update slide
  function updateSlideStatus() {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    (0, _helpersForEachJs.forEach)(slideItems, function (item, i) {
      // show slides
      if (i >= start && i <= end) {
        if ((0, _helpersHasAttrJs.hasAttr)(item, 'aria-hidden')) {
          (0, _helpersRemoveAttrsJs.removeAttrs)(item, ['aria-hidden', 'tabindex']);
          (0, _helpersAddClassJs.addClass)(item, slideActiveClass);
        }
        // hide slides
      } else {
          if (!(0, _helpersHasAttrJs.hasAttr)(item, 'aria-hidden')) {
            (0, _helpersSetAttrsJs.setAttrs)(item, {
              'aria-hidden': 'true',
              'tabindex': '-1'
            });
            (0, _helpersRemoveClassJs.removeClass)(item, slideActiveClass);
          }
        }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions() {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        (0, _helpersAddClassJs.addClass)(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        (0, _helpersAddClassJs.addClass)(item, animateIn);
        (0, _helpersRemoveClassJs.removeClass)(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        (0, _helpersAddClassJs.addClass)(item, animateNormal);
        (0, _helpersRemoveClassJs.removeClass)(item, animateIn);
      }

      // remove outlet animation
      (0, _helpersRemoveClassJs.removeClass)(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function () {
      (0, _helpersForEachJs.forEach)(slideItems, function (el) {
        (0, _helpersRemoveClassJs.removeClass)(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus() {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        (0, _helpersSetAttrsJs.setAttrs)(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        (0, _helpersRemoveClassJs.removeClass)(navPrev, navActiveClass);

        (0, _helpersSetAttrsJs.setAttrs)(navCurrent, { 'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent });
        (0, _helpersRemoveAttrsJs.removeAttrs)(navCurrent, 'tabindex');
        (0, _helpersAddClassJs.addClass)(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName(el) {
    return el.nodeName.toLowerCase();
  }

  function isButton(el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled(el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement(isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus() {
    if (!controls || rewind || loop) {
      return;
    }

    var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = index <= indexMin ? true : false,
        disableNext = !rewind && index >= indexMax ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration(el, str) {
    if (TRANSITIONDURATION) {
      el.style[TRANSITIONDURATION] = str;
    }
  }

  function getSliderWidth() {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap(num) {
    if (num == null) {
      num = index;
    }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
  }

  function getRightBoundary() {
    var gap = edgePadding ? gutter : 0,
        result = viewport + gap - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) {
      result = 0;
    }

    return result;
  }

  function getContainerTransformValue(num) {
    if (num == null) {
      num = index;
    }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = -(fixedWidth + gutter) * num;
        if (center) {
          val += getCenterGap();
        }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) {
          num -= getCenterGap();
        }
        val = -num * 100 / denominator;
      }
    } else {
      val = -slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) {
      val = Math.max(val, rightBoundary);
    }

    val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent(val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide(number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) {
      l = Math.min(l, slideCountNew);
    }

    for (var i = number; i < l; i++) {
      var item = slideItems[i];

      // set item positions
      if (!isOut) {
        item.style.left = (i - index) * 100 / items + '%';
      }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      (0, _helpersRemoveClassJs.removeClass)(item, classOut);
      (0, _helpersAddClassJs.addClass)(item, classIn);

      if (isOut) {
        slideItemsOut.push(item);
      }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ? function () {
      resetDuration(container, '');
      if (TRANSITIONDURATION || !speed) {
        // for morden browsers with non-zero duration or
        // zero duration for all browsers
        doContainerTransform();
        // run fallback function manually
        // when duration is 0 / container is hidden
        if (!speed || !(0, _helpersIsVisibleJs.isVisible)(container)) {
          onTransitionEnd();
        }
      } else {
        // for old browser with non-zero duration
        (0, _helpersJsTransformJs.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
      }

      if (!horizontal) {
        updateContentWrapperHeight();
      }
    } : function () {
      slideItemsOut = [];

      var eve = {};
      eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
      (0, _helpersRemoveEventsJs.removeEvents)(slideItems[indexCached], eve);
      (0, _helpersAddEventsJs.addEvents)(slideItems[index], eve);

      animateSlide(indexCached, animateIn, animateOut, true);
      animateSlide(index, animateNormal, animateIn);

      // run fallback function manually
      // when transition or animation not supported / duration is 0
      if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0, _helpersIsVisibleJs.isVisible)(container)) {
        onTransitionEnd();
      }
    };
  })();

  function render(e, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) {
        doAutoHeight();
      }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
        stopAutoplay();
      }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans(str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd(event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          (0, _helpersRemoveClassJs.removeClass)(item, animateOut);
          (0, _helpersAddClassJs.addClass)(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') {
          events.emit('innerLoaded', info());
        }
        running = false;
        indexCached = index;
      }
    }
  }

  // # ACTIONS
  function goTo(targetIndex, e) {
    if (freeze) {
      return;
    }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

      // next slideBy
    } else if (targetIndex === 'next') {
        onControlsClick(e, 1);

        // go to exact slide
      } else {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }

          var absIndex = getAbsIndex(),
              indexGap = 0;

          if (targetIndex === 'first') {
            indexGap = -absIndex;
          } else if (targetIndex === 'last') {
            indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
          } else {
            if (typeof targetIndex !== 'number') {
              targetIndex = parseInt(targetIndex);
            }

            if (!isNaN(targetIndex)) {
              // from directly called goTo function
              if (!e) {
                targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
              }

              indexGap = targetIndex - absIndex;
            }
          }

          // gallery: make sure new page won't overlap with current page
          if (!carousel && indexGap && Math.abs(indexGap) < items) {
            var factor = indexGap > 0 ? 1 : -1;
            indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
          }

          index += indexGap;

          // make sure index is in range
          if (carousel && loop) {
            if (index < indexMin) {
              index += slideCount;
            }
            if (index > indexMax) {
              index -= slideCount;
            }
          }

          // if index is changed, start rendering
          if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
            render(e);
          }
        }
  }

  // on controls click
  function onControlsClick(e, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
        target = target.parentNode;
      }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) {
        index = Math.floor(index);
      }
      // pass e when click control buttons or keydown
      render(passEventObject || e && e.type === 'keydown' ? e : null);
    }
  }

  // on nav click
  function onNavClick(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    e = getEvent(e);
    var target = getTarget(e),
        navIndex;

    // find the clicked nav item
    while (target !== navContainer && !(0, _helpersHasAttrJs.hasAttr)(target, 'data-nav')) {
      target = target.parentNode;
    }
    if ((0, _helpersHasAttrJs.hasAttr)(target, 'data-nav')) {
      var navIndex = navClicked = Number((0, _helpersGetAttrJs.getAttr)(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) {
          stopAutoplay();
        }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer() {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer() {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton(action, txt) {
    (0, _helpersSetAttrsJs.setAttrs)(autoplayButton, { 'data-action': action });
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay() {
    setAutoplayTimer();
    if (autoplayButton) {
      updateAutoplayButton('stop', autoplayText[1]);
    }
  }

  function stopAutoplay() {
    stopAutoplayTimer();
    if (autoplayButton) {
      updateAutoplayButton('start', autoplayText[0]);
    }
  }

  // programaitcally play/pause the slider
  function play() {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange() {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause() {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart() {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus(el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown(e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!(0, _helpersHasAttrJs.hasAttr)(curElement, 'data-nav')) {
      return;
    }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number((0, _helpersGetAttrJs.getAttr)(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) {
          setFocus(navItems[navIndex - 1]);
        }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) {
          setFocus(navItems[navIndex + 1]);
        }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent(e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget(e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent(e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected() {
    return (0, _helpersGetTouchDirectionJs.getTouchDirection)((0, _helpersToDegreeJs.toDegree)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    if (autoplay && animating) {
      stopAutoplayTimer();
    }

    panStart = true;
    if (rafIndex) {
      (0, _helpersCafJs.caf)(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove(e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) {
          rafIndex = (0, _helpersRafJs.raf)(function () {
            panUpdate(e);
          });
        }
      } else {
        if (moveDirectionExpected === '?') {
          moveDirectionExpected = getMoveDirectionExpected();
        }
        if (moveDirectionExpected) {
          preventScroll = true;
        }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate(e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    (0, _helpersCafJs.caf)(rafIndex);
    if (panStart) {
      rafIndex = (0, _helpersRafJs.raf)(function () {
        panUpdate(e);
      });
    }

    if (moveDirectionExpected === '?') {
      moveDirectionExpected = getMoveDirectionExpected();
    }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) {
        preventScroll = true;
      }

      try {
        if (e.type) {
          events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
        }
      } catch (err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd(e) {
    if (panStart) {
      if (rafIndex) {
        (0, _helpersCafJs.caf)(rafIndex);
        rafIndex = null;
      }
      if (carousel) {
        resetDuration(container, '');
      }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          (0, _helpersAddEventsJs.addEvents)(target, { 'click': function preventClick(e) {
              preventDefaultBehavior(e);
              (0, _helpersRemoveEventsJs.removeEvents)(target, { 'click': preventClick });
            } });
        }

        if (carousel) {
          rafIndex = (0, _helpersRafJs.raf)(function () {
            if (horizontal && !autoWidth) {
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') {
      preventScroll = false;
    }
    if (swipeAngle) {
      moveDirectionExpected = '?';
    }
    if (autoplay && !animating) {
      setAutoplayTimer();
    }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight() {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility() {
    if (!nav || navAsThumbnails) {
      return;
    }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpersShowElementJs.showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpersHideElementJs.hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {}
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function rebuild() {
      return tns((0, _helpersExtendJs.extend)(options, optionsElements));
    }
  };
};
exports.tns = tns;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @fancyapps/ui/Fancybox v4.0.0-beta.2


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(_x22, _x23, _x24) { var _again = true; _function: while (_again) { var object = _x22, property = _x23, receiver = _x24; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x22 = parent; _x23 = property; _x24 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var t = function t(_t) {
  return "object" == typeof _t && null !== _t && _t.constructor === Object && "[object Object]" === Object.prototype.toString.call(_t);
},
    e = function e() {
  for (var _len = arguments.length, i = Array(_len), _key = 0; _key < _len; _key++) {
    i[_key] = arguments[_key];
  }

  var s = !1;"boolean" == typeof i[0] && (s = i.shift());var n = i[0];if (!n || "object" != typeof n) throw new Error("extendee must be an object");var o = i.slice(1),
      a = o.length;for (var _i11 = 0; _i11 < a; _i11++) {
    var _a = o[_i11];for (var _i12 in _a) {
      if (_a.hasOwnProperty(_i12)) {
        var _o = _a[_i12];if (s && (Array.isArray(_o) || t(_o))) {
          var _t2 = Array.isArray(_o) ? [] : {};n[_i12] = e(!0, n.hasOwnProperty(_i12) ? n[_i12] : _t2, _o);
        } else n[_i12] = _o;
      }
    }
  }return n;
},
    i = function i(t) {
  var e = arguments.length <= 1 || arguments[1] === undefined ? 1e4 : arguments[1];
  return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e;
},
    s = "undefined" != typeof window && window.ResizeObserver || (function () {
  function _class(t) {
    _classCallCheck(this, _class);

    this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t;
  }

  _createClass(_class, [{
    key: "observe",
    value: function observe(t) {
      if (this.observables.some(function (e) {
        return e.el === t;
      })) return;var e = { el: t, size: { height: t.clientHeight, width: t.clientWidth } };this.observables.push(e);
    }
  }, {
    key: "unobserve",
    value: function unobserve(t) {
      this.observables = this.observables.filter(function (e) {
        return e.el !== t;
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.observables = [];
    }
  }, {
    key: "check",
    value: function check() {
      var t = this.observables.filter(function (t) {
        var e = t.el.clientHeight,
            i = t.el.clientWidth;if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
      }).map(function (t) {
        return t.el;
      });t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
    }
  }]);

  return _class;
})();
var n = function n(t) {
  _classCallCheck(this, n);

  this.id = -1, this.id = t.pointerId || t.identifier || -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.nativePointer = t;
};

function o(t, e) {
  return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
}function a(t, e) {
  return e ? { clientX: (t.clientX + e.clientX) / 2, clientY: (t.clientY + e.clientY) / 2 } : t;
}
var r = (function () {
  function r(t) {
    var _this = this;

    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$start = _ref.start;
    var e = _ref$start === undefined ? function () {
      return !0;
    } : _ref$start;
    var _ref$move = _ref.move;
    var i = _ref$move === undefined ? function () {} : _ref$move;
    var _ref$end = _ref.end;
    var s = _ref$end === undefined ? function () {} : _ref$end;

    _classCallCheck(this, r);

    this.element = t, this.startPointers = [], this.currentPointers = [], this.startCallback = e, this.moveCallback = i, this.endCallback = s, this.onStart = function (t) {
      if (t.button && 0 !== t.button) return;var e = new n(t);if (!1 === _this.startCallback(e, t)) return !1;t.preventDefault(), (function () {
        var t = window.getSelection ? window.getSelection() : document.selection;t && t.rangeCount && t.getRangeAt(0).getClientRects().length && (t.removeAllRanges ? t.removeAllRanges() : t.empty && t.empty());
      })(), _this.currentPointers.push(e), _this.startPointers.push(e);(t.target && "setPointerCapture" in t.target ? t.target : _this.element).setPointerCapture(t.pointerId), _this.element.addEventListener("pointermove", _this.onMove), _this.element.addEventListener("pointerup", _this.onEnd), _this.element.addEventListener("pointercancel", _this.onEnd);
    }, this.onMove = function (t) {
      var e = _this.currentPointers.slice(),
          i = [];var _arr = [new n(t)];

      var _loop = function () {
        var e = _arr[_i];var t = _this.currentPointers.findIndex(function (t) {
          return t.id === e.id;
        });t < 0 || (i.push(e), _this.currentPointers[t] = e);
      };

      for (var _i = 0; _i < _arr.length; _i++) {
        _loop();
      }i.length && _this.moveCallback(e, _this.currentPointers, t);
    }, this.onEnd = function (t) {
      var e = new n(t),
          i = _this.currentPointers.findIndex(function (t) {
        return t.id === e.id;
      });if (-1 === i) return !1;_this.currentPointers.splice(i, 1), _this.startPointers.splice(i, 1), _this.endCallback(e, t), _this.currentPointers.length || (_this.element.removeEventListener("pointermove", _this.onMove), _this.element.removeEventListener("pointerup", _this.onEnd), _this.element.removeEventListener("pointercancel", _this.onEnd));
    }, this.element.addEventListener("pointerdown", this.onStart);
  }

  _createClass(r, [{
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("pointerdown", this.onStart), this.element.removeEventListener("pointermove", this.onMove), this.element.removeEventListener("pointerup", this.onEnd), this.element.removeEventListener("pointercancel", this.onEnd);
    }
  }]);

  return r;
})();

var l = function l(_x25) {
  var _left;

  var _again2 = true;

  _function2: while (_again2) {
    var t = _x25;
    _again2 = false;

    if (!(_left = !(!t || t === document.body))) {
      return _left;
    }

    if ((function (t) {
      var e = window.getComputedStyle(t)["overflow-y"],
          i = window.getComputedStyle(t)["overflow-x"],
          s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
          n = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;return s || n;
    })(t)) {
      return t;
    } else {
      _x25 = t.parentNode;
      _again2 = true;
      continue _function2;
    }
  }
};
var h = (function () {
  function h() {
    var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, h);

    this.options = e(!0, {}, t), this.plugins = [], this.events = {};var _arr2 = ["on", "once"];
    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var _t3 = _arr2[_i2];var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(this.options[_t3] || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _e = _step.value;
          this[_t3].apply(this, _toConsumableArray(_e));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  _createClass(h, [{
    key: "option",
    value: function option(t, e) {
      t = String(t);var i = (s = t, n = this.options, s.split(".").reduce(function (t, e) {
        return t && t[e];
      }, n));var s, n;return "function" == typeof i && (i = i.call(this, t)), void 0 === i ? e : i;
    }
  }, {
    key: "localize",
    value: function localize(t) {
      var _this2 = this;

      var e = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, i, s) {
        var n = !1;if ((n = s ? _this2.option(i[0] + i.toLowerCase().substring(1) + ".l10n." + s) : _this2.option("l10n." + i), !n)) return i;for (var _t4 = 0; _t4 < e.length; _t4++) {
          n = n.split(e[_t4][0]).join(e[_t4][1]);
        }return n;
      });
    }
  }, {
    key: "on",
    value: function on(e, i) {
      var _this3 = this;

      if (t(e)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = Object.entries(e)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _t5 = _step2.value;
            this.on.apply(this, _toConsumableArray(_t5));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return this;
      }return String(e).split(" ").forEach(function (t) {
        var e = _this3.events[t] = _this3.events[t] || [];-1 == e.indexOf(i) && e.push(i);
      }), this;
    }
  }, {
    key: "once",
    value: function once(e, i) {
      var _this4 = this;

      if (t(e)) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = Object.entries(e)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _t6 = _step3.value;
            this.once.apply(this, _toConsumableArray(_t6));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return this;
      }return String(e).split(" ").forEach(function (t) {
        var e = function e() {
          for (var _len2 = arguments.length, s = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            s[_key2] = arguments[_key2];
          }

          _this4.off(t, e), i.call.apply(i, [_this4, _this4].concat(s));
        };e._ = i, _this4.on(t, e);
      }), this;
    }
  }, {
    key: "off",
    value: function off(e, i) {
      var _this5 = this;

      if (!t(e)) return e.split(" ").forEach(function (t) {
        var e = _this5.events[t];if (!e || !e.length) return _this5;var s = -1;for (var _t7 = 0, n = e.length; _t7 < n; _t7++) {
          var _n = e[_t7];if (_n && (_n === i || _n._ === i)) {
            s = _t7;break;
          }
        }-1 != s && e.splice(s, 1);
      }), this;var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.entries(e)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _t8 = _step4.value;
          this.off.apply(this, _toConsumableArray(_t8));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "trigger",
    value: function trigger(t) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      try {
        for (var _iterator5 = [].concat(_toConsumableArray(this.events[t] || [])).slice()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _i13 = _step5.value;
          if (_i13 && !1 === _i13.call.apply(_i13, [this, this].concat(e))) return !1;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = [].concat(_toConsumableArray(this.events["*"] || [])).slice()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _i14 = _step6.value;
          if (_i14 && !1 === _i14.call.apply(_i14, [this, t, this].concat(e))) return !1;
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return !0;
    }
  }, {
    key: "attachPlugins",
    value: function attachPlugins(t) {
      var i = {};var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = Object.entries(t || {})[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _step7$value = _slicedToArray(_step7.value, 2);

          var _s = _step7$value[0];
          var _n2 = _step7$value[1];
          !1 === this.options[_s] || this.plugins[_s] || (this.options[_s] = e({}, _n2.defaults || {}, this.options[_s]), i[_s] = new _n2(this));
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = Object.entries(i)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _step8$value = _slicedToArray(_step8.value, 2);

          var _t9 = _step8$value[0];
          var _e2 = _step8$value[1];
          _e2.attach(this);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return this.plugins = Object.assign({}, this.plugins, i), this;
    }
  }, {
    key: "detachPlugins",
    value: function detachPlugins() {
      for (var _t10 in this.plugins) {
        var _e3 = undefined;(_e3 = this.plugins[_t10]) && "function" == typeof _e3.detach && _e3.detach(this);
      }return this.plugins = {}, this;
    }
  }]);

  return h;
})();

var c = { touch: !0, zoom: !0, pinchToZoom: !0, panOnlyZoomed: !1, lockAxis: !1, friction: .64, decelFriction: .88, zoomFriction: .74, bounceForce: .2, baseScale: 1, minScale: 1, maxScale: 2, step: .5, textSelection: !1, click: "toggleZoom", wheel: "zoom", wheelFactor: 42, wheelLimit: 5, draggableClass: "is-draggable", draggingClass: "is-dragging", ratio: 1 };
var d = (function (_h) {
  _inherits(d, _h);

  function d(t) {
    var i = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, d);

    _get(Object.getPrototypeOf(d.prototype), "constructor", this).call(this, e(!0, {}, c, i)), this.state = "init", this.$container = t;var _arr3 = ["onLoad", "onWheel", "onClick"];
    for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
      var _t11 = _arr3[_i3];this[_t11] = this[_t11].bind(this);
    }this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({ friction: 0 });
  }

  _createClass(d, [{
    key: "initLayout",
    value: function initLayout() {
      var _i15;

      var t = this.$container;if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");var e = this.option("content") || t.querySelector(".panzoom__content");if (!e) throw new Error("Panzoom: Content not found");this.$content = e;var i = this.option("viewport") || t.querySelector(".panzoom__viewport");i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), (_i15 = i).append.apply(_i15, _toConsumableArray(t.childNodes)), t.appendChild(i)), this.$viewport = i || e.parentNode;
    }
  }, {
    key: "resetValues",
    value: function resetValues() {
      this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = { width: 0, height: 0 }, this.viewport = { width: 0, height: 0 }, this.content = { origHeight: 0, origWidth: 0, width: 0, height: 0, x: this.option("x", 0), y: this.option("y", 0), scale: this.option("baseScale") }, this.transform = { x: 0, y: 0, scale: 1 }, this.resetDragPosition();
    }
  }, {
    key: "onLoad",
    value: function onLoad(t) {
      this.updateMetrics(), this.panTo({ scale: this.option("baseScale"), friction: 0 }), this.trigger("load", t);
    }
  }, {
    key: "onClick",
    value: function onClick(t) {
      if (t.defaultPrevented) return;if (this.option("textSelection") && window.getSelection().toString().length) return void t.stopPropagation();var e = this.$content.getClientRects()[0];if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();!1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
    }
  }, {
    key: "onWheel",
    value: function onWheel(t) {
      !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
    }
  }, {
    key: "zoomWithWheel",
    value: function zoomWithWheel(t) {
      void 0 === this.changedDelta && (this.changedDelta = 0);var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
          i = this.content.scale;var s = i * (100 + e * this.option("wheelFactor")) / 100;if ((e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit"))) return;if ((t.preventDefault(), s === i)) return;var n = this.$content.getBoundingClientRect(),
          o = t.clientX - n.left,
          a = t.clientY - n.top;this.zoomTo(s, { x: o, y: a });
    }
  }, {
    key: "zoomWithClick",
    value: function zoomWithClick(t) {
      var e = this.$content.getClientRects()[0],
          i = t.clientX - e.left,
          s = t.clientY - e.top;this.toggleZoom({ x: i, y: s });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this6 = this;

      this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, { passive: !1 }), this.$container.addEventListener("click", this.onClick, { passive: !1 }), this.initObserver();var t = new r(this.$container, { start: function start(e, i) {
          if (!_this6.option("touch")) return !1;if (!(_this6.velocity.scale < 0)) {
            if (!t.currentPointers.length) {
              if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.target.nodeName)) return !1;if (_this6.option("textSelection") && (function (t, e, i) {
                var s = t.childNodes,
                    n = document.createRange();for (var _t12 = 0; _t12 < s.length; _t12++) {
                  var _o2 = s[_t12];if (_o2.nodeType !== Node.TEXT_NODE) continue;n.selectNodeContents(_o2);var _a2 = n.getBoundingClientRect();if (e >= _a2.left && i >= _a2.top && e <= _a2.right && i <= _a2.bottom) return _o2;
                }return !1;
              })(i.target, i.clientX, i.clientY)) return !1;if (l(i.target)) return !1;
            }return !1 !== _this6.trigger("touchStart", i) && (_this6.state = "pointerdown", _this6.resetDragPosition(), _this6.dragPosition.midPoint = null, _this6.dragPosition.time = Date.now(), !0);
          }
        }, move: function move(e, i, s) {
          if ("pointerdown" !== _this6.state) return;if (0 == _this6.trigger("touchMove", s)) return void s.preventDefault();if (i.length < 2 && 1 == _this6.option("panOnlyZoomed") && _this6.content.width <= _this6.viewport.width && _this6.content.height <= _this6.viewport.height && _this6.transform.scale <= _this6.option("baseScale")) return;if (i.length > 1 && (!_this6.option("zoom") || !1 === _this6.option("pinchToZoom"))) return;s.preventDefault(), s.stopPropagation();var n = a(e[0], e[1]),
              r = a(i[0], i[1]),
              l = r.clientX - n.clientX,
              h = r.clientY - n.clientY,
              c = o(e[0], e[1]),
              d = o(i[0], i[1]),
              u = c ? d / c : 1;_this6.dragOffset.x += l, _this6.dragOffset.y += h, _this6.dragOffset.scale *= u, _this6.dragOffset.time = Date.now() - _this6.dragPosition.time;var f = 1 === _this6.dragStart.scale && _this6.option("lockAxis");if (f && !_this6.lockAxis) {
            if (Math.abs(_this6.dragOffset.x) < 6 && Math.abs(_this6.dragOffset.y) < 6) return;if ("xy" === f) {
              var _t13 = Math.abs(180 * Math.atan2(_this6.dragOffset.y, _this6.dragOffset.x) / Math.PI);_this6.lockAxis = _t13 > 45 && _t13 < 135 ? "y" : "x";
            } else _this6.lockAxis = f;
          }if ((_this6.lockAxis && (_this6.dragOffset["x" === _this6.lockAxis ? "y" : "x"] = 0), _this6.$container.classList.add(_this6.option("draggingClass")), _this6.transform.scale === _this6.option("baseScale") && "y" === _this6.lockAxis || (_this6.dragPosition.x = _this6.dragStart.x + _this6.dragOffset.x), _this6.transform.scale === _this6.option("baseScale") && "x" === _this6.lockAxis || (_this6.dragPosition.y = _this6.dragStart.y + _this6.dragOffset.y), _this6.dragPosition.scale = _this6.dragStart.scale * _this6.dragOffset.scale, i.length > 1)) {
            var _e4 = a(t.startPointers[0], t.startPointers[1]);var _i16 = _e4.clientX - _this6.dragStart.rect.x;var _s2 = _e4.clientY - _this6.dragStart.rect.y;
            var _getZoomDelta = _this6.getZoomDelta(_this6.content.scale * _this6.dragOffset.scale, _i16, _s2);

            var _n3 = _getZoomDelta.deltaX;
            var _o3 = _getZoomDelta.deltaY;
            _this6.dragPosition.x -= _n3, _this6.dragPosition.y -= _o3, _this6.dragPosition.midPoint = r;
          } else _this6.setDragResistance();_this6.transform = { x: _this6.dragPosition.x, y: _this6.dragPosition.y, scale: _this6.dragPosition.scale }, _this6.startAnimation();
        }, end: function end(e, i) {
          if ("pointerdown" !== _this6.state) return;if ((_this6._dragOffset = _extends({}, _this6.dragOffset), t.currentPointers.length)) return void _this6.resetDragPosition();if ((_this6.state = "decel", _this6.friction = _this6.option("decelFriction"), _this6.recalculateTransform(), _this6.$container.classList.remove(_this6.option("draggingClass")), !1 === _this6.trigger("touchEnd", i))) return;if ("decel" !== _this6.state) return;var s = _this6.option("minScale");if (_this6.transform.scale < s) return void _this6.zoomTo(s, { friction: .64 });var n = _this6.option("maxScale");if (_this6.transform.scale - n > .01) {
            var _t14 = _this6.dragPosition.midPoint || e,
                _i17 = _this6.$content.getClientRects()[0];_this6.zoomTo(n, { friction: .64, x: _t14.clientX - _i17.left, y: _t14.clientY - _i17.top });
          } else ;
        } });this.pointerTracker = t;
    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var _this7 = this;

      this.resizeObserver || (this.resizeObserver = new s(function () {
        _this7.updateTimer || (_this7.updateTimer = setTimeout(function () {
          var t = _this7.$container.getBoundingClientRect();t.width && t.height ? ((Math.abs(t.width - _this7.container.width) > 1 || Math.abs(t.height - _this7.container.height) > 1) && (_this7.isAnimating() && _this7.endAnimation(), _this7.updateMetrics(), _this7.panTo({ x: _this7.content.x, y: _this7.content.y, scale: _this7.option("baseScale"), friction: 0 })), _this7.updateTimer = null) : _this7.updateTimer = null;
        }, _this7.updateRate));
      }), this.resizeObserver.observe(this.$container));
    }
  }, {
    key: "resetDragPosition",
    value: function resetDragPosition() {
      this.lockAxis = null, this.friction = this.option("friction"), this.velocity = { x: 0, y: 0, scale: 0 };var _content = this.content;
      var t = _content.x;
      var e = _content.y;
      var i = _content.scale;
      this.dragStart = { rect: this.$content.getBoundingClientRect(), x: t, y: e, scale: i }, this.dragPosition = _extends({}, this.dragPosition, { x: t, y: e, scale: i }), this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 };
    }
  }, {
    key: "updateMetrics",
    value: function updateMetrics(t) {
      var _this8 = this;

      !0 !== t && this.trigger("beforeUpdate");var e = this.$container,
          s = this.$content,
          n = this.$viewport,
          o = this.$content instanceof HTMLImageElement,
          a = this.option("zoom"),
          r = this.option("resizeParent", a);var l = (h = this.$content, Math.max(parseFloat(h.naturalWidth || 0), parseFloat(h.width && h.width.baseVal && h.width.baseVal.value || 0), parseFloat(h.offsetWidth || 0), parseFloat(h.scrollWidth || 0)));var h;var c = (function (t) {
        return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0));
      })(this.$content);Object.assign(s.style, { width: "", height: "", maxWidth: "", maxHeight: "" }), r && Object.assign(n.style, { width: "", height: "" });var d = this.option("ratio");l = i(l * d), c = i(c * d);var u = l,
          f = c;var g = s.getBoundingClientRect(),
          p = n.getBoundingClientRect(),
          m = n == e ? p : e.getBoundingClientRect();var y = Math.max(n.offsetWidth, i(p.width)),
          b = Math.max(n.offsetHeight, i(p.height)),
          v = window.getComputedStyle(n);if ((y -= parseFloat(v.paddingLeft) + parseFloat(v.paddingRight), b -= parseFloat(v.paddingTop) + parseFloat(v.paddingBottom), this.viewport.width = y, this.viewport.height = b, a)) {
        if (Math.abs(l - g.width) > .1 || Math.abs(c - g.height) > .1) {
          var _t15 = (function (t, e, i, s) {
            var n = Math.min(i / t || 0, s / e);return { width: t * n || 0, height: e * n || 0 };
          })(l, c, Math.min(l, g.width), Math.min(c, g.height));u = i(_t15.width), f = i(_t15.height);
        }Object.assign(s.style, { width: u + "px", height: f + "px", transform: "" });
      }if ((r && (Object.assign(n.style, { width: u + "px", height: f + "px" }), this.viewport = _extends({}, this.viewport, { width: u, height: f })), o && a && "function" != typeof this.options.maxScale)) {
        (function () {
          var t = _this8.option("maxScale");_this8.options.maxScale = function () {
            return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t;
          };
        })();
      }this.content = _extends({}, this.content, { origWidth: l, origHeight: c, fitWidth: u, fitHeight: f, width: u, height: f, scale: 1, isZoomable: a }), this.container = { width: m.width, height: m.height }, !0 !== t && this.trigger("afterUpdate");
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(t) {
      this.zoomTo(this.content.scale + (t || this.option("step")));
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(t) {
      this.zoomTo(this.content.scale - (t || this.option("step")));
    }
  }, {
    key: "toggleZoom",
    value: function toggleZoom() {
      var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var e = this.option("maxScale"),
          i = this.option("baseScale"),
          s = this.content.scale > i + .5 * (e - i) ? i : e;this.zoomTo(s, t);
    }
  }, {
    key: "zoomTo",
    value: function zoomTo() {
      var t = arguments.length <= 0 || arguments[0] === undefined ? this.option("baseScale") : arguments[0];

      var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref2$x = _ref2.x;
      var e = _ref2$x === undefined ? null : _ref2$x;
      var _ref2$y = _ref2.y;
      var s = _ref2$y === undefined ? null : _ref2$y;
      t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));var n = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);null === e && (e = this.content.width * n * .5), null === s && (s = this.content.height * n * .5);
      var _getZoomDelta2 = this.getZoomDelta(t, e, s);

      var o = _getZoomDelta2.deltaX;
      var a = _getZoomDelta2.deltaY;
      e = this.content.x - o, s = this.content.y - a, this.panTo({ x: e, y: s, scale: t, friction: this.option("zoomFriction") });
    }
  }, {
    key: "getZoomDelta",
    value: function getZoomDelta(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var i = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
      var s = this.content.fitWidth * this.content.scale,
          n = this.content.fitHeight * this.content.scale,
          o = e > 0 && s ? e / s : 0,
          a = i > 0 && n ? i / n : 0;return { deltaX: (this.content.fitWidth * t - s) * o, deltaY: (this.content.fitHeight * t - n) * a };
    }
  }, {
    key: "panTo",
    value: function panTo() {
      var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref3$x = _ref3.x;
      var t = _ref3$x === undefined ? this.content.x : _ref3$x;
      var _ref3$y = _ref3.y;
      var e = _ref3$y === undefined ? this.content.y : _ref3$y;
      var i = _ref3.scale;
      var _ref3$friction = _ref3.friction;
      var s = _ref3$friction === undefined ? this.option("friction") : _ref3$friction;
      var _ref3$ignoreBounds = _ref3.ignoreBounds;
      var n = _ref3$ignoreBounds === undefined ? !1 : _ref3$ignoreBounds;
      if ((i = i || this.content.scale || 1, !n)) {
        var _getBounds = this.getBounds(i);

        var _s3 = _getBounds.boundX;
        var _n4 = _getBounds.boundY;
        _s3 && (t = Math.max(Math.min(t, _s3.to), _s3.from)), _n4 && (e = Math.max(Math.min(e, _n4.to), _n4.from));
      }this.friction = s, this.transform = { x: t, y: e, scale: i }, s ? (this.state = "panning", this.velocity = { x: (1 / this.friction - 1) * (t - this.content.x), y: (1 / this.friction - 1) * (e - this.content.y), scale: (1 / this.friction - 1) * (i - this.content.scale) }, this.startAnimation()) : this.endAnimation();
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this9 = this;

      this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(function () {
        return _this9.animate();
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this10 = this;

      if ((this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating())) this.setTransform();else if ("pointerdown" !== this.state) return this.endAnimation(), void this.trigger("endAnimation");this.rAF = requestAnimationFrame(function () {
        return _this10.animate();
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(t) {
      var e = this.boundX,
          s = this.boundY;if (void 0 !== e && void 0 !== s) return { boundX: e, boundY: s };e = { from: 0, to: 0 }, s = { from: 0, to: 0 }, t = t || this.transform.scale;var n = this.content.fitWidth,
          o = this.content.fitHeight,
          a = n * t,
          r = o * t,
          l = this.viewport.width,
          h = this.viewport.height;if (n <= l) {
        var _t16 = .5 * (l - a),
            _s4 = .5 * (a - n);e.from = i(_t16 - _s4), e.to = i(_t16 + _s4);
      } else e.from = i(l - a);if (o <= h) {
        var _t17 = .5 * (h - r),
            _e5 = .5 * (r - o);s.from = i(_t17 - _e5), s.to = i(_t17 + _e5);
      } else s.from = i(h - a);return { boundX: e, boundY: s };
    }
  }, {
    key: "setEdgeForce",
    value: function setEdgeForce() {
      if ("decel" !== this.state) return;var t = this.option("bounceForce");
      var _getBounds2 = this.getBounds(Math.max(this.transform.scale, this.content.scale));

      var e = _getBounds2.boundX;
      var i = _getBounds2.boundY;
      var s = undefined,
          n = undefined,
          o = undefined,
          a = undefined;if ((e && (s = this.content.x < e.from, n = this.content.x > e.to), i && (o = this.content.y < i.from, a = this.content.y > i.to), s || n)) {
        var _i18 = ((s ? e.from : e.to) - this.content.x) * t;var _n5 = this.content.x + (this.velocity.x + _i18) / this.friction;_n5 >= e.from && _n5 <= e.to && (_i18 += this.velocity.x), this.velocity.x = _i18, this.recalculateTransform();
      }if (o || a) {
        var _e6 = ((o ? i.from : i.to) - this.content.y) * t;var _s5 = this.content.y + (_e6 + this.velocity.y) / this.friction;_s5 >= i.from && _s5 <= i.to && (_e6 += this.velocity.y), this.velocity.y = _e6, this.recalculateTransform();
      }
    }
  }, {
    key: "setDragResistance",
    value: function setDragResistance() {
      if ("pointerdown" !== this.state) return;
      var _getBounds3 = this.getBounds(this.dragPosition.scale);

      var t = _getBounds3.boundX;
      var e = _getBounds3.boundY;
      var i = undefined,
          s = undefined,
          n = undefined,
          o = undefined;if ((t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (n = this.dragPosition.y < e.from, o = this.dragPosition.y > e.to), (i || s) && (!i || !s))) {
        var _e7 = i ? t.from : t.to,
            _s6 = _e7 - this.dragPosition.x;this.dragPosition.x = _e7 - .3 * _s6;
      }if ((n || o) && (!n || !o)) {
        var _t18 = n ? e.from : e.to,
            _i19 = _t18 - this.dragPosition.y;this.dragPosition.y = _t18 - .3 * _i19;
      }
    }
  }, {
    key: "setDragForce",
    value: function setDragForce() {
      "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
    }
  }, {
    key: "recalculateTransform",
    value: function recalculateTransform() {
      this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
    }
  }, {
    key: "setTransform",
    value: function setTransform(t) {
      var e = undefined,
          s = undefined,
          n = undefined;if ((t ? (e = i(this.transform.x), s = i(this.transform.y), n = this.transform.scale, this.content = _extends({}, this.content, { x: e, y: s, scale: n })) : (e = i(this.content.x), s = i(this.content.y), n = this.content.scale / (this.content.width / this.content.fitWidth), this.content = _extends({}, this.content, { x: e, y: s })), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), t && this.option("zoom"))) {
        var _t19 = undefined,
            _o4 = undefined;_t19 = i(this.content.fitWidth * n), _o4 = i(this.content.fitHeight * n), this.content.width = _t19, this.content.height = _o4, this.transform = _extends({}, this.transform, { width: _t19, height: _o4, scale: n }), Object.assign(this.$content.style, { width: _t19 + "px", height: _o4 + "px", maxWidth: "none", maxHeight: "none", transform: "translate3d(" + e + "px, " + s + "px, 0) scale(1)" });
      } else this.$content.style.transform = "translate3d(" + e + "px, " + s + "px, 0) scale(" + n + ")";this.trigger("afterTransform");
    }
  }, {
    key: "endAnimation",
    value: function endAnimation() {
      cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = { x: 0, y: 0, scale: 0 }, this.setTransform(!0), this.state = "ready", this.handleCursor();
    }
  }, {
    key: "handleCursor",
    value: function handleCursor() {
      var t = this.option("draggableClass");t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, { passive: !1 }), this.$container.removeEventListener("click", this.onClick, { passive: !1 }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
    }
  }]);

  return d;
})(h);

d.version = "4.0.0-beta.2", d.Plugins = {};var u = function u(t, e) {
  var i = 0;return function () {
    var n = new Date().getTime();if (!(n - i < e)) return i = n, t.apply(undefined, arguments);
  };
};
var f = (function () {
  function f(t) {
    _classCallCheck(this, f);

    this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this);
  }

  _createClass(f, [{
    key: "option",
    value: function option(t) {
      return this.carousel.option("Navigation." + t);
    }
  }, {
    key: "createButton",
    value: function createButton(t) {
      var _e$classList,
          _this11 = this;

      var e = document.createElement("button");e.setAttribute("title", this.carousel.localize("{{" + t.toUpperCase() + "}}"));var i = this.option("classNames.button") + " " + this.option("classNames." + t);return (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(t + "Tpl")), e.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation(), _this11.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
      }), e;
    }
  }, {
    key: "build",
    value: function build() {
      this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(this.option("classNames.main")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
    }
  }, {
    key: "onRefresh",
    value: function onRefresh() {
      var t = this.carousel.pages.length;t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
    }
  }, {
    key: "attach",
    value: function attach() {
      this.carousel.on("refresh change", this.onRefresh);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.carousel.off("refresh change", this.onRefresh), this.cleanup();
    }
  }]);

  return f;
})();

f.defaults = { prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>', nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', classNames: { main: "carousel__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } };
var g = (function () {
  function g(t) {
    _classCallCheck(this, g);

    this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
  }

  _createClass(g, [{
    key: "addAsTargetFor",
    value: function addAsTargetFor(t) {
      this.target = this.carousel, this.nav = t, this.attachEvents();
    }
  }, {
    key: "addAsNavFor",
    value: function addAsNavFor(t) {
      this.target = t, this.nav = this.carousel, this.attachEvents();
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
  }, {
    key: "onNavReady",
    value: function onNavReady() {
      this.onTargetChange(!0);
    }
  }, {
    key: "onNavClick",
    value: function onNavClick(t, e, i) {
      var s = i.target.closest(".carousel__slide");if (!s) return;i.stopPropagation();var n = parseInt(s.dataset.index, 10),
          o = this.target.findPageForSlide(n);this.target.page !== o && this.target.slideTo(o, { friction: this.friction }), this.markSelectedSlide(n);
    }
  }, {
    key: "onNavCreateSlide",
    value: function onNavCreateSlide(t, e) {
      e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
  }, {
    key: "onTargetChange",
    value: function onTargetChange() {
      var t = this.target.pages[this.target.page].indexes[0],
          e = this.nav.findPageForSlide(t);this.nav.slideTo(e), this.markSelectedSlide(t);
    }
  }, {
    key: "markSelectedSlide",
    value: function markSelectedSlide(t) {
      this.selectedIndex = t, [].concat(_toConsumableArray(this.nav.slides)).filter(function (t) {
        return t.$el && t.$el.classList.remove("is-nav-selected");
      });var e = this.nav.slides[t];e && e.$el && e.$el.classList.add("is-nav-selected");
    }
  }, {
    key: "attach",
    value: function attach(t) {
      var e = t.options.Sync;(e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
    }
  }]);

  return g;
})();

g.defaults = { friction: .92 };var p = { Navigation: f, Dots: (function () {
    function Dots(t) {
      _classCallCheck(this, Dots);

      this.carousel = t, this.$list = null, this.events = { change: this.onChange.bind(this), refresh: this.onRefresh.bind(this) };
    }

    _createClass(Dots, [{
      key: "buildList",
      value: function buildList() {
        var _this12 = this;

        if (this.carousel.pages.length < 2) return;var t = document.createElement("ol");return t.classList.add("carousel__dots"), t.addEventListener("click", function (t) {
          if (!("page" in t.target.dataset)) return;t.preventDefault(), t.stopPropagation();var e = parseInt(t.target.dataset.page, 10),
              i = _this12.carousel;e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
        }), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), t;
      }
    }, {
      key: "removeList",
      value: function removeList() {
        this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
      }
    }, {
      key: "rebuildDots",
      value: function rebuildDots() {
        var _this13 = this;

        var t = this.$list;var e = !!t,
            i = this.carousel.pages.length;if (i < 2) return void (e && this.removeList());e || (t = this.buildList());var s = this.$list.children.length;if (s > i) for (var _t20 = i; _t20 < s; _t20++) {
          this.$list.removeChild(this.$list.lastChild);
        } else {
          var _loop2 = function (_t21) {
            var e = document.createElement("li");e.classList.add("carousel__dot"), e.dataset.page = _t21, e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("title", _this13.carousel.localize("{{GOTO}}", [["%d", _t21 + 1]])), e.addEventListener("keydown", function (t) {
              var i = t.code;var s = undefined;"Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), s && s.click();
            }), _this13.$list.appendChild(e);
          };

          for (var _t21 = s; _t21 < i; _t21++) {
            _loop2(_t21);
          }this.setActiveDot();
        }
      }
    }, {
      key: "setActiveDot",
      value: function setActiveDot() {
        if (!this.$list) return;this.$list.childNodes.forEach(function (t) {
          t.classList.remove("is-selected");
        });var t = this.$list.childNodes[this.carousel.page];t && t.classList.add("is-selected");
      }
    }, {
      key: "onChange",
      value: function onChange() {
        this.setActiveDot();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        this.rebuildDots();
      }
    }, {
      key: "attach",
      value: function attach() {
        this.carousel.on(this.events);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.removeList(), this.carousel.off(this.events), this.carousel = null;
      }
    }]);

    return Dots;
  })(), Sync: g },
    m = { slides: [], preload: 0, slidesPerPage: "auto", initialPage: null, initialSlide: null, friction: .92, center: !0, infinite: !0, fill: !0, dragFree: !1, classNames: { viewport: "carousel__viewport", track: "carousel__track", slide: "carousel__slide", slideSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide %d" } };
var y = (function (_h2) {
  _inherits(y, _h2);

  function y(t) {
    var i = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, y);

    if ((_get(Object.getPrototypeOf(y.prototype), "constructor", this).call(this, i = e(!0, {}, m, i)), this.state = "init", this.$container = t, !(this.$container instanceof HTMLElement))) throw new Error("No root element provided");this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init();
  }

  _createClass(y, [{
    key: "init",
    value: function init() {
      this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track.style.transform = "translate3d(" + -1 * this.pages[this.page].left + "px, 0px, 0) scale(1)", this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var _$viewport, _$track;

      var t = this.option("classNames");this.$viewport = this.option("viewport") || this.$container.querySelector("." + t.viewport), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(t.viewport), (_$viewport = this.$viewport).append.apply(_$viewport, _toConsumableArray(this.$container.childNodes)), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector("." + t.track), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(t.track), (_$track = this.$track).append.apply(_$track, _toConsumableArray(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track));
    }
  }, {
    key: "initSlides",
    value: function initSlides() {
      var _this14 = this;

      this.slides = [];this.$viewport.querySelectorAll("." + this.option("classNames.slide")).forEach(function (t) {
        var e = { $el: t, isDom: !0 };_this14.slides.push(e), _this14.trigger("createSlide", e, _this14.slides.length);
      }), Array.isArray(this.options.slides) && (this.slides = e(!0, [].concat(_toConsumableArray(this.slides)), this.options.slides));
    }
  }, {
    key: "updateMetrics",
    value: function updateMetrics() {
      var _this15 = this;

      var t = undefined,
          e = 0,
          s = [];this.slides.forEach(function (i, n) {
        var o = i.$el,
            a = i.isDom || !t ? _this15.getSlideMetrics(o) : t;i.index = n, i.width = a, i.left = e, t = a, e += a, s.push(n);
      });var n = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
          o = window.getComputedStyle(this.$track);n -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), this.contentWidth = e, this.viewportWidth = n;var a = [],
          r = this.option("slidesPerPage");if (Number.isInteger(r) && e > n) for (var _t22 = 0; _t22 < this.slides.length; _t22 += r) {
        a.push({ indexes: s.slice(_t22, _t22 + r), slides: this.slides.slice(_t22, _t22 + r) });
      } else {
        var _t23 = 0,
            _e8 = 0;for (var _i20 = 0; _i20 < this.slides.length; _i20 += 1) {
          var _s7 = this.slides[_i20];(!a.length || _e8 + _s7.width > n) && (a.push({ indexes: [], slides: [] }), _t23 = a.length - 1, _e8 = 0), _e8 += _s7.width, a[_t23].indexes.push(_i20), a[_t23].slides.push(_s7);
        }
      }var l = this.option("center"),
          h = this.option("fill");a.forEach(function (t, i) {
        t.index = i, t.width = t.slides.reduce(function (t, e) {
          return t + e.width;
        }, 0), t.left = t.slides[0].left, l && (t.left += .5 * (n - t.width) * -1), h && !_this15.option("infiniteX", _this15.option("infinite")) && e > n && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - n));
      });var c = [];var d = undefined;a.forEach(function (t) {
        var e = _extends({}, t);d && e.left === d.left ? (d.width += e.width, d.slides = [].concat(_toConsumableArray(d.slides), _toConsumableArray(e.slides)), d.indexes = [].concat(_toConsumableArray(d.indexes), _toConsumableArray(e.indexes))) : (e.index = c.length, d = e, c.push(e));
      }), this.pages = c;var u = this.page;if (null === u) {
        var _t24 = this.option("initialSlide");u = null !== _t24 ? this.findPageForSlide(_t24) : this.option("initialPage", 0), c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u;
      }this.updatePanzoom(), this.trigger("refresh");
    }
  }, {
    key: "getSlideMetrics",
    value: function getSlideMetrics(t) {
      if (!t) {
        var _t$classList;

        var _e9 = this.slides[0];(t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(this.option("classNames.slide")), _e9.customClass && (_t$classList = t.classList).add.apply(_t$classList, _toConsumableArray(_e9.customClass.split(" "))), this.$track.prepend(t);
      }var e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));var s = t.currentStyle || window.getComputedStyle(t);return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e;
    }
  }, {
    key: "findPageForSlide",
    value: function findPageForSlide(t) {
      var e = this.pages.find(function (e) {
        return e.indexes.indexOf(t) > -1;
      });return e ? e.index : null;
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
  }, {
    key: "slideTo",
    value: function slideTo(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var _e$x = e.x;
      var i = _e$x === undefined ? -1 * this.setPage(t, !0) : _e$x;
      var _e$y = e.y;
      var s = _e$y === undefined ? 0 : _e$y;
      var _e$friction = e.friction;
      var n = _e$friction === undefined ? this.option("friction") : _e$friction;
      this.Panzoom.content.x === i && !this.Panzoom.velocity.x && n || (this.Panzoom.panTo({ x: i, y: s, friction: n, ignoreBounds: !0 }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
    }
  }, {
    key: "initPanzoom",
    value: function initPanzoom() {
      var _this16 = this;

      this.Panzoom && this.Panzoom.destroy();var t = e(!0, {}, { content: this.$track, wrapInner: !1, resizeParent: !1, zoom: !1, click: !1, lockAxis: "x", x: -1 * this.pages[this.page].left, centerOnStart: !1, textSelection: function textSelection() {
          return _this16.option("textSelection", !1);
        }, panOnlyZoomed: function panOnlyZoomed() {
          return this.content.width <= this.viewport.width;
        } }, this.option("Panzoom"));this.Panzoom = new d(this.$container, t), this.Panzoom.on({ "*": function _(t) {
          for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            e[_key4 - 1] = arguments[_key4];
          }

          return _this16.trigger.apply(_this16, ["Panzoom." + t].concat(e));
        }, afterUpdate: function afterUpdate() {
          _this16.updatePage();
        }, beforeTransform: this.onBeforeTransform.bind(this), touchEnd: this.onTouchEnd.bind(this), endAnimation: function endAnimation() {
          _this16.trigger("settle");
        } }), this.updateMetrics(), this.manageSlideVisiblity();
    }
  }, {
    key: "updatePanzoom",
    value: function updatePanzoom() {
      this.Panzoom && (this.Panzoom.content = _extends({}, this.Panzoom.content, { fitWidth: this.contentWidth, origWidth: this.contentWidth, width: this.contentWidth }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.Panzoom.boundX = { from: -1 * this.pages[this.pages.length - 1].left, to: -1 * this.pages[0].left }, this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = { from: 0, to: 0 }, this.Panzoom.handleCursor());
    }
  }, {
    key: "manageSlideVisiblity",
    value: function manageSlideVisiblity() {
      var _this17 = this;

      var t = this.contentWidth,
          e = this.viewportWidth;var i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages[this.page].left;var s = this.option("preload"),
          n = this.option("infiniteX", this.option("infinite")),
          o = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
          a = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));this.slides.forEach(function (r) {
        var l = undefined,
            h = undefined,
            c = 0;l = i - o, h = i + e + a, l -= s * (e + o + a), h += s * (e + o + a);var d = r.left + r.width > l && r.left < h;l = i + t - o, h = i + t + e + a, l -= s * (e + o + a);var u = n && r.left + r.width > l && r.left < h;l = i - t - o, h = i - t + e + a, l -= s * (e + o + a);var f = n && r.left + r.width > l && r.left < h;u || d || f ? (_this17.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : _this17.removeSlideEl(r), r.hasDiff = c;
      });var r = 0,
          l = 0;this.slides.forEach(function (e, i) {
        var s = 0;e.$el ? (i !== r || e.hasDiff ? s = l + e.hasDiff * t : l = 0, e.$el.style.left = Math.abs(s) > .1 ? l + e.hasDiff * t + "px" : "", r++) : l += e.width;
      }), this.markSelectedSlides();
    }
  }, {
    key: "createSlideEl",
    value: function createSlideEl(t) {
      var _e$classList2;

      if (!t) return;if (t.$el) {
        if (parseInt(t.$el.dataset.index, 10) !== t.index) {
          t.$el.dataset.index = t.index;var _e10 = undefined;t.$el.querySelectorAll("[data-lazy-src]").forEach(function (t) {
            var e = t.dataset.lazySrc;t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('" + e + "')";
          }), (_e10 = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('" + _e10 + "')"), t.state = "ready";
        }return;
      }var e = document.createElement("div");e.dataset.index = t.index, e.classList.add(this.option("classNames.slide")), t.customClass && (_e$classList2 = e.classList).add.apply(_e$classList2, _toConsumableArray(t.customClass.split(" "))), t.html && (e.innerHTML = t.html);var i = [];this.slides.forEach(function (t, e) {
        t.$el && i.push(e);
      });var s = t.index;var n = null;if (i.length) {
        var _t25 = i.reduce(function (t, e) {
          return Math.abs(e - s) < Math.abs(t - s) ? e : t;
        });n = this.slides[_t25];
      }return this.$track.insertBefore(e, n && n.$el ? n.index < t.index ? n.$el.nextSibling : n.$el : null), t.$el = e, this.trigger("createSlide", t, s), t;
    }
  }, {
    key: "removeSlideEl",
    value: function removeSlideEl(t) {
      t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
    }
  }, {
    key: "markSelectedSlides",
    value: function markSelectedSlides() {
      var _this18 = this;

      var t = this.option("classNames.slideSelected"),
          e = "aria-hidden";this.slides.forEach(function (i, s) {
        var n = i.$el;if (!n) return;var o = _this18.pages[_this18.page];o && o.indexes && o.indexes.indexOf(s) > -1 ? (t && !n.classList.contains(t) && (n.classList.add(t), _this18.trigger("selectSlide", i)), n.removeAttribute(e)) : (t && n.classList.contains(t) && (n.classList.remove(t), _this18.trigger("unselectSlide", i)), n.setAttribute(e, !0));
      });
    }
  }, {
    key: "updatePage",
    value: function updatePage() {
      this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
    }
  }, {
    key: "onBeforeTransform",
    value: function onBeforeTransform() {
      this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
    }
  }, {
    key: "manageInfiniteTrack",
    value: function manageInfiniteTrack() {
      var t = this.contentWidth,
          e = this.viewportWidth;if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;var i = this.Panzoom;var s = !1;return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(t, e) {
      var i = this.option("dragFree");if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
        var _getPageFromPosition = this.getPageFromPosition(-1 * t.transform.x);

        var _getPageFromPosition2 = _slicedToArray(_getPageFromPosition, 2);

        var _e11 = _getPageFromPosition2[1];
        this.setPage(_e11);
      } else this.slideToClosest();
    }
  }, {
    key: "slideToClosest",
    value: function slideToClosest() {
      var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _getPageFromPosition3 = this.getPageFromPosition(-1 * this.Panzoom.content.x);

      var _getPageFromPosition32 = _slicedToArray(_getPageFromPosition3, 2);

      var e = _getPageFromPosition32[1];
      this.slideTo(e, t);
    }
  }, {
    key: "getPageFromPosition",
    value: function getPageFromPosition(t) {
      var e = this.pages.length;this.option("center") && (t += .5 * this.viewportWidth);var i = Math.floor(t / this.contentWidth);t -= i * this.contentWidth;var s = this.slides.find(function (e) {
        return e.left <= t && e.left + e.width > t;
      });if (s) {
        var _t26 = this.findPageForSlide(s.index);return [_t26, _t26 + i * e];
      }return [0, 0];
    }
  }, {
    key: "setPage",
    value: function setPage(t, e) {
      var i = 0,
          s = parseInt(t, 10) || 0;var n = this.page,
          o = this.pageIndex,
          a = this.pages.length,
          r = this.contentWidth,
          l = this.viewportWidth;if ((t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > l)) {
        var _n6 = Math.floor(s / a) || 0,
            _o5 = r;if ((i = this.pages[t].left + _n6 * _o5, !0 === e && a > 2)) {
          var _t27 = -1 * this.Panzoom.content.x;var _e12 = i - _o5,
              _n7 = i + _o5,
              _r = Math.abs(_t27 - i),
              _l = Math.abs(_t27 - _e12),
              _h4 = Math.abs(_t27 - _n7);_h4 < _r && _h4 <= _l ? (i = _n7, s += a) : _l < _r && _l < _h4 && (i = _e12, s -= a);
        }
      } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages[t].left;return this.page = t, this.pageIndex = s, null !== n && t !== n && (this.prevPage = n, this.prevPageIndex = o, this.trigger("change", t, n)), i;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this19 = this;

      this.state = "destroy", this.slides.forEach(function (t) {
        _this19.removeSlideEl(t);
      }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
    }
  }]);

  return y;
})(h);

y.version = "4.0.0-beta.2", y.Plugins = p;var b = !!("undefined" != typeof window && window.document && window.document.createElement && window.document.body);
var v = (function () {
  function v(t) {
    _classCallCheck(this, v);

    this.fancybox = t, this.$container = null, this.state = "init";var _arr4 = ["onPrepare", "onClosing", "onKeydown"];
    for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
      var _t28 = _arr4[_i4];this[_t28] = this[_t28].bind(this);
    }this.events = { prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown };
  }

  _createClass(v, [{
    key: "onPrepare",
    value: function onPrepare() {
      this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      this.Carousel && this.Carousel.Panzoom.detachEvents();
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t, e) {
      e === t.option("Thumbs.key") && this.toggle();
    }
  }, {
    key: "build",
    value: function build() {
      var _this20 = this;

      if (this.$container) return;var t = document.createElement("div");t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, { Dots: !1, Navigation: !1, Sync: { friction: 0 }, infinite: !1, center: !0, fill: !0, dragFree: !0, slidesPerPage: 1, preload: 1 }, this.fancybox.option("Thumbs.Carousel"), { Sync: { target: this.fancybox.Carousel }, slides: this.getSlides() })), this.Carousel.Panzoom.on("wheel", function (t, e) {
        e.preventDefault(), _this20.fancybox[e.deltaY < 0 ? "prev" : "next"]();
      }), this.$container = t, this.state = "visible";
    }
  }, {
    key: "getSlides",
    value: function getSlides() {
      var t = [];var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.fancybox.items[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _e13 = _step9.value;
          var _i21 = _e13.thumb;_i21 && t.push({ html: "<div class=\"fancybox__thumb\" style=\"background-image:url('" + _i21 + "')\"></div>", customClass: "has-thumb has-" + (_e13.type || "image") });
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return t;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      return "visible" === this.state ? (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", void (this.state = "hidden")) : "hidden" === this.state ? (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), void (this.state = "visible")) : void this.build();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }]);

  return v;
})();

v.defaults = { minSlideCount: 2, minScreenHeight: 500, autoStart: !0, key: "t" };var x = function x(t) {
  return Object.entries(t).map(function (t) {
    return t.map(encodeURIComponent).join("=");
  }).join("&");
},
    w = { video: { autoplay: !0, ratio: 16 / 9 }, youtube: { autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, vimeo: { hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, html5video: { tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />\n  Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!\n</video>', format: "" } };
var $ = (function () {
  function $(t) {
    _classCallCheck(this, $);

    this.fancybox = t;var _arr5 = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"];
    for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
      var _t29 = _arr5[_i5];this[_t29] = this[_t29].bind(this);
    }this.events = { init: this.onInit, ready: this.onReady, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide, "Carousel.selectSlide": this.onSelectSlide, "Carousel.unselectSlide": this.onUnselectSlide, "Carousel.refresh": this.onRefresh };
  }

  _createClass($, [{
    key: "onInit",
    value: function onInit() {
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this.fancybox.items[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var _t30 = _step10.value;
          this.processType(_t30);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
  }, {
    key: "processType",
    value: function processType(t) {
      if (t.html) return t.src = t.html, t.type = "html", void delete t.html;var i = t.src || "";var s = t.type || this.fancybox.options.type,
          n = null;if (!i || "string" == typeof i) {
        if (n = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          var _e14 = x(this.fancybox.option("Html.youtube")),
              _i22 = encodeURIComponent(n[1]);t.videoId = _i22, t.src = "https://www.youtube-nocookie.com/embed/" + _i22 + "?" + _e14, t.thumb = t.thumb || "https://i.ytimg.com/vi/" + _i22 + "/mqdefault.jpg", t.vendor = "youtube", s = "video";
        } else if (n = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
          var _e15 = x(this.fancybox.option("Html.vimeo")),
              _i23 = encodeURIComponent(n[1]);t.videoId = _i23, t.src = "https://player.vimeo.com/video/" + _i23 + "?" + _e15, t.vendor = "vimeo", s = "video";
        } else (n = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google." + n[1] + "/?ll=" + (n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&") + "&output=" + (n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), s = "map") : (n = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google." + n[1] + "/maps?q=" + n[2].replace("query=", "q=").replace("api=1", "") + "&output=embed", s = "map");s || ("#" === i.charAt(0) ? s = "inline" : (n = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), t.width && t.height ? t.ratio = parseFloat(t.width) / parseFloat(t.height) : t.ratio = t.ratio || t.video.ratio);
      }
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this21 = this;

      this.fancybox.Carousel.slides.forEach(function (t) {
        t.$el && (_this21.setContent(t), t.index === _this21.fancybox.getSlide().index && _this21.playVideo(t));
      });
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
  }, {
    key: "loadInlineContent",
    value: function loadInlineContent(t) {
      var e = undefined;if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
        var _i24 = t.src.split("#", 2),
            _s8 = 2 === _i24.length && "" === _i24[0] ? _i24[1] : _i24[0];e = document.getElementById(_s8);
      }if (e) {
        if ("clone" === t.type || e.$placeHolder) {
          e = e.cloneNode(!0);var _i25 = e.getAttribute("id");_i25 = _i25 ? _i25 + "--clone" : "clone-" + this.fancybox.id + "-" + t.index, e.setAttribute("id", _i25);
        } else {
          var _t31 = document.createElement("div");_t31.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(_t31, e), e.$placeHolder = _t31;
        }this.fancybox.setContent(t, e);
      } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
  }, {
    key: "loadAjaxContent",
    value: function loadAjaxContent(t) {
      var e = this.fancybox,
          i = new XMLHttpRequest();e.showLoading(t), i.onreadystatechange = function () {
        i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
      }, i.open("GET", t.src), i.send(t.ajax || null), t.xhr = i;
    }
  }, {
    key: "loadIframeContent",
    value: function loadIframeContent(t) {
      var _this22 = this;

      var e = this.fancybox,
          i = document.createElement("iframe");if ((i.className = "fancybox__iframe", i.setAttribute("id", "fancybox__iframe_" + e.id + "_" + t.index), i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), t.$iframe = i, "iframe" !== t.type || !1 === t.preload)) return i.setAttribute("src", t.src), void this.fancybox.setContent(t, i);e.showLoading(t);var s = document.createElement("div");s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = function () {
        e.setError(t, "{{IFRAME_ERROR}}");
      }, i.onload = function () {
        e.hideLoading(t);var s = !1;"yes" !== i.dataset.ready && (i.dataset.ready = "yes", s = !0), i.src.length && (i.parentNode.style.visibility = "", !1 !== t.autoSize && _this22.autoSizeIframe(i), s && e.revealContent(t));
      }, i.setAttribute("src", t.src);
    }
  }, {
    key: "setAspectRatio",
    value: function setAspectRatio(t) {
      var e = t.ratio;if (!e || !t.$content) return;t.$content.style.maxWidth = "", t.$content.style.maxHeight = "";var i = t.$content.offsetWidth,
          s = t.$content.offsetHeight,
          n = t.width,
          o = t.height;if (n && o && (i > n || s > o)) {
        var _t32 = Math.min(n / i, o / s);i *= _t32, s *= _t32;
      }e < i / s ? i = s * e : s = i / e, t.$content.style.maxWidth = i + "px", t.$content.style.maxHeight = s + "px";
    }
  }, {
    key: "autoSizeIframe",
    value: function autoSizeIframe(t) {
      if (!t.dataset || "yes" !== t.dataset.ready) return;var e = t.parentNode.style;e.flex = "1 1 auto", e.width = "", e.height = "";try {
        var _i26 = t.contentWindow.document,
            _s9 = _i26.getElementsByTagName("html")[0],
            _n8 = _i26.body,
            _o6 = window.getComputedStyle(t.parentNode),
            _a3 = parseFloat(_o6.paddingLeft) + parseFloat(_o6.paddingRight),
            _r2 = parseFloat(_o6.paddingTop) + parseFloat(_o6.paddingBottom);_n8.style.overflow = "hidden";var _l2 = _s9.scrollWidth;e.width = _l2 + _a3 + "px", _n8.style.overflow = "", e.flex = "", e.flexShrink = "0", e.height = _n8.scrollHeight + "px";var _h5 = _s9.scrollHeight;e.height = _h5 + _r2 + "px";
      } catch (t) {
        e = "";
      }
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(t, e) {
      var _this23 = this;

      e.slides.forEach(function (t) {
        t.$el && (t.$iframe && !1 !== t.autoSize && _this23.autoSizeIframe(t.$iframe), t.ratio && _this23.setAspectRatio(t));
      });
    }
  }, {
    key: "setContent",
    value: function setContent(t) {
      if (t && !t.isDom) {
        switch (t.type) {case "html":
            this.fancybox.setContent(t, t.src);break;case "html5video":
            this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.thumb || ""));break;case "inline":case "clone":
            this.loadInlineContent(t);break;case "ajax":
            this.loadAjaxContent(t);break;case "iframe":case "pdf":case "video":case "map":
            this.loadIframeContent(t);}t.ratio && this.setAspectRatio(t);
      }
    }
  }, {
    key: "onSelectSlide",
    value: function onSelectSlide(t, e, i) {
      "ready" === t.state && this.playVideo(i);
    }
  }, {
    key: "playVideo",
    value: function playVideo(t) {
      if ("html5video" === t.type) {
        var _e16 = t.$el.querySelector("video");if (_e16) try {
          _e16.play();
        } catch (t) {}
      }if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;var e = function e() {
        if ("done" !== t.state || !t.$iframe || !t.$iframe.contentWindow) return;var i = undefined;if (t.$iframe.isReady) return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }), void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));"youtube" === t.vendor && (i = { event: "listening", id: t.$iframe.getAttribute("id") }, t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*")), t.poller = setTimeout(e, 250);
      };e();
    }
  }, {
    key: "onUnselectSlide",
    value: function onUnselectSlide(t, e, i) {
      if ("html5video" === i.type) {
        try {
          i.$el.querySelector("video").pause();
        } catch (t) {}return;
      }var s = !1;"vimeo" == i.vendor ? s = { method: "pause", value: "true" } : "youtube" === i.vendor && (s = { event: "command", func: "pauseVideo" }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), clearTimeout(i.poller);
    }
  }, {
    key: "onRemoveSlide",
    value: function onRemoveSlide(t, e, i) {
      i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);var s = i.$content;"inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none"), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null));var n = s && s.$placeHolder;n && (n.parentNode.insertBefore(s, n), n.remove(), s.$placeHolder = null);
    }
  }, {
    key: "onMessage",
    value: function onMessage(t) {
      try {
        var _e17 = JSON.parse(t.data);if ("https://player.vimeo.com" === t.origin) {
          if ("ready" === _e17.event) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = document.getElementsByClassName("fancybox__iframe")[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var _e18 = _step11.value;
                _e18.contentWindow === t.source && (_e18.isReady = 1);
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
                  _iterator11["return"]();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          }
        } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === _e17.event && (document.getElementById(_e17.id).isReady = 1);
      } catch (t) {}
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
    }
  }]);

  return $;
})();

$.defaults = w;
var S = (function () {
  function S(t) {
    _classCallCheck(this, S);

    this.fancybox = t;var _arr6 = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"];
    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var _t33 = _arr6[_i6];this[_t33] = this[_t33].bind(this);
    }this.events = { ready: this.onReady, closing: this.onClosing, done: this.onDone, "Carousel.change": this.onPageChange, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide };
  }

  _createClass(S, [{
    key: "onReady",
    value: function onReady() {
      var _this24 = this;

      this.fancybox.Carousel.slides.forEach(function (t) {
        t.$el && _this24.setContent(t);
      });
    }
  }, {
    key: "onDone",
    value: function onDone(t, e) {
      this.handleCursor(e);
    }
  }, {
    key: "onClosing",
    value: function onClosing(t) {
      clearTimeout(this.clickTimer), t.Carousel.slides.forEach(function (t) {
        t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
      }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
  }, {
    key: "onRemoveSlide",
    value: function onRemoveSlide(t, e, i) {
      i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
    }
  }, {
    key: "setContent",
    value: function setContent(t) {
      var _this25 = this;

      if (t.isDom || t.html || t.type && "image" !== t.type) return;if (t.$image) return;t.type = "image", t.state = "loading";var e = document.createElement("div");e.style.visibility = "hidden";var i = document.createElement("img");i.addEventListener("load", function (e) {
        e.stopImmediatePropagation(), _this25.onImageStatusChange(t);
      }), i.addEventListener("error", function () {
        _this25.onImageStatusChange(t);
      }), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), t.$image = i;var s = this.fancybox.option("Image.wrap");if (s) {
        var _n9 = document.createElement("div");_n9.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), _n9.appendChild(i), e.appendChild(_n9), t.$wrap = _n9;
      } else e.appendChild(i);t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
    }
  }, {
    key: "onImageStatusChange",
    value: function onImageStatusChange(t) {
      var _this26 = this;

      var e = t.$image;e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", function (e) {
        return _this26.onWheel(t, e);
      }, { passive: !1 }), t.$content.addEventListener("click", function (e) {
        return _this26.onClick(t, e);
      }, { passive: !1 }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
    }
  }, {
    key: "initSlidePanzoom",
    value: function initSlidePanzoom(t) {
      var _this27 = this;

      t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), { viewport: t.$wrap, content: t.$image, wrapInner: !1, textSelection: !0, touch: this.fancybox.option("Image.touch"), panOnlyZoomed: !0, click: !1, wheel: !1 })), t.Panzoom.on("startAnimation", function () {
        _this27.fancybox.trigger("Image.startAnimation", t);
      }), t.Panzoom.on("endAnimation", function () {
        "zoomIn" === t.state && _this27.fancybox.done(t), _this27.handleCursor(t), _this27.fancybox.trigger("Image.endAnimation", t);
      }), t.Panzoom.on("afterUpdate", function () {
        _this27.handleCursor(t), _this27.fancybox.trigger("Image.afterUpdate", t);
      }));
    }
  }, {
    key: "revealContent",
    value: function revealContent(t) {
      null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
    }
  }, {
    key: "getZoomInfo",
    value: function getZoomInfo(t) {
      var e = t.$thumb.getBoundingClientRect(),
          i = e.width,
          s = e.height,
          n = t.$content.getBoundingClientRect(),
          o = n.width,
          a = n.height,
          r = n.top - e.top,
          l = n.left - e.left;var h = this.fancybox.option("Image.zoomOpacity");return "auto" === h && (h = Math.abs(i / s - o / a) > .1), { top: r, left: l, scale: e.width / o, opacity: h };
    }
  }, {
    key: "canZoom",
    value: function canZoom(t) {
      var e = this.fancybox,
          i = e.$container;if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;var s = t.$thumb;if (!s || "loading" === t.state) return !1;i.classList.add("fancybox__no-click");var n = s.getBoundingClientRect();var o = undefined;if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        var _t34 = document.elementFromPoint(n.left + 1, n.top + 1) === s,
            _e19 = document.elementFromPoint(n.right - 1, n.bottom - 1) === s;o = _t34 && _e19;
      } else o = document.elementFromPoint(n.left + .5 * n.width, n.top + .5 * n.height) === s;return i.classList.remove("fancybox__no-click"), o;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      var t = this.fancybox;var e = t.getSlide();var i = e.Panzoom;
      var _getZoomInfo = this.getZoomInfo(e);

      var s = _getZoomInfo.top;
      var n = _getZoomInfo.left;
      var o = _getZoomInfo.scale;
      var a = _getZoomInfo.opacity;
      e.state = "zoomIn", t.trigger("reveal", e), i.panTo({ x: -1 * n, y: -1 * s, scale: o, friction: 0, ignoreBounds: !0 }), e.$content.style.visibility = "", !0 === a && i.on("afterTransform", function (t) {
        "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - o)));
      }), i.panTo({ x: 0, y: 0, scale: 1, friction: this.fancybox.option("Image.zoomFriction") });
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var _this28 = this;

      var t = this.fancybox,
          e = t.getSlide(),
          i = e.Panzoom;if (!i) return;e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");var s = this.fancybox.option("Image.zoomFriction");var n = function n(t) {
        var _getZoomInfo2 = _this28.getZoomInfo(e);

        var n = _getZoomInfo2.top;
        var o = _getZoomInfo2.left;
        var a = _getZoomInfo2.scale;
        var r = _getZoomInfo2.opacity;
        t || r || (s *= .82), i.panTo({ x: -1 * o, y: -1 * n, scale: a, friction: s, ignoreBounds: !0 }), s *= .98;
      };window.addEventListener("scroll", n), i.on("endAnimation", function () {
        window.removeEventListener("scroll", n), t.destroy();
      }), n();
    }
  }, {
    key: "handleCursor",
    value: function handleCursor(t) {
      if ("image" !== t.type) return;var e = t.Panzoom,
          i = this.fancybox.option("Image.click"),
          s = t.$el.classList;if (e && "toggleZoom" === i) {
        s[e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? "add" : "remove"](this.fancybox.option("Image.canZoomInClass"));
      } else "close" === i && s.add(this.fancybox.option("Image.canZoomOutClass"));
    }
  }, {
    key: "onWheel",
    value: function onWheel(t, e) {
      if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {case "zoom":
          t.Panzoom && t.Panzoom.zoomWithWheel(e);break;case "close":
          this.fancybox.close();break;case "slide":
          this.fancybox[e.deltaY < 0 ? "prev" : "next"]();}
    }
  }, {
    key: "onClick",
    value: function onClick(t, e) {
      var _this29 = this;

      if ("ready" !== this.fancybox.state) return;var i = t.Panzoom;if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;var s = function s(i) {
        if (!1 !== _this29.fancybox.trigger("Image.click", e)) switch (i) {case "toggleZoom":
            e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);break;case "close":
            _this29.fancybox.close();break;case "next":
            e.stopPropagation(), _this29.fancybox.next();}
      };this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null);var n = this.fancybox.option("Image.click"),
          o = this.fancybox.option("Image.doubleClick");o ? 1 === e.detail ? this.clickTimer = setTimeout(function () {
        s(n);
      }, 300) : 2 === e.detail && s(o) : s(n);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(t, e) {
      var i = t.getSlide();e.slides.forEach(function (t) {
        t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: .8 });
      });
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events);
    }
  }]);

  return S;
})();

S.defaults = { canZoomInClass: "can-zoom_in", canZoomOutClass: "can-zoom_out", zoom: !0, zoomOpacity: "auto", zoomFriction: .82, ignoreCoveredThumbnail: !1, touch: !0, click: "toggleZoom", doubleClick: null, wheel: "zoom", fit: "contain", wrap: !1, Panzoom: { ratio: 1 } };var C = function C() {
  var t = window.location.hash.substr(1),
      e = t.split("-"),
      i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;return { hash: t, slug: e.join("-"), index: i };
};
var E = (function () {
  function E(t) {
    _classCallCheck(this, E);

    this.fancybox = t;var _arr7 = ["onChange", "onClosing"];
    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var _t35 = _arr7[_i7];this[_t35] = this[_t35].bind(this);
    }this.events = { initCarousel: this.onChange, "Carousel.change": this.onChange, closing: this.onClosing }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
  }

  _createClass(E, [{
    key: "onChange",
    value: function onChange() {
      var _this30 = this;

      var t = this.fancybox,
          e = t.Carousel;this.timer && clearTimeout(this.timer);var i = null === e.prevPage,
          s = t.getSlide(),
          n = s.$trigger && s.$trigger.dataset,
          o = window.location.hash.substr(1);var a = !1;if (s.slug) a = s.slug;else {
        var _t36 = n && n.fancybox;_t36 && _t36.length && "true" !== _t36 && (a = _t36 + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
      }i && (this.origHash = o !== a ? this.origHash : ""), a && o !== a && (this.timer = setTimeout(function () {
        try {
          window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + a), i && (_this30.hasCreatedHistory = !0);
        } catch (t) {}
      }, 300));
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      if ((this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose)) {
        if (!this.hasCreatedHistory) try {
          return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash ? "#" + this.origHash : ""));
        } catch (t) {}window.history.back();
      }
    }
  }, {
    key: "attach",
    value: function attach(t) {
      t.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach(t) {
      t.off(this.events);
    }
  }], [{
    key: "startFromUrl",
    value: function startFromUrl() {
      if (E.Fancybox.getInstance()) return;
      var _C = C();

      var t = _C.hash;
      var e = _C.slug;
      var i = _C.index;
      if (!e) return;var s = document.querySelector("[data-slug=\"" + t + "\"]");if ((s && s.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })), E.Fancybox.getInstance())) return;var n = document.querySelectorAll("[data-fancybox=\"" + e + "\"]");n.length && (null === i && 1 === n.length ? s = n[0] : i && (s = n[i - 1]), s && s.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })));
    }
  }, {
    key: "onHashChange",
    value: function onHashChange() {
      var _C2 = C();

      var t = _C2.slug;
      var e = _C2.index;var i = E.Fancybox.getInstance();if (i) {
        if (t) {
          var _s10 = i.Carousel;var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = _s10.slides[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _e20 = _step12.value;
              if (_e20.slug && _e20.slug === t) return _s10.slideTo(_e20.index);
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          var _n10 = i.getSlide(),
              _o7 = _n10.$trigger && _n10.$trigger.dataset;if (_o7 && _o7.fancybox === t) return _s10.slideTo(e - 1);
        }i.plugins.Hash.hasSilentClose = !0, i.close();
      }E.startFromUrl();
    }
  }, {
    key: "onReady",
    value: function onReady() {
      window.addEventListener("hashchange", E.onHashChange, !1), E.startFromUrl();
    }
  }, {
    key: "create",
    value: function create() {
      b && window.requestAnimationFrame(function () {
        E.onReady();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("hashchange", E.onHashChange, !1);
    }
  }]);

  return E;
})();

var P = { pageXOffset: 0, pageYOffset: 0, element: function element() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  }, activate: function activate(t) {
    P.pageXOffset = window.pageXOffset, P.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  }, deactivate: function deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  } };
var T = (function () {
  function T(t) {
    _classCallCheck(this, T);

    this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  _createClass(T, [{
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "setTimer",
    value: function setTimer() {
      var _this31 = this;

      if (!this.active || this.timer) return;var t = this.fancybox.option("slideshow.delay", 3e3);this.timer = setTimeout(function () {
        _this31.timer = null, _this31.fancybox.option("infinite") || _this31.fancybox.getSlide().index !== _this31.fancybox.Carousel.slides.length - 1 ? _this31.fancybox.next() : _this31.fancybox.jumpTo(0, { friction: 0 });
      }, t);var e = this.$progress;e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = t + "ms", e.style.transform = "scaleX(1)";
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      this.deactivate();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
    }
  }]);

  return T;
})();

var L = { items: { counter: { type: "div", "class": "fancybox__counter", html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>', tabindex: -1, position: "left" }, prev: { type: "button", "class": "fancybox__button--prev", label: "PREV", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>', click: function click(t) {
        t.preventDefault(), this.fancybox.prev();
      } }, next: { type: "button", "class": "fancybox__button--next", label: "NEXT", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>', click: function click(t) {
        t.preventDefault(), this.fancybox.next();
      } }, fullscreen: { type: "button", "class": "fancybox__button--fullscreen", label: "TOGGLE_FULLSCREEN", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>', click: function click(t) {
        t.preventDefault(), P.element() ? P.deactivate() : P.activate(this.fancybox.$container);
      } }, slideshow: { type: "button", "class": "fancybox__button--slideshow", label: "TOGGLE_SLIDESHOW", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>', click: function click(t) {
        t.preventDefault(), this.Slideshow.toggle();
      } }, zoom: { type: "button", "class": "fancybox__button--zoom", label: "TOGGLE_ZOOM", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>', click: function click(t) {
        t.preventDefault();var e = this.fancybox.getSlide().Panzoom;e && e.toggleZoom();
      } }, download: { type: "link", label: "DOWNLOAD", "class": "fancybox__button--download", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>', click: function click(t) {
        t.stopPropagation();
      } }, thumbs: { type: "button", label: "TOGGLE_THUMBS", "class": "fancybox__button--thumbs", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>', click: function click(t) {
        t.stopPropagation();var e = this.fancybox.plugins.Thumbs;e && e.toggle();
      } }, close: { type: "button", label: "CLOSE", "class": "fancybox__button--close", html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>', tabindex: 1, click: function click(t) {
        t.stopPropagation(), t.preventDefault(), this.fancybox.close();
      } } }, display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"], autoEnable: !0 };
var A = (function () {
  function A(t) {
    var _this32 = this;

    _classCallCheck(this, A);

    this.fancybox = t, this.$container = null, this.state = "init";var _arr8 = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"];
    for (var _i8 = 0; _i8 < _arr8.length; _i8++) {
      var _t37 = _arr8[_i8];this[_t37] = this[_t37].bind(this);
    }this.events = { init: this.onInit, prepare: this.onPrepare, done: this.onDone, keydown: this.onKeydown, closing: this.onClosing, "Carousel.change": this.onChange, "Carousel.settle": this.onSettle, "Carousel.Panzoom.touchStart": function CarouselPanzoomTouchStart() {
        return _this32.onRefresh();
      }, "Image.startAnimation": function ImageStartAnimation(t, e) {
        return _this32.onRefresh(e);
      }, "Image.afterUpdate": function ImageAfterUpdate(t, e) {
        return _this32.onRefresh(e);
      } };
  }

  _createClass(A, [{
    key: "onInit",
    value: function onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        var _t38 = !1;var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = this.fancybox.items[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var _e21 = _step13.value;
            if ("image" === _e21.type) {
              _t38 = !0;break;
            }
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
              _iterator13["return"]();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        if (!_t38) return void (this.state = "disabled");
      }var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = this.fancybox.option("Toolbar.display")[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var _e22 = _step14.value;
          if ("close" === (t(_e22) ? _e22.id : _e22)) {
            this.fancybox.options.closeButton = !1;break;
          }
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }, {
    key: "onPrepare",
    value: function onPrepare() {
      if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new T(this.fancybox), !this.fancybox.Carousel.prevPage && (this.fancybox.option("slideshow.autoStart") && this.Slideshow.activate(), this.fancybox.option("fullscreen.autoStart") && !P.element()))) try {
        P.activate(this.fancybox.$container);
      } catch (t) {}
    }
  }, {
    key: "onFsChange",
    value: function onFsChange() {
      window.scrollTo(P.pageXOffset, P.pageYOffset);
    }
  }, {
    key: "onSettle",
    value: function onSettle() {
      this.Slideshow && this.Slideshow.isActive() && (this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 || this.fancybox.option("infinite") ? "done" === this.fancybox.getSlide().state && this.Slideshow.setTimer() : this.Slideshow.deactivate());
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
    }
  }, {
    key: "onDone",
    value: function onDone(t, e) {
      e.index === t.getSlide().index && (this.update(), this.Slideshow && this.Slideshow.isActive() && (this.fancybox.option("infinite") || e.index !== this.fancybox.Carousel.slides.length - 1 ? this.Slideshow.setTimer() : this.Slideshow.deactivate()));
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(t) {
      t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t, e, i) {
      " " === e && (this.Slideshow.toggle(), i.preventDefault());
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
    }
  }, {
    key: "createElement",
    value: function createElement(t) {
      var _e$classList3;

      var e = undefined;return "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t["class"] && (_e$classList3 = e.classList).add.apply(_e$classList3, _toConsumableArray(t["class"].split(" "))), t.label && e.setAttribute("title", this.fancybox.localize("{{" + t.label + "}}")), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", ""), e;
    }
  }, {
    key: "build",
    value: function build() {
      var _this33 = this;

      this.cleanup();var i = this.fancybox.option("Toolbar.items"),
          s = [{ position: "left", items: [] }, { position: "center", items: [] }, { position: "right", items: [] }],
          n = this.fancybox.plugins.Thumbs;var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        var _loop3 = function () {
          var o = _step15.value;
          var a = undefined,
              r = undefined;if ((t(o) ? (a = o.id, r = e({}, i[a], o)) : (a = o, r = i[a]), ["counter", "next", "prev", "slideshow"].includes(a) && _this33.fancybox.items.length < 2)) return "continue";if ("fullscreen" === a) {
            if (!document.fullscreenEnabled || window.fullScreen) return "continue";document.addEventListener("fullscreenchange", _this33.onFsChange);
          }if ("thumbs" === a && (!n || "disabled" === n.state)) return "continue";if (!r) return "continue";var l = r.position || "right",
              h = s.find(function (t) {
            return t.position === l;
          });h && h.items.push(r);
        };

        for (var _iterator15 = this.fancybox.option("Toolbar.display")[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var _ret4 = _loop3();

          if (_ret4 === "continue") continue;
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
            _iterator15["return"]();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }

      var o = document.createElement("div");o.classList.add("fancybox__toolbar");var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = s[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var _t39 = _step16.value;
          if (_t39.items.length) {
            var _e23 = document.createElement("div");_e23.classList.add("fancybox__toolbar__items"), _e23.classList.add("fancybox__toolbar__items--" + _t39.position);var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = _t39.items[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var _i27 = _step17.value;
                _e23.appendChild(this.createElement(_i27));
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
                  _iterator17["return"]();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }

            o.appendChild(_e23);
          }
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
            _iterator16["return"]();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      this.fancybox.$carousel.parentNode.insertBefore(o, this.fancybox.$carousel), this.$container = o;
    }
  }, {
    key: "update",
    value: function update() {
      var t = this.fancybox.getSlide(),
          e = t.index,
          i = this.fancybox.items.length,
          s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = this.fancybox.$container.querySelectorAll("a.fancybox__button--download")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var _t40 = _step18.value;
          s ? (_t40.removeAttribute("disabled"), _t40.setAttribute("href", s), _t40.setAttribute("download", s), _t40.setAttribute("target", "_blank")) : (_t40.setAttribute("disabled", ""), _t40.removeAttribute("href"), _t40.removeAttribute("download"));
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
            _iterator18["return"]();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      var n = t.Panzoom,
          o = n && n.option("maxScale") > n.option("baseScale");var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _t41 = _step19.value;
          o ? _t41.removeAttribute("disabled") : _t41.setAttribute("disabled", "");
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
            _iterator19["return"]();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }

      var _iteratorNormalCompletion20 = true;
      var _didIteratorError20 = false;
      var _iteratorError20 = undefined;

      try {
        for (var _iterator20 = this.fancybox.$container.querySelectorAll("[data-fancybox-index]")[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
          var _e24 = _step20.value;
          _e24.innerHTML = t.index + 1;
        }
      } catch (err) {
        _didIteratorError20 = true;
        _iteratorError20 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
            _iterator20["return"]();
          }
        } finally {
          if (_didIteratorError20) {
            throw _iteratorError20;
          }
        }
      }

      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = this.fancybox.$container.querySelectorAll("[data-fancybox-count]")[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var _t42 = _step21.value;
          _t42.innerHTML = i;
        }
      } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
            _iterator21["return"]();
          }
        } finally {
          if (_didIteratorError21) {
            throw _iteratorError21;
          }
        }
      }

      if (!this.fancybox.option("infinite")) {
        var _iteratorNormalCompletion22 = true;
        var _didIteratorError22 = false;
        var _iteratorError22 = undefined;

        try {
          for (var _iterator22 = this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
            var _t43 = _step22.value;
            0 === e ? _t43.setAttribute("disabled", "") : _t43.removeAttribute("disabled");
          }
        } catch (err) {
          _didIteratorError22 = true;
          _iteratorError22 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
              _iterator22["return"]();
            }
          } finally {
            if (_didIteratorError22) {
              throw _iteratorError22;
            }
          }
        }

        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = this.fancybox.$container.querySelectorAll("[data-fancybox-next]")[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var _t44 = _step23.value;
            e === i - 1 ? _t44.setAttribute("disabled", "") : _t44.removeAttribute("disabled");
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }
      }
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }]);

  return A;
})();

A.defaults = L;var k = { ScrollLock: (function () {
    function ScrollLock(t) {
      _classCallCheck(this, ScrollLock);

      this.fancybox = t, this.viewport = null, this.pendingUpdate = null;var _arr9 = ["onReady", "onResize", "onTouchstart", "onTouchmove"];
      for (var _i9 = 0; _i9 < _arr9.length; _i9++) {
        var _t45 = _arr9[_i9];this[_t45] = this[_t45].bind(this);
      }
    }

    _createClass(ScrollLock, [{
      key: "onReady",
      value: function onReady() {
        var t = window.visualViewport;t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, { passive: !1 }), window.addEventListener("touchmove", this.onTouchmove, { passive: !1 });
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.updateViewport();
      }
    }, {
      key: "updateViewport",
      value: function updateViewport() {
        var t = this.fancybox,
            e = this.viewport,
            i = e.scale || 1,
            s = t.$container;if (!s) return;var n = "",
            o = "",
            a = "";i - 1 > .1 && (n = e.width * i + "px", o = e.height * i + "px", a = "translate3d(" + e.offsetLeft + "px, " + e.offsetTop + "px, 0) scale(" + 1 / i + ")"), s.style.width = n, s.style.height = o, s.style.transform = a;
      }
    }, {
      key: "onTouchstart",
      value: function onTouchstart(t) {
        this.startY = t.touches ? t.touches[0].screenY : t.screenY;
      }
    }, {
      key: "onTouchmove",
      value: function onTouchmove(t) {
        var e = this.startY,
            i = window.innerWidth / window.document.documentElement.clientWidth;if (t.touches.length > 1 || 1 !== i) return;var s = t.target,
            n = l(s);if (!n) return void t.preventDefault();var o = window.getComputedStyle(n),
            a = parseInt(o.getPropertyValue("height"), 10),
            r = t.touches ? t.touches[0].screenY : t.screenY,
            h = e <= r && 0 === n.scrollTop,
            c = e >= r && n.scrollHeight - n.scrollTop === a;(h || c) && t.preventDefault();
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);var t = this.viewport;t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1);
      }
    }, {
      key: "attach",
      value: function attach() {
        this.fancybox.on("initLayout", this.onReady);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.fancybox.off("initLayout", this.onReady), this.cleanup();
      }
    }]);

    return ScrollLock;
  })(), Thumbs: v, Html: $, Toolbar: A, Image: S, Hash: E };var z = { startIndex: 0, preload: 1, infinite: !0, showClass: "fancybox-zoomInUp", hideClass: "fancybox-fadeOut", animated: !0, hideScrollbar: !0, parentEl: null, mainClass: null, autoFocus: !0, trapFocus: !0, placeFocusBack: !0, click: "close", closeButton: "inside", dragToClose: !0, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "next", ArrowDown: "prev", ArrowRight: "next", ArrowLeft: "prev" }, template: { closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>', spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>', main: null }, l10n: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" } };var _ = 0;
var O = (function (_h3) {
  _inherits(O, _h3);

  function O(t) {
    var i = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, O);

    _get(Object.getPrototypeOf(O.prototype), "constructor", this).call(this, e(!0, {}, z, i)), this.bindHandlers(), this.state = "init", this.setItems(t), this.attachPlugins(O.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus();
  }

  _createClass(O, [{
    key: "bindHandlers",
    value: function bindHandlers() {
      var _arr10 = ["onMousedown", "onKeydown", "onClick", "onCreateSlide", "onTouchMove", "onTouchEnd", "onTransform"];
      for (var _i10 = 0; _i10 < _arr10.length; _i10++) {
        var _t46 = _arr10[_i10];this[_t46] = this[_t46].bind(this);
      }
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown), this.$container.addEventListener("click", this.onClick);
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown), this.$container.removeEventListener("click", this.onClick);
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var _$container$classList,
          _this34 = this;

      this.$root = this.option("parentEl") || document.body;var t = this.option("template.main");t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
        return _this34.$container.scrollLeft = 0, !1;
      }, Object.entries({ "class": "fancybox__container", role: "dialog", "aria-modal": "true", "aria-hidden": "true", "aria-label": this.localize("{{MODAL}}") }).forEach(function (t) {
        var _$container;

        return (_$container = _this34.$container).setAttribute.apply(_$container, _toConsumableArray(t));
      }), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++_, this.$container.setAttribute("id", "fancybox-" + this.id));var e = this.options.mainClass;return e && (_$container$classList = this.$container.classList).add.apply(_$container$classList, _toConsumableArray(e.split(" "))), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
    }
  }, {
    key: "setItems",
    value: function setItems(t) {
      var e = [];var _iteratorNormalCompletion24 = true;
      var _didIteratorError24 = false;
      var _iteratorError24 = undefined;

      try {
        for (var _iterator24 = t[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
          var _i28 = _step24.value;
          var _t47 = _i28.$trigger;if (_t47) {
            var _e25 = _t47.dataset || {};_i28.src = _e25.src || _t47.getAttribute("href") || _i28.src, _i28.type = _e25.type || _i28.type, !_i28.src && _t47 instanceof HTMLImageElement && (_i28.src = _t47.currentSrc || _i28.$trigger.src);
          }var _s11 = _i28.$thumb;if (!_s11) {
            var _t48 = _i28.$trigger && _i28.$trigger.origTarget;_t48 && (_s11 = _t48 instanceof HTMLImageElement ? _t48 : _t48.querySelector("img")), !_s11 && _i28.$trigger && (_s11 = _i28.$trigger instanceof HTMLImageElement ? _i28.$trigger : _i28.$trigger.querySelector("img"));
          }_i28.$thumb = _s11 || null;var _n11 = _i28.thumb;!_n11 && _i28.$thumb && (_n11 = _s11.currentSrc || _s11.src), _n11 || "image" !== _i28.type || (_n11 = _i28.src), _i28.thumb = _n11 || null, _i28.caption = _i28.caption || "", e.push(_i28);
        }
      } catch (err) {
        _didIteratorError24 = true;
        _iteratorError24 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
            _iterator24["return"]();
          }
        } finally {
          if (_didIteratorError24) {
            throw _iteratorError24;
          }
        }
      }

      this.items = e;
    }
  }, {
    key: "initCarousel",
    value: function initCarousel() {
      var _this35 = this;

      return this.Carousel = new y(this.$carousel, e(!0, {}, { classNames: { viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" }, textSelection: !0, preload: this.option("preload"), friction: .88, slides: this.items, initialPage: this.options.startIndex, slidesPerPage: 1, infiniteX: this.option("infinite"), infiniteY: !0, l10n: this.option("l10n"), Dots: !1, Navigation: { classNames: { main: "fancybox__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } }, Panzoom: { textSelection: !0, panOnlyZoomed: function panOnlyZoomed() {
            return _this35.Carousel && _this35.Carousel.pages && _this35.Carousel.pages.length < 2 && !_this35.options.dragToClose;
          }, lockAxis: function lockAxis() {
            if (_this35.Carousel) {
              var _t49 = "x";return _this35.options.dragToClose && (_t49 += "y"), _t49;
            }
          } }, on: { "*": function _(t) {
            for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              e[_key5 - 1] = arguments[_key5];
            }

            return _this35.trigger.apply(_this35, ["Carousel." + t].concat(e));
          }, init: function init(t) {
            return _this35.Carousel = t;
          }, createSlide: this.onCreateSlide } }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({ touchMove: this.onTouchMove, afterTransform: this.onTransform, touchEnd: this.onTouchEnd }), this.trigger("initCarousel"), this;
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e) {
      var i = e.caption || "";if (("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length)) {
        var _t50 = document.createElement("div"),
            _s12 = "fancybox__caption_" + this.id + "_" + e.index;_t50.className = "fancybox__caption", _t50.innerHTML = i, _t50.setAttribute("id", _s12), e.$caption = e.$el.appendChild(_t50), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", _s12);
      }
    }
  }, {
    key: "onClick",
    value: function onClick(t) {
      if (t.defaultPrevented) return;if (t.target.closest(".fancybox__content")) return;if (window.getSelection().toString().length) return;if (!1 === this.trigger("click", t)) return;switch (this.option("click")) {case "close":
          this.close();break;case "next":
          this.next();}
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove() {
      var t = this.getSlide().Panzoom;return !t || 1 === t.content.scale;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(t) {
      var e = t.dragOffset.y;Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({ y: 0 });
    }
  }, {
    key: "onTransform",
    value: function onTransform(t) {
      if (this.$backdrop) {
        var _e26 = Math.abs(t.content.y),
            _i29 = _e26 < 1 ? "" : Math.max(.33, Math.min(1, 1 - _e26 / t.content.fitHeight * 1.5));this.$container.style.setProperty("--fancybox-ts", _i29 ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", _i29);
      }
    }
  }, {
    key: "onMousedown",
    value: function onMousedown() {
      document.body.classList.add("is-using-mouse");
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t) {
      if (O.getInstance().id !== this.id) return;document.body.classList.remove("is-using-mouse");var e = t.key;if ("Tab" === e && this.option("trapFocus")) return void this.focus(t);var i = this.option("keyboard");if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;var s = document.activeElement && document.activeElement.classList,
          n = s && s.contains("carousel__button");if ("Escape" !== e && !n) {
        if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
      }if (!1 === this.trigger("keydown", e, t)) return;var o = i[e];"function" == typeof this[o] && this[o]();
    }
  }, {
    key: "getSlide",
    value: function getSlide() {
      var t = this.Carousel;if (!t) return null;var e = null === t.page ? t.option("initialPage") : t.page,
          i = t.pages || [];return i.length && i[e] ? i[e].slides[0] : null;
    }
  }, {
    key: "focus",
    value: function focus(t) {
      void 0 === O.preventScrollSupported && (O.preventScrollSupported = (function () {
        var t = !1;return document.createElement("div").focus(Object.defineProperties({}, {
          preventScroll: {
            get: function get() {
              return t = !0, !1;
            },
            configurable: true,
            enumerable: true
          }
        })), t;
      })());var e = function e(t) {
        t.setActive ? t.setActive() : O.preventScrollSupported ? t.focus({ preventScroll: !0 }) : t.focus();
      };if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;t && t.preventDefault();var i = this.getSlide().$el;if (!i) return;i.tabIndex = 0;var s = [].slice.call(this.$container.querySelectorAll(["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']));var n = [];var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = s[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var _t51 = _step25.value;
          if (_t51.classList && _t51.classList.contains("fancybox__slide")) continue;var _e27 = _t51.closest(".fancybox__slide");_e27 ? _e27 === i && n[_t51.hasAttribute("autofocus") ? "unshift" : "push"](_t51) : n.push(_t51);
        }
      } catch (err) {
        _didIteratorError25 = true;
        _iteratorError25 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
            _iterator25["return"]();
          }
        } finally {
          if (_didIteratorError25) {
            throw _iteratorError25;
          }
        }
      }

      if (!n.length) return;this.Carousel.pages.length > 1 && n.push(i), n.sort(function (t, e) {
        return t.tabIndex > e.tabIndex ? -1 : t.tabIndex < e.tabIndex ? 1 : 0;
      });var o = n.indexOf(document.activeElement),
          a = t && !t.shiftKey,
          r = t && t.shiftKey;return a ? o === n.length - 1 ? e(n[0]) : e(n[o + 1]) : r ? e(0 === o ? n[n.length - 1] : n[o - 1]) : o < 0 ? e(n[0]) : void 0;
    }
  }, {
    key: "hideScrollbar",
    value: function hideScrollbar() {
      if (!b) return;var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
          e = "fancybox-style-noscroll";var i = document.getElementById(e);i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: " + t + "px;}", document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
    }
  }, {
    key: "revealScrollbar",
    value: function revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");var t = document.getElementById("fancybox-style-noscroll");t && t.remove();
    }
  }, {
    key: "clearContent",
    value: function clearContent(t) {
      this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t._className && t.$el.classList.remove(t._className);
    }
  }, {
    key: "setContent",
    value: function setContent(t, e) {
      var i = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var s = undefined;var n = t.$el;if ((e instanceof HTMLElement ? ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), s.appendChild(e)) : s = e : (s = document.createElement("div"), s.innerHTML = e), !(s instanceof Element))) throw new Error("Element expected");return t._className = "has-" + (i.suffix || t.type || "unknown"), n.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== window.getComputedStyle(s).getPropertyValue("display") || (s.style.display = "flex"), t.id && s.setAttribute("id", t.id), t.$content = s, n.prepend(s), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), s;
    }
  }, {
    key: "manageCloseButton",
    value: function manageCloseButton(t) {
      var _this36 = this;

      var e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;if (!e || "top" === e && this.$closeButton) return;var i = document.createElement("button");i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", function (t) {
        return _this36.close(t);
      }), "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
    }
  }, {
    key: "revealContent",
    value: function revealContent(t) {
      var _this37 = this;

      this.trigger("reveal", t), t.$content.style.visibility = "";var e = !1;t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), e ? (t.state = "animating", this.animateCSS(t.$content, e, function () {
        _this37.done(t);
      })) : this.done(t);
    }
  }, {
    key: "animateCSS",
    value: function animateCSS(t, e, i) {
      if ((t && t.dispatchEvent(new CustomEvent("animationend", { bubbles: !0, cancelable: !0 })), !t || !e)) return void ("function" == typeof i && i());var s = function s(n) {
        n.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), t.classList.remove(e));
      };t.addEventListener("animationend", s), t.classList.add(e);
    }
  }, {
    key: "done",
    value: function done(t) {
      t.state = "done", this.trigger("done", t);var e = this.getSlide();e && t.index === e.index && this.option("autoFocus") && this.focus();
    }
  }, {
    key: "setError",
    value: function setError(t, e) {
      t.error = e, this.hideLoading(t), this.clearContent(t);var i = document.createElement("div");i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, { suffix: "error" });
    }
  }, {
    key: "showLoading",
    value: function showLoading(t) {
      var _this38 = this;

      t.state = "loading", t.$el.classList.add("is-loading");var e = t.$el.querySelector(".fancybox__spinner");e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), e.addEventListener("click", function () {
        _this38.Carousel.Panzoom.velocity || _this38.close();
      }), t.$el.prepend(e));
    }
  }, {
    key: "hideLoading",
    value: function hideLoading(t) {
      var e = t.$el && t.$el.querySelector(".fancybox__spinner");e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
    }
  }, {
    key: "next",
    value: function next() {
      var t = this.Carousel;t && t.pages.length > 1 && t.slideNext();
    }
  }, {
    key: "prev",
    value: function prev() {
      var t = this.Carousel;t && t.pages.length > 1 && t.slidePrev();
    }
  }, {
    key: "jumpTo",
    value: function jumpTo() {
      var _Carousel;

      this.Carousel && (_Carousel = this.Carousel).slideTo.apply(_Carousel, arguments);
    }
  }, {
    key: "close",
    value: function close(t) {
      var _this39 = this;

      if ((t && t.preventDefault(), ["closing", "customClosing", "destroy"].indexOf(this.state) > -1)) return;if (!1 === this.trigger("shouldClose", t)) return;if ((this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" === this.state)) return;this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");var e = this.getSlide();if ((this.Carousel.slides.forEach(function (t) {
        t.$content && t.index !== e.index && _this39.Carousel.trigger("removeSlide", t);
      }), "closing" === this.state)) {
        var _t52 = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;this.animateCSS(e.$content, _t52, function () {
          _this39.destroy();
        }, !0);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.state = "destroy", this.trigger("destroy");var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;if ((this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t)) if (O.preventScrollSupported) t.focus({ preventScroll: !0 });else {
        var _e28 = document.body.scrollTop;t.focus(), document.body.scrollTop = _e28;
      }var e = O.getInstance();e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
    }
  }], [{
    key: "show",
    value: function show(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      return new O(t, e);
    }
  }, {
    key: "fromEvent",
    value: function fromEvent(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      if (t.defaultPrevented) return;if (t.button && 0 !== t.button) return;if (t.ctrlKey || t.metaKey || t.shiftKey) return;var i = undefined,
          s = undefined,
          n = undefined,
          o = t.target;if (((o.matches("[data-fancybox-trigger]") || (o = o.closest("[data-fancybox-trigger]"))) && (i = o && o.dataset && o.dataset.fancyboxTrigger), i)) {
        var _t53 = document.querySelectorAll("[data-fancybox=\"" + i + "\"]"),
            _e29 = parseInt(o.dataset.fancyboxIndex, 10) || 0;o = _t53.length ? _t53[_e29] : o;
      }o || (o = t.target), Array.from(O.openers.keys()).reverse().some(function (e) {
        if ((n = o, n.matches(e) || (n = n.closest(e)))) return t.preventDefault(), s = e, !0;
      });var a = !1;if (s) {
        e.event = t, e.target = n, n.origTarget = t.target, a = O.fromOpener(s, e);var _i30 = O.getInstance();_i30 && "ready" === _i30.state && t.detail && document.body.classList.add("is-using-mouse");
      }return a;
    }
  }, {
    key: "fromOpener",
    value: function fromOpener(t) {
      var i = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var s = [],
          n = i.startIndex || 0,
          o = i.target || null;var a = void 0 === (i = e({}, i, O.openers.get(t))).groupAttr ? "data-fancybox" : i.groupAttr,
          r = a && o && o.getAttribute("" + a),
          l = void 0 !== i.groupAll && i.groupAll;if ((l || r ? (s = [].slice.call(document.querySelectorAll(t)), l || (s = s.filter(function (t) {
        return t.getAttribute("" + a) === r;
      }))) : s = [o], !s.length)) return !1;var h = O.getInstance();return !(h && s.indexOf(h.options.$trigger) > -1) && (n = o ? s.indexOf(o) : n, s = s.map(function (t) {
        var e = ["false", "0", "no", "null", "undefined"],
            i = ["true", "1", "yes"],
            s = Object.assign({}, t.dataset);var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = Object.entries(s)[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _step26$value = _slicedToArray(_step26.value, 2);

            var _t54 = _step26$value[0];
            var _n12 = _step26$value[1];
            if ("string" == typeof _n12 || _n12 instanceof String) if (e.indexOf(_n12) > -1) s[_t54] = !1;else if (i.indexOf(s[_t54]) > -1) s[_t54] = !0;else try {
              s[_t54] = JSON.parse(_n12);
            } catch (e) {
              s[_t54] = _n12;
            }
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"]) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }

        return delete s.fancybox, delete s.type, t instanceof Element && (s.$trigger = t), s;
      }), new O(s, e({}, i, { startIndex: n, $trigger: o })));
    }
  }, {
    key: "bind",
    value: function bind(t) {
      var e = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      if (b) {
        if (!O.openers.size) {
          document.body.addEventListener("click", O.fromEvent, !1);var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = Object.entries(O.Plugins || {})[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var _step27$value = _slicedToArray(_step27.value, 2);

              var _t55 = _step27$value[0];
              var _e30 = _step27$value[1];
              _e30.Fancybox = this, "function" == typeof _e30.create && _e30.create();
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27["return"]) {
                _iterator27["return"]();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }
        }O.openers.set(t, e);
      }
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      O.openers["delete"](t), O.openers.size || O.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var t = undefined;for (; t = O.getInstance();) t.destroy();O.openers = new Map(), document.body.removeEventListener("click", O.fromEvent, !1);
    }
  }, {
    key: "getInstance",
    value: function getInstance(t) {
      var e = [];e = t ? [document.getElementById("fancybox-" + t)] : Array.from(document.querySelectorAll(".fancybox__container")).reverse();var _iteratorNormalCompletion28 = true;
      var _didIteratorError28 = false;
      var _iteratorError28 = undefined;

      try {
        for (var _iterator28 = e[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
          var _t56 = _step28.value;
          var _e31 = _t56 && _t56.Fancybox;if (_e31 && "closing" !== _e31.state && "customClosing" !== _e31.state) return _e31;
        }
      } catch (err) {
        _didIteratorError28 = true;
        _iteratorError28 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion28 && _iterator28["return"]) {
            _iterator28["return"]();
          }
        } finally {
          if (_didIteratorError28) {
            throw _iteratorError28;
          }
        }
      }

      return null;
    }
  }, {
    key: "close",
    value: function close() {
      var t = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
      var e = null;for (; e = O.getInstance();) if ((e.close(), !t)) return;
    }
  }]);

  return O;
})(h);

O.version = "4.0.0-beta.2", O.defaults = z, O.openers = new Map(), O.Plugins = k, O.bind("[data-fancybox]");exports.Carousel = y;
exports.Fancybox = O;
exports.Panzoom = d;

/***/ })
/******/ ]);