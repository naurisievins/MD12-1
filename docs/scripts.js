/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");

/***/ }),

/***/ "./src/AdvancedSlideshow.ts":
/*!**********************************!*\
  !*** ./src/AdvancedSlideshow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AdvancedSlideshow)\n/* harmony export */ });\n/* harmony import */ var _SimpleSlideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleSlideshow */ \"./src/SimpleSlideshow.ts\");\n\r\nclass AdvancedSlideshow extends _SimpleSlideshow__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(selector) {\r\n        super(selector);\r\n        this.thumbContainer = this.rootElement.querySelector('.js-thumb-container');\r\n        this.createThumbs();\r\n        this.addThumbImages();\r\n    }\r\n    createThumbs() {\r\n        for (let i = 0; i < this.imageSrc.length; i++) {\r\n            this.thumbImage = document.createElement('div');\r\n            this.thumbImage.classList.add('thumb_container__image');\r\n            this.thumbContainer.append(this.thumbImage);\r\n        }\r\n    }\r\n    addThumbImages() {\r\n        this.allThumbImages = this.rootElement.querySelectorAll('.thumb_container__image');\r\n        this.allThumbImages.forEach((image, index) => {\r\n            image.style.backgroundImage = `url(${this.imageSrc[index]})`;\r\n            image.addEventListener('click', () => { this.thumbClickHandler(index); });\r\n        });\r\n    }\r\n    thumbClickHandler(index) {\r\n        this.image.style.backgroundImage = `url(${this.imageSrc[index]})`;\r\n        this.currentImage = index;\r\n        this.markCircle();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/AdvancedSlideshow.ts?");

/***/ }),

/***/ "./src/BasicSlideshow.ts":
/*!*******************************!*\
  !*** ./src/BasicSlideshow.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicSlideshow)\n/* harmony export */ });\nclass BasicSlideshow {\r\n    constructor(selector) {\r\n        this.currentImage = 0;\r\n        this.imageSrc = [\r\n            '/assets/images/sloth1.webp',\r\n            '/assets/images/sloth2.webp',\r\n            '/assets/images/sloth3.webp',\r\n            '/assets/images/sloth4.webp',\r\n            '/assets/images/sloth5.webp',\r\n        ];\r\n        this.rootElement = document.querySelector(selector);\r\n        this.leftArrow = this.rootElement.querySelector('.js-left-arrow');\r\n        this.rightArrow = this.rootElement.querySelector('.js-right-arrow');\r\n        this.image = this.rootElement.querySelector('.js-image');\r\n        this.addListeners();\r\n    }\r\n    addListeners() {\r\n        this.leftArrow.addEventListener('click', () => { this.slideLeft(); });\r\n        this.rightArrow.addEventListener('click', () => { this.slideRight(); });\r\n    }\r\n    slideLeft() {\r\n        if (this.currentImage === 0) {\r\n            this.currentImage = this.imageSrc.length;\r\n        }\r\n        this.image.style.backgroundImage = `url(${this.imageSrc[this.currentImage - 1]})`;\r\n        this.currentImage -= 1;\r\n    }\r\n    slideRight() {\r\n        if (this.currentImage === this.imageSrc.length - 1) {\r\n            this.currentImage = -1;\r\n        }\r\n        this.image.style.backgroundImage = `url(${this.imageSrc[this.currentImage + 1]})`;\r\n        this.currentImage += 1;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/BasicSlideshow.ts?");

/***/ }),

/***/ "./src/ProSlideshow.ts":
/*!*****************************!*\
  !*** ./src/ProSlideshow.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProSlideshow)\n/* harmony export */ });\n/* harmony import */ var _AdvancedSlideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedSlideshow */ \"./src/AdvancedSlideshow.ts\");\n\r\nclass ProSlideshow extends _AdvancedSlideshow__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(selector) {\r\n        super(selector);\r\n        this.slideInterval = 10000; // in miliseconds\r\n        this.fullscreenButton = this.rootElement.querySelector('.js-full-screen');\r\n        this.imageAutoSlide();\r\n        this.addProListeners();\r\n    }\r\n    addProListeners() {\r\n        this.rootElement.addEventListener('click', () => { this.resetIntervalOnClick(); });\r\n        this.fullscreenButton.addEventListener('click', () => { this.openFullscreen(); });\r\n        document.addEventListener(\"fullscreenchange\", () => { this.handleFullscreen(); });\r\n    }\r\n    imageAutoSlide() {\r\n        this.toClearInterval = setInterval(() => {\r\n            this.slideRight();\r\n            this.markCircle();\r\n        }, this.slideInterval);\r\n    }\r\n    resetIntervalOnClick() {\r\n        clearInterval(this.toClearInterval);\r\n        this.imageAutoSlide();\r\n    }\r\n    openFullscreen() {\r\n        this.image.requestFullscreen();\r\n    }\r\n    handleFullscreen() {\r\n        if (document.fullscreenElement) {\r\n            this.fullscreenButton.style.display = 'none';\r\n            console.log('is full');\r\n        }\r\n        else {\r\n            this.fullscreenButton.style.display = 'block';\r\n            console.log('exited full');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/ProSlideshow.ts?");

/***/ }),

/***/ "./src/SimpleSlideshow.ts":
/*!********************************!*\
  !*** ./src/SimpleSlideshow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpleSlideshow)\n/* harmony export */ });\n/* harmony import */ var _BasicSlideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSlideshow */ \"./src/BasicSlideshow.ts\");\n\r\nclass SimpleSlideshow extends _BasicSlideshow__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(selector) {\r\n        super(selector);\r\n        this.circlesContainer = this.rootElement.querySelector(\".js-circles\");\r\n        this.createCircles();\r\n        this.markCircle();\r\n        this.addSimpleListeners();\r\n    }\r\n    addSimpleListeners() {\r\n        this.leftArrow.addEventListener('click', () => { this.markCircle(); });\r\n        this.rightArrow.addEventListener('click', () => { this.markCircle(); });\r\n    }\r\n    createCircles() {\r\n        for (let i = 0; i < this.imageSrc.length; i++) {\r\n            this.circle = document.createElement('div');\r\n            this.circle.classList.add('circle');\r\n            this.circlesContainer.appendChild(this.circle);\r\n        }\r\n    }\r\n    markCircle() {\r\n        this.circleNodelist = this.rootElement.querySelectorAll('.circle');\r\n        this.circleNodelist.forEach(circle => {\r\n            circle.classList.remove('circle--full');\r\n        });\r\n        this.circleNodelist[this.currentImage].classList.add('circle--full');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/SimpleSlideshow.ts?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SimpleSlideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleSlideshow */ \"./src/SimpleSlideshow.ts\");\n/* harmony import */ var _BasicSlideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicSlideshow */ \"./src/BasicSlideshow.ts\");\n/* harmony import */ var _AdvancedSlideshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdvancedSlideshow */ \"./src/AdvancedSlideshow.ts\");\n/* harmony import */ var _ProSlideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProSlideshow */ \"./src/ProSlideshow.ts\");\n\r\n\r\n\r\n\r\nconst slideshow1 = new _BasicSlideshow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.js-basic-slideshow');\r\nconst slideshow2 = new _SimpleSlideshow__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.js-simple-slideshow');\r\nconst slideshow3 = new _AdvancedSlideshow__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.js-advanced-slideshow');\r\nconst slideshow4 = new _ProSlideshow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.js-pro-slideshow');\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles.scss");
/******/ 	
/******/ })()
;