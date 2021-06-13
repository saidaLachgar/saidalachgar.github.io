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
/******/ 	__webpack_require__.p = "https://github.com/saidaLachgar/saidalachgar.github.io/";
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

var _node_modulesTinySliderSrcTinySliderJs = __webpack_require__(44);

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
document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll('img');
    Array.from(elements).forEach(function (el) {
        el.classList.add('loaded');
    });
});
//slider

var slider = (0, _node_modulesTinySliderSrcTinySliderJs.tns)({
    container: '.slider-01',
    items: 3,
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


/***/ })
/******/ ]);