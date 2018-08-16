(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _summary_bar_summary_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary-bar/summary-bar.component */ "./src/app/Components/dashboard/summary-bar/summary-bar.component.ts");
/* harmony import */ var _date_bar_date_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-bar/date-bar.component */ "./src/app/Components/dashboard/date-bar/date-bar.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _schedular_schedular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedular/schedular.component */ "./src/app/Components/dashboard/schedular/schedular.component.ts");
/* harmony import */ var _schedular_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedular/header/header.component */ "./src/app/Components/dashboard/schedular/header/header.component.ts");
/* harmony import */ var _schedular_body_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedular/body/body.component */ "./src/app/Components/dashboard/schedular/body/body.component.ts");
/* harmony import */ var _schedular_book_status_book_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedular/book-status/book-status.component */ "./src/app/Components/dashboard/schedular/book-status/book-status.component.ts");
/* harmony import */ var _schedular_directives_card_hover_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schedular/directives/card-hover.directive */ "./src/app/Components/dashboard/schedular/directives/card-hover.directive.ts");
/* harmony import */ var _schedular_room_status_room_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schedular/room-status/room-status.component */ "./src/app/Components/dashboard/schedular/room-status/room-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            // tslint:disable-next-line:max-line-length
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _summary_bar_summary_bar_component__WEBPACK_IMPORTED_MODULE_4__["SummaryBarComponent"], _date_bar_date_bar_component__WEBPACK_IMPORTED_MODULE_5__["DateBarComponent"], _schedular_schedular_component__WEBPACK_IMPORTED_MODULE_7__["SchedularComponent"], _schedular_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _schedular_body_body_component__WEBPACK_IMPORTED_MODULE_9__["BodyComponent"], _schedular_book_status_book_status_component__WEBPACK_IMPORTED_MODULE_10__["BookStatusComponent"], _schedular_directives_card_hover_directive__WEBPACK_IMPORTED_MODULE_11__["CardHoverDirective"], _schedular_room_status_room_status_component__WEBPACK_IMPORTED_MODULE_12__["RoomStatusComponent"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _summary_bar_summary_bar_component__WEBPACK_IMPORTED_MODULE_4__["SummaryBarComponent"], _date_bar_date_bar_component__WEBPACK_IMPORTED_MODULE_5__["DateBarComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-summary-bar (onDateChanged)=\"schedular.onDateChanged($event)\"></app-summary-bar>\n<app-schedular  #schedular></app-schedular>"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Components/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Components/dashboard/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/date-bar/date-bar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/dashboard/date-bar/date-bar.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-bar{\r\n    height: 40px;\r\n    background-color:#49AFD9;\r\n    padding: 10px;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/Components/dashboard/date-bar/date-bar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/dashboard/date-bar/date-bar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-bar\">\n  <div class=\"row\">\n    <div class=\"col-sm\">Bar</div>\n    <div class=\"col-sm\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/dashboard/date-bar/date-bar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/dashboard/date-bar/date-bar.component.ts ***!
  \*********************************************************************/
/*! exports provided: DateBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateBarComponent", function() { return DateBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateBarComponent = /** @class */ (function () {
    function DateBarComponent() {
    }
    DateBarComponent.prototype.ngOnInit = function () {
    };
    DateBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-date-bar',
            template: __webpack_require__(/*! ./date-bar.component.html */ "./src/app/Components/dashboard/date-bar/date-bar.component.html"),
            styles: [__webpack_require__(/*! ./date-bar.component.css */ "./src/app/Components/dashboard/date-bar/date-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DateBarComponent);
    return DateBarComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/body/body.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/body/body.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-dt{\r\n   \r\n    height: 30px;\r\n}\r\n\r\n.red{\r\n    background-color:#CD3517;\r\n}\r\n\r\n.green{\r\n    background-color:#1D5100;\r\n}\r\n\r\n.x40{\r\n    width: 40px;\r\n}\r\n\r\n.x80{\r\n    width: 80px;\r\n}\r\n\r\n.x120{\r\n    width: 120px;\r\n}\r\n\r\ntbody{\r\n    border:solid 1px #0065AB!important;\r\n}\r\n\r\ntd{\r\n    border:solid 1px #0065AB!important;\r\n    width:45px;\r\n}"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/body/body.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/body/body.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<tbody>\n    <tr *ngFor=\"let room_label of room_labels\">\n      \n      <td  *ngFor=\"let label of room_label\" > \n\n        <div class=\"x80\">\n          <app-book-status [label]=\"label\"></app-book-status>\n        </div>\n      </td>\n   \n    </tr>\n  </tbody>"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/body/body.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/body/body.component.ts ***!
  \***********************************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.labels = [];
        this.room_labels = [];
        this.rooms = [
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 1', short_name: 'RM1',
                details: [],
                bookings: [
                    {
                        transaction_type: 1, from: '2018-08-01', to: '2018-08-05', oc: 'Fred'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 2', short_name: 'RM2', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-03', to: '2018-08-04', oc: 'G2'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                // tslint:disable-next-line:max-line-length
                name: 'Room 3', short_name: 'RM3', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-03', to: '2018-08-03', oc: 'Samsung'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 4', short_name: 'RM4', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-05', to: '2018-08-05', oc: 'KC'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                // tslint:disable-next-line:max-line-length
                name: 'Room 5', short_name: 'RM5', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-02', to: '2018-08-04', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 6', short_name: 'RM6', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-01', to: '2018-08-01', oc: 'Willi'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 7', short_name: 'RM7', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-02', to: '2018-08-03', oc: 'Dada'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 8', short_name: 'RM8', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-02', to: '2018-08-03', oc: 'Yemi'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 9', short_name: 'RM9', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-05', to: '2018-08-05', oc: 'Kingson'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-08-26', to: '2018-08-27', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-08-28', to: '2018-08-30', oc: 'Unknown'
                    }
                ]
            },
            // tslint:disable-next-line:max-line-length
            {
                name: 'Room 10', short_name: 'RM10', bookings: [
                    {
                        transaction_type: 1, from: '2018-08-03', to: '2018-08-03', oc: 'Benson'
                    },
                    {
                        transaction_type: 1, from: '2018-08-07', to: '2018-08-08', oc: 'Ben'
                    },
                    {
                        transaction_type: 1, from: '2018-08-12', to: '2018-08-15', oc: 'Mr King'
                    },
                    {
                        transaction_type: 1, from: '2018-08-20', to: '2018-08-20', oc: 'Allen'
                    },
                    {
                        transaction_type: 1, from: '2018-08-22', to: '2018-08-25', oc: 'Greg'
                    },
                    {
                        transaction_type: 1, from: '2018-09-04', to: '2018-09-8', oc: 'Prince'
                    },
                    {
                        transaction_type: 1, from: '2018-09-18', to: '2018-10-30', oc: 'Unknown'
                    }
                ]
            }
        ];
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.rowIndex = 0;
        this.DAYS = 30;
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.date = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.room_labels = [];
        this.generateBody();
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.reSetDate = function (date) {
        this.date = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date);
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date);
        this.room_labels = [];
        this.generateBody();
    };
    BodyComponent.prototype.generateBody = function () {
        var _this = this;
        this.lengthOfMonth = this.date.lengthOfMonth();
        this.totalNeededDays = this.DAYS;
        this.startingDay = this.date.dayOfMonth();
        this.endingDay = this.startingDay + this.totalNeededDays;
        this.rooms.forEach(function (room) {
            _this.room_labels[_this.rowIndex] = new Array();
            _this.totalNeededDays = _this.DAYS;
            var rm = room.name + "-5-room";
            _this.room_labels[_this.rowIndex].push(rm);
            if (_this.endingDay > _this.lengthOfMonth) {
                var newEndingDay = _this.endingDay - _this.lengthOfMonth;
                for (var i = _this.startingDay; i <= _this.lengthOfMonth; i++) {
                    var parseDate = _this.jodalLib.withDayOfMonth(i);
                    var year = _this.jodalLib.year();
                    var month = _this.jodalLib.monthValue();
                    var monthName = _this.jodalLib.month();
                    var fulldate = year + "-" + month + "-" + i;
                    _this.checkMultipleBookings(parseDate.toString(), room.bookings, _this.room_labels, _this.rowIndex);
                    // `${monthName.toString().substr(0, 3)}  ${i}  ${parseDate.dayOfWeek().toString().substring(0, 3)}`;
                    // const rr = `${monthName.toString().substr(0, 3)}  ${i}  ${parseDate.dayOfWeek().toString().substring(0, 3)}`;
                    // console.log(rr);
                    _this.totalNeededDays = _this.totalNeededDays - 1;
                }
                var localJodaLib = _this.jodalLib.plusMonths(1);
                for (var i = 1; i <= _this.totalNeededDays; i++) {
                    var parseDate = localJodaLib.withDayOfMonth(i);
                    var year = localJodaLib.year();
                    var month = localJodaLib.monthValue();
                    var monthName = localJodaLib.month();
                    var fulldate = year + "-" + month + "-" + i;
                    _this.checkMultipleBookings(parseDate.toString(), room.bookings, _this.room_labels, _this.rowIndex);
                    // room.bookings.forEach(booking => {
                    //   const strDate = this.checkBooking(booking.to, booking.from, parseDate.toString(), booking);
                    //   this.room_labels[this.rowIndex].push(strDate);
                    // });
                }
            }
            else {
                var localJodaLib = _this.jodalLib.plusMonths(0);
                for (var i = 1; i <= _this.totalNeededDays; i++) {
                    var parseDate = localJodaLib.withDayOfMonth(i);
                    var year = localJodaLib.year();
                    var month = localJodaLib.monthValue();
                    var monthName = localJodaLib.month();
                    var fulldate = year + "-" + month + "-" + i;
                    _this.checkMultipleBookings(parseDate.toString(), room.bookings, _this.room_labels, _this.rowIndex);
                    // const strDate = this.checkBooking(room.to, room.from, parseDate.toString(), room);
                    // this.room_labels[this.rowIndex].push(strDate);
                    // room.bookings.forEach(booking => {
                    //   const strDate = this.checkBooking(booking.to, booking.from, parseDate.toString(), booking);
                    //   this.room_labels[this.rowIndex].push(strDate);
                    // });
                }
            }
            _this.rowIndex += 1;
        });
    };
    BodyComponent.prototype.checkMultipleBookings = function (date3, bookings, room_labels, rowIndex) {
        var seen = false;
        bookings.forEach(function (booking) {
            var d1 = new Date(booking.from);
            var d2 = new Date(booking.to);
            var timeDiff = Math.abs(d2.getTime() - d1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            var currentDate = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(booking.from);
            for (var i = 0; i <= diffDays; i++) {
                var dt = currentDate.plusDays(i);
                var d33 = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date3).minusMonths(0);
                if (d33.equals(dt)) {
                    var temp = booking.oc + "-" + booking.transaction_type + "-booking";
                    room_labels[rowIndex].push(temp);
                    seen = true;
                    break;
                }
            }
        });
        if (seen) {
            return;
        }
        else {
            room_labels[rowIndex].push('');
            return;
        }
    };
    BodyComponent.prototype.checkBooking = function (date2, date1, date3, booking) {
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        var timeDiff = Math.abs(d2.getTime() - d1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        var currentDate = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date1);
        for (var i = 0; i <= diffDays; i++) {
            var dt = currentDate.plusDays(i);
            var d33 = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date3).minusMonths(0);
            if (d33.equals(dt)) {
                return booking.oc + "-" + booking.transaction_type + "-" + booking.wing + "-" + booking.floor;
            }
        }
        return '';
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/Components/dashboard/schedular/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/Components/dashboard/schedular/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/book-status/book-status.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/book-status/book-status.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.red{\r\n    background-color: #C92100;\r\n    color:white;\r\n}\r\n\r\n.blue{\r\n    background-color:#25333D;\r\n    color: white;\r\n}\r\n\r\n.green{\r\n    background-color: #318700;\r\n    color:white;\r\n}\r\n\r\n.comp{\r\n    width: 100px;\r\n    height: 40px;\r\n    padding-top: 15px;\r\n    margin-left:-10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.m-body{\r\n    color: #0065AB!important;\r\n    \r\n}\r\n\r\n.m-title{\r\n\r\n    background-color:#C1CDD4;\r\n    padding: 10px;\r\n}\r\n\r\n.room-details{\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n}\r\n\r\n.pbar{\r\n    background-color:#25333D;\r\n    margin-top:10px;\r\n    height: 40px;\r\n    text-align: center;\r\n    color:white;\r\n    margin-left: 5px;\r\n    font-size: 17px;\r\n    padding-top:10px;\r\n}\r\n\r\n.r-menu{\r\n    height: 40px;\r\n    background: #798893;\r\n    padding-top: 12px;\r\n    color:white;\r\n    margin-bottom: 2px; \r\n    cursor: pointer;   \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/book-status/book-status.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/book-status/book-status.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comp \" #comp (click)=\"open()\"> {{occupantName}}</div>\n\n<clr-modal [(clrModalOpen)]=\"isBookingMenu\" [clrModalSize]=\"'sm'\">\n\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12 r-menu\" (click)=\"isBookingMenu = false\">User Details </div>\n      <div class=\"col-md-12 r-menu\" (click)=\"isBookingMenu = false\">Edit  </div>\n    </div>\n\n\n  </div>\n\n</clr-modal>\n\n<clr-modal [(clrModalOpen)]=\"isEmptyMenu\" [clrModalSize]=\"'sm'\" >\n\n    <div class=\"modal-body\">\n  \n      <div class=\"row\">\n        <div class=\"col-md-12 r-menu\" (click)=\"isEmptyMenu = false\">Book</div>\n        <div class=\"col-md-12 r-menu\" (click)=\"isEmptyMenu = false\">Checkin </div>\n        <div class=\"col-md-12 r-menu\" (click)=\"isEmptyMenu = false\">Reserve </div>\n      </div>\n  \n  \n    </div>\n  \n  </clr-modal>\n\n\n\n<clr-modal [(clrModalOpen)]=\"isRoom\" [clrModalSize]=\"'xl'\">\n  <h6 class=\"modal-title m-title\">Room Details</h6>\n  <div class=\"modal-body m-body\">\n\n    <div class=\"row room-details\">\n      <div class=\"col-md-4\">\n        <b>Room Type:</b> Standard</div>\n      <div class=\"col-md-4\">\n        <b>Floor:</b> Floor 50</div>\n      <div class=\"col-md-4\">\n        <b>Room Owner:</b> Fred Amata</div>\n    </div>\n\n    <div class=\"row room-details\">\n      <div class=\"col-md-4\">\n        <b>Room Extension:</b> 450</div>\n      <div class=\"col-md-4\">\n        <b>Data Extension:</b> 230</div>\n      <div class=\"col-md-4\">\n        <b>Power Code:</b> 778</div>\n    </div>\n\n\n    <div class=\"row  \">\n      <div class=\"col-md-12 pbar\">Room Images</div>\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md\">\n            <a class=\"card clickable\">\n              <div class=\"card-img\">\n                <img src=\"assets/images/h1.png\" style=\"width:250px;\">\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md\">\n            <a class=\"card clickable\">\n              <div class=\"card-img\">\n                <img src=\"assets/images/h2.png\" style=\"width:250px;\">\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md\">\n            <a class=\"card clickable\">\n              <div class=\"card-img\">\n                <img src=\"assets/images/h3.png\" style=\"width:250px;\">\n              </div>\n            </a>\n          </div>\n          <div class=\"col-md\">\n            <a class=\"card clickable\">\n              <div class=\"card-img\">\n                <img src=\"assets/images/h4.png\" style=\"width:250px;\">\n              </div>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row  \">\n      <div class=\"col-md-12 pbar\">Amenities</div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Vending\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Gym\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Recreation\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Swimming Pool\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Parking Lot\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Pool Bar\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Kichenette\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Television\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Laptop & Internet\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Iron\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Vending\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"alert alert-success alert-sm\">\n          <div class=\"alert-items\">\n            <div class=\"alert-item static\">\n              <span class=\"alert-text\">\n                Vending\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n  <div class=\"modal-footer\">\n\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"isRoom = false\">Close</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/book-status/book-status.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/book-status/book-status.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BookStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStatusComponent", function() { return BookStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookStatusComponent = /** @class */ (function () {
    function BookStatusComponent(el) {
        this.el = el;
        this.label = '';
        this.bgColor = '';
        this.occupantName = '';
        this.transactionType = '';
        this.isRoom = false;
        this.isBookingMenu = false;
        this.isEmptyMenu = false;
        this.componentType = '';
    }
    BookStatusComponent.prototype.ngOnInit = function () {
        if (this.label !== '' && this.label.length > 0) {
            var list = this.label.split('-');
            this.occupantName = list[0];
            this.transactionType = list[1];
            this.componentType = list[2];
            if (this.transactionType === '0') {
                this.comp.nativeElement.classList.add('red');
            }
            if (this.transactionType === '1') {
                this.comp.nativeElement.classList.add('blue');
            }
            if (this.transactionType === '2') {
                this.comp.nativeElement.classList.add('green');
            }
        }
    };
    BookStatusComponent.prototype.open = function () {
        console.log(this.componentType);
        if (this.componentType === 'room') {
            this.isRoom = true;
        }
        if (this.componentType === 'booking') {
            this.isBookingMenu = true;
        }
        if (this.componentType === '') {
            this.isEmptyMenu = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('comp', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BookStatusComponent.prototype, "comp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookStatusComponent.prototype, "label", void 0);
    BookStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-status',
            template: __webpack_require__(/*! ./book-status.component.html */ "./src/app/Components/dashboard/schedular/book-status/book-status.component.html"),
            styles: [__webpack_require__(/*! ./book-status.component.css */ "./src/app/Components/dashboard/schedular/book-status/book-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BookStatusComponent);
    return BookStatusComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/directives/card-hover.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/directives/card-hover.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: CardHoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHoverDirective", function() { return CardHoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardHoverDirective = /** @class */ (function () {
    function CardHoverDirective(el) {
        this.el = el;
    }
    CardHoverDirective.prototype.ngOnInit = function () {
        this.card = this.el.nativeElement.querySelector('.comp');
        //console.log(this.card);
    };
    CardHoverDirective.prototype.onMouseOver = function () {
        this.card.style.boxShadow = '2px 2px 1px #999';
        this.card.style.top = '-2px';
    };
    CardHoverDirective.prototype.onMouseOut = function () {
        this.card.style.boxShadow = '';
        this.card.style.top = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardHoverDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardHoverDirective.prototype, "onMouseOut", null);
    CardHoverDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCardHover]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CardHoverDirective);
    return CardHoverDirective;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/header/header.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/header/header.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\r\n  background-color: #C1CDD4;\r\n  border: solid 1px #798893;\r\n}\r\n\r\nth {\r\n  font-size: 10px;\r\n  background-color: #C1CDD4;\r\n  border: solid 1px #798893;\r\n  color: #0065AB;\r\n}\r\n\r\n.x40 {\r\n  width: 40px;\r\n}\r\n\r\n.x80 {\r\n  width: 80px;\r\n}\r\n\r\n.x90 {\r\n  width: 90px;\r\n}\r\n\r\n.x120 {\r\n  width: 120px;\r\n}\r\n\r\n.x50 {\r\n  width: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<thead>\n  <tr>\n    \n\n    <th *ngFor=\"let label of labels\"> {{label}}\n      <div class=\"x80\"></div>\n\n    </th>\n \n  </tr>\n</thead>"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/header/header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.labels = [];
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.DAYS = 30;
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.date = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
        this.labels = [];
        this.generateHeader();
    }
    HeaderComponent.prototype.reSetDate = function (date) {
        this.jodalLib = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date);
        this.date = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].parse(date);
        this.labels = [];
        this.generateHeader();
    };
    HeaderComponent.prototype.generateHeader = function () {
        this.labels.push('Rooms');
        this.lengthOfMonth = this.date.lengthOfMonth();
        this.totalNeededDays = this.DAYS;
        this.startingDay = this.date.dayOfMonth();
        this.endingDay = this.startingDay + this.totalNeededDays;
        if (this.endingDay > this.lengthOfMonth) {
            var newEndingDay = this.endingDay - this.lengthOfMonth;
            for (var i = this.startingDay; i <= this.lengthOfMonth; i++) {
                var year = this.jodalLib.year();
                var month = this.jodalLib.monthValue();
                var monthName = this.jodalLib.month();
                var fulldate = year + "-" + month + "-" + i;
                var parseDate = this.jodalLib.withDayOfMonth(i);
                var strDate = monthName.toString().substr(0, 3) + "  " + i + "  " + parseDate.dayOfWeek().toString().substring(0, 3);
                this.labels.push(strDate);
                this.totalNeededDays = this.totalNeededDays - 1;
            }
            var localJodaLib = this.jodalLib.plusMonths(1);
            for (var i = 1; i <= this.totalNeededDays; i++) {
                var year = localJodaLib.year();
                var month = localJodaLib.monthValue();
                var monthName = localJodaLib.month();
                var fulldate = year + "-" + month + "-" + i;
                var parseDate = localJodaLib.withDayOfMonth(i);
                var strDate = monthName.toString().substr(0, 3) + "  " + i + "  " + parseDate.dayOfWeek().toString().substring(0, 3);
                this.labels.push(strDate);
            }
        }
        else {
            var localJodaLib = this.jodalLib.plusMonths(0);
            for (var i = 1; i <= this.totalNeededDays; i++) {
                var year = localJodaLib.year();
                var month = localJodaLib.monthValue();
                var monthName = localJodaLib.month();
                var fulldate = year + "-" + month + "-" + i;
                var parseDate = localJodaLib.withDayOfMonth(i);
                var strDate = monthName.toString().substr(0, 3) + "  " + i + "  " + parseDate.dayOfWeek().toString().substring(0, 3);
                this.labels.push(strDate);
            }
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/dashboard/schedular/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/dashboard/schedular/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/room-status/room-status.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/room-status/room-status.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/room-status/room-status.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/room-status/room-status.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  room-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/room-status/room-status.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/room-status/room-status.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RoomStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomStatusComponent", function() { return RoomStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomStatusComponent = /** @class */ (function () {
    function RoomStatusComponent() {
    }
    RoomStatusComponent.prototype.ngOnInit = function () {
    };
    RoomStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-status',
            template: __webpack_require__(/*! ./room-status.component.html */ "./src/app/Components/dashboard/schedular/room-status/room-status.component.html"),
            styles: [__webpack_require__(/*! ./room-status.component.css */ "./src/app/Components/dashboard/schedular/room-status/room-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomStatusComponent);
    return RoomStatusComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/schedular/schedular.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/schedular.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin-top:-4px;\r\n    border: solid 1px white;\r\n}\r\ntable  thead  tr th{\r\n    border: solid 1px white!important;\r\n}\r\ntable  tbody tr  td{\r\n    border: solid 1px white!important;\r\n}"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/schedular.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/schedular.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"table-responsive\" style=\"overflow:scroll; max-height:570px;\">\n  <br>\n  <table class=\"table\">\n    <app-header></app-header>\n    <app-body></app-body>\n   \n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/dashboard/schedular/schedular.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/dashboard/schedular/schedular.component.ts ***!
  \***********************************************************************/
/*! exports provided: SchedularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedularComponent", function() { return SchedularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/Components/dashboard/schedular/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/body.component */ "./src/app/Components/dashboard/schedular/body/body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedularComponent = /** @class */ (function () {
    function SchedularComponent() {
    }
    SchedularComponent.prototype.onDateChanged = function (date) {
        this.header.reSetDate(date);
        this.body.reSetDate(date);
    };
    SchedularComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]),
        __metadata("design:type", _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"])
    ], SchedularComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"]),
        __metadata("design:type", _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"])
    ], SchedularComponent.prototype, "body", void 0);
    SchedularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedular',
            template: __webpack_require__(/*! ./schedular.component.html */ "./src/app/Components/dashboard/schedular/schedular.component.html"),
            styles: [__webpack_require__(/*! ./schedular.component.css */ "./src/app/Components/dashboard/schedular/schedular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedularComponent);
    return SchedularComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/summary-bar/summary-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/dashboard/summary-bar/summary-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summary-bar {\r\n    background-color:white;\r\n    padding: 10px;\r\n    overflow: hidden;\r\n    height: 63px;\r\n}\r\n\r\n.view-select{\r\n    background-color: #C1CDD4;\r\n    padding: 5px;\r\n    margin-top: 10px;\r\n    width:100px;\r\n    margin-left:-10px;\r\n}\r\n\r\n.view-date{\r\n    margin-top:-5px;\r\n    margin-left:-20px;\r\n    width:150px;\r\n}\r\n\r\n.x-icon-row{\r\n    margin-top:-5px;\r\n \r\n}\r\n\r\n.x-icon-dot{\r\n    background-color:#0065AB;\r\n    height: 50px;\r\n  margin: 1px;\r\n  color:white;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/Components/dashboard/summary-bar/summary-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/dashboard/summary-bar/summary-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"summary-bar\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <select name=\"select\" id=\"select\" class=\" view-select\">\n                  <option value=\"Room View\">wing</option>\n                  <option value=\"Room View\">Grid View</option>\n                 </select>\n               </div>\n            \n        </div>\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-3\">\n        \n             <div class=\"form-group\">\n              <select name=\"select\" id=\"select\" class=\"view-select\">\n                <option value=\"Room View\"> floor</option>\n                <option value=\"Room View\">Grid View</option>\n               </select>\n             </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n        <div class=\"col-md-3\">\n            <form class=\"form\" #simpleForm=\"ngForm\">\n            <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" (change)=\"changeDate(date)\"  class=\"view-date\">\n            </form>\n         \n        </div>\n      </div>\n      \n  \n\n    </div>\n    <div class=\"col-sm\">\n      <div class=\"row right x-icon-row\">\n        <div class=\"col-md x-icon-dot\">\n          Vacant <br>\n          <clr-icon shape=\"home\" class=\"is-solid\"></clr-icon> 22\n          \n        </div>\n        <div class=\"col-md x-icon-dot\">\n          Occupied <br>\n          <clr-icon shape=\"users\" class=\"has-badge is-solid\"></clr-icon> 77\n        </div>\n        <div class=\"col-md x-icon-dot\">\n          Reserved <br>\n          <clr-icon shape=\"key\" class=\"has-badge is-solid\"></clr-icon> 13\n        </div>\n        <div class=\"col-md x-icon-dot\">\n          OutOfOrder <br>\n          <clr-icon shape=\"bullseye\" class=\"is-solid\"></clr-icon> 8\n        </div>\n        <div class=\"col-md x-icon-dot\">\n          Due Out <br>\n          <clr-icon shape=\"collapse-card\" class=\"is-solid\"></clr-icon> 4\n        </div>\n        <div class=\"col-md x-icon-dot\">\n          Dirty br <br>\n          <clr-icon shape=\"thumbs-down\" class=\"is-solid\"></clr-icon> 1\n        </div>\n    \n    \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/dashboard/summary-bar/summary-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/dashboard/summary-bar/summary-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SummaryBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryBarComponent", function() { return SummaryBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryBarComponent = /** @class */ (function () {
    function SummaryBarComponent() {
        // tslint:disable-next-line:no-output-on-prefix
        this.onDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.date = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
    }
    SummaryBarComponent.prototype.ngOnInit = function () {
    };
    SummaryBarComponent.prototype.changeDate = function (date) {
        this.onDateChanged.emit(date);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SummaryBarComponent.prototype, "onDateChanged", void 0);
    SummaryBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary-bar',
            template: __webpack_require__(/*! ./summary-bar.component.html */ "./src/app/Components/dashboard/summary-bar/summary-bar.component.html"),
            styles: [__webpack_require__(/*! ./summary-bar.component.css */ "./src/app/Components/dashboard/summary-bar/summary-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryBarComponent);
    return SummaryBarComponent;
}());



/***/ }),

/***/ "./src/app/Components/guest-profile/guest-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/guest-profile/guest-profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.filter{\r\n    width:98%;\r\n    height: 200px;\r\n    border: solid 4px #25333D;\r\n    background-color:white;\r\n    margin-top:5px;\r\n    margin-left:10px;\r\n}\r\n.filter200{\r\n    width:98%;\r\n    border: solid 4px #25333D;\r\n    background-color:white;\r\n    margin-top:5px;\r\n    margin-left:10px;\r\n}\r\n.left-container{\r\n    background-color:#C1CDD4;\r\n    min-height: 600px;\r\n}\r\n.right{\r\n    float: right;\r\n}\r\n.space90{\r\n    margin-top:80px;\r\n}\r\n.bspace{\r\n    margin-left:10px;\r\n}\r\n.top-bar1{\r\n    border-bottom: solid 4px #25333D; \r\n    height: 40px;  \r\n}\r\n.body-bar1{\r\n    min-height: 100px;\r\n    padding: 2px;\r\n\r\n}\r\n.plabel{\r\n    font-weight: bold;\r\n    margin-top:5px;\r\n    margin-left: 5px;\r\n    font-size:11px;\r\n}\r\n.drop{\r\n    width: 50px!important;\r\n}\r\n.high{\r\n    \r\n}\r\n.text-drop{\r\n    padding-top:20px!important;\r\n}\r\n.right-content{\r\n    margin-left:15px;\r\n    text-align: right;\r\n    float: right;\r\n}\r\n.form-contents{\r\n    margin:5px;\r\n    border:solid 1px #C1CDD4;\r\n    min-height: 350px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/Components/guest-profile/guest-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/guest-profile/guest-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-3 left-container\">\n    <div class=\"filter\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th class=\"left\">\n              <input type=\"checkbox\">\n            </th>\n            <th class=\"left\">Filter By</th>\n            <th class=\"left\">Value</th>\n          </tr>\n        </thead>\n        <tbody>\n\n\n        </tbody>\n      </table>\n      <div class=\"right space90\">\n        <button class=\"btn btn-default btn-sm\">Reset</button>\n        <button class=\"btn  btn-dark bspace btn-sm\">Search</button>\n      </div>\n    </div>\n    <div class=\"filter200\">\n      <div class=\"top-bar1\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-10\">\n            <p class=\"plabel\">\n              Search By Personal Information\n            </p>\n\n          </div>\n          <div class=\"clr-col-1\">\n            <button type=\"button\" class=\"btn btn-icon btn-sm\" (click)=\"togglePersonalInfoOpened()\">\n              <clr-icon shape=\"angle-double\"></clr-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"body-bar1\" [hidden]=\"isPersonalInfoOpened\">\n        <table class=\"table  table-compact\">\n          <tr>\n            <td colspan=\"2\" class=\"left\">\n              <label for=\"\">Gender</label>\n            </td>\n            <td colspan=\"2\">\n              <div class=\"select\">\n                <select>\n                  <option>Select Gender</option>\n                  <option>Male</option>\n                  <option>Female</option>\n                </select>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" class=\"left\">\n              <label for=\"\">Marital Status</label>\n            </td>\n            <td colspan=\"2\">\n              <div class=\"select\">\n                <select>\n                  <option>Select Marital Status</option>\n                  <option>Single </option>\n                  <option>Married</option>\n                </select>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td>Month</td>\n            <td>Day</td>\n          </tr>\n          <tr>\n            <td>\n              <input type=\"checkbox\">\n            </td>\n            <td>\n              <label for=\"\">Birth date</label>\n            </td>\n            <td>\n              <div class=\"select\">\n                <select>\n                  <option>Jan</option>\n                  <option>Feb</option>\n\n                </select>\n              </div>\n            </td>\n            <td>\n              <div class=\"select\">\n                <select>\n                  <option>Any</option>\n                  <option>1</option>\n\n                </select>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <input type=\"checkbox\">\n            </td>\n            <td>\n              <label for=\"\">Aniniversiry</label>\n            </td>\n            <td>\n              <div class=\"select\">\n                <select>\n                  <option>Jan</option>\n                  <option>Feb</option>\n\n                </select>\n              </div>\n            </td>\n            <td>\n              <div class=\"select\">\n                <select>\n                  <option>Any</option>\n                  <option>1</option>\n\n                </select>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"filter200\">\n      <div class=\"top-bar1\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-10\">\n            <p class=\"plabel\">\n              Search By Address Information\n            </p>\n\n          </div>\n          <div class=\"clr-col-1\">\n            <button type=\"button\" class=\"btn btn-icon btn-sm\" (click)=\"togglePersonalInfoOpened2()\">\n              <clr-icon shape=\"angle-double\"></clr-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"body-bar1\" [hidden]=\"isPersonalInfoOpened2\">\n        <table class=\"table table-compact table-vertical\">\n          <tr>\n            <td class=\"left text-drop\">\n              <label for=\"\">City</label>\n            </td>\n            <td>\n              <input type=\"text\" class=\"drop\">\n            </td>\n            <td class=\"left text-drop\">\n              <label for=\"\">State</label>\n            </td>\n            <td>\n              <input type=\"text\" class=\"drop high\">\n            </td>\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Address</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\" class=\"high\">\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Address2</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\" class=\"high\">\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Country</label>\n            </td>\n            <td colspan=\"3\">\n              <select>\n                <option>Select Country</option>\n                <option>Male</option>\n                <option>Female</option>\n              </select>\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Zip Code</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\" class=\"high\">\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n    </div>\n\n    <div class=\"filter200\">\n      <div class=\"top-bar1\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-10\">\n            <p class=\"plabel\">\n              Search By Identification Information\n            </p>\n\n          </div>\n          <div class=\"clr-col-1\">\n            <button type=\"button\" class=\"btn btn-icon btn-sm\" (click)=\"togglePersonalInfoOpened3()\">\n              <clr-icon shape=\"angle-double\"></clr-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"body-bar1\" [hidden]=\"isPersonalInfoOpened3\">\n        <table class=\"table table-compact table-vertical\">\n\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Type</label>\n            </td>\n            <td colspan=\"3\">\n              <div class=\"select\">\n                <select>\n                  <option>Select ID Type</option>\n                </select>\n              </div>\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">State</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\" class=\"high\">\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Exp. Date</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"date\">\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Country</label>\n            </td>\n            <td colspan=\"3\">\n              <div class=\"select\">\n                <select>\n                  <option>Select Country</option>\n                </select>\n              </div>\n            </td>\n\n          </tr>\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Number</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\">\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n    </div>\n\n    <div class=\"filter200\">\n      <div class=\"top-bar1\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-10\">\n            <p class=\"plabel\">\n              Search By Contact Information\n            </p>\n\n          </div>\n          <div class=\"clr-col-1\">\n            <button type=\"button\" class=\"btn btn-icon btn-sm\" (click)=\"togglePersonalInfoOpened4()\">\n              <clr-icon shape=\"angle-double\"></clr-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"body-bar1\" [hidden]=\"isPersonalInfoOpened4\">\n        <table class=\"table table-compact table-vertical\">\n\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Phone</label>\n            </td>\n            <td colspan=\"3\">\n\n              <input type=\"text\">\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class=\"text-drop\">\n              <label for=\"\">Email</label>\n            </td>\n            <td colspan=\"3\">\n              <input type=\"text\" class=\"high\">\n            </td>\n\n          </tr>\n\n\n\n\n        </table>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"clr-col-9\">\n\n    <clr-datagrid style=\" height:95%;\">\n      <clr-dg-column></clr-dg-column>\n      <clr-dg-column>Guest Name\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column>Country\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column>Source\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column>Email\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column>City\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n      <clr-dg-column>Phone\n        <clr-dg-string-filter [clrDgStringFilter]=\"guestFilter\"></clr-dg-string-filter>\n      </clr-dg-column>\n\n      <clr-dg-placeholder>We couldn't find any Guest!</clr-dg-placeholder>\n\n      <clr-dg-row *ngFor=\"let g of guests\">\n        <clr-dg-cell>\n          <input type=\"checkbox\"> </clr-dg-cell>\n        <clr-dg-cell>{{g.guestName}}</clr-dg-cell>\n        <clr-dg-cell>{{g.country }}</clr-dg-cell>\n        <clr-dg-cell>{{g.source}}</clr-dg-cell>\n        <clr-dg-cell>{{g.email}}</clr-dg-cell>\n        <clr-dg-cell>{{g.city}}</clr-dg-cell>\n        <clr-dg-cell>{{g.phone}}</clr-dg-cell>\n      </clr-dg-row>\n\n      <clr-dg-footer> Guests</clr-dg-footer>\n    </clr-datagrid>\n\n    <div class=\"clr-row\">\n      <div class=\"clr-md-12 right-content\">\n        <button class=\"btn btn-default btn-sm\" (click)=\"onEdit()\">New</button>\n        <button class=\"btn btn-default btn-sm\">Edit</button>\n        <button class=\"btn btn-default btn-sm\">Delete</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n<clr-modal [(clrModalOpen)]=\"canEdit\" [clrModalSize]=\"'xl'\">\n  <h3 class=\"modal-title\"> Add / Edit Guest</h3>\n\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n\n        <clr-tabs>\n          <clr-tab>\n            <button clrTabLink>General</button>\n            <clr-tab-content *clrIfActive>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\">\n                    <form class=\"clr-form clr-form-compact\">\n                      <h6>Guest Information</h6>\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">FirstName</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"First Name\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">LastName</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"Last Name\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n                      <h6>Address Information</h6>\n\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">Address</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"Address\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">Street</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"Street\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">City</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"City\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">State</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"State\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n                      <div class=\"clr-form-control clr-row\">\n                        <label for=\"example\" class=\"clr-control-label clr-col-xs-12 clr-col-md-3\">Zip Code</label>\n                        <div class=\"clr-control-container clr-col-xs-12 clr-col-md-9\">\n                          <div class=\"clr-input-wrapper\">\n                            <input type=\"text\" id=\"example\" placeholder=\"Zip Code\" class=\"clr-input\">\n                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                          </div>\n                          <span class=\"clr-subtext\"></span>\n                        </div>\n                      </div>\n\n\n                    </form>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n\n          <clr-tab>\n            <button clrTabLink>Personal</button>\n            <clr-tab-content *clrIfActive>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n\n          <clr-tab>\n            <button clrTabLink>Preference</button>\n            <clr-tab-content *clrIfActive>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n\n          <clr-tab>\n            <button clrTabLink [clrTabLinkInOverflow]=\"inOverflow\">Profile</button>\n            <clr-tab-content *clrIfActive>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-contents\"></div>\n                </div>\n              </div>\n            </clr-tab-content>\n          </clr-tab>\n\n\n        </clr-tabs>\n\n\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-8\"></div>\n\n      <div class=\"col-md-4\" style=\"text-align:right!important;\">\n        <br>\n        <button class=\"btn btn-default btn-sm\" (click)=\"canEdit = false\"> Save </button>\n        <button class=\"btn btn-danger  btn-sm\" (click)=\"canEdit = false\"> Close </button>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/Components/guest-profile/guest-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/guest-profile/guest-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: GuestProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestProfileComponent", function() { return GuestProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuestFilter = /** @class */ (function () {
    function GuestFilter() {
    }
    GuestFilter.prototype.accepts = function (guest, search) {
        return guest.guestName.toLowerCase().indexOf(search) >= 0
            || guest.country.toLowerCase().indexOf(search) >= 0
            || guest.source.toLowerCase().indexOf(search) >= 0
            || guest.email.toLowerCase().indexOf(search) >= 0
            || guest.city.toLowerCase().indexOf(search) >= 0
            || guest.phone.toLowerCase().indexOf(search) >= 0;
    };
    return GuestFilter;
}());
var GuestProfileComponent = /** @class */ (function () {
    function GuestProfileComponent() {
        this.isPersonalInfoOpened = true;
        this.isPersonalInfoOpened2 = true;
        this.isPersonalInfoOpened3 = true;
        this.isPersonalInfoOpened4 = true;
        this.guestFilter = new GuestFilter();
        this.canEdit = false;
        this.guests = [
            {
                id: 1, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 2, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 3, guestName: 'ben king', country: 'nigeria', source: 'hotel.com', email: 'ben@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 4, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 5, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 6, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
            {
                id: 7, guestName: 'fred amata', country: 'nigeria', source: 'booking.com', email: 'fred@mail.com',
                city: 'Lagos', phone: '08174536789'
            },
        ];
    }
    GuestProfileComponent.prototype.ngOnInit = function () {
    };
    GuestProfileComponent.prototype.togglePersonalInfoOpened = function () {
        this.isPersonalInfoOpened = !this.isPersonalInfoOpened;
    };
    GuestProfileComponent.prototype.togglePersonalInfoOpened2 = function () {
        this.isPersonalInfoOpened2 = !this.isPersonalInfoOpened2;
    };
    GuestProfileComponent.prototype.togglePersonalInfoOpened3 = function () {
        this.isPersonalInfoOpened3 = !this.isPersonalInfoOpened3;
    };
    GuestProfileComponent.prototype.togglePersonalInfoOpened4 = function () {
        this.isPersonalInfoOpened4 = !this.isPersonalInfoOpened4;
    };
    GuestProfileComponent.prototype.onEdit = function () {
        this.canEdit = true;
    };
    GuestProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guest-profile',
            template: __webpack_require__(/*! ./guest-profile.component.html */ "./src/app/Components/guest-profile/guest-profile.component.html"),
            styles: [__webpack_require__(/*! ./guest-profile.component.css */ "./src/app/Components/guest-profile/guest-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuestProfileComponent);
    return GuestProfileComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
/* harmony import */ var _backend_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend/data.service */ "./src/app/backend/data.service.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(ds) {
        var _this = this;
        this.ds = ds;
        this.day_name = '';
        this.open_out_of_order = false;
        this.month_name = '';
        this.day_number = '';
        this.year_name = '';
        this.time = '';
        this.tickers = [];
        this.open_wizard = false;
        this.roomTypes = [];
        this.rooms = [];
        this.out_of_order_list = [];
        this.roomTypes2 = [];
        this.rooms2 = [];
        this.selectedRoomIds = [];
        this.intervalHandle = setInterval(function () {
            var day = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
            var time = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalTime"].now();
            _this.day_name = day.dayOfWeek();
            _this.month_name = day.month();
            _this.day_number = day.dayOfMonth();
            _this.year_name = day.year();
            _this.time = time.toString().split('.')[0];
        }, 1000);
        this.tickers = this.loadTickers();
        this.ds.getRoomTypes().subscribe(function (rTypes) {
            _this.roomTypes = rTypes.roomTypes;
            _this.roomTypes2 = rTypes.roomTypes;
        });
    }
    HomeComponent.prototype.on_open_out_of_order = function () {
        this.open_out_of_order = true;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHandle);
    };
    HomeComponent.prototype.loadTickers = function () {
        return [
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' }
        ];
    };
    HomeComponent.prototype.onRoomTypeChanged = function (event) {
        var _this = this;
        this.ds.getRoomById(event.target.value).subscribe(function (rms) {
            _this.rooms = rms.rooms;
        });
    };
    HomeComponent.prototype.onRoomTypeChanged2 = function (event) {
        var _this = this;
        this.ds.getRoomById(event.target.value).subscribe(function (rms) {
            _this.rooms2 = rms.rooms;
            console.log(_this.rooms2);
        });
    };
    HomeComponent.prototype.onFinish = function () {
        var _this = this;
        console.log(this.rooms2, this.out_of_order_start_date, this.out_of_order_end_date, this.out_of_order_reason);
        this.rooms2.forEach(function (room) {
            if (room.selected) {
                if (room.selected === true) {
                    _this.selectedRoomIds.push(room.id);
                }
            }
        });
        var data = {
            rooms: this.selectedRoomIds,
            out_of_order_start_date: this.out_of_order_start_date,
            out_of_order_end_date: this.out_of_order_end_date,
            out_of_order_reason: this.out_of_order_reason
        };
        this.ds.postOutofOrderRooms(data).subscribe(function (data2) {
            _this.out_of_order_list = data2;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wizardxl'),
        __metadata("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrWizard"])
    ], HomeComponent.prototype, "wizardExtraLarge", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_backend_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/main-dashboard/main-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/main-dashboard/main-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-area {\r\n    padding: 0 !important;\r\n  }\r\n  \r\n  .content-area {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .x-component {\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n  .x-component2 {\r\n    margin-top: 2px;\r\n    margin-left: 4px;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n  .x-component3 {\r\n    margin-top: 5px;\r\n    margin-left: 5px;\r\n    color: #25333D;\r\n  }\r\n  \r\n  .x-comp {\r\n    margin-top: 2px;\r\n  }\r\n  \r\n  .x-today {\r\n    background-color: #798893;\r\n    height: 150px;\r\n    margin-right: 2px;\r\n  }\r\n  \r\n  .x-today .day-name {\r\n    margin-top: 2px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .x-today .month-name {\r\n    margin-top: 1px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .x-today .day-number {\r\n    margin-top: 4px;\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .x-today .year-name {\r\n    margin-top: 4px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .x-today .date-time {\r\n    margin-top: 2px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .x-rooms {\r\n    background-color: #0065AB;\r\n    height: 150px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .x-rooms .room-info {\r\n    font-size: 46px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .x-rooms .available-total {\r\n    font-size: 17px;\r\n    margin-top: 15px;\r\n    border-bottom: solid 1px white;\r\n    width: 70%;\r\n    margin-left: 45px;\r\n    letter-spacing: 3px;\r\n  }\r\n  \r\n  .x-ratio {\r\n    background-color: #798893;\r\n    margin: 2px;\r\n    height: 100px;\r\n  }\r\n  \r\n  .x-ratio .num {\r\n    font-size: 35px;\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .x-ratio .checkin {\r\n    font-size: 10px;\r\n    margin-top: 3px;\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n  }\r\n  \r\n  .x-summary {\r\n    background-color: #25333D;\r\n    height: 100px;\r\n    color: white;\r\n  }\r\n  \r\n  .x-summary .occupancy {\r\n    font-size: 34px;\r\n    margin-top: 17px;\r\n  }\r\n  \r\n  .x-summary .occupancy-letter {\r\n    font-size: 18px;\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .category-bar {\r\n    background-color: #25333D;\r\n    margin-top: -3px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    font-size: 22px;\r\n    letter-spacing: 4px;\r\n  }\r\n  \r\n  .category-bar2 {\r\n    background-color: #25333D;\r\n    margin-top: -5px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    font-size: 22px;\r\n    letter-spacing: 4px;\r\n  }\r\n  \r\n  .category-content {\r\n    background-color: #C1CDD4;\r\n    margin-top: -5px;\r\n    height: 190px;\r\n    padding-top: 8px;\r\n  }\r\n  \r\n  .category-content2 {\r\n    background-color: #C1CDD4;\r\n    margin-top: -5px;\r\n    height: 90px;\r\n    padding-top: 8px;\r\n  }\r\n  \r\n  .category-list {\r\n    list-style: none;\r\n  }\r\n  \r\n  .little-links {\r\n    background-color: #A6D8E7;\r\n    color: #25333D;\r\n  }\r\n  \r\n  .r-menu {\r\n    height: 40px;\r\n    background: #798893;\r\n    padding-top: 12px;\r\n    color: white;\r\n    margin-bottom: 2px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btable {}\r\n  \r\n  .btable tbody tr th {\r\n    text-align: left !important;\r\n  }\r\n  \r\n  .toper{\r\n      margin-top:-10px;\r\n  }"

/***/ }),

/***/ "./src/app/Components/main-dashboard/main-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/main-dashboard/main-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n\n      <div class=\"row x-component\">\n        <div class=\"col-md x-today\">\n\n          <div class=\"day-name\">{{day_name}}</div>\n          <div class=\"month-name\">{{month_name}}</div>\n          <div class=\"day-number\">{{day_number}}</div>\n          <div class=\"year-name\">{{year_name}}</div>\n          <div class=\"date-time\">{{time}}</div>\n        </div>\n        <div class=\"col-md-8 x-rooms\">\n          <div class=\"room-info\">52 Rooms</div>\n          <div class=\"available-total\">Available Total</div>\n        </div>\n      </div>\n\n      <div class=\"row x-component2\">\n        <div class=\"col-md\">\n          <div class=\"row\">\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">17</div>\n              <div class=\"checkin\">Arrival</div>\n            </div>\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">20</div>\n              <div class=\"checkin\">Departure</div>\n            </div>\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">0</div>\n              <div class=\"checkin\">Group Booking</div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-md-5 x-comp\">\n          <div class=\"row\">\n            <div class=\"col-md x-summary\">\n              <div class=\"occupancy\">15%</div>\n              <div class=\"occupancy-letter\">Occupancy</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"row x-component2\">\n        <div class=\"col-md\">\n          <div class=\"row\">\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">15</div>\n              <div class=\"checkin\">Walk In</div>\n            </div>\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">12</div>\n              <div class=\"checkin\">Reserv</div>\n            </div>\n            <div class=\"col-md x-ratio\">\n              <div class=\"num\">35</div>\n              <div class=\"checkin\">Occupied</div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-md-5 x-comp\">\n          <div class=\"row\">\n            <div class=\"col-md x-summary\">\n              <div class=\"occupancy\">35%</div>\n              <div class=\"occupancy-letter\">Avalability</div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div class=\"row x-component\">\n        <div class=\"col-md category-bar\">\n          Categories\n        </div>\n      </div>\n\n      <div class=\"row x-component3\">\n        <div class=\"col-md category-content\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n\n              <ol class=\"category-list\">\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single1\" checked>\n                    <label for=\"single1\">Single Bedroom</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single2\">\n                    <label for=\"single2\">Double Bedroom</label>\n                  </div>\n\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single3\" checked>\n                    <label for=\"single3\">Share Bedroom</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single4\">\n                    <label for=\"single4\">Holiday Apartment</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single5\">\n                    <label for=\"single5\">Holiday Home</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single6\">\n                    <label for=\"single6\">Holiday Suite</label>\n                  </div>\n                </li>\n              </ol>\n\n            </div>\n            <div class=\"col-md-6\">\n              <ol class=\"category-list\">\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single7\" checked>\n                    <label for=\"single7\">Single Bedroom</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single8\" checked>\n                    <label for=\"single8\">Double Bedroom</label>\n                  </div>\n\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single9\" checked>\n                    <label for=\"single9\">Share Bedroom</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single10\" checked>\n                    <label for=\"single10\">Holiday Apartment</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single11\" checked>\n                    <label for=\"single11\">Holiday Home</label>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"single12\" checked>\n                    <label for=\"single12\">Holiday Suite</label>\n                  </div>\n                </li>\n              </ol>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n\n\n\n\n\n    </div>\n    <div class=\"col-md-8\">\n      <app-dashboard></app-dashboard>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/Components/main-dashboard/main-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/main-dashboard/main-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainDashboardComponent = /** @class */ (function () {
    function MainDashboardComponent() {
        var _this = this;
        this.day_name = '';
        this.open_out_of_order = false;
        this.month_name = '';
        this.day_number = '';
        this.year_name = '';
        this.time = '';
        this.intervalHandle = setInterval(function () {
            var day = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
            var time = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalTime"].now();
            _this.day_name = day.dayOfWeek();
            _this.month_name = day.month();
            _this.day_number = day.dayOfMonth();
            _this.year_name = day.year();
            _this.time = time.toString().split('.')[0];
        }, 1000);
    }
    MainDashboardComponent.prototype.on_open_out_of_order = function () {
        this.open_out_of_order = true;
    };
    MainDashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHandle);
    };
    MainDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-dashboard',
            template: __webpack_require__(/*! ./main-dashboard.component.html */ "./src/app/Components/main-dashboard/main-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/Components/main-dashboard/main-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainDashboardComponent);
    return MainDashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/ticker/ticker.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/ticker/ticker.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ticker-message{\r\n    color: #0065AB;\r\n    font-size: 10px;\r\n    margin-left: 12px;\r\n}\r\n.ticker-title{\r\n    color:#25333D;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/Components/ticker/ticker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/ticker/ticker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"subnav\" >\n    <ul class=\"nav\">\n      <li *ngIf=\"!tickers.length\">Loading tickers...</li>\n      <li class=\"nav-item\" *ngFor=\"let ticker of tickers\" [@slideOut]>\n        <clr-icon shape=\"wallet\" class=\"is-solid\" *ngIf=\"ticker.type == 0\"></clr-icon>\n        <clr-icon shape=\"shopping-cart\" class=\"has-badge is-solid\" *ngIf=\"ticker.type == 1\"></clr-icon>\n        <clr-icon shape=\"no-wifi\" class=\"is-solid\" *ngIf=\"ticker.type == 2\"></clr-icon>\n        <clr-icon shape=\"building\" class=\"has-badge is-solid\" *ngIf=\"ticker.type == 3\"></clr-icon>\n        <clr-icon shape=\"store\"  class=\"is-solid\" *ngIf=\"ticker.type == 4\"></clr-icon>\n\n       <span class=\"ticker-title\"> {{ticker.title}}</span>  <span class=\"ticker-message\">{{ticker.message}}</span>\n     \n     \n      </li>\n    </ul>\n  </nav>"

/***/ }),

/***/ "./src/app/Components/ticker/ticker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/ticker/ticker.component.ts ***!
  \*******************************************************/
/*! exports provided: TickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerComponent", function() { return TickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TickerComponent = /** @class */ (function () {
    function TickerComponent() {
        // tslint:disable-next-line:no-input-rename
        this._tickers = [];
        this.tickers = [];
        this.page = 0;
    }
    TickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.nextAlert();
        }, 5000);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    TickerComponent.prototype.ngOnChanges = function () {
        if (this._tickers.length && this.tickers.length < 30) {
            if (this.page * 100 > this._tickers.length) {
                this.page = 0;
            }
            var additions = this._tickers.slice(this.page * 100, (this.page + 1) * 100);
            (_a = this.tickers).push.apply(_a, additions);
            this.page++;
        }
        var _a;
    };
    TickerComponent.prototype.nextAlert = function () {
        this.tickers.splice(0, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tickers'),
        __metadata("design:type", Object)
    ], TickerComponent.prototype, "_tickers", void 0);
    TickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticker',
            template: __webpack_require__(/*! ./ticker.component.html */ "./src/app/Components/ticker/ticker.component.html"),
            styles: [__webpack_require__(/*! ./ticker.component.css */ "./src/app/Components/ticker/ticker.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            marginLeft: 0,
                            opacity: 1
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            marginLeft: '-324px',
                            opacity: 0
                        }))
                    ])
                ])
            ]
        })
    ], TickerComponent);
    return TickerComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-area {\r\n  padding: 0 !important;\r\n}\r\n\r\n.content-area {\r\n  overflow: hidden;\r\n}\r\n\r\n.x-component {\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.x-component2 {\r\n  margin-top: 2px;\r\n  margin-left: 4px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.x-component3 {\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n  color: #25333D;\r\n}\r\n\r\n.x-comp {\r\n  margin-top: 2px;\r\n}\r\n\r\n.x-today {\r\n  background-color: #798893;\r\n  height: 150px;\r\n  margin-right: 2px;\r\n}\r\n\r\n.x-today .day-name {\r\n  margin-top: 2px;\r\n  font-size: 14px;\r\n}\r\n\r\n.x-today .month-name {\r\n  margin-top: 1px;\r\n  font-size: 20px;\r\n}\r\n\r\n.x-today .day-number {\r\n  margin-top: 4px;\r\n  font-size: 50px;\r\n}\r\n\r\n.x-today .year-name {\r\n  margin-top: 4px;\r\n  font-size: 20px;\r\n}\r\n\r\n.x-today .date-time {\r\n  margin-top: 2px;\r\n  font-size: 20px;\r\n}\r\n\r\n.x-rooms {\r\n  background-color: #0065AB;\r\n  height: 150px;\r\n  text-align: center;\r\n}\r\n\r\n.x-rooms .room-info {\r\n  font-size: 46px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.x-rooms .available-total {\r\n  font-size: 17px;\r\n  margin-top: 15px;\r\n  border-bottom: solid 1px white;\r\n  width: 70%;\r\n  margin-left: 45px;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n.x-ratio {\r\n  background-color: #798893;\r\n  margin: 2px;\r\n  height: 100px;\r\n}\r\n\r\n.x-ratio .num {\r\n  font-size: 35px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.x-ratio .checkin {\r\n  font-size: 10px;\r\n  margin-top: 3px;\r\n  font-weight: bold;\r\n  line-height: 15px;\r\n}\r\n\r\n.x-summary {\r\n  background-color: #25333D;\r\n  height: 100px;\r\n  color: white;\r\n}\r\n\r\n.x-summary .occupancy {\r\n  font-size: 34px;\r\n  margin-top: 17px;\r\n}\r\n\r\n.x-summary .occupancy-letter {\r\n  font-size: 18px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.category-bar {\r\n  background-color: #25333D;\r\n  margin-top: -3px;\r\n  height: 35px;\r\n  padding-top: 5px;\r\n  font-size: 22px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.category-bar2 {\r\n  background-color: #25333D;\r\n  margin-top: -5px;\r\n  height: 35px;\r\n  padding-top: 5px;\r\n  font-size: 22px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.category-content {\r\n  background-color: #C1CDD4;\r\n  margin-top: -5px;\r\n  height: 190px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.category-content2 {\r\n  background-color: #C1CDD4;\r\n  margin-top: -5px;\r\n  height: 90px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.category-list {\r\n  list-style: none;\r\n}\r\n\r\n.little-links {\r\n  background-color: #A6D8E7;\r\n  color: #25333D;\r\n}\r\n\r\n.r-menu {\r\n  height: 40px;\r\n  background: #798893;\r\n  padding-top: 12px;\r\n  color: white;\r\n  margin-bottom: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btable {}\r\n\r\n.btable tbody tr th {\r\n  text-align: left !important;\r\n}\r\n\r\n.toper{\r\n    margin-top:-10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"alert alert-app-level\">\n    &nbsp;&nbsp;&nbsp;&nbsp;alert message\n  </div>\n  <nav class=\"subnav\" style=\"overflow:hidden!important;\">\n    <app-ticker [tickers]=\"tickers\"></app-ticker>\n  </nav>\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <a href=\"javascript://\" class=\"nav-link\">\n        <clr-icon shape=\"vm-bug\"></clr-icon>\n        <span class=\"title\">Hotel Application</span>\n      </a>\n    </div>\n    <div class=\"header-nav\">\n      <a href=\"javascript://\" [routerLink]=\"['/']\" class=\"  nav-link nav-text\">Dashboard</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\" (click)=\"on_open_out_of_order()\">Out of Order</a>\n      <a href=\"javascript://\" [routerLink]=\"['/guest-profile']\" class=\"nav-link nav-text\">Guest Profile</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Booking</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Reports</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Inventory</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Calendar</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Manage</a>\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Help</a>\n    </div>\n    <div class=\"header-actions\">\n      <a href=\"javascript://\" class=\"nav-link nav-icon\">\n        <clr-icon shape=\"cog\"></clr-icon>\n      </a>\n    </div>\n  </header>\n  <nav class=\"subnav little-links\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" >Management</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Cloud</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Tenants</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Select</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Guests</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Archives</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Financials</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Cashbook</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Prices</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Extras</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n\n\n      <router-outlet></router-outlet>\n\n\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n<clr-modal [(clrModalOpen)]=\"open_out_of_order\" [clrModalSize]=\"'xl'\">\n  <h3 class=\"modal-title\"> Out of Order Room List</h3>\n\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <table class=\"table btable\">\n          <thead>\n            <tr>\n              <th colspan=\"7\" style=\"text-align:left!important;\">\n                <button type=\"button\" class=\"btn btn-default btn-sm\" disabled syle=\"color:black!important;\">Search Criteria</button>\n              </th>\n              <th colspan=\"1\" style=\"text-align:right!important;\">\n                <button type=\"button\" class=\"btn btn-info btn-sm\">Search</button>\n              </th>\n            </tr>\n\n          </thead>\n          <tbody>\n            <tr>\n              <th>Room Type</th>\n              <th>\n                <div class=\"form-group\">\n                    <div class=\"select\">\n                  <select name=\"select\" id=\"select\"  (change)=\"onRoomTypeChanged($event)\">\n                  \n                    <option  value=\"{{rt.id}}\" *ngFor=\"let rt of roomTypes\" >{{rt.room_type_name}}</option>\n                  </select>\n                  </div>\n                </div>\n              </th>\n              <th>Room</th>\n              <th>\n                <div class=\"form-group\">\n                    <div class=\"select\">\n                  <select name=\"select\" id=\"select\" >\n                   \n                    <option  value=\"{{rm.id}}\" *ngFor=\"let rm of rooms\" >{{rm.room_name}}</option>\n                  </select>\n                  </div>\n                </div>\n              </th>\n              <th>From Date</th>\n              <th>\n                <input type=\"date\">\n              </th>\n              <th>To Date</th>\n              <th>\n                <input type=\"date\">\n              </th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <table class=\"table table-primary\">\n          <thead>\n            <tr>\n              <th style=\"text-align:left!important;\">\n                <input type=\"checkbox\" name=\"\" id=\"\"> </th>\n              <th style=\"text-align:left!important;\">Date</th>\n              <th style=\"text-align:left!important;\">O/O Date</th>\n              <th style=\"text-align:left!important;\">Room Type</th>\n              <th style=\"text-align:left!important;\">Room</th>\n              <th style=\"text-align:left!important;\">Remark</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td style=\"text-align:left!important;\">\n                <input type=\"checkbox\" name=\"\" id=\"\"> </td>\n              <td style=\"text-align:left!important;\">7/31/2018 3:41 PM</td>\n              <td style=\"text-align:left!important;\">8/1/2018</td>\n              <td style=\"text-align:left!important;\">King Suit</td>\n              <td style=\"text-align:left!important;\">201</td>\n              <td style=\"text-align:left!important;\">Remark</td>\n            </tr>\n        \n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-8\"></div>\n\n      <div class=\"col-md-4\" style=\"text-align:right!important;\">\n        <br>\n        <button class=\"btn  btn-info\" (click)=\"open_out_of_order = false; open_wizard = true\"> Mark O/O </button>\n        <button class=\"btn btn-info\" (click)=\"open_out_of_order = false; open_wizard = true\"> Unmark O/O </button>\n        <button class=\"btn btn-danger\" (click)=\"open_out_of_order = false; open_wizard = false\"> Close </button>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n</clr-modal>\n\n\n\n\n<clr-wizard #wizardxl [(clrWizardOpen)]=\"open_wizard\">\n  <clr-wizard-title>Out of Order Rooms</clr-wizard-title>\n\n  <clr-wizard-button [type]=\"'cancel'\">Cancel</clr-wizard-button>\n  <clr-wizard-button [type]=\"'previous'\">Back</clr-wizard-button>\n  <clr-wizard-button [type]=\"'next'\">Next</clr-wizard-button>\n  <clr-wizard-button [type]=\"'finish'\" (click)=\"onFinish()\">Finish</clr-wizard-button>\n\n\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Set the dates</ng-template>\n    <p>\n      Set the dates and press Next button to continue.\n    </p>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div style=\"width:400px; height:380px; background:url(assets/images/bg1.png)\"></div>\n      </div>\n      <div class=\"col-md-4 toper\">\n        <div class=\"form-group\">\n          <label for=\"\">Start Date:</label>\n          <input type=\"date\" name=\"out_of_order_start_date\" clrDate [(ngModel)]=\"out_of_order_start_date\" >\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"\">End Date:</label>\n            <input type=\"date\" name=\"out_of_order_end_date\" clrDate [(ngModel)]=\"out_of_order_end_date\"  >\n          </div>\n      </div>\n    </div>\n  </clr-wizard-page>\n\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Out of Order Room</ng-template>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n          <table class=\"table btable\">\n            <thead>\n              <tr>\n                <th colspan=\"7\" style=\"text-align:left!important;\">\n                  <button type=\"button\" class=\"btn btn-default btn-sm\" disabled syle=\"color:black!important;\">Search Criteria</button>\n                </th>\n                <th colspan=\"1\" style=\"text-align:right!important;\">\n                  <button type=\"button\" class=\"btn btn-info btn-sm\">Search</button>\n                </th>\n              </tr>\n  \n            </thead>\n            <tbody>\n              <tr>\n                  <th>Room Type</th>\n                  <th>\n                    <div class=\"form-group\">\n                        <div class=\"select\">\n                      <select name=\"select\" id=\"select\"  (change)=\"onRoomTypeChanged2($event)\">\n                       <option> -- select -- </option>\n                        <option  value=\"{{rt.id}}\" *ngFor=\"let rt of roomTypes2\" >{{rt.room_type_name}}</option>\n                      </select>\n                      </div>\n                    </div>\n                  </th>\n           \n           \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table class=\"table table-primary\">\n            <thead>\n              <tr>\n                <th style=\"text-align:left!important;\">\n                  <input type=\"checkbox\" name=\"\" id=\"\"> </th>\n                <th style=\"text-align:left!important;\">Room Type</th>\n                <th style=\"text-align:left!important;\">Room Name</th>\n                <th style=\"text-align:left!important;\">Floor</th>\n                <th style=\"text-align:left!important;\">Room Owner</th>\n   \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let room of rooms2\">\n\n                <td style=\"text-align:left!important;\">\n                  <input type=\"checkbox\"  [(ngModel)]=\"room.selected\"> </td>\n                <td style=\"text-align:left!important;\">{{room.room_type.room_type_name}} </td>\n                <td style=\"text-align:left!important;\">{{room.room_name}}</td>\n                <td style=\"text-align:left!important;\">{{room.floor.floor_name}}</td>\n                <td style=\"text-align:left!important;\">{{room.room_owner.first_name}} {{room.room_owner.last_name}}</td>\n           \n              </tr>\n         \n            </tbody>\n          </table>\n\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-3\">From</div>\n            <div class=\"col-md-3\">{{out_of_order_start_date}}</div>\n            <div class=\"col-md-3\">To</div>\n            <div class=\"col-md-3\">{{out_of_order_end_date}}</div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label class=\"col-md-2\">Reason</label>\n                <textarea rows=\"2\" cols=\"5\" [(ngModel)]=\"out_of_order_reason\"></textarea>\n              </div>\n            </div>\n          </div>\n\n        \n        </div>\n      </div>\n\n  </clr-wizard-page>\n\n\n</clr-wizard>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_joda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-joda */ "./node_modules/js-joda/dist/js-joda.esm.js");
/* harmony import */ var _backend_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend/data.service */ "./src/app/backend/data.service.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(ds) {
        var _this = this;
        this.ds = ds;
        this.day_name = '';
        this.open_out_of_order = false;
        this.month_name = '';
        this.day_number = '';
        this.year_name = '';
        this.time = '';
        this.tickers = [];
        this.open_wizard = false;
        this.roomTypes = [];
        this.rooms = [];
        this.out_of_order_list = [];
        this.roomTypes2 = [];
        this.rooms2 = [];
        this.selectedRoomIds = [];
        this.intervalHandle = setInterval(function () {
            var day = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalDate"].now();
            var time = js_joda__WEBPACK_IMPORTED_MODULE_1__["LocalTime"].now();
            _this.day_name = day.dayOfWeek();
            _this.month_name = day.month();
            _this.day_number = day.dayOfMonth();
            _this.year_name = day.year();
            _this.time = time.toString().split('.')[0];
        }, 1000);
        this.tickers = this.loadTickers();
        this.ds.getRoomTypes().subscribe(function (rTypes) {
            _this.roomTypes = rTypes.roomTypes;
            _this.roomTypes2 = rTypes.roomTypes;
        });
    }
    AppComponent.prototype.on_open_out_of_order = function () {
        this.open_out_of_order = true;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHandle);
    };
    AppComponent.prototype.loadTickers = function () {
        return [
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 202, Mr Ben is running out of deposited credit' },
            { type: 0, title: 'Low Credit', message: 'Custmer in room 201, Mr King is running out of deposited credit' },
            { type: 1, title: 'Low Inventry', message: 'The inventry is very low, please reorder' },
            { type: 2, title: 'No Connection', message: 'No Internet Connection in Room 505' },
            { type: 3, title: 'House Keeping', message: 'Room 305, is very dirty' },
            { type: 4, title: 'No Stock', message: 'Stock Level is very low' }
        ];
    };
    AppComponent.prototype.onRoomTypeChanged = function (event) {
        var _this = this;
        this.ds.getRoomById(event.target.value).subscribe(function (rms) {
            _this.rooms = rms.rooms;
        });
    };
    AppComponent.prototype.onRoomTypeChanged2 = function (event) {
        var _this = this;
        this.ds.getRoomById(event.target.value).subscribe(function (rms) {
            _this.rooms2 = rms.rooms;
            console.log(_this.rooms2);
        });
    };
    AppComponent.prototype.onFinish = function () {
        var _this = this;
        console.log(this.rooms2, this.out_of_order_start_date, this.out_of_order_end_date, this.out_of_order_reason);
        this.rooms2.forEach(function (room) {
            if (room.selected) {
                if (room.selected === true) {
                    _this.selectedRoomIds.push(room.id);
                }
            }
        });
        var data = {
            rooms: this.selectedRoomIds,
            out_of_order_start_date: this.out_of_order_start_date,
            out_of_order_end_date: this.out_of_order_end_date,
            out_of_order_reason: this.out_of_order_reason
        };
        this.ds.postOutofOrderRooms(data).subscribe(function (data2) {
            _this.out_of_order_list = data2;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wizardxl'),
        __metadata("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrWizard"])
    ], AppComponent.prototype, "wizardExtraLarge", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_backend_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _Components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/dashboard/dashboard.module */ "./src/app/Components/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backend_backend_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backend/backend.module */ "./src/app/backend/backend.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/ticker/ticker.component */ "./src/app/Components/ticker/ticker.component.ts");
/* harmony import */ var _backend_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./backend/auth.interceptor */ "./src/app/backend/auth.interceptor.ts");
/* harmony import */ var _backend_header_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./backend/header.interceptor */ "./src/app/backend/header.interceptor.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_roomtype_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/roomtype.service */ "./src/app/services/roomtype.service.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_floor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/floor.service */ "./src/app/services/floor.service.ts");
/* harmony import */ var _services_outoforder_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/outoforder.service */ "./src/app/services/outoforder.service.ts");
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _services_wing_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/wing.service */ "./src/app/services/wing.service.ts");
/* harmony import */ var _Components_guest_profile_guest_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/guest-profile/guest-profile.component */ "./src/app/Components/guest-profile/guest-profile.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/main-dashboard/main-dashboard.component */ "./src/app/Components/main-dashboard/main-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _Components_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_10__["TickerComponent"],
                _Components_guest_profile_guest_profile_component__WEBPACK_IMPORTED_MODULE_20__["GuestProfileComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _Components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["MainDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _backend_backend_module__WEBPACK_IMPORTED_MODULE_8__["BackendModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrFormsNextModule"],
                _Components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _backend_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _backend_header_interceptor__WEBPACK_IMPORTED_MODULE_12__["HeaderInterceptor"], multi: true },
                _services_room_service__WEBPACK_IMPORTED_MODULE_15__["RoomService"],
                _services_roomtype_service__WEBPACK_IMPORTED_MODULE_14__["RoomtypeService"],
                _services_floor_service__WEBPACK_IMPORTED_MODULE_16__["FloorService"],
                _services_outoforder_service__WEBPACK_IMPORTED_MODULE_17__["OutoforderService"],
                _services_reservation_service__WEBPACK_IMPORTED_MODULE_18__["ReservationService"],
                _services_wing_service__WEBPACK_IMPORTED_MODULE_19__["WingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/main-dashboard/main-dashboard.component */ "./src/app/Components/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _Components_guest_profile_guest_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/guest-profile/guest-profile.component */ "./src/app/Components/guest-profile/guest-profile.component.ts");



var routes = [
    {
        path: '',
        component: _Components_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["MainDashboardComponent"]
    },
    {
        path: 'guest-profile',
        component: _Components_guest_profile_guest_profile_component__WEBPACK_IMPORTED_MODULE_2__["GuestProfileComponent"]
    }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/backend/auth.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/backend/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var storedUser = localStorage.getItem('user');
        if (storedUser) {
            var user = JSON.parse(storedUser);
            if (user) {
                var authReq = req.clone({
                    setHeaders: {
                        Authorization: "Bearer " + user.token
                    }
                });
                return next.handle(authReq);
            }
        }
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/backend/backend.module.ts":
/*!*******************************************!*\
  !*** ./src/app/backend/backend.module.ts ***!
  \*******************************************/
/*! exports provided: BackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendModule", function() { return BackendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/backend/auth.interceptor.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/backend/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BackendModule = /** @class */ (function () {
    function BackendModule() {
    }
    BackendModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [],
            exports: [],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["AuthInterceptor"], multi: true }
            ]
        })
    ], BackendModule);
    return BackendModule;
}());



/***/ }),

/***/ "./src/app/backend/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/backend/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getRooms = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "Rooms").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.getRoomById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "Rooms/get_room_by_type/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.getRoomTypes = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "RoomTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.postOutofOrderRooms = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "Rooms/out_of_order_rooms", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/backend/header.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/backend/header.interceptor.ts ***!
  \***********************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({
            setHeaders: {
                Accept: "application/json"
            }
        });
        return next.handle(authReq);
    };
    HeaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/services/floor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/floor.service.ts ***!
  \*******************************************/
/*! exports provided: FloorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorService", function() { return FloorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloorService = /** @class */ (function () {
    function FloorService() {
    }
    FloorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FloorService);
    return FloorService;
}());



/***/ }),

/***/ "./src/app/services/outoforder.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/outoforder.service.ts ***!
  \************************************************/
/*! exports provided: OutoforderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutoforderService", function() { return OutoforderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutoforderService = /** @class */ (function () {
    function OutoforderService() {
    }
    OutoforderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OutoforderService);
    return OutoforderService;
}());



/***/ }),

/***/ "./src/app/services/reservation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/reservation.service.ts ***!
  \*************************************************/
/*! exports provided: ReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationService", function() { return ReservationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReservationService = /** @class */ (function () {
    function ReservationService() {
    }
    ReservationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomService = /** @class */ (function () {
    function RoomService() {
    }
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/services/roomtype.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/roomtype.service.ts ***!
  \**********************************************/
/*! exports provided: RoomtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomtypeService", function() { return RoomtypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomtypeService = /** @class */ (function () {
    function RoomtypeService(http) {
        this.http = http;
    }
    RoomtypeService.prototype.getRooms = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "Rooms").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    RoomtypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoomtypeService);
    return RoomtypeService;
}());



/***/ }),

/***/ "./src/app/services/wing.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/wing.service.ts ***!
  \******************************************/
/*! exports provided: WingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WingService", function() { return WingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WingService = /** @class */ (function () {
    function WingService() {
    }
    WingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WingService);
    return WingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost/api/v1/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\angular\HotelApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map