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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SilcCore_1 = __webpack_require__(3);
exports.SilcCore = SilcCore_1["default"];
function silcCoreInit() {
    new SilcCore_1["default"]();
}
exports.silcCoreInit = silcCoreInit;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function menuScroll() {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll == 0) {
            $("body").removeClass("menu-top");
            console.log("laza clase");
        }
        else {
            $("body").addClass("menu-top");
        }
    });
    document.getElementById("menu-open").addEventListener("click", function () {
        moveMenu();
    });
    function moveMenu() {
        if (document.body.classList.contains('open-menu')) {
            document.body.classList.remove('open-menu');
        }
        else {
            document.body.classList.add('open-menu');
        }
        ;
    }
    $(".icon-down").on("click", function () {
        moveMenu();
    });
    initSmoothScrolling();
    function initSmoothScrolling() {
        if (isCssSmoothSCrollSupported()) {
            document.getElementById('css-support-msg').className = 'supported';
            return;
        }
        var duration = 400;
        var pageUrl = location.hash ?
            stripHash(location.href) :
            location.href;
        delegatedLinkHijacking();
        //directLinkHijacking();
        function delegatedLinkHijacking() {
            document.body.addEventListener('click', onClick, false);
            function onClick(e) {
                if (!isInPageLink(e.target))
                    return;
                e.stopPropagation();
                e.preventDefault();
                jump(e.target.hash, {
                    duration: duration,
                    callback: function () {
                        setFocus(e.target.hash);
                    }
                });
            }
        }
        function directLinkHijacking() {
            [].slice.call(document.querySelectorAll('a'))
                .filter(isInPageLink)
                .forEach(function (a) {
                a.addEventListener('click', onClick, false);
            });
            function onClick(e) {
                e.stopPropagation();
                e.preventDefault();
                jump(e.target.hash, {
                    duration: duration,
                });
            }
        }
        function isInPageLink(n) {
            return n.tagName.toLowerCase() === 'a' &&
                n.hash.length > 0 &&
                stripHash(n.href) === pageUrl;
        }
        function stripHash(url) {
            return url.slice(0, url.lastIndexOf('#'));
        }
        function isCssSmoothSCrollSupported() {
            return 'scrollBehavior' in document.documentElement.style;
        }
        function setFocus(hash) {
            var element = document.getElementById(hash.substring(1));
            if (element) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }
    }
    function jump(target, options) {
        var start = window.pageYOffset, opt = {
            duration: options.duration,
            offset: options.offset || 0,
            callback: options.callback,
            easing: options.easing || easeInOutQuad
        }, distance = typeof target === 'string' ?
            opt.offset + document.querySelector(target).getBoundingClientRect().top :
            target, duration = typeof opt.duration === 'function' ?
            opt.duration(distance) :
            opt.duration, timeStart, timeElapsed;
        requestAnimationFrame(function (time) {
            timeStart = time;
            loop(time);
        });
        function loop(time) {
            timeElapsed = time - timeStart;
            window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));
            if (timeElapsed < duration)
                requestAnimationFrame(loop);
            else
                end();
        }
        function end() {
            window.scrollTo(0, start + distance);
            if (typeof opt.callback === 'function')
                opt.callback();
        }
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    }
}
exports.menuScroll = menuScroll;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var default_1 = (function () {
    function default_1() {
        document.body.classList.add('js');
    }
    return default_1;
}());
exports["default"] = default_1;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Styles
 */
__webpack_require__(0);
/**
 * Modules
 */
var silc_core_1 = __webpack_require__(1);
var menu_1 = __webpack_require__(2);
/**
 * Init
 */
silc_core_1.silcCoreInit();
menu_1.menuScroll();


/***/ })
/******/ ]);