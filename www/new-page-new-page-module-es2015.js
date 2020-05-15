(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-page-new-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-page/new-page.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-page/new-page.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>newPage</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-button expand=\"block\" routerLink=\"/second-page\" routerDirection=\"forward\">\n    Forward\n  </ion-button>\n\n  <ion-button expand=\"block\" routerLink=\"/second-page\" routerDirection=\"root\">\n    Root\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/new-page/new-page-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-page/new-page-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPagePageRoutingModule", function() { return NewPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-page.page */ "./src/app/new-page/new-page.page.ts");




const routes = [
    {
        path: '',
        component: _new_page_page__WEBPACK_IMPORTED_MODULE_3__["NewPagePage"]
    }
];
let NewPagePageRoutingModule = class NewPagePageRoutingModule {
};
NewPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPagePageRoutingModule);



/***/ }),

/***/ "./src/app/new-page/new-page.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-page/new-page.module.ts ***!
  \*********************************************/
/*! exports provided: NewPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPagePageModule", function() { return NewPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-page-routing.module */ "./src/app/new-page/new-page-routing.module.ts");
/* harmony import */ var _new_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-page.page */ "./src/app/new-page/new-page.page.ts");







let NewPagePageModule = class NewPagePageModule {
};
NewPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPagePageRoutingModule"]
        ],
        declarations: [_new_page_page__WEBPACK_IMPORTED_MODULE_6__["NewPagePage"]]
    })
], NewPagePageModule);



/***/ }),

/***/ "./src/app/new-page/new-page.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-page/new-page.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wYWdlL25ldy1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/new-page/new-page.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-page/new-page.page.ts ***!
  \*******************************************/
/*! exports provided: NewPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPagePage", function() { return NewPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewPagePage = class NewPagePage {
    constructor() {
        console.log('constructor');
    }
    ngOnInit() {
        console.log('ngOnInit');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }
};
NewPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-page/new-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-page.page.scss */ "./src/app/new-page/new-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NewPagePage);



/***/ })

}]);
//# sourceMappingURL=new-page-new-page-module-es2015.js.map