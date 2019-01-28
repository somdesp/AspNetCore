(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-blank-blank-module"],{

/***/ "./ClienteApp/app/theme/pages/default/blank/blank.component.html":
/*!***********************************************************************!*\
  !*** ./ClienteApp/app/theme/pages/default/blank/blank.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Skeleton Page\r\n            </h3>\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item m-nav__item--home\">\r\n                    <a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n                        <i class=\"m-nav__link-icon la la-home\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div>\r\n        Skeleton page\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClienteApp/app/theme/pages/default/blank/blank.component.ts":
/*!*********************************************************************!*\
  !*** ./ClienteApp/app/theme/pages/default/blank/blank.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./ClienteApp/app/theme/pages/default/blank/blank.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./ClienteApp/app/theme/pages/default/blank/blank.module.ts":
/*!******************************************************************!*\
  !*** ./ClienteApp/app/theme/pages/default/blank/blank.module.ts ***!
  \******************************************************************/
/*! exports provided: BlankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankModule", function() { return BlankModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./ClienteApp/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../default.component */ "./ClienteApp/app/theme/pages/default/default.component.ts");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank.component */ "./ClienteApp/app/theme/pages/default/blank/blank.component.ts");







var routes = [
    {
        'path': '',
        'component': _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _blank_component__WEBPACK_IMPORTED_MODULE_6__["BlankComponent"],
            },
        ],
    },
];
var BlankModule = /** @class */ (function () {
    function BlankModule() {
    }
    BlankModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ], declarations: [
                _blank_component__WEBPACK_IMPORTED_MODULE_6__["BlankComponent"],
            ],
        })
    ], BlankModule);
    return BlankModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-blank-blank-module.js.map