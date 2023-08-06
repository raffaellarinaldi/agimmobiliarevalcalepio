/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homespace */ \"./src/assets/js/modules/homespace.js\");\n/* harmony import */ var _modules_homespace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_homespace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_iubenda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/iubenda */ \"./src/assets/js/modules/iubenda.js\");\n/* harmony import */ var _modules_iubenda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_iubenda__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ \"./src/assets/js/modules/form.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_form__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://agenziavalcalepio.bg.it/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/modules/form.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/form.js ***!
  \***************************************/
/***/ (() => {

eval("jQuery(document).ready(function($) {\n  $(\"#contact-form\").submit(function(e) {\n    e.preventDefault();\n    var $form = $(this);\n    $.post($form.attr(\"action\"), $form.serialize())\n    .then(function() {\n      $(\"#form-result\").html\n      (`<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\"><strong>Grazie!</strong> La richiesta è stata inviata, ti ricontatteremo al più presto.<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>`);\n      $($form).each(function(){\n        this.reset();\n      });\n    })\n    .catch(function(error){\n      $(\"#form-result\").html\n      (`<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\"><strong>Errore!</strong> La richiesta non è stata inviata, per favore riprova più tardi.<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>`);\n    });\n  });\n});\n\n\n//# sourceURL=webpack://agenziavalcalepio.bg.it/./src/assets/js/modules/form.js?");

/***/ }),

/***/ "./src/assets/js/modules/homespace.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/homespace.js ***!
  \********************************************/
/***/ (() => {

eval(" AOS.init({\n \tduration: 800,\n \teasing: 'slide',\n \tonce: true\n });\n\njQuery(document).ready(function($) {\n\n\t\"use strict\";\n\n\t// Loading page\n\tvar loaderPage = function() {\n\t\t$(\".site-loader\").fadeOut(\"slow\");\n\t};\n\tloaderPage();\n\t\n\n\tvar siteMenuClone = function() {\n\n\t\t$('.js-clone-nav').each(function() {\n\t\t\tvar $this = $(this);\n\t\t\t$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');\n\t\t});\n\n\n\t\tsetTimeout(function() {\n\t\t\t\n\t\t\tvar counter = 0;\n      $('.site-mobile-menu .has-children').each(function(){\n        var $this = $(this);\n        \n        $this.prepend('<span class=\"arrow-collapse collapsed\">');\n\n        $this.find('.arrow-collapse').attr({\n          'data-toggle' : 'collapse',\n          'data-target' : '#collapseItem' + counter,\n        });\n\n        $this.find('> ul').attr({\n          'class' : 'collapse',\n          'id' : 'collapseItem' + counter,\n        });\n\n        counter++;\n\n      });\n\n    }, 1000);\n\n\t\t$('body').on('click', '.arrow-collapse', function(e) {\n      var $this = $(this);\n      if ( $this.closest('li').find('.collapse').hasClass('show') ) {\n        $this.removeClass('active');\n      } else {\n        $this.addClass('active');\n      }\n      e.preventDefault();  \n      \n    });\n\n\t\t$(window).resize(function() {\n\t\t\tvar $this = $(this),\n\t\t\t\tw = $this.width();\n\n\t\t\tif ( w > 768 ) {\n\t\t\t\tif ( $('body').hasClass('offcanvas-menu') ) {\n\t\t\t\t\t$('body').removeClass('offcanvas-menu');\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\n\t\t$('body').on('click', '.js-menu-toggle', function(e) {\n\t\t\tvar $this = $(this);\n\t\t\te.preventDefault();\n\n\t\t\tif ( $('body').hasClass('offcanvas-menu') ) {\n\t\t\t\t$('body').removeClass('offcanvas-menu');\n\t\t\t\t$this.removeClass('active');\n\t\t\t} else {\n\t\t\t\t$('body').addClass('offcanvas-menu');\n\t\t\t\t$this.addClass('active');\n\t\t\t}\n\t\t}) \n\n\t\t// click outisde offcanvas\n\t\t$(document).mouseup(function(e) {\n\t    var container = $(\".site-mobile-menu\");\n\t    if (!container.is(e.target) && container.has(e.target).length === 0) {\n\t      if ( $('body').hasClass('offcanvas-menu') ) {\n\t\t\t\t\t$('body').removeClass('offcanvas-menu');\n\t\t\t\t}\n\t    }\n\t\t});\n\t}; \n\tsiteMenuClone();\n\n\n\tvar sitePlusMinus = function() {\n\t\t$('.js-btn-minus').on('click', function(e){\n\t\t\te.preventDefault();\n\t\t\tif ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {\n\t\t\t\t$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);\n\t\t\t} else {\n\t\t\t\t$(this).closest('.input-group').find('.form-control').val(parseInt(0));\n\t\t\t}\n\t\t});\n\t\t$('.js-btn-plus').on('click', function(e){\n\t\t\te.preventDefault();\n\t\t\t$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);\n\t\t});\n\t};\n\t// sitePlusMinus();\n\n\n\tvar siteSliderRange = function() {\n    $( \"#slider-range\" ).slider({\n      range: true,\n      min: 10000,\n      max: 1000000,\n      values: [ 200000, 750000 ],\n      slide: function( event, ui ) {\n        $( \"#amount\" ).val( \"$\" + ui.values[ 0 ] + \" - $\" + ui.values[ 1 ] );\n      }\n    });\n    $( \"#amount\" ).val( \"$\" + $( \"#slider-range\" ).slider( \"values\", 0 ) +\n      \" - $\" + $( \"#slider-range\" ).slider( \"values\", 1 ) );\n\t};\n\tsiteSliderRange();\n\n\n\tvar siteMagnificPopup = function() {\n\t\t$('.image-popup').magnificPopup({\n\t    type: 'image',\n\t    closeOnContentClick: true,\n\t    closeBtnInside: false,\n\t    fixedContentPos: true,\n\t    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side\n\t     gallery: {\n\t      enabled: true,\n\t      navigateByImgClick: true,\n\t      preload: [0,1] // Will preload 0 - before current, and 1 after the current image\n\t    },\n\t    image: {\n\t      verticalFit: true\n\t    },\n\t    zoom: {\n\t      enabled: true,\n\t      duration: 300 // don't foget to change the duration also in CSS\n\t    }\n\t  });\n\n\t  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({\n\t    disableOn: 700,\n\t    type: 'iframe',\n\t    mainClass: 'mfp-fade',\n\t    removalDelay: 160,\n\t    preloader: false,\n\n\t    fixedContentPos: false\n\t  });\n\t};\n\tsiteMagnificPopup();\n\n\n\tvar siteCarousel = function () {\n\t\tif ( $('.nonloop-block-13').length > 0 ) {\n\t\t\t$('.nonloop-block-13').owlCarousel({\n\t\t    center: false,\n\t\t    items: 1,\n\t\t    loop: true,\n\t\t\t\tstagePadding: 0,\n\t\t\t\tautoplay: true,\n\t\t    margin: 20,\n\t\t    nav: false,\n\t\t    dots: true,\n\t\t\t\tnavText: ['<span class=\"icon-arrow_back\">', '<span class=\"icon-arrow_forward\">'],\n\t\t    responsive:{\n\t        600:{\n\t        \tmargin: 20,\n\t        \tstagePadding: 0,\n\t          items: 1\n\t        },\n\t        1000:{\n\t        \tmargin: 20,\n\t        \tstagePadding: 0,\n\t          items: 2\n\t        },\n\t        1200:{\n\t        \tmargin: 20,\n\t        \tstagePadding: 0,\n\t          items: 3\n\t        }\n\t\t    }\n\t\t\t});\n\t\t}\n\n\t\tif ( $('.slide-one-item').length > 0 ) {\n\t\t\t$('.slide-one-item').owlCarousel({\n\t\t    center: false,\n\t\t    items: 1,\n\t\t    loop: true,\n\t\t\t\tstagePadding: 0,\n\t\t    margin: 0,\n\t\t    autoplay: true,\n\t\t    pauseOnHover: false,\n\t\t    nav: true,\n\t\t    animateOut: 'fadeOut',\n\t\t    animateIn: 'fadeIn',\n\t\t    navText: ['<span class=\"icon-arrow_back\">', '<span class=\"icon-arrow_forward\">']\n\t\t  });\n\t  }\n\n\n\t  if ( $('.nonloop-block-4').length > 0 ) {\n\t\t  $('.nonloop-block-4').owlCarousel({\n\t\t    center: true,\n\t\t    items:1,\n\t\t    loop:false,\n\t\t    margin:10,\n\t\t    nav: true,\n\t\t\t\tnavText: ['<span class=\"icon-arrow_back\">', '<span class=\"icon-arrow_forward\">'],\n\t\t    responsive:{\n\t        600:{\n\t          items:1\n\t        }\n\t\t    }\n\t\t\t});\n\t\t}\n\n\t};\n\tsiteCarousel();\n\n\tvar siteStellar = function() {\n\t\t$(window).stellar({\n\t    responsive: false,\n\t    parallaxBackgrounds: true,\n\t    parallaxElements: true,\n\t    horizontalScrolling: false,\n\t    hideDistantElements: false,\n\t    scrollProperty: 'scroll'\n\t  });\n\t};\n\tsiteStellar();\n\n\tvar siteCountDown = function() {\n\n\t\tif ( $('#date-countdown').length > 0 ) {\n\t\t\t$('#date-countdown').countdown('2020/10/10', function(event) {\n\t\t\t  var $this = $(this).html(event.strftime(''\n\t\t\t    + '<span class=\"countdown-block\"><span class=\"label\">%w</span> weeks </span>'\n\t\t\t    + '<span class=\"countdown-block\"><span class=\"label\">%d</span> days </span>'\n\t\t\t    + '<span class=\"countdown-block\"><span class=\"label\">%H</span> hr </span>'\n\t\t\t    + '<span class=\"countdown-block\"><span class=\"label\">%M</span> min </span>'\n\t\t\t    + '<span class=\"countdown-block\"><span class=\"label\">%S</span> sec</span>'));\n\t\t\t});\n\t\t}\n\t\t\t\t\n\t};\n\tsiteCountDown();\n\n\tvar siteDatePicker = function() {\n\n\t\tif ( $('.datepicker').length > 0 ) {\n\t\t\t$('.datepicker').datepicker();\n\t\t}\n\n\t};\n\tsiteDatePicker();\n\n\t\n\n});\n\n\n//# sourceURL=webpack://agenziavalcalepio.bg.it/./src/assets/js/modules/homespace.js?");

/***/ }),

/***/ "./src/assets/js/modules/iubenda.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/iubenda.js ***!
  \******************************************/
/***/ (() => {

eval("(function(w, d) {\n  var loader = function() {\n    var s = d.createElement(\"script\"),\n    tag = d.getElementsByTagName(\"script\")[0];\n    s.src = \"https://cdn.iubenda.com/iubenda.js\";\n    tag.parentNode.insertBefore(s, tag);\n  };\n  if (w.addEventListener) {\n    w.addEventListener(\"load\", loader, false);\n  } else if (w.attachEvent) {\n    w.attachEvent(\"onload\", loader);\n  } else {\n    w.onload = loader;\n  }\n})(window, document);\n\n\n//# sourceURL=webpack://agenziavalcalepio.bg.it/./src/assets/js/modules/iubenda.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;