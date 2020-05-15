function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-page-second-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/second-page/second-page.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/second-page/second-page.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecondPageSecondPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>secondPage</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/second-page/second-page-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/second-page/second-page-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SecondPagePageRoutingModule */

  /***/
  function srcAppSecondPageSecondPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondPagePageRoutingModule", function () {
      return SecondPagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _second_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./second-page.page */
    "./src/app/second-page/second-page.page.ts");

    var routes = [{
      path: '',
      component: _second_page_page__WEBPACK_IMPORTED_MODULE_3__["SecondPagePage"]
    }];

    var SecondPagePageRoutingModule = function SecondPagePageRoutingModule() {
      _classCallCheck(this, SecondPagePageRoutingModule);
    };

    SecondPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SecondPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/second-page/second-page.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/second-page/second-page.module.ts ***!
    \***************************************************/

  /*! exports provided: SecondPagePageModule */

  /***/
  function srcAppSecondPageSecondPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondPagePageModule", function () {
      return SecondPagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _second_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./second-page-routing.module */
    "./src/app/second-page/second-page-routing.module.ts");
    /* harmony import */


    var _second_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./second-page.page */
    "./src/app/second-page/second-page.page.ts");

    var SecondPagePageModule = function SecondPagePageModule() {
      _classCallCheck(this, SecondPagePageModule);
    };

    SecondPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _second_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondPagePageRoutingModule"]],
      declarations: [_second_page_page__WEBPACK_IMPORTED_MODULE_6__["SecondPagePage"]]
    })], SecondPagePageModule);
    /***/
  },

  /***/
  "./src/app/second-page/second-page.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/second-page/second-page.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecondPageSecondPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/second-page/second-page.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/second-page/second-page.page.ts ***!
    \*************************************************/

  /*! exports provided: SecondPagePage */

  /***/
  function srcAppSecondPageSecondPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondPagePage", function () {
      return SecondPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SecondPagePage = /*#__PURE__*/function () {
      function SecondPagePage() {
        _classCallCheck(this, SecondPagePage);
      }

      _createClass(SecondPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondPagePage;
    }();

    SecondPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-second-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./second-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/second-page/second-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./second-page.page.scss */
      "./src/app/second-page/second-page.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SecondPagePage);
    /***/
  }
}]);
//# sourceMappingURL=second-page-second-page-module-es5.js.map