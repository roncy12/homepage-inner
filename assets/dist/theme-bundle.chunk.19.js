(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_image_hover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./f/image-hover */ "./assets/js/theme/f/image-hover.js");
/* harmony import */ var _f_size_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/size-preview */ "./assets/js/theme/f/size-preview.js");
/* harmony import */ var _f_swatch_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/swatch-preview */ "./assets/js/theme/f/swatch-preview.js");
/* harmony import */ var infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! infinite-scroll */ "./node_modules/infinite-scroll/js/index.js");
/* harmony import */ var infinite_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(infinite_scroll__WEBPACK_IMPORTED_MODULE_7__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Category = function (_CatalogPage) {
    _inherits(Category, _CatalogPage);

    function Category() {
        _classCallCheck(this, Category);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Category.prototype.onReady = function onReady() {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        // Load swatches onto product grid if enabled
        if (this.context.enableSwatches) {
            Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_6__["default"])();
        }

        if (this.context.enableSizes) {
            Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_5__["default"])();
        }

        // Start Infinite Scroll if enabled
        if (this.context.enableInfiniteScrolling && this.context.productCount < this.context.productTotal) {
            this.initInfiniteScroll();
        }
    };

    Category.prototype.initInfiniteScroll = function initInfiniteScroll(rebuild) {
        var _this2 = this;

        var infiniteScroll = new infinite_scroll__WEBPACK_IMPORTED_MODULE_7___default.a('.page-content', {
            path: '.pagination-link--next',
            append: '.productCategoryCompare',
            hideNav: '.pagination',
            scrollThreshold: 750,
            onInit: function onInit() {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productCount').hide();
            }
        });

        infiniteScroll.on('append', function () {
            // Load swatches onto filtered product grid if enabled
            if (_this2.context.enableSwatches) {
                Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_6__["default"])();
            }

            if (_this2.context.enableSizes) {
                Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_5__["default"])();
            }

            if (_this2.context.enableImageHoverSwitcher) {
                Object(_f_image_hover__WEBPACK_IMPORTED_MODULE_4__["default"])();
            }
        });

        if (rebuild) {
            infiniteScroll.destroy();
        }
    };

    Category.prototype.initFacetedScroll = function initFacetedScroll() {
        var $pagination = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.pagination-link--next');

        this.initInfiniteScroll('rebuild');

        if ($pagination.length) {
            this.initInfiniteScroll();
        }
    };

    Category.prototype.initFacetedSearch = function initFacetedSearch() {
        var _this3 = this;

        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var productsPerPage = this.context.categoryProductsPerPage;
        var requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage
                    }
                }
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar'
            },
            showMore: 'category/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            // Start Infinite Scroll if enabled
            if (_this3.context.enableInfiniteScrolling && _this3.context.productCount < _this3.context.productTotal) {
                _this3.initFacetedScroll();
            }

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);

            // Load swatches onto filtered product grid if enabled
            if (_this3.context.enableSwatches) {
                Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_6__["default"])();
            }

            if (_this3.context.enableSizes) {
                Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_5__["default"])();
            }

            if (_this3.context.enableImageHoverSwitcher) {
                Object(_f_image_hover__WEBPACK_IMPORTED_MODULE_4__["default"])();
            }
        });
    };

    return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.19.js.map