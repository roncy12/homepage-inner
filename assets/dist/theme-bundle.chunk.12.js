(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/f/size-preview.js":
/*!*******************************************!*\
  !*** ./assets/js/theme/f/size-preview.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var $src = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-sizes');

    function showSizePreview() {
        var _this = this;

        var productId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-id');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'f/swatches/product-sizes' }, function (err, resp) {
            var sizeContent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseHTML(resp);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).html(sizeContent);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation('equalizer', 'reflow');
        });
    }

    $src.each(showSizePreview);
});

/***/ }),

/***/ "./assets/js/theme/f/swatch-preview.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/swatch-preview.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var $src = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-swatches');

    function showSwatchPreview() {
        var _this = this;

        var productId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-id');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'f/swatches/product-swatches' }, function (err, resp) {
            var swatchContent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseHTML(resp);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).html(swatchContent);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation('equalizer', 'reflow');
        });
    }

    $src.each(showSwatchPreview);
});

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_swatch_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f/swatch-preview */ "./assets/js/theme/f/swatch-preview.js");
/* harmony import */ var _f_size_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/size-preview */ "./assets/js/theme/f/size-preview.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_PageManager) {
    _inherits(Home, _PageManager);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Home.prototype.onReady = function onReady() {
        var _this2 = this;

        // Load swatches onto product grid if enabled
        window.onload = function () {
            if (_this2.context.enableSwatches) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_1__["default"])();
            }

            if (_this2.context.enableSizes) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_2__["default"])();
            }
        };
    };

    return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.12.js.map