(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/blog-post.js":
/*!**************************************!*\
  !*** ./assets/js/theme/blog-post.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_blog_related_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f/blog-related-product */ "./assets/js/theme/f/blog-related-product.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BlogPost = function (_PageManager) {
    _inherits(BlogPost, _PageManager);

    function BlogPost() {
        _classCallCheck(this, BlogPost);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    BlogPost.prototype.onReady = function onReady() {
        if (this.context.relatedProduct) {
            Object(_f_blog_related_product__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context.relatedProduct);
        }
    };

    return BlogPost;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

/***/ "./assets/js/theme/f/blog-related-product.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/f/blog-related-product.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function (product) {
    var relatedProduct = product.split(':');

    function fetchProductById(rp) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(rp, { template: 'f/blog/blog-product-card' }, function (err, content) {
            if (err) {
                throw new Error(err);
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.relatedProducts').append(content);
        });
    }

    // ID: relatedProduct[1]
    for (var i = 1; i < relatedProduct.length; i++) {
        fetchProductById(relatedProduct[i]);
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.relatedProducts').show();
});

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.13.js.map