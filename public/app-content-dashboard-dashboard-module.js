(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-dashboard-dashboard-module"],{

/***/ "3p/8":
/*!************************************************************!*\
  !*** ./src/app/content/dashboard/sales/sales.component.ts ***!
  \************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sales.component.html */ "Zpak");
/* harmony import */ var _sales_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales.component.css */ "ttYL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");








// import { ChartApiService } from '../../../_services/chart.api';

var SalesComponent = /** @class */ (function () {
    function SalesComponent(_renderer, route) {
        this._renderer = _renderer;
        this.route = route;
        this.config = { suppressScrollY: true };
        this.options = {
            bodyClass: ['pt-0'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.hitRateOptions = {
            bodyClass: ['bg-hexagons', 'pt-0'],
            headerClass: ['bg-hexagons'],
            cardClass: ['pull-up'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.dealsOptions = {
            bodyClass: ['bg-hexagons-danger'],
            cardClass: ['pull-up'],
            contentClass: ['bg-gradient-directional-danger']
        };
        this.emailsOptions = {
            bodyClass: ['pt-0'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.loadingIndicator = true;
        this.firstRow = ['../../../assets/images/portrait/small/avatar-s-4.png',
            '../../../assets/images/portrait/small/avatar-s-5.png',
            '../../../assets/images/portrait/small/avatar-s-6.png'];
        this.secondRow = ['../../../assets/images/portrait/small/avatar-s-7.png',
            '../../../assets/images/portrait/small/avatar-s-8.png'];
        this.thirdRow = ['../../../assets/images/portrait/small/avatar-s-1.png',
            '../../../assets/images/portrait/small/avatar-s-2.png',
            '../../../assets/images/portrait/small/avatar-s-3.png'];
        this.fourthRow = ['../../../assets/images/portrait/small/avatar-s-11.png',
            '../../../assets/images/portrait/small/avatar-s-12.png'];
        this.fifthRow = ['../../../assets/images/portrait/small/avatar-s-6.png',
            '../../../assets/images/portrait/small/avatar-s-4.png'];
        this.rows = [
            {
                'type': 'danger', 'value': 85, 'product': 'iPhone X',
                'image': this.firstRow, 'buttonname': 'Mobile', 'amount': '$ 1200.00', 'bagde': '+8 more'
            },
            {
                'type': 'success', 'value': 75, 'product': 'iPad',
                'image': this.secondRow, 'buttonname': 'Teblet', 'amount': '$ 1190.00', 'bagde': '+5 more'
            },
            {
                'type': 'danger', 'value': 65, 'product': 'OnePlus',
                'image': this.thirdRow, 'buttonname': 'Mobile', 'amount': '$ 999.00', 'bagde': '+3 more'
            },
            {
                'type': 'success', 'value': 55, 'product': 'ZenPad',
                'image': this.fourthRow, 'buttonname': 'Teblet', 'amount': '$ 1150.00'
            },
            {
                'type': 'danger', 'value': 45, 'product': 'Pixel 2',
                'image': this.fifthRow, 'buttonname': 'Mobile', 'amount': '$ 1180.00'
            }
        ];
        this.Daygraph = true;
        this.Weekgraph = false;
        this.Monthgraph = false;
    }
    SalesComponent.prototype.ngOnInit = function () {
        // this.chartApiservice.getSalesData().subscribe(Response => {
        //    this.salesData = Response;
        //    this.getChartdata();
        //    });
    };
    SalesComponent.prototype.reloadRevenue = function () {
        var _this = this;
        this.blockUIRevenue.start('Loading..');
        setTimeout(function () {
            _this.blockUIRevenue.stop();
        }, 2500);
    };
    SalesComponent.prototype.reloadHitRate = function () {
        var _this = this;
        this.blockUIHitRate.start('Please Wait..');
        setTimeout(function () {
            _this.blockUIHitRate.stop();
        }, 2500);
    };
    SalesComponent.prototype.reloadEmail = function () {
        var _this = this;
        this.blockUIEmail.start();
        setTimeout(function () {
            _this.blockUIEmail.stop();
        }, 2500);
    };
    SalesComponent.prototype.rotueInvoice = function () {
        this.route.navigate(['/invoice/invoice-summary']);
    };
    SalesComponent.prototype.getChartdata = function () {
        var Chartdata = this.salesData;
        this.lineArea = {
            type: 'Line',
            data: Chartdata['lineArea'],
            options: {
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_4__["Interpolation"].simple({
                    divisor: 2.8
                }),
                fullWidth: true,
                height: '270px',
                showArea: false,
                showPoint: false,
                axisX: {
                    showGrid: false,
                    showLabel: true,
                    offset: 32
                },
                axisY: {
                    showGrid: true,
                    showLabel: true,
                    scaleMinSpace: 28,
                    offset: 44
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgb(255,73,97)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgb(255,73,97)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_4__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (26 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        this.earningchart = {
            type: 'Line',
            data: Chartdata['earningchart'],
            options: {
                chartPadding: 0,
                height: '440px',
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: -1
                },
                axisY: {
                    scaleMinSpace: 40,
                    showGrid: false,
                    showLabel: false,
                    offset: -2
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient1',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgb(255,73,97)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgb(255,73,97)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_4__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Doughnut
        this.donutChart2 = {
            type: 'Pie',
            data: Chartdata['donut1'],
            options: {
                chartPadding: 0,
                fullwidth: true,
                height: '273px',
                donut: true,
                showLabel: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = 82;
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        this.donutChart1 = {
            type: 'Pie',
            data: Chartdata['donut2'],
            options: {
                chartPadding: 0,
                fullwidth: true,
                height: '273px',
                donut: true,
                showLabel: true,
                labelInterpolationFnc: function (value) {
                    var total = 76;
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
    };
    SalesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    SalesComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"],] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true },] }],
        table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], { static: true },] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])('revenue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIRevenue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])('hitrate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIHitRate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])('email'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIEmail", void 0);
    SalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sales',
            template: _raw_loader_sales_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sales_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "4QQT":
/*!**********************************************************!*\
  !*** ./node_modules/ng-chartist/fesm2015/ng-chartist.js ***!
  \**********************************************************/
/*! exports provided: ChartistComponent, ChartistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartistComponent", function() { return ChartistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartistModule", function() { return ChartistModule; });
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Angular component which renders Chartist chart.
 *
 * See Chartist {\@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
 * {\@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
 * ### Example
 * ```html
 * <x-chartist
 * [type]="type"
 * [data]="data"
 * [options]="options"
 * [responsiveOptions]="responsiveOptions"
 * [events]="events"
 * ></x-chartist>
 * ```
 */



var ChartistComponent = /*#__PURE__*/function () {
  /**
   * @ignore
   * @param {?} elementRef
   */
  function ChartistComponent(elementRef) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartistComponent);

    this.elementRef = elementRef;
    /**
     * Event emitted after Chartist chart has been initialized.
     *
     * Event handler function will receive chart instance argument.
     */

    this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }
  /**
   * @ignore
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChartistComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.type && this.data) {
        this.renderChart();
      }
    }
    /**
     * @ignore
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.update(changes);
    }
    /**
     * @ignore
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.chart) {
        this.chart.detach();
        this.chart = null;
      }
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */

  }, {
    key: "renderChart",
    value: function renderChart() {
      /** @type {?} */
      var nativeElement = this.elementRef.nativeElement;

      if (!(this.type in chartist__WEBPACK_IMPORTED_MODULE_2__)) {
        throw new Error("".concat(this.type, " is not a valid chart type"));
      }

      this.chart =
      /** @type {?} */
      chartist__WEBPACK_IMPORTED_MODULE_2__[this.type](nativeElement, this.data, this.options, this.responsiveOptions);

      if (this.events) {
        this.bindEvents();
      }

      this.initialized.emit(this.chart);
    }
    /**
     * @ignore
     * @private
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "update",
    value: function update(changes) {
      if (!this.type || !this.data) {
        return;
      }

      if (!this.chart || 'type' in changes) {
        this.renderChart();
      } else if (changes.data || changes.options) {
        /** @type {?} */
        this.chart.update(this.data, this.options);
      }
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      for (var _i = 0, _Object$keys = Object.keys(this.events); _i < _Object$keys.length; _i++) {
        var event = _Object$keys[_i];
        this.chart.on(event, this.events[event]);
      }
    }
  }]);

  return ChartistComponent;
}();

ChartistComponent.ɵfac = function ChartistComponent_Factory(t) {
  return new (t || ChartistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
};

ChartistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChartistComponent,
  selectors: [["x-chartist"]],
  inputs: {
    data: "data",
    type: "type",
    options: "options",
    responsiveOptions: "responsiveOptions",
    events: "events"
  },
  outputs: {
    initialized: "initialized"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function ChartistComponent_Template(rf, ctx) {},
  styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
});
/** @nocollapse */

ChartistComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }];
};

ChartistComponent.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  responsiveOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  events: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  initialized: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ChartistComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'x-chartist',
      template: '',
      styles: ["\n      :host {\n        display: block;\n      }\n    "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }];
  }, {
    initialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ChartistModule = function ChartistModule() {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChartistModule);
};

ChartistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ChartistModule
});
ChartistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function ChartistModule_Factory(t) {
    return new (t || ChartistModule)();
  },
  imports: [[]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChartistModule, {
    declarations: [ChartistComponent],
    exports: [ChartistComponent]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ChartistModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [ChartistComponent],
      imports: [],
      exports: [ChartistComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "An5s":
/*!*******************************************************!*\
  !*** ./src/app/content/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/general/card/card.module */ "vj4e");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales/sales.component */ "3p/8");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__["MatchHeightModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_11__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_12__["BlockTemplateComponent"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]
                    },
                ])
            ],
            declarations: [_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "Zpak":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/dashboard/sales/sales.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n    </div>\n    <div class=\"content-body\">\n      Revenue, Hit Rate & Deals\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-12\">\n          <div class=\"Revenue\" *blockUI=\"'revenue'; message: 'Loading'\">\n          <m-card [options]=\"options\" (reloadFunction)=\"reloadRevenue($event)\">\n            <ng-container mCardHeaderTitle>\n              Revenue\n            </ng-container>\n            <ng-container mCardBody>\n              <div class=\"row mb-1\">\n                <div class=\"col-6 col-md-4\">\n                  <h5>Current week</h5>\n                  <h2 class=\"danger\">Rs.82,124</h2>\n                </div>\n                <div class=\"col-6 col-md-4\">\n                  <h5>Previous week</h5>\n                  <h2 class=\"text-muted\">Rs.52,502</h2>\n                </div>\n              </div>\n              <div class=\"chartist\">\n                <x-chartist *ngIf=\"lineArea\" [data]=\"lineArea.data\" [type]=\"lineArea.type\" [options]=\"lineArea.options\"\n                  [responsiveOptions]=\"lineArea.responsiveOptions\" [events]=\"lineArea.events\">\n                </x-chartist>\n              </div>\n            </ng-container>\n          </m-card>\n          </div>\n        </div>\n        <div class=\"col-xl-6 col-12\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-12 \">\n              <div class=\"HitRate\" *blockUI=\"'hitrate'; message: 'Loading'\">\n              <m-card [options]=\"hitRateOptions\" id=\"card\" (reloadFunction)=\"reloadHitRate($event)\">\n                <ng-container mCardHeaderTitle>\n                  Active Users <span class=\"danger\">12%</span>\n                </ng-container>\n                <ng-container mCardBody>\n                  <div id=\"donut-chart2\" class=\"height-230 donut-chart2\">\n                    <x-chartist *ngIf=\"donutChart2\" [data]=\"donutChart2.data\" [type]=\"donutChart2.type\" [options]=\"donutChart2.options\"\n                      [responsiveOptions]=\"donutChart2.responsiveOptions\" [events]=\"donutChart2.events\">\n                    </x-chartist>\n                  </div>\n                </ng-container>\n              </m-card>\n            </div>\n          </div>\n            <div class=\"col-md-6 col-12\">\n              <m-card [options]=\"dealsOptions\">\n                <ng-container mCardBody>\n                  <h4 class=\"card-title white\">Bokings <span class=\"white\">55%</span>\n                    <span class=\"float-right\">\n                        <span class=\"white\">152</span><span class=\"red lighten-4\">/200</span>\n                    </span>\n                  </h4>\n                  <div id=\"donut-chart1\" class=\"height-230 donut-chart1\">\n                    <x-chartist *ngIf=\"donutChart1\" [data]=\"donutChart1.data\" [type]=\"donutChart1.type\" [options]=\"donutChart1.options\"\n                      [responsiveOptions]=\"donutChart1.responsiveOptions\" [events]=\"donutChart1.events\">\n                    </x-chartist>\n                  </div>\n                </ng-container>\n              </m-card>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-12\">\n              <div class=\"card pull-up\">\n                <div class=\"card-content\">\n                  <div class=\"card-body\">\n                    <div class=\"media d-flex\">\n                      <div class=\"media-body text-left\">\n                        <h6 class=\"text-muted\">Hotels</h6>\n                        <h3>8,000</h3>\n                      </div>\n                      <div class=\"align-self-center\">\n                        <i class=\"la la-hotel success font-large-2 float-right\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-12\">\n              <div class=\"card pull-up\">\n                <div class=\"card-content\">\n                  <div class=\"card-body\">\n                    <div class=\"media d-flex\">\n                      <div class=\"media-body text-left\">\n                        <h6 class=\"text-muted\">Corporates</h6>\n                        <h3>3,568</h3>\n                      </div>\n                      <div class=\"align-self-center\">\n                        <i class=\"la la-building danger font-large-2 float-right\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/ Revenue, Hit Rate & Deals -->\n\n      <!-- Emails Products & Avg Deals -->\n      <!-- <div class=\"row\">\n        <div class=\"col-12 col-md-3\">\n          <div class=\"EmailRate\" *blockUI=\"'email'; message: 'Updating'\">\n          <m-card [options]=\"emailsOptions\" (reloadFunction)=\"reloadEmail($event)\">\n            <ng-container mCardHeaderTitle>\n              Leads\n            </ng-container>\n            <ng-container mCardBody>\n              <p>Corporate <span class=\"float-right text-bold-600\">89%</span></p>\n              <ngb-progressbar height=\"7px\" type=\"danger\" [value]=\"89\"></ngb-progressbar>\n              <p class=\"pt-1\">Hotels <span class=\"float-right\"><span class=\"text-bold-600\">310</span>/500</span>\n              </p>\n              <ngb-progressbar height=\"7px\" type=\"success\" [value]=\"50\"></ngb-progressbar>\n            </ng-container>\n          </m-card>\n        </div>\n        </div>\n        <div class=\"col-12 col-md-3\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Top Hotels</h4>\n              <div class=\"heading-elements\">\n                <ul class=\"list-inline mb-0\">\n                  <li><a class=\"info\">Bookings</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-content collapse show\">\n              <div class=\"card-body p-0\">\n                  <div class=\"table-responsive\">\n                  <table class=\"table mb-0\">\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\" class=\"border-top-0\">Royal Arcade</th>\n                        <td class=\"border-top-0\">2245</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Leela Palace</th>\n                        <td>1850</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Vivanta</th>\n                        <td>1550</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title text-center\">Average Bookings</h4>\n            </div>\n            <div class=\"card-content collapse show\">\n              <div class=\"card-body pt-0\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 col-12 border-right-blue-grey border-right-lighten-5 text-center\">\n                    <h6 class=\"danger text-bold-600\">-30%</h6>\n                    <h4 class=\"font-large-2 text-bold-400\">Rs.12,536</h4>\n                    <p class=\"blue-grey lighten-2 mb-0\">Per user</p>\n                  </div>\n                  <div class=\"col-md-6 col-12 text-center\">\n                    <h6 class=\"success text-bold-600\">12%</h6>\n                    <h4 class=\"font-large-2 text-bold-400\">Rs.18,548</h4>\n                    <p class=\"blue-grey lighten-2 mb-0\">Per team</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>  -->\n      <!--/ Emails Products & Avg Deals -->\n\n      <!-- Total earning & Recent Sales  -->\n      <!-- <div class=\"row\"> -->\n        <!-- <div class=\"col-12 col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <div class=\"earning-chart position-relative\">\n                <div class=\"chart-title position-absolute mt-2 ml-2\">\n                  <h1 class=\"display-4\">$1,596</h1>\n                  <span class=\"text-muted\">Total Earning</span>\n                </div>\n                <div id=\"cost-revenue\" class=\"earningchart position-relative\">\n                  <x-chartist *ngIf=\"earningchart\" [data]=\"earningchart.data\" [type]=\"earningchart.type\" [options]=\"earningchart.options\"\n                    [responsiveOptions]=\"earningchart.responsiveOptions\" [events]=\"earningchart.events\">\n                  </x-chartist>\n                </div>\n                <div class=\"chart-stats position-absolute position-bottom-0 position-right-0 mb-2 mr-3\">\n                  <a [routerLink]=\"\" class=\"btn round btn-danger mr-1 btn-glow\">Statistics <i class=\"feather ft-bar-chart\"></i></a>\n                  <span class=\"text-muted\">for the <a [routerLink]=\"\" class=\"danger darken-2\">last year.</a></span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div id=\"recent-sales\" class=\"col-12 col-md-8\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Recent Sales</h4>\n              <div class=\"heading-elements\">\n                <ul class=\"list-inline mb-0\">\n                  <li><a [routerLink]=\"\" class=\"btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right\" (click)=\"rotueInvoice()\">View\n                      all</a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-content mt-1\">\n                <div class=\"table-responsive\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n                    <table class=\"table border_bottom table-hover\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\" class=\"border-top-0\">Product</th>\n                          <th scope=\"col\" class=\"border-top-0\">Customers</th>\n                          <th scope=\"col\" class=\"border-top-0\">Categories</th>\n                          <th scope=\"col\" class=\"border-top-0\">Popularity</th>\n                          <th scope=\"col\" class=\"border-top-0\">Amount</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let row of rows\">\n                          <td class=\"text-truncate\">\n                            {{row.product}}\n                          </td>\n                          <td class=\"text-truncate p-1\">\n                              <ul class=\"list-unstyled users-list m-0\">\n                                  <li class=\"avatar avatar-sm pull-up\" *ngFor=\"let imageUrl of row.image\">\n                                    <img class=\"media-object rounded-circle\" [src]=\"imageUrl\" alt=\"Avatar\">\n                                  </li>\n                                </ul>\n                          </td>\n                          <td class=\"text-truncate\">\n                            <span>\n                              <button type=\"button\"\n                                class=\"btn btn-sm btn-outline-{{row.type}} round\">{{row.buttonname}}</button>\n                            </span>\n                          </td>\n                          <td class=\"text-truncate\">\n                              <ngb-progressbar height=\"7px\" type=\"{{row.type}}\" [value]=row.value>\n                                </ngb-progressbar>\n                          </td>\n                          <td class=\"text-truncate\">{{ row.amount }} </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n            </div>\n          </div>\n        </div> -->\n      <!-- </div>\n      <!--/ Total earning & Recent Sales  -->\n    <!-- </div>\n  </div>\n</div>  -->\n<!-- ////////////////////////////////////////////////////////////////////////////-->\n");

/***/ }),

/***/ "ttYL":
/*!*************************************************************!*\
  !*** ./src/app/content/dashboard/sales/sales.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .chartist .ct-series-a .ct-line {\n\n    stroke: url(#gradient2);\n    stroke-linecap: round;\n    /* -webkit-filter: drop-shadow(0px 20px 11px rgba(0, 0, 0, 0.5)) !important; */\n   }\n:host ::ng-deep .chartist {\n    filter: drop-shadow(0px 20px 11px rgba(252, 198, 198, 0.8)) !important;\n}\n:host ::ng-deep .chartist .ct-grid{\n    stroke-dasharray: 0px;\n    stroke: rgba(0, 0, 0, 0.4);\n    stroke-width: 0.6px;\n}\n:host ::ng-deep .chartist .ct-series-b .ct-line {\n    stroke: #c8c2c3;\n    stroke-dasharray: 8px 3px;\n}\n:host ::ng-deep .chartist .ct-label.ct-vertical.ct-start {\n    font-weight: 600;\n    color: #636161;\n    font-size: 12px;\n}\n:host ::ng-deep .earningchart .ct-series-a .ct-area {\n    fill: rgba(255,117,136,1);\n}\n:host ::ng-deep .earningchart .ct-series-a .ct-point-circle {\n    stroke-width: 3px;\n    stroke: #FF4961;\n    fill: #ffffff;\n  }\n:host ::ng-deep .earningchart .ct-series-a .ct-line {\n    stroke: #FF4961;\n    stroke-width: 3px;\n}\n:host ::ng-deep .avatar-xs {\n  width: 32px !important;\n  border: 2px solid #FFF;\n}\n:host ::ng-deep .donut-chart2{\n    margin-bottom: -25px;\n    margin-top: -17px;\n}\n:host ::ng-deep .donut-chart2 .ct-series-a .ct-slice-donut {\n    stroke: #28d094;\n    stroke-width: 5.5px !important;\n}\n:host ::ng-deep .donut-chart2 .ct-series-b .ct-slice-donut {\n    stroke: #ff4961;\n    stroke-width: 5.5px !important;\n}\n:host ::ng-deep .donut-chart2 {\nfilter: drop-shadow(0px 10px 11px rgba(187,187,187));\n}\n:host ::ng-deep .donut-chart1 {\n    margin-bottom: -25px;\n    margin-top: -17px;\n}\n:host ::ng-deep .donut-chart1 .ct-series-a .ct-slice-donut {\n    stroke: #ff7889;\n    stroke-width: 5.5px !important;\n}\n:host ::ng-deep .donut-chart1 .ct-series-b .ct-slice-donut {\n    stroke: #ffffff;\n    stroke-width: 5.5px !important;\n}\n:host ::ng-deep .donut-chart1 .ct-label {\n    fill: #ffffff;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1.75rem;\n    line-height: 1;\n}\n:host ::ng-deep .donut-chart2 .ct-label {\n    fill: #ff4b62;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1.75rem;\n    line-height: 1;\n}\n:host ::ng-deep .position-relative {\n    position: relative !important;\n    margin-left: 0px;\n\n}\n:host ::ng-deep .pt-1,\n.py-1 {\n    padding-top: 0rem !important;\n}\n:host ::ng-deep .chartist .ct-label.ct-horizontal.ct-end {\n    /* align-items: flex-start;\n    justify-content: flex-start;\n    text-align: left;\n    text-anchor: start; */\n    font-weight: 600;\n    color: #636161;\n    font-size: 12px;\n    font-family: sans-serif;\n}\n:host ::ng-deep .container > .ct-chart .ct-series.ct-series-c .ct-line {\n    stroke-width: 2px;\n    stroke-dasharray: 20px 180px;\n    stroke: #28d094;\n    -webkit-animation: draw 0.3s linear infinite;\n            animation: draw 0.3s linear infinite;\n}\n@-webkit-keyframes draw {\n    from {\n        stroke-dashoffset: 200\n    }\n\n    to {\n        stroke-dashoffset: 0;\n    }\n}\n@keyframes draw {\n    from {\n        stroke-dashoffset: 200\n    }\n\n    to {\n        stroke-dashoffset: 0;\n    }\n}\n:host ::ng-deep .ct-series-c .ct-point,\n.ct-series-c .ct-line,\n.ct-series-c .ct-bar,\n.ct-series-c .ct-slice-donut {\n    stroke: #28d094;\n}\n:host ::ng-deep .ct-chart .ct-series.ct-series-c .ct-line {\n    stroke: #28d094;\n\n}\n:host ::ng-deep .ct-series-b .ct-point,\n.ct-series-b .ct-line,\n.ct-series-b .ct-bar,\n.ct-series-b .ct-slice-donut {\n    stroke: #ff4961;\n}\n:host ::ng-deep .container > .ct-chart .ct-series.ct-series-a .ct-line {\n    stroke-dasharray: 5px;\n    -webkit-animation: dash 4s linear infinite;\n            animation: dash 4s linear infinite;\n\n}\n@-webkit-keyframes dash {\n    to {\n        stroke-dashoffset: 2000;\n    }\n}\n@keyframes dash {\n    to {\n        stroke-dashoffset: 2000;\n    }\n}\n:host ::ng-deep .ct-chart .ct-point {\n    stroke-width: 10px;\n    stroke-linecap: round;\n}\n:host ::ng-deep .container >  .ct-chart .ct-series.ct-series-b .ct-line {\n    stroke-width: 10px;\n    stroke-dasharray: 15px 5px;\n    -webkit-animation: draw 4s linear infinite;\n            animation: draw 4s linear infinite;\n}\n@keyframes draw {\n    from {\n        stroke-dashoffset: 100\n    }\n\n    to {\n        stroke-dashoffset: 0;\n    }\n}\n:host ::ng-deep .container {\n   max-width: 100% !important;\n}\n:host ::ng-deep .btn.gradient-blackberry.active,\n.gradient-blackberry {\n    background-color: #f05b4f;\n\n}\n:host ::ng-deep .Visit {\n\n    background-color: #28d094;\n\n}\n:host ::ng-deep .Sales {\n    /* background-image: linear-gradient(45deg,#843cf7,#38b8f2)!important; */\n    background-color: #d70206;\n\n}\n:host ::ng-deep .col-md-11 {\n    padding-right: 0 !important;\n}\n:host ::ng-deep .col-md-1 {\n    padding-left: 0 !important;\n}\n:host ::ng-deep .box-shadow-0 .ct-label.ct-vertical.ct-start {\n\n    font-weight: bold;\n    color: #6e6e6e;\n    font-size: 12px;\n}\n:host ::ng-deep .box-shadow-0 .ct-label.ct-horizontal.ct-end {\n\n    font-weight: bold;\n    color: #6e6e6e;\n    font-size: 12px;\n}\n:host ::ng-deep .text-truncate {\n  padding: 0.9rem 2rem;\n}\n.mr-2 {\n  margin-left: 1rem !important;\n  margin-right: 0rem !important;\n}\n.mt-2 {\n  margin-top : 1.5rem !important;\n}\n.ml-2 {\n  margin-left : 2rem !important;\n}\n:host ::ng-deep .my-custom-cell {\n  padding-right: 6% !important;\n  padding-top: 1.5% !important;\n}\n:host ::ng-deep .border_bottom {\n  margin-bottom: 0rem !important;\n}\n:host ::ng-deep .border-top-0 {\n  padding: 1.25rem 2rem !important;\n}\n:host ::ng-deep .progress {\n  box-shadow: 0 10px 18px 0 rgba(62, 57, 107, .2);\n  margin-top: 1rem!important;\n}\n:host ::ng-deep .btn-danger {\n  color: #FFF !important;\n}\n:host ::ng-deep .users-list li + li {\n  margin-left: -10px !important;\n}\n:host ::ng-deep .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n:host ::ng-deep .ps--active-x > .ps__rail-x {\n  display: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiw4RUFBOEU7R0FDL0U7QUFDSDtJQUNJLHNFQUFzRTtBQUMxRTtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7RUFDZjtBQUVGO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQztBQUNBO0FBRUksb0RBQW9EO0FBQ3hEO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCOztBQUVwQjtBQUVBOztJQUVJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0k7Ozt5QkFHcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjtBQVJBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7QUFFQTs7OztJQUlJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7O0FBRW5CO0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMENBQWtDO1lBQWxDLGtDQUFrQzs7QUFFdEM7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7QUFKQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0QztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7QUFHQTtHQUNHLDBCQUEwQjtBQUM3QjtBQUNBOztJQUVJLHlCQUF5Qjs7QUFFN0I7QUFFQTs7SUFFSSx5QkFBeUI7O0FBRTdCO0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUseUJBQXlCOztBQUU3QjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFHQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUdBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2hhcnRpc3QgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcblxuICAgIHN0cm9rZTogdXJsKCNncmFkaWVudDIpO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAvKiAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuNSkpICFpbXBvcnRhbnQ7ICovXG4gICB9XG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0IHtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDExcHggcmdiYSgyNTIsIDE5OCwgMTk4LCAwLjgpKSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0IC5jdC1ncmlke1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBzdHJva2Utd2lkdGg6IDAuNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jaGFydGlzdCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogI2M4YzJjMztcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4cHggM3B4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0IC5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1zdGFydCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzYzNjE2MTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmVhcm5pbmdjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGw6IHJnYmEoMjU1LDExNywxMzYsMSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmVhcm5pbmdjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xuICAgIGZpbGw6ICNmZmZmZmY7XG4gIH1cblxuOmhvc3QgOjpuZy1kZWVwIC5lYXJuaW5nY2hhcnQgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2U6ICNGRjQ5NjE7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYXZhdGFyLXhzIHtcbiAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQye1xuICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIge1xuLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDExcHggcmdiYSgxODcsMTg3LDE4NykpICFpbXBvcnRhbnQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTBweCAxMXB4IHJnYmEoMTg3LDE4NywxODcpKTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmNzg4OTtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1sYWJlbCB7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIgLmN0LWxhYmVsIHtcbiAgICBmaWxsOiAjZmY0YjYyO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAucHQtMSxcbi5weS0xIHtcbiAgICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0IC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZCB7XG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1hbmNob3I6IHN0YXJ0OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM2MzYxNjE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyID4gLmN0LWNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWMgLmN0LWxpbmUge1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIwcHggMTgwcHg7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xuICAgIGFuaW1hdGlvbjogZHJhdyAwLjNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBkcmF3IHtcbiAgICBmcm9tIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMFxuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LXNlcmllcy1jIC5jdC1wb2ludCxcbi5jdC1zZXJpZXMtYyAuY3QtbGluZSxcbi5jdC1zZXJpZXMtYyAuY3QtYmFyLFxuLmN0LXNlcmllcy1jIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LWNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWMgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1wb2ludCxcbi5jdC1zZXJpZXMtYiAuY3QtbGluZSxcbi5jdC1zZXJpZXMtYiAuY3QtYmFyLFxuLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjZmY0OTYxO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciA+IC5jdC1jaGFydCAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1cHg7XG4gICAgYW5pbWF0aW9uOiBkYXNoIDRzIGxpbmVhciBpbmZpbml0ZTtcblxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDA7XG4gICAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LWNoYXJ0IC5jdC1wb2ludCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIgPiAgLmN0LWNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xuICAgIHN0cm9rZS13aWR0aDogMTBweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNXB4IDVweDtcbiAgICBhbmltYXRpb246IGRyYXcgNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGRyYXcge1xuICAgIGZyb20ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwXG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi5ncmFkaWVudC1ibGFja2JlcnJ5LmFjdGl2ZSxcbi5ncmFkaWVudC1ibGFja2JlcnJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1YjRmO1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAuVmlzaXQge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZDA5NDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLlNhbGVzIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzg0M2NmNywjMzhiOGYyKSFpbXBvcnRhbnQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDIwNjtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbC1tZC0xMSB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbC1tZC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ib3gtc2hhZG93LTAgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LXN0YXJ0IHtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNmU2ZTZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ib3gtc2hhZG93LTAgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3QtZW5kIHtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNmU2ZTZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtdHJ1bmNhdGUge1xuICBwYWRkaW5nOiAwLjlyZW0gMnJlbTtcbn1cblxuLm1yLTIge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTIge1xuICBtYXJnaW4tdG9wIDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQgOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubXktY3VzdG9tLWNlbGwge1xuICBwYWRkaW5nLXJpZ2h0OiA2JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMS41JSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJvcmRlcl9ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYm9yZGVyLXRvcC0wIHtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucHJvZ3Jlc3Mge1xuICBib3gtc2hhZG93OiAwIDEwcHggMThweCAwIHJnYmEoNjIsIDU3LCAxMDcsIC4yKTtcbiAgbWFyZ2luLXRvcDogMXJlbSFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWRhbmdlciB7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudXNlcnMtbGlzdCBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "w9WL":
/*!*********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js ***!
  \*********************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "t7fG");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



var _c0 = ["*"];

function DataTableBodyComponent_datatable_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "datatable-progress");
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "datatable-summary-row", 9);
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r12.onTreeAction(group_r7);
    })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

      return _r0.onActivate($event, ctx_r15.indexes.first + i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isSelected", _r0.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7.treeStatus);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      var i_r20 = ctx.index;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);

      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

      return _r0.onActivate($event, i_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r19 = ctx.$implicit;
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isSelected", _r0.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
  }

  if (rf & 2) {
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r25.rowContextmenu.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r7 = ctx.$implicit;
    var i_r8 = ctx.index;

    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "datatable-summary-row", 16);
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r27.onBodyScroll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
  }
}

function DataTableBodyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 17);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var column_r3 = ctx.$implicit;
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r4.onColumnResized($event, column_r3);
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r6.onLongPressStart($event);
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r7.onLongPressEnd($event);
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r8.onSort($event);
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r9.select.emit($event);
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r10.columnContextmenu.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var column_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}

function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 18, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r2.onColumnSort($event);
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r4.onColumnResize($event);
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r5.onColumnReorder($event);
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r6.onHeaderSelect($event);
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r7.onColumnContextmenu($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 14, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}

function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.onFooterPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}

function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}

function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r5.select.emit(!ctx_r5.allRowsSelected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
  }
}

function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r7.onSort();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

var _c1 = function _c1(a0, a1, a2, a3, a4) {
  return {
    rowCount: a0,
    pageSize: a1,
    selectedCount: a2,
    curPage: a3,
    offset: a4
  };
};

function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}

function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}

function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}

function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r5.page.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}

var _c2 = function _c2(a0) {
  return {
    "selected-count": a0
  };
};

function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      var pg_r1 = ctx.$implicit;
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r2.selectPage(pg_r1.number);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pg_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
  }
}

function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      var ii_r5 = ctx.index;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r6.onActivate($event, ii_r5);
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r8.onTreeAction();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var column_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
  }
}

function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}

function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}

function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || (!groupHeader || !groupHeader.template)"]);
  }
}

function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}

function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}

var _c3 = ["cellTemplate"];

function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r4.onCheckboxChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r0.isSelected);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 11);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 12);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r11.onTreeAction();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
  }
}

function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

var _c4 = function _c4(a0) {
  return {
    cellContext: a0
  };
};

function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
  }
}

function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
  }
}

function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 15);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableBodyCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "datatable-body-row", 1);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
  }
}

var ScrollbarHelper = /*#__PURE__*/function () {
  /**
   * @param {?} document
   */
  function ScrollbarHelper(document) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ScrollbarHelper);

    this.document = document;
    this.width = this.getWidth();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollbarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      /** @type {?} */
      var outer = this.document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.msOverflowStyle = 'scrollbar';
      this.document.body.appendChild(outer);
      /** @type {?} */

      var widthNoScroll = outer.offsetWidth;
      outer.style.overflow = 'scroll';
      /** @type {?} */

      var inner = this.document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);
      /** @type {?} */

      var widthWithScroll = inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      return widthNoScroll - widthWithScroll;
    }
  }]);

  return ScrollbarHelper;
}();

ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
  return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
};

ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ScrollbarHelper,
  factory: ScrollbarHelper.ɵfac
});
/** @nocollapse */

ScrollbarHelper.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */


var DimensionsHelper = /*#__PURE__*/function () {
  function DimensionsHelper() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DimensionsHelper);
  }

  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DimensionsHelper, [{
    key: "getDimensions",

    /**
     * @param {?} element
     * @return {?}
     */
    value: function getDimensions(element) {
      return element.getBoundingClientRect();
    }
  }]);

  return DimensionsHelper;
}();

DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
  return new (t || DimensionsHelper)();
};

DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DimensionsHelper,
  factory: DimensionsHelper.ɵfac
});
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */

var ColumnChangesService = /*#__PURE__*/function () {
  function ColumnChangesService() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ColumnChangesService);

    this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnChangesService, [{
    key: "onInputChange",

    /**
     * @return {?}
     */
    value: function onInputChange() {
      this.columnInputChanges.next();
    }
  }, {
    key: "columnInputChanges$",
    get: function get() {
      return this.columnInputChanges.asObservable();
    }
  }]);

  return ColumnChangesService;
}();

ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
  return new (t || ColumnChangesService)();
};

ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ColumnChangesService,
  factory: ColumnChangesService.ɵfac
});

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableFooterTemplateDirective =
/**
 * @param {?} template
 */
function DataTableFooterTemplateDirective(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableFooterTemplateDirective);

  this.template = template;
};

DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
  return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DataTableFooterTemplateDirective,
  selectors: [["", "ngx-datatable-footer-template", ""]]
});
/** @nocollapse */

DataTableFooterTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */


var VisibilityDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   * @param {?} zone
   */
  function VisibilityDirective(element, zone) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VisibilityDirective);

    this.element = element;
    this.zone = zone;
    this.isVisible = false;
    this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(VisibilityDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.runCheck();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      clearTimeout(this.timeout);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      var _this = this;

      // trigger zone recalc for columns
      this.zone.run(
      /**
      * @return {?}
      */
      function () {
        _this.isVisible = true;

        _this.visible.emit(true);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "runCheck",
    value: function runCheck() {
      var _this2 = this;

      /** @type {?} */
      var check =
      /**
      * @return {?}
      */
      function check() {
        // https://davidwalsh.name/offsetheight-visibility
        var _this2$element$native = _this2.element.nativeElement,
            offsetHeight = _this2$element$native.offsetHeight,
            offsetWidth = _this2$element$native.offsetWidth;

        if (offsetHeight && offsetWidth) {
          clearTimeout(_this2.timeout);

          _this2.onVisibilityChange();
        } else {
          clearTimeout(_this2.timeout);

          _this2.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this2.timeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return check();
            }, 50);
          });
        }
      };

      this.timeout = setTimeout(
      /**
      * @return {?}
      */
      function () {
        return check();
      });
    }
  }]);

  return VisibilityDirective;
}();

VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
  return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
};

VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: VisibilityDirective,
  selectors: [["", "visibilityObserver", ""]],
  hostVars: 2,
  hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("visible", ctx.isVisible);
    }
  },
  outputs: {
    visible: "visible"
  }
});
/** @nocollapse */

VisibilityDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }];
};

VisibilityDirective.propDecorators = {
  isVisible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.visible']
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */


var DraggableDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function DraggableDirective(element) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DraggableDirective);

    this.dragX = true;
    this.dragY = true;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.isDragging = false;
    this.element = element.nativeElement;
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DraggableDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
        this.onMousedown(changes['dragEventTarget'].currentValue);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroySubscription();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMouseup",
    value: function onMouseup(event) {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.element.classList.remove('dragging');

      if (this.subscription) {
        this._destroySubscription();

        this.dragEnd.emit({
          event: event,
          element: this.element,
          model: this.dragModel
        });
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMousedown",
    value: function onMousedown(event) {
      var _this3 = this;

      // we only want to drag the inner header text

      /** @type {?} */
      var isDragElm =
      /** @type {?} */
      event.target.classList.contains('draggable');

      if (isDragElm && (this.dragX || this.dragY)) {
        event.preventDefault();
        this.isDragging = true;
        /** @type {?} */

        var mouseDownPos = {
          x: event.clientX,
          y: event.clientY
        };
        /** @type {?} */

        var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe(
        /**
        * @param {?} ev
        * @return {?}
        */
        function (ev) {
          return _this3.onMouseup(ev);
        });
        /** @type {?} */

        var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(mouseup)).subscribe(
        /**
        * @param {?} ev
        * @return {?}
        */
        function (ev) {
          return _this3.move(ev, mouseDownPos);
        });
        this.subscription.add(mouseMoveSub);
        this.dragStart.emit({
          event: event,
          element: this.element,
          model: this.dragModel
        });
      }
    }
    /**
     * @param {?} event
     * @param {?} mouseDownPos
     * @return {?}
     */

  }, {
    key: "move",
    value: function move(event, mouseDownPos) {
      if (!this.isDragging) return;
      /** @type {?} */

      var x = event.clientX - mouseDownPos.x;
      /** @type {?} */

      var y = event.clientY - mouseDownPos.y;
      if (this.dragX) this.element.style.left = "".concat(x, "px");
      if (this.dragY) this.element.style.top = "".concat(y, "px");
      this.element.classList.add('dragging');
      this.dragging.emit({
        event: event,
        element: this.element,
        model: this.dragModel
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_destroySubscription",
    value: function _destroySubscription() {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
    }
  }]);

  return DraggableDirective;
}();

DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
};

DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "draggable", ""]],
  inputs: {
    dragX: "dragX",
    dragY: "dragY",
    dragEventTarget: "dragEventTarget",
    dragModel: "dragModel"
  },
  outputs: {
    dragStart: "dragStart",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DraggableDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }];
};

DraggableDirective.propDecorators = {
  dragEventTarget: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  dragModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  dragX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  dragY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  dragStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  dragging: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  dragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/* tslint:disable */

/** @type {?} */


var MouseEvent =
/** @type {?} */
(
/** @type {?} */
typeof window !== 'undefined' && window ||
/** @type {?} */
global).MouseEvent;
/** @type {?} */

var KeyboardEvent =
/** @type {?} */
(
/** @type {?} */
typeof window !== 'undefined' && window ||
/** @type {?} */
global).KeyboardEvent;
/** @type {?} */

var Event =
/** @type {?} */
(
/** @type {?} */
typeof window !== 'undefined' && window ||
/** @type {?} */
global).Event;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var ResizeableDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   * @param {?} renderer
   */
  function ResizeableDirective(element, renderer) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ResizeableDirective);

    this.renderer = renderer;
    this.resizeEnabled = true;
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.resizing = false;
    this.element = element.nativeElement;
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ResizeableDirective, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      /** @type {?} */
      var renderer2 = this.renderer;
      this.resizeHandle = renderer2.createElement('span');

      if (this.resizeEnabled) {
        renderer2.addClass(this.resizeHandle, 'resize-handle');
      } else {
        renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
      }

      renderer2.appendChild(this.element, this.resizeHandle);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroySubscription();

      if (this.renderer.destroyNode) {
        this.renderer.destroyNode(this.resizeHandle);
      } else {
        this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onMouseup",
    value: function onMouseup() {
      this.resizing = false;

      if (this.subscription && !this.subscription.closed) {
        this._destroySubscription();

        this.resize.emit(this.element.clientWidth);
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMousedown",
    value: function onMousedown(event) {
      var _this4 = this;

      /** @type {?} */
      var isHandle =
      /** @type {?} */
      event.target.classList.contains('resize-handle');
      /** @type {?} */

      var initialWidth = this.element.clientWidth;
      /** @type {?} */

      var mouseDownScreenX = event.screenX;

      if (isHandle) {
        event.stopPropagation();
        this.resizing = true;
        /** @type {?} */

        var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe(
        /**
        * @param {?} ev
        * @return {?}
        */
        function (ev) {
          return _this4.onMouseup();
        });
        /** @type {?} */

        var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(mouseup)).subscribe(
        /**
        * @param {?} e
        * @return {?}
        */
        function (e) {
          return _this4.move(e, initialWidth, mouseDownScreenX);
        });
        this.subscription.add(mouseMoveSub);
      }
    }
    /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */

  }, {
    key: "move",
    value: function move(event, initialWidth, mouseDownScreenX) {
      /** @type {?} */
      var movementX = event.screenX - mouseDownScreenX;
      /** @type {?} */

      var newWidth = initialWidth + movementX;
      /** @type {?} */

      var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
      /** @type {?} */

      var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

      if (overMinWidth && underMaxWidth) {
        this.element.style.width = "".concat(newWidth, "px");
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_destroySubscription",
    value: function _destroySubscription() {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
    }
  }]);

  return ResizeableDirective;
}();

ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
  return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
};

ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: ResizeableDirective,
  selectors: [["", "resizeable", ""]],
  hostVars: 2,
  hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    }
  },
  inputs: {
    resizeEnabled: "resizeEnabled",
    minWidth: "minWidth",
    maxWidth: "maxWidth"
  },
  outputs: {
    resize: "resize"
  }
});
/** @nocollapse */

ResizeableDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
  }];
};

ResizeableDirective.propDecorators = {
  resizeEnabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  minWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  maxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  resize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  onMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['mousedown', ['$event']]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var OrderableDirective = /*#__PURE__*/function () {
  /**
   * @param {?} differs
   * @param {?} document
   */
  function OrderableDirective(differs, document) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, OrderableDirective);

    this.document = document;
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.differ = differs.find({}).create();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(OrderableDirective, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      // HACK: Investigate Better Way
      this.updateSubscriptions();
      this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.draggables.forEach(
      /**
      * @param {?} d
      * @return {?}
      */
      function (d) {
        d.dragStart.unsubscribe();
        d.dragging.unsubscribe();
        d.dragEnd.unsubscribe();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "updateSubscriptions",
    value: function updateSubscriptions() {
      var _this5 = this;

      /** @type {?} */
      var diffs = this.differ.diff(this.createMapDiffs());

      if (diffs) {
        /** @type {?} */
        var subscribe =
        /**
        * @param {?} __0
        * @return {?}
        */
        function subscribe(_ref) {
          var currentValue = _ref.currentValue,
              previousValue = _ref.previousValue;
          unsubscribe({
            previousValue: previousValue
          });

          if (currentValue) {
            currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
            currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
            currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
          }
        };
        /** @type {?} */


        var unsubscribe =
        /**
        * @param {?} __0
        * @return {?}
        */
        function unsubscribe(_ref2) {
          var previousValue = _ref2.previousValue;

          if (previousValue) {
            previousValue.dragStart.unsubscribe();
            previousValue.dragging.unsubscribe();
            previousValue.dragEnd.unsubscribe();
          }
        };

        diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

        diffs.forEachRemovedItem(unsubscribe);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onDragStart",
    value: function onDragStart() {
      this.positions = {};
      /** @type {?} */

      var i = 0;

      var _iterator = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.draggables.toArray()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dragger = _step.value;

          /** @type {?} */
          var elm = dragger.element;
          /** @type {?} */

          var left = parseInt(elm.offsetLeft.toString(), 0);
          this.positions[dragger.dragModel.prop] = {
            left: left,
            right: left + parseInt(elm.offsetWidth.toString(), 0),
            index: i++,
            element: elm
          };
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onDragging",
    value: function onDragging(_ref3) {
      var element = _ref3.element,
          model = _ref3.model,
          event = _ref3.event;

      /** @type {?} */
      var prevPos = this.positions[model.prop];
      /** @type {?} */

      var target = this.isTarget(model, event);

      if (target) {
        if (this.lastDraggingIndex !== target.i) {
          this.targetChanged.emit({
            prevIndex: this.lastDraggingIndex,
            newIndex: target.i,
            initialIndex: prevPos.index
          });
          this.lastDraggingIndex = target.i;
        }
      } else if (this.lastDraggingIndex !== prevPos.index) {
        this.targetChanged.emit({
          prevIndex: this.lastDraggingIndex,
          initialIndex: prevPos.index
        });
        this.lastDraggingIndex = prevPos.index;
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onDragEnd",
    value: function onDragEnd(_ref4) {
      var element = _ref4.element,
          model = _ref4.model,
          event = _ref4.event;

      /** @type {?} */
      var prevPos = this.positions[model.prop];
      /** @type {?} */

      var target = this.isTarget(model, event);

      if (target) {
        this.reorder.emit({
          prevIndex: prevPos.index,
          newIndex: target.i,
          model: model
        });
      }

      this.lastDraggingIndex = undefined;
      element.style.left = 'auto';
    }
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "isTarget",
    value: function isTarget(model, event) {
      var _this6 = this;

      /** @type {?} */
      var i = 0;
      /** @type {?} */

      var x = event.x || event.clientX;
      /** @type {?} */

      var y = event.y || event.clientY;
      /** @type {?} */

      var targets = this.document.elementsFromPoint(x, y);

      var _loop = function _loop(prop) {
        // current column position which throws event.

        /** @type {?} */
        var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

        if (model.prop !== prop && targets.find(
        /**
        * @param {?} el
        * @return {?}
        */
        function (el) {
          return el === pos.element;
        })) {
          return {
            v: {
              pos: pos,
              i: i
            }
          };
        }

        i++;
      };

      for (var prop in this.positions) {
        var _ret = _loop(prop);

        if (typeof _ret === "object") return _ret.v;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "createMapDiffs",
    value: function createMapDiffs() {
      return this.draggables.toArray().reduce(
      /**
      * @param {?} acc
      * @param {?} curr
      * @return {?}
      */
      function (acc, curr) {
        acc[curr.dragModel.$$id] = curr;
        return acc;
      }, {});
    }
  }]);

  return OrderableDirective;
}();

OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
  return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
};

OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: OrderableDirective,
  selectors: [["", "orderable", ""]],
  contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    }
  },
  outputs: {
    reorder: "reorder",
    targetChanged: "targetChanged"
  }
});
/** @nocollapse */

OrderableDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }];
};

OrderableDirective.propDecorators = {
  reorder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  targetChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  draggables: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
    args: [DraggableDirective, {
      descendants: true
    }]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var LongPressDirective = /*#__PURE__*/function () {
  function LongPressDirective() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LongPressDirective);

    this.pressEnabled = true;
    this.duration = 500;
    this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.mouseX = 0;
    this.mouseY = 0;
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LongPressDirective, [{
    key: "onMouseDown",

    /**
     * @param {?} event
     * @return {?}
     */
    value: function onMouseDown(event) {
      var _this7 = this;

      // don't do right/middle clicks
      if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

      /** @type {?} */

      var target =
      /** @type {?} */
      event.target;
      if (target.classList.contains('resize-handle')) return;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.pressing = true;
      this.isLongPressing = false;
      /** @type {?} */

      var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mouseup');
      this.subscription = mouseup.subscribe(
      /**
      * @param {?} ev
      * @return {?}
      */
      function (ev) {
        return _this7.onMouseup();
      });
      this.timeout = setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this7.isLongPressing = true;

        _this7.longPressStart.emit({
          event: event,
          model: _this7.pressModel
        });

        _this7.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(mouseup)).subscribe(
        /**
        * @param {?} mouseEvent
        * @return {?}
        */
        function (mouseEvent) {
          return _this7.onMouseMove(mouseEvent);
        }));

        _this7.loop(event);
      }, this.duration);
      this.loop(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (this.pressing && !this.isLongPressing) {
        /** @type {?} */
        var xThres = Math.abs(event.clientX - this.mouseX) > 10;
        /** @type {?} */

        var yThres = Math.abs(event.clientY - this.mouseY) > 10;

        if (xThres || yThres) {
          this.endPress();
        }
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "loop",
    value: function loop(event) {
      var _this8 = this;

      if (this.isLongPressing) {
        this.timeout = setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this8.longPressing.emit({
            event: event,
            model: _this8.pressModel
          });

          _this8.loop(event);
        }, 50);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "endPress",
    value: function endPress() {
      clearTimeout(this.timeout);
      this.isLongPressing = false;
      this.pressing = false;

      this._destroySubscription();

      this.longPressEnd.emit({
        model: this.pressModel
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "onMouseup",
    value: function onMouseup() {
      this.endPress();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroySubscription();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_destroySubscription",
    value: function _destroySubscription() {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
    }
  }, {
    key: "press",
    get: function get() {
      return this.pressing;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isLongPress",
    get: function get() {
      return this.isLongPressing;
    }
  }]);

  return LongPressDirective;
}();

LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
  return new (t || LongPressDirective)();
};

LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: LongPressDirective,
  selectors: [["", "long-press", ""]],
  hostVars: 4,
  hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    }
  },
  inputs: {
    pressEnabled: "pressEnabled",
    duration: "duration",
    pressModel: "pressModel"
  },
  outputs: {
    longPressStart: "longPressStart",
    longPressing: "longPressing",
    longPressEnd: "longPressEnd"
  }
});
LongPressDirective.propDecorators = {
  pressEnabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pressModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  duration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  longPressStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  longPressing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  longPressEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  press: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.press']
  }],
  isLongPress: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.longpress']
  }],
  onMouseDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['mousedown', ['$event']]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ScrollerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} ngZone
   * @param {?} element
   * @param {?} renderer
   */
  function ScrollerComponent(ngZone, element, renderer) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ScrollerComponent);

    this.ngZone = ngZone;
    this.renderer = renderer;
    this.scrollbarV = false;
    this.scrollbarH = false;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.scrollYPos = 0;
    this.scrollXPos = 0;
    this.prevScrollYPos = 0;
    this.prevScrollXPos = 0;
    this._scrollEventListener = null;
    this.element = element.nativeElement;
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // manual bind so we don't always listen
      if (this.scrollbarV || this.scrollbarH) {
        /** @type {?} */
        var renderer = this.renderer;
        this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
        this._scrollEventListener = this.onScrolled.bind(this);
        this.parentElement.addEventListener('scroll', this._scrollEventListener);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._scrollEventListener) {
        this.parentElement.removeEventListener('scroll', this._scrollEventListener);
        this._scrollEventListener = null;
      }
    }
    /**
     * @param {?} offsetY
     * @return {?}
     */

  }, {
    key: "setOffset",
    value: function setOffset(offsetY) {
      if (this.parentElement) {
        this.parentElement.scrollTop = offsetY;
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onScrolled",
    value: function onScrolled(event) {
      var _this9 = this;

      /** @type {?} */
      var dom =
      /** @type {?} */
      event.currentTarget;
      requestAnimationFrame(
      /**
      * @return {?}
      */
      function () {
        _this9.scrollYPos = dom.scrollTop;
        _this9.scrollXPos = dom.scrollLeft;

        _this9.updateOffset();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "updateOffset",
    value: function updateOffset() {
      /** @type {?} */
      var direction;

      if (this.scrollYPos < this.prevScrollYPos) {
        direction = 'down';
      } else if (this.scrollYPos > this.prevScrollYPos) {
        direction = 'up';
      }

      this.scroll.emit({
        direction: direction,
        scrollYPos: this.scrollYPos,
        scrollXPos: this.scrollXPos
      });
      this.prevScrollYPos = this.scrollYPos;
      this.prevScrollXPos = this.scrollXPos;
    }
  }]);

  return ScrollerComponent;
}();

ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
};

ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScrollerComponent,
  selectors: [["datatable-scroller"]],
  hostAttrs: [1, "datatable-scroll"],
  hostVars: 4,
  hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth"
  },
  outputs: {
    scroll: "scroll"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

ScrollerComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
  }];
};

ScrollerComponent.propDecorators = {
  scrollbarV: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollbarH: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height.px']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width.px']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableGroupHeaderTemplateDirective =
/**
 * @param {?} template
 */
function DatatableGroupHeaderTemplateDirective(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableGroupHeaderTemplateDirective);

  this.template = template;
};

DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
  return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderTemplateDirective,
  selectors: [["", "ngx-datatable-group-header-template", ""]]
});
/** @nocollapse */

DatatableGroupHeaderTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableGroupHeaderDirective = /*#__PURE__*/function () {
  function DatatableGroupHeaderDirective() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableGroupHeaderDirective);

    /**
     * Row height is required when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Track toggling of group visibility
     */

    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableGroupHeaderDirective, [{
    key: "toggleExpandGroup",

    /**
     * Toggle the expansion of a group
     * @param {?} group
     * @return {?}
     */
    value: function toggleExpandGroup(group) {
      this.toggle.emit({
        type: 'group',
        value: group
      });
    }
    /**
     * Expand all groups
     * @return {?}
     */

  }, {
    key: "expandAllGroups",
    value: function expandAllGroups() {
      this.toggle.emit({
        type: 'all',
        value: true
      });
    }
    /**
     * Collapse all groups
     * @return {?}
     */

  }, {
    key: "collapseAllGroups",
    value: function collapseAllGroups() {
      this.toggle.emit({
        type: 'all',
        value: false
      });
    }
  }, {
    key: "template",
    get: function get() {
      return this._templateInput || this._templateQuery;
    }
  }]);

  return DatatableGroupHeaderDirective;
}();

DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
  return new (t || DatatableGroupHeaderDirective)();
};

DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderDirective,
  selectors: [["ngx-datatable-group-header"]],
  contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
DatatableGroupHeaderDirective.propDecorators = {
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  _templateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['template']
  }],
  _templateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DatatableGroupHeaderTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: true
    }]
  }],
  toggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Always returns the empty string ''
 * @return {?}
 */


function emptyStringGetter() {
  return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 * @param {?} prop
 * @return {?}
 */


function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }

  if (typeof prop === 'number') {
    return numericIndexGetter;
  } else {
    // deep or simple
    if (prop.indexOf('.') !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
/**
 * Returns the value at this numeric index.
 * @param {?} row array of values
 * @param {?} index numeric index
 * @return {?} any or '' if invalid index
 */


function numericIndexGetter(row, index) {
  if (row == null) {
    return '';
  } // mimic behavior of deepValueGetter


  if (!row || index == null) {
    return row;
  }
  /** @type {?} */


  var value = row[index];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param {?} obj object containing the field
 * @param {?} fieldName field name string
 * @return {?}
 */


function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return '';
  }

  if (!obj || !fieldName) {
    return obj;
  }
  /** @type {?} */


  var value = obj[fieldName];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */


function deepValueGetter(obj, path) {
  if (obj == null) {
    return '';
  }

  if (!obj || !path) {
    return obj;
  } // check if path matches a root-level field
  // { "a.b.c": 123 }

  /** @type {?} */


  var current = obj[path];

  if (current !== undefined) {
    return current;
  }

  current = obj;
  /** @type {?} */

  var split = path.split('.');

  if (split.length) {
    for (var i = 0; i < split.length; i++) {
      current = current[split[i]]; // if found undefined, return empty string

      if (current === undefined || current === null) {
        return '';
      }
    }
  }

  return current;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} prop
 * @return {?}
 */


function optionalGetterForProp(prop) {
  return prop &&
  /**
  * @param {?} row
  * @return {?}
  */
  function (row) {
    return getterForProp(prop)(row, prop);
  };
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param {?} rows
 *
 * @param {?=} from
 * @param {?=} to
 * @return {?}
 */


function groupRowsByParents(rows, from, to) {
  if (from && to) {
    /** @type {?} */
    var nodeById = {};
    /** @type {?} */

    var l = rows.length;
    /** @type {?} */

    var node = null;
    nodeById[0] = new TreeNode(); // that's the root node
    // that's the root node

    /** @type {?} */

    var uniqIDs = rows.reduce(
    /**
    * @param {?} arr
    * @param {?} item
    * @return {?}
    */
    function (arr, item) {
      /** @type {?} */
      var toValue = to(item);

      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }

      return arr;
    }, []);

    for (var i = 0; i < l; i++) {
      // make TreeNode objects for each item
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }

    for (var _i = 0; _i < l; _i++) {
      // link all TreeNode objects
      node = nodeById[to(rows[_i])];
      /** @type {?} */

      var parent = 0;
      /** @type {?} */

      var fromValue = from(node.row);

      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }

      node.parent = nodeById[parent];
      node.row['level'] = node.parent.row['level'] + 1;
      node.parent.children.push(node);
    }
    /** @type {?} */


    var resolvedRows = [];
    nodeById[0].flatten(
    /**
    * @return {?}
    */
    function () {
      resolvedRows = [].concat(Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(resolvedRows), [this.row]);
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}

var TreeNode = /*#__PURE__*/function () {
  /**
   * @param {?=} row
   */
  function TreeNode() {
    var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TreeNode);

    if (!row) {
      row = {
        level: -1,
        treeStatus: 'expanded'
      };
    }

    this.row = row;
    this.parent = null;
    this.children = [];
  }
  /**
   * @param {?} f
   * @param {?} recursive
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TreeNode, [{
    key: "flatten",
    value: function flatten(f, recursive) {
      if (this.row['treeStatus'] === 'expanded') {
        for (var i = 0, l = this.children.length; i < l; i++) {
          /** @type {?} */
          var child = this.children[i];
          f.apply(child, Array.prototype.slice.call(arguments, 2));
          if (recursive) child.flatten.apply(child, arguments);
        }
      }
    }
  }]);

  return TreeNode;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param {?} str
 * @return {?}
 */


function camelCase(str) {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

  str = str.replace(/([ 0-9]+)([a-zA-Z])/g,
  /**
  * @param {?} a
  * @param {?} b
  * @param {?} c
  * @return {?}
  */
  function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 * @param {?} str
 * @return {?}
 */


function deCamelCase(str) {
  return str.replace(/([A-Z])/g,
  /**
  * @param {?} match
  * @return {?}
  */
  function (match) {
    return " ".concat(match);
  }).replace(/^./,
  /**
  * @param {?} match
  * @return {?}
  */
  function (match) {
    return match.toUpperCase();
  });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 * @return {?}
 */


function id() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Sets the column defaults
 * @param {?} columns
 * @return {?}
 */


function setColumnDefaults(columns) {
  if (!columns) return; // Only one column should hold the tree view
  // Thus if multiple columns are provided with
  // isTreeColumn as true we take only the first one

  /** @type {?} */

  var treeColumnFound = false;

  var _iterator2 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var column = _step2.value;

      if (!column.$$id) {
        column.$$id = id();
      } // prop can be numeric; zero is valid not a missing prop
      // translate name => prop


      if (isNullOrUndefined(column.prop) && column.name) {
        column.prop = camelCase(column.name);
      }

      if (!column.$$valueGetter) {
        column.$$valueGetter = getterForProp(column.prop);
      } // format props if no name passed


      if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
        column.name = deCamelCase(String(column.prop));
      }

      if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
        column.name = ''; // Fixes IE and Edge displaying `null`
      }

      if (!column.hasOwnProperty('resizeable')) {
        column.resizeable = true;
      }

      if (!column.hasOwnProperty('sortable')) {
        column.sortable = true;
      }

      if (!column.hasOwnProperty('draggable')) {
        column.draggable = true;
      }

      if (!column.hasOwnProperty('canAutoResize')) {
        column.canAutoResize = true;
      }

      if (!column.hasOwnProperty('width')) {
        column.width = 150;
      }

      if (!column.hasOwnProperty('isTreeColumn')) {
        column.isTreeColumn = false;
      } else {
        if (column.isTreeColumn && !treeColumnFound) {
          // If the first column with isTreeColumn is true found
          // we mark that treeCoulmn is found
          treeColumnFound = true;
        } else {
          // After that isTreeColumn property for any other column
          // will be set as false
          column.isTreeColumn = false;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */


function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 * @param {?} templates
 * @return {?}
 */


function translateTemplates(templates) {
  /** @type {?} */
  var result = [];

  var _iterator3 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(templates),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var temp = _step3.value;

      /** @type {?} */
      var col = {};
      /** @type {?} */

      var props = Object.getOwnPropertyNames(temp);

      var _iterator4 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(props),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var prop = _step4.value;
          col[prop] = temp[prop];
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (temp.headerTemplate) {
        col.headerTemplate = temp.headerTemplate;
      }

      if (temp.cellTemplate) {
        col.cellTemplate = temp.cellTemplate;
      }

      if (temp.summaryFunc) {
        col.summaryFunc = temp.summaryFunc;
      }

      if (temp.summaryTemplate) {
        col.summaryTemplate = temp.summaryTemplate;
      }

      result.push(col);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return result;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */


var ColumnMode = {
  standard: 'standard',
  flex: 'flex',
  force: 'force'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */

var SelectionType = {
  single: 'single',
  multi: 'multi',
  multiClick: 'multiClick',
  cell: 'cell',
  checkbox: 'checkbox'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */

var SortType = {
  single: 'single',
  multi: 'multi'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */

var ContextmenuType = {
  header: 'header',
  body: 'body'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DataTableColumnHeaderDirective =
/**
 * @param {?} template
 */
function DataTableColumnHeaderDirective(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnHeaderDirective);

  this.template = template;
};

DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
  return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DataTableColumnHeaderDirective,
  selectors: [["", "ngx-datatable-header-template", ""]]
});
/** @nocollapse */

DataTableColumnHeaderDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableColumnCellDirective =
/**
 * @param {?} template
 */
function DataTableColumnCellDirective(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnCellDirective);

  this.template = template;
};

DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
  return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DataTableColumnCellDirective,
  selectors: [["", "ngx-datatable-cell-template", ""]]
});
/** @nocollapse */

DataTableColumnCellDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableColumnCellTreeToggle =
/**
 * @param {?} template
 */
function DataTableColumnCellTreeToggle(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnCellTreeToggle);

  this.template = template;
};

DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
  return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DataTableColumnCellTreeToggle,
  selectors: [["", "ngx-datatable-tree-toggle", ""]]
});
/** @nocollapse */

DataTableColumnCellTreeToggle.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableColumnDirective = /*#__PURE__*/function () {
  /**
   * @param {?} columnChangesService
   */
  function DataTableColumnDirective(columnChangesService) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnDirective);

    this.columnChangesService = columnChangesService;
    this.isFirstChange = true;
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableColumnDirective, [{
    key: "ngOnChanges",

    /**
     * @return {?}
     */
    value: function ngOnChanges() {
      if (this.isFirstChange) {
        this.isFirstChange = false;
      } else {
        this.columnChangesService.onInputChange();
      }
    }
  }, {
    key: "cellTemplate",
    get: function get() {
      return this._cellTemplateInput || this._cellTemplateQuery;
    }
    /**
     * @return {?}
     */

  }, {
    key: "headerTemplate",
    get: function get() {
      return this._headerTemplateInput || this._headerTemplateQuery;
    }
    /**
     * @return {?}
     */

  }, {
    key: "treeToggleTemplate",
    get: function get() {
      return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
  }]);

  return DataTableColumnDirective;
}();

DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
  return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ColumnChangesService));
};

DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DataTableColumnDirective,
  selectors: [["ngx-datatable-column"]],
  contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    }
  },
  inputs: {
    name: "name",
    prop: "prop",
    frozenLeft: "frozenLeft",
    frozenRight: "frozenRight",
    flexGrow: "flexGrow",
    resizeable: "resizeable",
    comparator: "comparator",
    pipe: "pipe",
    sortable: "sortable",
    draggable: "draggable",
    canAutoResize: "canAutoResize",
    minWidth: "minWidth",
    width: "width",
    maxWidth: "maxWidth",
    checkboxable: "checkboxable",
    headerCheckboxable: "headerCheckboxable",
    headerClass: "headerClass",
    cellClass: "cellClass",
    isTreeColumn: "isTreeColumn",
    treeLevelIndent: "treeLevelIndent",
    summaryFunc: "summaryFunc",
    summaryTemplate: "summaryTemplate",
    _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
    _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
    _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

DataTableColumnDirective.ctorParameters = function () {
  return [{
    type: ColumnChangesService
  }];
};

DataTableColumnDirective.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  prop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  frozenLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  frozenRight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  flexGrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  resizeable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  comparator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pipe: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  canAutoResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  minWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  maxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  checkboxable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  headerCheckboxable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  headerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  cellClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  isTreeColumn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  treeLevelIndent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryFunc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  _cellTemplateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cellTemplate']
  }],
  _cellTemplateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DataTableColumnCellDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: true
    }]
  }],
  _headerTemplateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['headerTemplate']
  }],
  _headerTemplateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DataTableColumnHeaderDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: true
    }]
  }],
  _treeToggleTemplateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['treeToggleTemplate']
  }],
  _treeToggleTemplateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DataTableColumnCellTreeToggle, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: true
    }]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableRowDetailTemplateDirective =
/**
 * @param {?} template
 */
function DatatableRowDetailTemplateDirective(template) {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableRowDetailTemplateDirective);

  this.template = template;
};

DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
  return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DatatableRowDetailTemplateDirective,
  selectors: [["", "ngx-datatable-row-detail-template", ""]]
});
/** @nocollapse */

DatatableRowDetailTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableRowDetailDirective = /*#__PURE__*/function () {
  function DatatableRowDetailDirective() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableRowDetailDirective);

    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Row detail row visbility was toggled.
     */

    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableRowDetailDirective, [{
    key: "toggleExpandRow",

    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    value: function toggleExpandRow(row) {
      this.toggle.emit({
        type: 'row',
        value: row
      });
    }
    /**
     * API method to expand all the rows.
     * @return {?}
     */

  }, {
    key: "expandAllRows",
    value: function expandAllRows() {
      this.toggle.emit({
        type: 'all',
        value: true
      });
    }
    /**
     * API method to collapse all the rows.
     * @return {?}
     */

  }, {
    key: "collapseAllRows",
    value: function collapseAllRows() {
      this.toggle.emit({
        type: 'all',
        value: false
      });
    }
  }, {
    key: "template",
    get: function get() {
      return this._templateInput || this._templateQuery;
    }
  }]);

  return DatatableRowDetailDirective;
}();

DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
  return new (t || DatatableRowDetailDirective)();
};

DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DatatableRowDetailDirective,
  selectors: [["ngx-datatable-row-detail"]],
  contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
DatatableRowDetailDirective.propDecorators = {
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  _templateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['template']
  }],
  _templateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DatatableRowDetailTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: true
    }]
  }],
  toggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableFooterDirective = /*#__PURE__*/function () {
  function DatatableFooterDirective() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableFooterDirective);
  }

  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableFooterDirective, [{
    key: "template",

    /**
     * @return {?}
     */
    get: function get() {
      return this._templateInput || this._templateQuery;
    }
  }]);

  return DatatableFooterDirective;
}();

DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
  return new (t || DatatableFooterDirective)();
};

DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: DatatableFooterDirective,
  selectors: [["ngx-datatable-footer"]],
  contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    footerHeight: "footerHeight",
    totalMessage: "totalMessage",
    selectedMessage: "selectedMessage",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    _templateInput: ["template", "_templateInput"]
  }
});
DatatableFooterDirective.propDecorators = {
  footerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  totalMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectedMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerLeftArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerRightArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerPreviousIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerNextIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  _templateInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['template']
  }],
  _templateQuery: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DataTableFooterTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
      static: false
    }]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */


function columnsByPin(cols) {
  /** @type {?} */
  var ret = {
    left: [],
    center: [],
    right: []
  };

  if (cols) {
    var _iterator5 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(cols),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var col = _step5.value;

        if (col.frozenLeft) {
          ret.left.push(col);
        } else if (col.frozenRight) {
          ret.right.push(col);
        } else {
          ret.center.push(col);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  return ret;
}
/**
 * Returns the widths of all group sets of a column
 * @param {?} groups
 * @param {?} all
 * @return {?}
 */


function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */


function columnTotalWidth(columns, prop) {
  /** @type {?} */
  var totalWidth = 0;

  if (columns) {
    var _iterator6 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var c = _step6.value;

        /** @type {?} */
        var has = prop && c[prop];
        /** @type {?} */

        var width = has ? c[prop] : c.width;
        totalWidth = totalWidth + parseFloat(width);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */


function columnsTotalWidth(columns, prop) {
  /** @type {?} */
  var totalWidth = 0;

  var _iterator7 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var column = _step7.value;

      /** @type {?} */
      var has = prop && column[prop];
      totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */


function columnsByPinArr(val) {
  /** @type {?} */
  var colsByPinArr = [];
  /** @type {?} */

  var colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: 'left',
    columns: colsByPin['left']
  });
  colsByPinArr.push({
    type: 'center',
    columns: colsByPin['center']
  });
  colsByPinArr.push({
    type: 'right',
    columns: colsByPin['right']
  });
  return colsByPinArr;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */


var RowHeightCache = /*#__PURE__*/function () {
  function RowHeightCache() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RowHeightCache);

    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RowHeightCache, [{
    key: "clearCache",
    value: function clearCache() {
      this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param {?} details
     * @return {?}
     */

  }, {
    key: "initCache",
    value: function initCache(details) {
      var rows = details.rows,
          rowHeight = details.rowHeight,
          detailRowHeight = details.detailRowHeight,
          externalVirtual = details.externalVirtual,
          rowCount = details.rowCount,
          rowIndexes = details.rowIndexes,
          rowExpansions = details.rowExpansions;
      /** @type {?} */

      var isFn = typeof rowHeight === 'function';
      /** @type {?} */

      var isDetailFn = typeof detailRowHeight === 'function';

      if (!isFn && isNaN(rowHeight)) {
        throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
      } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


      if (!isDetailFn && isNaN(detailRowHeight)) {
        throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
      }
      /** @type {?} */


      var n = externalVirtual ? rowCount : rows.length;
      this.treeArray = new Array(n);

      for (var i = 0; i < n; ++i) {
        this.treeArray[i] = 0;
      }

      for (var _i2 = 0; _i2 < n; ++_i2) {
        /** @type {?} */
        var row = rows[_i2];
        /** @type {?} */

        var currentRowHeight = rowHeight;

        if (isFn) {
          currentRowHeight = rowHeight(row);
        } // Add the detail row height to the already expanded rows.
        // This is useful for the table that goes through a filter or sort.

        /** @type {?} */


        var expanded = rowExpansions.has(row);

        if (row && expanded) {
          if (isDetailFn) {
            /** @type {?} */
            var index = rowIndexes.get(row);
            currentRowHeight += detailRowHeight(row, index);
          } else {
            currentRowHeight += detailRowHeight;
          }
        }

        this.update(_i2, currentRowHeight);
      }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     * @param {?} scrollY
     * @return {?}
     */

  }, {
    key: "getRowIndex",
    value: function getRowIndex(scrollY) {
      if (scrollY === 0) return 0;
      return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     * @param {?} atRowIndex
     * @param {?} byRowHeight
     * @return {?}
     */

  }, {
    key: "update",
    value: function update(atRowIndex, byRowHeight) {
      if (!this.treeArray.length) {
        throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
      }
      /** @type {?} */


      var n = this.treeArray.length;
      atRowIndex |= 0;

      while (atRowIndex < n) {
        this.treeArray[atRowIndex] += byRowHeight;
        atRowIndex |= atRowIndex + 1;
      }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     * @param {?} atIndex
     * @return {?}
     */

  }, {
    key: "query",
    value: function query(atIndex) {
      if (!this.treeArray.length) {
        throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
      }
      /** @type {?} */


      var sum = 0;
      atIndex |= 0;

      while (atIndex >= 0) {
        sum += this.treeArray[atIndex];
        atIndex = (atIndex & atIndex + 1) - 1;
      }

      return sum;
    }
    /**
     * Find the total height between 2 row indexes
     * @param {?} atIndexA
     * @param {?} atIndexB
     * @return {?}
     */

  }, {
    key: "queryBetween",
    value: function queryBetween(atIndexA, atIndexB) {
      return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     * @private
     * @param {?} sum
     * @return {?}
     */

  }, {
    key: "calcRowIndex",
    value: function calcRowIndex(sum) {
      if (!this.treeArray.length) return 0;
      /** @type {?} */

      var pos = -1;
      /** @type {?} */

      var dataLength = this.treeArray.length; // Get the highest bit for the block size.

      /** @type {?} */

      var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

      for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
        /** @type {?} */
        var nextPos = pos + blockSize;

        if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
          sum -= this.treeArray[nextPos];
          pos = nextPos;
        }
      }

      return pos + 1;
    }
  }]);

  return RowHeightCache;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var cache = {};
/** @type {?} */

var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined; // Get Prefix
// http://davidwalsh.name/vendor-prefix

var ɵ0 =
/**
* @return {?}
*/
function ɵ0() {
  /** @type {?} */
  var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
  /** @type {?} */

  var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
  /** @type {?} */

  var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

  /** @type {?} */

  var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
  return dom ? {
    dom: dom,
    lowercase: pre,
    css: "-".concat(pre, "-"),
    js: pre[0].toUpperCase() + pre.substr(1)
  } : undefined;
};
/** @type {?} */


var prefix = ɵ0();
/**
 * @param {?} property
 * @return {?}
 */

function getVendorPrefixedName(property) {
  /** @type {?} */
  var name = camelCase(property);

  if (!cache[name]) {
    if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== undefined) {
      cache[name] = property;
    }
  }

  return cache[name];
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// browser detection and prefixing tools

/** @type {?} */


var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
/** @type {?} */

var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
/** @type {?} */

var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
/** @type {?} */

var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
/** @type {?} */

var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
/** @type {?} */

var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
/**
 * @param {?} styles
 * @param {?} x
 * @param {?} y
 * @return {?}
 */

function translateXY(styles, x, y) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  } else {
    styles.top = "".concat(y, "px");
    styles.left = "".concat(x, "px");
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableBodyComponent = /*#__PURE__*/function () {
  /**
   * Creates an instance of DataTableBodyComponent.
   * @param {?} cd
   */
  function DataTableBodyComponent(cd) {
    var _this10 = this;

    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyComponent);

    this.cd = cd;
    this.selected = [];
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](false);
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.rowHeightsCache = new RowHeightCache();
    this.temp = [];
    this.offsetY = 0;
    this.indexes = {};
    this.rowIndexes = new Map();
    this.rowExpansions = [];
    /**
     * Get the height of the detail row.
     */

    this.getDetailRowHeight =
    /**
    * @param {?=} row
    * @param {?=} index
    * @return {?}
    */
    function (row, index) {
      if (!_this10.rowDetail) {
        return 0;
      }
      /** @type {?} */


      var rowHeight = _this10.rowDetail.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight(row, index) :
      /** @type {?} */
      rowHeight;
    }; // declare fn here so we can get access to the `this` property


    this.rowTrackingFn =
    /**
    * @param {?} index
    * @param {?} row
    * @return {?}
    */
    function (index, row) {
      /** @type {?} */
      var idx = _this10.getRowIndex(row);

      if (_this10.trackByProp) {
        return row[_this10.trackByProp];
      } else {
        return idx;
      }
    };
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyComponent, [{
    key: "ngOnInit",

    /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    value: function ngOnInit() {
      var _this11 = this;

      if (this.rowDetail) {
        this.listener = this.rowDetail.toggle.subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var type = _ref5.type,
              value = _ref5.value;

          if (type === 'row') {
            _this11.toggleRowExpansion(value);
          }

          if (type === 'all') {
            _this11.toggleAllRows(value);
          } // Refresh rows after toggle
          // Fixes #883


          _this11.updateIndexes();

          _this11.updateRows();

          _this11.cd.markForCheck();
        });
      }

      if (this.groupHeader) {
        this.listener = this.groupHeader.toggle.subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref6) {
          var type = _ref6.type,
              value = _ref6.value;

          if (type === 'group') {
            _this11.toggleRowExpansion(value);
          }

          if (type === 'all') {
            _this11.toggleAllRows(value);
          } // Refresh rows after toggle
          // Fixes #883


          _this11.updateIndexes();

          _this11.updateRows();

          _this11.cd.markForCheck();
        });
      }
    }
    /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.rowDetail || this.groupHeader) {
        this.listener.unsubscribe();
      }
    }
    /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */

  }, {
    key: "updateOffsetY",
    value: function updateOffsetY(offset) {
      // scroller is missing on empty table
      if (!this.scroller) {
        return;
      }

      if (this.scrollbarV && this.virtualization && offset) {
        // First get the row Index that we need to move to.

        /** @type {?} */
        var rowIndex = this.pageSize * offset;
        offset = this.rowHeightsCache.query(rowIndex - 1);
      } else if (this.scrollbarV && !this.virtualization) {
        offset = 0;
      }

      this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onBodyScroll",
    value: function onBodyScroll(event) {
      /** @type {?} */
      var scrollYPos = event.scrollYPos;
      /** @type {?} */

      var scrollXPos = event.scrollXPos; // if scroll change, trigger update
      // this is mainly used for header cell positions

      if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
        this.scroll.emit({
          offsetY: scrollYPos,
          offsetX: scrollXPos
        });
      }

      this.offsetY = scrollYPos;
      this.offsetX = scrollXPos;
      this.updateIndexes();
      this.updatePage(event.direction);
      this.updateRows();
    }
    /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */

  }, {
    key: "updatePage",
    value: function updatePage(direction) {
      /** @type {?} */
      var offset = this.indexes.first / this.pageSize;

      if (direction === 'up') {
        offset = Math.ceil(offset);
      } else if (direction === 'down') {
        offset = Math.floor(offset);
      }

      if (direction !== undefined && !isNaN(offset)) {
        this.page.emit({
          offset: offset
        });
      }
    }
    /**
     * Updates the rows in the view port
     * @return {?}
     */

  }, {
    key: "updateRows",
    value: function updateRows() {
      var _this$indexes = this.indexes,
          first = _this$indexes.first,
          last = _this$indexes.last;
      /** @type {?} */

      var rowIndex = first;
      /** @type {?} */

      var idx = 0;
      /** @type {?} */

      var temp = [];
      this.rowIndexes.clear(); // if grouprowsby has been specified treat row paging
      // parameters as group paging parameters ie if limit 10 has been
      // specified treat it as 10 groups rather than 10 rows

      if (this.groupedRows) {
        /** @type {?} */
        var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
        // rows per group the same as the total number of rows

        if (this.groupedRows.length === 1) {
          maxRowsPerGroup = this.groupedRows[0].value.length;
        }

        while (rowIndex < last && rowIndex < this.groupedRows.length) {
          // Add the groups into this page

          /** @type {?} */
          var group = this.groupedRows[rowIndex];
          temp[idx] = group;
          idx++; // Group index in this context

          rowIndex++;
        }
      } else {
        while (rowIndex < last && rowIndex < this.rowCount) {
          /** @type {?} */
          var row = this.rows[rowIndex];

          if (row) {
            this.rowIndexes.set(row, rowIndex);
            temp[idx] = row;
          }

          idx++;
          rowIndex++;
        }
      }

      this.temp = temp;
    }
    /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "getRowHeight",
    value: function getRowHeight(row) {
      // if its a function return it
      if (typeof this.rowHeight === 'function') {
        return this.rowHeight(row);
      }

      return (
        /** @type {?} */
        this.rowHeight
      );
    }
    /**
     * @param {?} group the group with all rows
     * @return {?}
     */

  }, {
    key: "getGroupHeight",
    value: function getGroupHeight(group) {
      /** @type {?} */
      var rowHeight = 0;

      if (group.value) {
        for (var index = 0; index < group.value.length; index++) {
          rowHeight += this.getRowAndDetailHeight(group.value[index]);
        }
      }

      return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "getRowAndDetailHeight",
    value: function getRowAndDetailHeight(row) {
      /** @type {?} */
      var rowHeight = this.getRowHeight(row);
      /** @type {?} */

      var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

      if (expanded) {
        rowHeight += this.getDetailRowHeight(row);
      }

      return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */

  }, {
    key: "getRowsStyles",
    value: function getRowsStyles(rows) {
      /** @type {?} */
      var styles = {}; // only add styles for the group if there is a group

      if (this.groupedRows) {
        styles.width = this.columnGroupWidths.total;
      }

      if (this.scrollbarV && this.virtualization) {
        /** @type {?} */
        var idx = 0;

        if (this.groupedRows) {
          // Get the latest row rowindex in a group

          /** @type {?} */
          var row = rows[rows.length - 1];
          idx = row ? this.getRowIndex(row) : 0;
        } else {
          idx = this.getRowIndex(rows);
        } // const pos = idx * rowHeight;
        // The position of this row would be the sum of all row heights
        // until the previous row position.

        /** @type {?} */


        var pos = this.rowHeightsCache.query(idx - 1);
        translateXY(styles, 0, pos);
      }

      return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */

  }, {
    key: "getBottomSummaryRowStyles",
    value: function getBottomSummaryRowStyles() {
      if (!this.scrollbarV || !this.rows || !this.rows.length) {
        return null;
      }
      /** @type {?} */


      var styles = {
        position: 'absolute'
      };
      /** @type {?} */

      var pos = this.rowHeightsCache.query(this.rows.length - 1);
      translateXY(styles, 0, pos);
      return styles;
    }
    /**
     * Hides the loading indicator
     * @return {?}
     */

  }, {
    key: "hideIndicator",
    value: function hideIndicator() {
      var _this12 = this;

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        return _this12.loadingIndicator = false;
      }, 500);
    }
    /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */

  }, {
    key: "updateIndexes",
    value: function updateIndexes() {
      /** @type {?} */
      var first = 0;
      /** @type {?} */

      var last = 0;

      if (this.scrollbarV) {
        if (this.virtualization) {
          // Calculation of the first and last indexes will be based on where the
          // scrollY position would be at.  The last index would be the one
          // that shows up inside the view port the last.

          /** @type {?} */
          var height = parseInt(this.bodyHeight, 0);
          first = this.rowHeightsCache.getRowIndex(this.offsetY);
          last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
        } else {
          // If virtual rows are not needed
          // We render all in one go
          first = 0;
          last = this.rowCount;
        }
      } else {
        // The server is handling paging and will pass an array that begins with the
        // element at a specified offset.  first should always be 0 with external paging.
        if (!this.externalPaging) {
          first = Math.max(this.offset * this.pageSize, 0);
        }

        last = Math.min(first + this.pageSize, this.rowCount);
      }

      this.indexes = {
        first: first,
        last: last
      };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */

  }, {
    key: "refreshRowHeightCache",
    value: function refreshRowHeightCache() {
      if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
        return;
      } // clear the previous row height cache if already present.
      // this is useful during sorts, filters where the state of the
      // rows array is changed.


      this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

      if (this.rows && this.rows.length) {
        /** @type {?} */
        var rowExpansions = new Set();

        var _iterator8 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rows),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var row = _step8.value;

            if (this.getRowExpanded(row)) {
              rowExpansions.add(row);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        this.rowHeightsCache.initCache({
          rows: this.rows,
          rowHeight: this.rowHeight,
          detailRowHeight: this.getDetailRowHeight,
          externalVirtual: this.scrollbarV && this.externalPaging,
          rowCount: this.rowCount,
          rowIndexes: this.rowIndexes,
          rowExpansions: rowExpansions
        });
      }
    }
    /**
     * Gets the index for the view port
     * @return {?}
     */

  }, {
    key: "getAdjustedViewPortIndex",
    value: function getAdjustedViewPortIndex() {
      // Capture the row index of the first row that is visible on the viewport.
      // If the scroll bar is just below the row which is highlighted then make that as the
      // first index.

      /** @type {?} */
      var viewPortFirstRowIndex = this.indexes.first;

      if (this.scrollbarV && this.virtualization) {
        /** @type {?} */
        var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
        return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
      }

      return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "toggleRowExpansion",
    value: function toggleRowExpansion(row) {
      // Capture the row index of the first row that is visible on the viewport.

      /** @type {?} */
      var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
      /** @type {?} */

      var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
      /** @type {?} */

      var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

      if (this.scrollbarV && this.virtualization) {
        /** @type {?} */
        var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

        /** @type {?} */

        var idx = this.getRowIndex(row);
        this.rowHeightsCache.update(idx, detailRowHeight);
      } // Update the toggled row and update thive nevere heights in the cache.


      if (expanded) {
        this.rowExpansions.splice(rowExpandedIdx, 1);
      } else {
        this.rowExpansions.push(row);
      }

      this.detailToggle.emit({
        rows: [row],
        currentIndex: viewPortFirstRowIndex
      });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */

  }, {
    key: "toggleAllRows",
    value: function toggleAllRows(expanded) {
      // clear prev expansions
      this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

      /** @type {?} */

      var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

      if (expanded) {
        var _iterator9 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rows),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var row = _step9.value;
            this.rowExpansions.push(row);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }

      if (this.scrollbarV) {
        // Refresh the full row heights cache since every row was affected.
        this.recalcLayout();
      } // Emit all rows that have been expanded.


      this.detailToggle.emit({
        rows: this.rows,
        currentIndex: viewPortFirstRowIndex
      });
    }
    /**
     * Recalculates the table
     * @return {?}
     */

  }, {
    key: "recalcLayout",
    value: function recalcLayout() {
      this.refreshRowHeightCache();
      this.updateIndexes();
      this.updateRows();
    }
    /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "columnTrackingFn",
    value: function columnTrackingFn(index, column) {
      return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */

  }, {
    key: "stylesByGroup",
    value: function stylesByGroup(group) {
      /** @type {?} */
      var widths = this.columnGroupWidths;
      /** @type {?} */

      var offsetX = this.offsetX;
      /** @type {?} */

      var styles = {
        width: "".concat(widths[group], "px")
      };

      if (group === 'left') {
        translateXY(styles, offsetX, 0);
      } else if (group === 'right') {
        /** @type {?} */
        var bodyWidth = parseInt(this.innerWidth + '', 0);
        /** @type {?} */

        var totalDiff = widths.total - bodyWidth;
        /** @type {?} */

        var offsetDiff = totalDiff - offsetX;
        /** @type {?} */

        var offset = offsetDiff * -1;
        translateXY(styles, offset, 0);
      }

      return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "getRowExpanded",
    value: function getRowExpanded(row) {
      if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
        var _iterator10 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.groupedRows),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var group = _step10.value;
            this.rowExpansions.push(group);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }

      return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    /**
     * @param {?} row
     * @param {?} expanded
     * @return {?}
     */

  }, {
    key: "getRowExpandedIdx",
    value: function getRowExpandedIdx(row, expanded) {
      var _this13 = this;

      if (!expanded || !expanded.length) return -1;
      /** @type {?} */

      var rowId = this.rowIdentity(row);
      return expanded.findIndex(
      /**
      * @param {?} r
      * @return {?}
      */
      function (r) {
        /** @type {?} */
        var id = _this13.rowIdentity(r);

        return id === rowId;
      });
    }
    /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "getRowIndex",
    value: function getRowIndex(row) {
      return this.rowIndexes.get(row) || 0;
    }
    /**
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "onTreeAction",
    value: function onTreeAction(row) {
      this.treeAction.emit({
        row: row
      });
    }
  }, {
    key: "pageSize",
    set: function set(val) {
      this._pageSize = val;
      this.recalcLayout();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._pageSize;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "rows",
    set: function set(val) {
      this._rows = val;
      this.recalcLayout();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._rows;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "columns",
    set: function set(val) {
      this._columns = val;
      /** @type {?} */

      var colsByPin = columnsByPin(val);
      this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "offset",
    set: function set(val) {
      this._offset = val;
      if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._offset;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "rowCount",
    set: function set(val) {
      this._rowCount = val;
      this.recalcLayout();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._rowCount;
    }
    /**
     * @return {?}
     */

  }, {
    key: "bodyWidth",
    get: function get() {
      if (this.scrollbarH) {
        return this.innerWidth + 'px';
      } else {
        return '100%';
      }
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "bodyHeight",
    set: function set(val) {
      if (this.scrollbarV) {
        this._bodyHeight = val + 'px';
      } else {
        this._bodyHeight = 'auto';
      }

      this.recalcLayout();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     * @return {?}
     */

  }, {
    key: "selectEnabled",
    get: function get() {
      return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     * @return {?}
     */

  }, {
    key: "scrollHeight",
    get: function get() {
      if (this.scrollbarV && this.virtualization && this.rowCount) {
        return this.rowHeightsCache.query(this.rowCount - 1);
      } // avoid TS7030: Not all code paths return a value.


      return undefined;
    }
  }]);

  return DataTableBodyComponent;
}();

DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
  return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
};

DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableBodyComponent,
  selectors: [["datatable-body"]],
  viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ScrollerComponent, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "datatable-body"],
  hostVars: 4,
  hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    }
  },
  inputs: {
    selected: "selected",
    pageSize: "pageSize",
    rows: "rows",
    columns: "columns",
    offset: "offset",
    rowCount: "rowCount",
    bodyHeight: "bodyHeight",
    offsetX: "offsetX",
    loadingIndicator: "loadingIndicator",
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    externalPaging: "externalPaging",
    rowHeight: "rowHeight",
    emptyMessage: "emptyMessage",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    rowClass: "rowClass",
    groupedRows: "groupedRows",
    groupExpansionDefault: "groupExpansionDefault",
    innerWidth: "innerWidth",
    groupRowsBy: "groupRowsBy",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryPosition: "summaryPosition",
    summaryHeight: "summaryHeight"
  },
  outputs: {
    scroll: "scroll",
    page: "page",
    activate: "activate",
    select: "select",
    detailToggle: "detailToggle",
    rowContextmenu: "rowContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 9,
  consts: [[3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
  template: function DataTableBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "datatable-selection", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_0_listener($event) {
        return ctx.select.emit($event);
      })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_0_listener($event) {
        return ctx.activate.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_progress_2_Template, 1, 0, "datatable-progress", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    }
  },
  directives: function directives() {
    return [DataTableSelectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], DataTableBodyRowComponent];
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableBodyComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};

DataTableBodyComponent.propDecorators = {
  scrollbarV: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollbarH: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  loadingIndicator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  externalPaging: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offsetX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  emptyMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectionType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowIdentity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowDetail: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  displayCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  trackByProp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupedRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupExpansionDefault: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  innerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupRowsBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  virtualization: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryRow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowCount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  bodyWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width']
  }],
  bodyHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height']
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  activate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  detailToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  rowContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  treeAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  scroller: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: [ScrollerComponent, {
      static: false
    }]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableHeaderComponent = /*#__PURE__*/function () {
  /**
   * @param {?} cd
   */
  function DataTableHeaderComponent(cd) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableHeaderComponent);

    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](false);
    this._columnGroupWidths = {
      total: 100
    };
    this._styleByGroup = {
      left: {},
      center: {},
      right: {}
    };
    this.destroyed = false;
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableHeaderComponent, [{
    key: "ngOnDestroy",

    /**
     * @return {?}
     */
    value: function ngOnDestroy() {
      this.destroyed = true;
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onLongPressStart",
    value: function onLongPressStart(_ref7) {
      var event = _ref7.event,
          model = _ref7.model;
      model.dragging = true;
      this.dragEventTarget = event;
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onLongPressEnd",
    value: function onLongPressEnd(_ref8) {
      var _this14 = this;

      var event = _ref8.event,
          model = _ref8.model;
      this.dragEventTarget = event; // delay resetting so sort can be
      // prevented if we were dragging

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        // datatable component creates copies from columns on reorder
        // set dragging to false on new objects

        /** @type {?} */
        var column = _this14._columns.find(
        /**
        * @param {?} c
        * @return {?}
        */
        function (c) {
          return c.$$id === model.$$id;
        });

        if (column) {
          column.dragging = false;
        }
      }, 5);
    }
    /**
     * @return {?}
     */

  }, {
    key: "trackByGroups",

    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    value: function trackByGroups(index, colGroup) {
      return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "columnTrackingFn",
    value: function columnTrackingFn(index, column) {
      return column.$$id;
    }
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "onColumnResized",
    value: function onColumnResized(width, column) {
      if (width <= column.minWidth) {
        width = column.minWidth;
      } else if (width >= column.maxWidth) {
        width = column.maxWidth;
      }

      this.resize.emit({
        column: column,
        prevValue: column.width,
        newValue: width
      });
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onColumnReordered",
    value: function onColumnReordered(_ref9) {
      var prevIndex = _ref9.prevIndex,
          newIndex = _ref9.newIndex,
          model = _ref9.model;

      /** @type {?} */
      var column = this.getColumn(newIndex);
      column.isTarget = false;
      column.targetMarkerContext = undefined;
      this.reorder.emit({
        column: model,
        prevValue: prevIndex,
        newValue: newIndex
      });
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onTargetChanged",
    value: function onTargetChanged(_ref10) {
      var prevIndex = _ref10.prevIndex,
          newIndex = _ref10.newIndex,
          initialIndex = _ref10.initialIndex;

      if (prevIndex || prevIndex === 0) {
        /** @type {?} */
        var oldColumn = this.getColumn(prevIndex);
        oldColumn.isTarget = false;
        oldColumn.targetMarkerContext = undefined;
      }

      if (newIndex || newIndex === 0) {
        /** @type {?} */
        var newColumn = this.getColumn(newIndex);
        newColumn.isTarget = true;

        if (initialIndex !== newIndex) {
          newColumn.targetMarkerContext = {
            class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
          };
        }
      }
    }
    /**
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "getColumn",
    value: function getColumn(index) {
      /** @type {?} */
      var leftColumnCount = this._columnsByPin[0].columns.length;

      if (index < leftColumnCount) {
        return this._columnsByPin[0].columns[index];
      }
      /** @type {?} */


      var centerColumnCount = this._columnsByPin[1].columns.length;

      if (index < leftColumnCount + centerColumnCount) {
        return this._columnsByPin[1].columns[index - leftColumnCount];
      }

      return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    /**
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onSort",
    value: function onSort(_ref11) {
      var column = _ref11.column,
          prevValue = _ref11.prevValue,
          newValue = _ref11.newValue;

      // if we are dragging don't sort!
      if (column.dragging) {
        return;
      }
      /** @type {?} */


      var sorts = this.calcNewSorts(column, prevValue, newValue);
      this.sort.emit({
        sorts: sorts,
        column: column,
        prevValue: prevValue,
        newValue: newValue
      });
    }
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */

  }, {
    key: "calcNewSorts",
    value: function calcNewSorts(column, prevValue, newValue) {
      /** @type {?} */
      var idx = 0;

      if (!this.sorts) {
        this.sorts = [];
      }
      /** @type {?} */


      var sorts = this.sorts.map(
      /**
      * @param {?} s
      * @param {?} i
      * @return {?}
      */
      function (s, i) {
        s = Object.assign({}, s);

        if (s.prop === column.prop) {
          idx = i;
        }

        return s;
      });

      if (newValue === undefined) {
        sorts.splice(idx, 1);
      } else if (prevValue) {
        sorts[idx].dir = newValue;
      } else {
        if (this.sortType === SortType.single) {
          sorts.splice(0, this.sorts.length);
        }

        sorts.push({
          dir: newValue,
          prop: column.prop
        });
      }

      return sorts;
    }
    /**
     * @return {?}
     */

  }, {
    key: "setStylesByGroup",
    value: function setStylesByGroup() {
      this._styleByGroup.left = this.calcStylesByGroup('left');
      this._styleByGroup.center = this.calcStylesByGroup('center');
      this._styleByGroup.right = this.calcStylesByGroup('right');

      if (!this.destroyed) {
        this.cd.detectChanges();
      }
    }
    /**
     * @param {?} group
     * @return {?}
     */

  }, {
    key: "calcStylesByGroup",
    value: function calcStylesByGroup(group) {
      /** @type {?} */
      var widths = this._columnGroupWidths;
      /** @type {?} */

      var offsetX = this.offsetX;
      /** @type {?} */

      var styles = {
        width: "".concat(widths[group], "px")
      };

      if (group === 'center') {
        translateXY(styles, offsetX * -1, 0);
      } else if (group === 'right') {
        /** @type {?} */
        var totalDiff = widths.total - this.innerWidth;
        /** @type {?} */

        var offset = totalDiff * -1;
        translateXY(styles, offset, 0);
      }

      return styles;
    }
  }, {
    key: "innerWidth",
    set: function set(val) {
      var _this15 = this;

      this._innerWidth = val;
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        if (_this15._columns) {
          /** @type {?} */
          var colByPin = columnsByPin(_this15._columns);
          _this15._columnGroupWidths = columnGroupWidths(colByPin, _this15._columns);

          _this15.setStylesByGroup();
        }
      });
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "headerHeight",
    set: function set(val) {
      if (val !== 'auto') {
        this._headerHeight = "".concat(val, "px");
      } else {
        this._headerHeight = val;
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._headerHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "columns",
    set: function set(val) {
      var _this16 = this;

      this._columns = val;
      /** @type {?} */

      var colsByPin = columnsByPin(val);
      this._columnsByPin = columnsByPinArr(val);
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this16._columnGroupWidths = columnGroupWidths(colsByPin, val);

        _this16.setStylesByGroup();
      });
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "offsetX",
    set: function set(val) {
      this._offsetX = val;
      this.setStylesByGroup();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._offsetX;
    }
  }, {
    key: "headerWidth",
    get: function get() {
      if (this.scrollbarH) {
        return this.innerWidth + 'px';
      }

      return '100%';
    }
  }]);

  return DataTableHeaderComponent;
}();

DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
  return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
};

DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableHeaderComponent,
  selectors: [["datatable-header"]],
  hostAttrs: [1, "datatable-header"],
  hostVars: 4,
  hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    }
  },
  inputs: {
    innerWidth: "innerWidth",
    headerHeight: "headerHeight",
    columns: "columns",
    offsetX: "offsetX",
    sorts: "sorts",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    scrollbarH: "scrollbarH",
    dealsWithGroup: "dealsWithGroup",
    targetMarkerTemplate: "targetMarkerTemplate",
    sortType: "sortType",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    reorderable: "reorderable"
  },
  outputs: {
    sort: "sort",
    reorder: "reorder",
    resize: "resize",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 2,
  vars: 4,
  consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
  template: function DataTableHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
        return ctx.onColumnReordered($event);
      })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
        return ctx.onTargetChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  directives: function directives() {
    return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective];
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableHeaderComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};

DataTableHeaderComponent.propDecorators = {
  sortAscendingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortDescendingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollbarH: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  dealsWithGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  targetMarkerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  innerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sorts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  allRowsSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectionType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  reorderable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  headerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offsetX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sort: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  reorder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  resize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  columnContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  headerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Throttle a function
 * @param {?} func
 * @param {?} wait
 * @param {?=} options
 * @return {?}
 */


function throttle(func, wait, options) {
  options = options || {};
  /** @type {?} */

  var context;
  /** @type {?} */

  var args;
  /** @type {?} */

  var result;
  /** @type {?} */

  var timeout = null;
  /** @type {?} */

  var previous = 0;
  /**
   * @return {?}
   */

  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }

  return (
    /**
    * @this {?}
    * @return {?}
    */
    function () {
      /** @type {?} */
      var now = +new Date();

      if (!previous && options.leading === false) {
        previous = now;
      }
      /** @type {?} */


      var remaining = wait - (now - previous);
      context = this;
      args = arguments;

      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    }
  );
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 * @param {?} duration
 * @param {?=} options
 * @return {?}
 */


function throttleable(duration, options) {
  return (
    /**
    * @param {?} target
    * @param {?} key
    * @param {?} descriptor
    * @return {?}
    */
    function innerDecorator(target, key, descriptor) {
      return {
        configurable: true,
        enumerable: descriptor.enumerable,
        get:
        /**
        * @return {?}
        */
        function getter() {
          Object.defineProperty(this, key, {
            configurable: true,
            enumerable: descriptor.enumerable,
            value: throttle(descriptor.value, duration, options)
          });
          return this[key];
        }
      };
    }
  );
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */


function getTotalFlexGrow(columns) {
  /** @type {?} */
  var totalFlexGrow = 0;

  var _iterator11 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var c = _step11.value;
      totalFlexGrow += c.flexGrow || 0;
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @return {?}
 */


function adjustColumnWidths(allColumns, expectedWidth) {
  /** @type {?} */
  var columnsWidth = columnsTotalWidth(allColumns);
  /** @type {?} */

  var totalFlexGrow = getTotalFlexGrow(allColumns);
  /** @type {?} */

  var colsByGroup = columnsByPin(allColumns);

  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {?} colsByGroup
 * @param {?} maxWidth
 * @param {?} totalFlexGrow
 * @return {?}
 */


function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  // calculate total width and flexgrow points for coulumns that can be resized
  for (var attr in colsByGroup) {
    var _iterator12 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(colsByGroup[attr]),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var column = _step12.value;

        if (!column.canAutoResize) {
          maxWidth -= column.width;
          totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
        } else {
          column.width = 0;
        }
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }
  /** @type {?} */


  var hasMinWidth = {};
  /** @type {?} */

  var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

  do {
    /** @type {?} */
    var widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;

    for (var _attr in colsByGroup) {
      var _iterator13 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(colsByGroup[_attr]),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _column = _step13.value;

          // if the column can be resize and it hasn't reached its minimum width yet
          if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
            /** @type {?} */
            var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

            if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
              remainingWidth += newWidth - _column.minWidth;
              _column.width = _column.minWidth;
              hasMinWidth[_column.prop] = true;
            } else {
              _column.width = newWidth;
            }
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @param {?} startIdx
 * @param {?} allowBleed
 * @param {?=} defaultColWidth
 * @return {?}
 */


function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
  var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;

  /** @type {?} */
  var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(
  /**
  * @param {?} c
  * @return {?}
  */
  function (c) {
    return c.canAutoResize !== false;
  });

  var _iterator14 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsToResize),
      _step14;

  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _column2 = _step14.value;

      if (!_column2.$$oldWidth) {
        _column2.$$oldWidth = _column2.width;
      }
    }
    /** @type {?} */

  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }

  var additionWidthPerColumn = 0;
  /** @type {?} */

  var exceedsWindow = false;
  /** @type {?} */

  var contentWidth = getContentWidth(allColumns, defaultColWidth);
  /** @type {?} */

  var remainingWidth = expectedWidth - contentWidth;
  /** @type {?} */

  var columnsProcessed = [];
  /** @type {?} */

  var remainingWidthLimit = 1; // This loop takes care of the

  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;

    var _iterator15 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsToResize),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var column = _step15.value;

        if (exceedsWindow && allowBleed) {
          column.width = column.$$oldWidth || column.width || defaultColWidth;
        } else {
          /** @type {?} */
          var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

          if (column.minWidth && newSize < column.minWidth) {
            column.width = column.minWidth;
            columnsProcessed.push(column);
          } else if (column.maxWidth && newSize > column.maxWidth) {
            column.width = column.maxWidth;
            columnsProcessed.push(column);
          } else {
            column.width = newSize;
          }
        }

        column.width = Math.max(0, column.width);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 * @param {?} columnsToResize
 * @param {?} columnsProcessed
 * @return {?}
 */


function removeProcessedColumns(columnsToResize, columnsProcessed) {
  var _iterator16 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsProcessed),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var column = _step16.value;

      /** @type {?} */
      var index = columnsToResize.indexOf(column);
      columnsToResize.splice(index, 1);
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */


function getContentWidth(allColumns) {
  var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  /** @type {?} */
  var contentWidth = 0;

  var _iterator17 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(allColumns),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var column = _step17.value;
      contentWidth += column.width || defaultColWidth;
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  return contentWidth;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */


var SortDirection = {
  asc: 'asc',
  desc: 'desc'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Gets the next sort direction
 * @param {?} sortType
 * @param {?} current
 * @return {?}
 */

function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return undefined;
    } // avoid TS7030: Not all code paths return a value.


    return undefined;
  }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param {?} a
 * @param {?} b
 * @return {?}
 */


function orderByComparator(a, b) {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;

  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b); // Isn't a number so lowercase the string to properly compare

    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  } // equal each other


  return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 * @param {?} rows
 * @param {?} columns
 * @param {?} dirs
 * @return {?}
 */


function sortRows(rows, columns, dirs) {
  if (!rows) return [];
  if (!dirs || !dirs.length || !columns) return Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows);
  /**
   * record the row ordering of results from prior sort operations (if applicable)
   * this is necessary to guarantee stable sorting behavior
   * @type {?}
   */

  var rowToIndexMap = new Map();
  rows.forEach(
  /**
  * @param {?} row
  * @param {?} index
  * @return {?}
  */
  function (row, index) {
    return rowToIndexMap.set(row, index);
  });
  /** @type {?} */

  var temp = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows);
  /** @type {?} */


  var cols = columns.reduce(
  /**
  * @param {?} obj
  * @param {?} col
  * @return {?}
  */
  function (obj, col) {
    if (col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }

    return obj;
  }, {}); // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body

  /** @type {?} */

  var cachedDirs = dirs.map(
  /**
  * @param {?} dir
  * @return {?}
  */
  function (dir) {
    /** @type {?} */
    var prop = dir.prop;
    return {
      prop: prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(
  /**
  * @param {?} rowA
  * @param {?} rowB
  * @return {?}
  */
  function (rowA, rowB) {
    var _iterator18 = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(cachedDirs),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var cachedDir = _step18.value;
        // Get property and valuegetters for column to be sorted
        var prop = cachedDir.prop,
            valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

        /** @type {?} */

        var propA = valueGetter(rowA, prop);
        /** @type {?} */

        var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
        // Two cell values to be compared as propA and propB
        // Two rows corresponding to the cells as rowA and rowB
        // Direction of the sort for this column as SortDirection
        // Compare can be a standard JS comparison function (a,b) => -1|0|1
        // as additional parameters are silently ignored. The whole row and sort
        // direction enable more complex sort logic.

        /** @type {?} */

        var comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

        if (comparison !== 0) return comparison;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }

    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */

    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableComponent = /*#__PURE__*/function () {
  /**
   * @param {?} scrollbarHelper
   * @param {?} dimensionsHelper
   * @param {?} cd
   * @param {?} element
   * @param {?} differs
   * @param {?} columnChangesService
   * @param {?} configuration
   */
  function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
    var _this17 = this;

    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableComponent);

    this.scrollbarHelper = scrollbarHelper;
    this.dimensionsHelper = dimensionsHelper;
    this.cd = cd;
    this.columnChangesService = columnChangesService;
    this.configuration = configuration;
    /**
     * List of row objects that should be
     * represented as selected in the grid.
     * Default value: `[]`
     */

    this.selected = [];
    /**
     * Enable vertical scrollbars
     */

    this.scrollbarV = false;
    /**
     * Enable horz scrollbars
     */

    this.scrollbarH = false;
    /**
     * The row height; which is necessary
     * to calculate the height for the lazy rendering.
     */

    this.rowHeight = 30;
    /**
     * Type of column width distribution formula.
     * Example: flex, force, standard
     */

    this.columnMode = ColumnMode.standard;
    /**
     * The minimum header height in pixels.
     * Pass a falsey for no header
     */

    this.headerHeight = 30;
    /**
     * The minimum footer height in pixels.
     * Pass falsey for no footer
     */

    this.footerHeight = 0;
    /**
     * If the table should use external paging
     * otherwise its assumed that all data is preloaded.
     */

    this.externalPaging = false;
    /**
     * If the table should use external sorting or
     * the built-in basic sorting.
     */

    this.externalSorting = false;
    /**
     * Show the linear loading bar.
     * Default value: `false`
     */

    this.loadingIndicator = false;
    /**
     * Enable/Disable ability to re-order columns
     * by dragging them.
     */

    this.reorderable = true;
    /**
     * Swap columns on re-order columns or
     * move them.
     */

    this.swapColumns = true;
    /**
     * The type of sorting
     */

    this.sortType = SortType.single;
    /**
     * Array of sorted columns by property and type.
     * Default value: `[]`
     */

    this.sorts = [];
    /**
     * Css class overrides
     */

    this.cssClasses = {
      sortAscending: 'datatable-icon-up',
      sortDescending: 'datatable-icon-down',
      pagerLeftArrow: 'datatable-icon-left',
      pagerRightArrow: 'datatable-icon-right',
      pagerPrevious: 'datatable-icon-prev',
      pagerNext: 'datatable-icon-skip'
    };
    /**
     * Message overrides for localization
     *
     * emptyMessage     [default] = 'No data to display'
     * totalMessage     [default] = 'total'
     * selectedMessage  [default] = 'selected'
     */

    this.messages = {
      // Message to show when array is presented
      // but contains no values
      emptyMessage: 'No data to display',
      // Footer total message
      totalMessage: 'total',
      // Footer selected message
      selectedMessage: 'selected'
    };
    /**
     * A boolean you can use to set the detault behaviour of rows and groups
     * whether they will start expanded or not. If ommited the default is NOT expanded.
     *
     */

    this.groupExpansionDefault = false;
    /**
     * Property to which you can use for determining select all
     * rows on current page or not.
     *
     * \@memberOf DatatableComponent
     */

    this.selectAllRowsOnPage = false;
    /**
     * A flag for row virtualization on / off
     */

    this.virtualization = true;
    /**
     * A flag for switching summary row on / off
     */

    this.summaryRow = false;
    /**
     * A height of summary row
     */

    this.summaryHeight = 30;
    /**
     * A property holds a summary row position: top/bottom
     */

    this.summaryPosition = 'top';
    /**
     * Body was scrolled typically in a `scrollbarV:true` scenario.
     */

    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * A cell or row was focused via keyboard or mouse click.
     */

    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * A cell or row was selected.
     */

    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Column sort was invoked.
     */

    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * The table was paged either triggered by the pager or the body scroll.
     */

    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Columns were re-ordered.
     */

    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Column was resized.
     */

    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * The context menu was invoked on the table.
     * type indicates whether the header or the body was clicked.
     * content contains either the column or the row that was clicked.
     */

    this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](false);
    /**
     * A row was expanded ot collapsed for tree
     */

    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.rowCount = 0;
    this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
    this._count = 0;
    this._offset = 0;
    this._subscriptions = [];
    /**
     * This will be used when displaying or selecting rows.
     * when tracking/comparing them, we'll use the value of this fn,
     *
     * (`fn(x) === fn(y)` instead of `x === y`)
     */

    this.rowIdentity =
    /**
    * @param {?} x
    * @return {?}
    */
    function (x) {
      if (_this17._groupRowsBy) {
        // each group in groupedRows are stored as {key, value: [rows]},
        // where key is the groupRowsBy index
        return x.key;
      } else {
        return x;
      }
    }; // get ref to elm for measuring


    this.element = element.nativeElement;
    this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

    if (this.configuration && this.configuration.messages) {
      this.messages = Object.assign({}, this.configuration.messages);
    }
  }
  /**
   * Rows that are displayed in the table.
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableComponent, [{
    key: "ngOnInit",

    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     * @return {?}
     */
    value: function ngOnInit() {
      // need to call this immediatly to size
      // if the table is hidden the visibility
      // listener will invoke this itself upon show
      this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this18 = this;

      if (!this.externalSorting) {
        this.sortInternalRows();
      } // this has to be done to prevent the change detection
      // tree from freaking out because we are readjusting


      if (typeof requestAnimationFrame === 'undefined') {
        return;
      }

      requestAnimationFrame(
      /**
      * @return {?}
      */
      function () {
        _this18.recalculate(); // emit page for virtual server-side kickoff


        if (_this18.externalPaging && _this18.scrollbarV) {
          _this18.page.emit({
            count: _this18.count,
            pageSize: _this18.pageSize,
            limit: _this18.limit,
            offset: 0
          });
        }
      });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     * @return {?}
     */

  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this19 = this;

      this.columnTemplates.changes.subscribe(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return _this19.translateColumns(v);
      });
      this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "translateColumns",
    value: function translateColumns(val) {
      if (val) {
        /** @type {?} */
        var arr = val.toArray();

        if (arr.length) {
          this._internalColumns = translateTemplates(arr);
          setColumnDefaults(this._internalColumns);
          this.recalculateColumns();
          this.sortInternalRows();
          this.cd.markForCheck();
        }
      }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param {?} originalArray the original array passed via parameter
     * @param {?} groupBy
     * @return {?}
     */

  }, {
    key: "groupArrayBy",
    value: function groupArrayBy(originalArray, groupBy) {
      // create a map to hold groups with their corresponding results

      /** @type {?} */
      var map = new Map();
      /** @type {?} */

      var i = 0;
      originalArray.forEach(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        /** @type {?} */
        var key = item[groupBy];

        if (!map.has(key)) {
          map.set(key, [item]);
        } else {
          map.get(key).push(item);
        }

        i++;
      });
      /** @type {?} */

      var addGroup =
      /**
      * @param {?} key
      * @param {?} value
      * @return {?}
      */
      function addGroup(key, value) {
        return {
          key: key,
          value: value
        };
      }; // convert map back to a simple array of objects


      return Array.from(map,
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return addGroup(x[0], x[1]);
      });
    }
    /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */

    /**
     * @return {?}
     */

  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.rowDiffer.diff(this.rows)) {
        if (!this.externalSorting) {
          this.sortInternalRows();
        } else {
          this._internalRows = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
        } // auto group by parent on new update


        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        this.recalculatePages();
        this.cd.markForCheck();
      }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     * @return {?}
     */

  }, {
    key: "recalculate",
    value: function recalculate() {
      this.recalculateDims();
      this.recalculateColumns();
    }
    /**
     * Window resize handler to update sizes.
     * @return {?}
     */

  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     * @param {?=} columns
     * @param {?=} forceIdx
     * @param {?=} allowBleed
     * @return {?}
     */

  }, {
    key: "recalculateColumns",
    value: function recalculateColumns() {
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
      var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
      if (!columns) return undefined;
      /** @type {?} */

      var width = this._innerWidth;

      if (this.scrollbarV) {
        width = width - this.scrollbarHelper.width;
      }

      if (this.columnMode === ColumnMode.force) {
        forceFillColumnWidths(columns, width, forceIdx, allowBleed);
      } else if (this.columnMode === ColumnMode.flex) {
        adjustColumnWidths(columns, width);
      }

      return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @return {?}
     */

  }, {
    key: "recalculateDims",
    value: function recalculateDims() {
      /** @type {?} */
      var dims = this.dimensionsHelper.getDimensions(this.element);
      this._innerWidth = Math.floor(dims.width);

      if (this.scrollbarV) {
        /** @type {?} */
        var height = dims.height;
        if (this.headerHeight) height = height - this.headerHeight;
        if (this.footerHeight) height = height - this.footerHeight;
        this.bodyHeight = height;
      }

      this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     * @return {?}
     */

  }, {
    key: "recalculatePages",
    value: function recalculatePages() {
      this.pageSize = this.calcPageSize();
      this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onBodyPage",
    value: function onBodyPage(_ref12) {
      var offset = _ref12.offset;

      // Avoid pagination caming from body events like scroll when the table
      // has no virtualization and the external paging is enable.
      // This means, let's the developer handle pagination by my him(her) self
      if (this.externalPaging && !this.virtualization) {
        return;
      }

      this.offset = offset;
      this.page.emit({
        count: this.count,
        pageSize: this.pageSize,
        limit: this.limit,
        offset: this.offset
      });
    }
    /**
     * The body triggered a scroll event.
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onBodyScroll",
    value: function onBodyScroll(event) {
      this._offsetX.next(event.offsetX);

      this.scroll.emit(event);
      this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onFooterPage",
    value: function onFooterPage(event) {
      this.offset = event.page - 1;
      this.bodyComponent.updateOffsetY(this.offset);
      this.page.emit({
        count: this.count,
        pageSize: this.pageSize,
        limit: this.limit,
        offset: this.offset
      });

      if (this.selectAllRowsOnPage) {
        this.selected = [];
        this.select.emit({
          selected: this.selected
        });
      }
    }
    /**
     * Recalculates the sizes of the page
     * @param {?=} val
     * @return {?}
     */

  }, {
    key: "calcPageSize",
    value: function calcPageSize() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

      // Keep the page size constant even if the row has been expanded.
      // This is because an expanded row is still considered to be a child of
      // the original row.  Hence calculation would use rowHeight only.
      if (this.scrollbarV && this.virtualization) {
        /** @type {?} */
        var size = Math.ceil(this.bodyHeight /
        /** @type {?} */
        this.rowHeight);
        return Math.max(size, 0);
      } // if limit is passed, we are paging


      if (this.limit !== undefined) {
        return this.limit;
      } // otherwise use row length


      if (val) {
        return val.length;
      } // other empty :(


      return 0;
    }
    /**
     * Calculates the row count.
     * @param {?=} val
     * @return {?}
     */

  }, {
    key: "calcRowCount",
    value: function calcRowCount() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

      if (!this.externalPaging) {
        if (!val) return 0;

        if (this.groupedRows) {
          return this.groupedRows.length;
        } else if (this.treeFromRelation != null && this.treeToRelation != null) {
          return this._internalRows.length;
        } else {
          return val.length;
        }
      }

      return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onColumnContextmenu",
    value: function onColumnContextmenu(_ref13) {
      var event = _ref13.event,
          column = _ref13.column;
      this.tableContextmenu.emit({
        event: event,
        type: ContextmenuType.header,
        content: column
      });
    }
    /**
     * The body triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onRowContextmenu",
    value: function onRowContextmenu(_ref14) {
      var event = _ref14.event,
          row = _ref14.row;
      this.tableContextmenu.emit({
        event: event,
        type: ContextmenuType.body,
        content: row
      });
    }
    /**
     * The header triggered a column resize event.
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onColumnResize",
    value: function onColumnResize(_ref15) {
      var column = _ref15.column,
          newValue = _ref15.newValue;

      /* Safari/iOS 10.2 workaround */
      if (column === undefined) {
        return;
      }
      /** @type {?} */


      var idx;
      /** @type {?} */

      var cols = this._internalColumns.map(
      /**
      * @param {?} c
      * @param {?} i
      * @return {?}
      */
      function (c, i) {
        c = Object.assign({}, c);

        if (c.$$id === column.$$id) {
          idx = i;
          c.width = newValue; // set this so we can force the column
          // width distribution to be to this value

          c.$$oldWidth = newValue;
        }

        return c;
      });

      this.recalculateColumns(cols, idx);
      this._internalColumns = cols;
      this.resize.emit({
        column: column,
        newValue: newValue
      });
    }
    /**
     * The header triggered a column re-order event.
     * @param {?} __0
     * @return {?}
     */

  }, {
    key: "onColumnReorder",
    value: function onColumnReorder(_ref16) {
      var column = _ref16.column,
          newValue = _ref16.newValue,
          prevValue = _ref16.prevValue;

      /** @type {?} */
      var cols = this._internalColumns.map(
      /**
      * @param {?} c
      * @return {?}
      */
      function (c) {
        return Object.assign({}, c);
      });

      if (this.swapColumns) {
        /** @type {?} */
        var prevCol = cols[newValue];
        cols[newValue] = column;
        cols[prevValue] = prevCol;
      } else {
        if (newValue > prevValue) {
          /** @type {?} */
          var movedCol = cols[prevValue];

          for (var i = prevValue; i < newValue; i++) {
            cols[i] = cols[i + 1];
          }

          cols[newValue] = movedCol;
        } else {
          /** @type {?} */
          var _movedCol = cols[prevValue];

          for (var _i3 = prevValue; _i3 > newValue; _i3--) {
            cols[_i3] = cols[_i3 - 1];
          }

          cols[newValue] = _movedCol;
        }
      }

      this._internalColumns = cols;
      this.reorder.emit({
        column: column,
        newValue: newValue,
        prevValue: prevValue
      });
    }
    /**
     * The header triggered a column sort event.
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onColumnSort",
    value: function onColumnSort(event) {
      // clean selected rows
      if (this.selectAllRowsOnPage) {
        this.selected = [];
        this.select.emit({
          selected: this.selected
        });
      }

      this.sorts = event.sorts; // this could be optimized better since it will resort
      // the rows again on the 'push' detection...

      if (this.externalSorting === false) {
        // don't use normal setter so we don't resort
        this.sortInternalRows();
      } // auto group by parent on new update


      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

      this.offset = 0;
      this.bodyComponent.updateOffsetY(this.offset);
      this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onHeaderSelect",
    value: function onHeaderSelect(event) {
      if (this.selectAllRowsOnPage) {
        // before we splice, chk if we currently have all selected

        /** @type {?} */
        var first = this.bodyComponent.indexes.first;
        /** @type {?} */

        var last = this.bodyComponent.indexes.last;
        /** @type {?} */

        var allSelected = this.selected.length === last - first; // remove all existing either way

        this.selected = []; // do the opposite here

        if (!allSelected) {
          var _this$selected;

          (_this$selected = this.selected).push.apply(_this$selected, Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._internalRows.slice(first, last)));
        }
      } else {
        // before we splice, chk if we currently have all selected

        /** @type {?} */
        var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


        this.selected = []; // do the opposite here

        if (!_allSelected) {
          var _this$selected2;

          (_this$selected2 = this.selected).push.apply(_this$selected2, Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows));
        }
      }

      this.select.emit({
        selected: this.selected
      });
    }
    /**
     * A row was selected from body
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onBodySelect",
    value: function onBodySelect(event) {
      this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onTreeAction",
    value: function onTreeAction(event) {
      var _this20 = this;

      /** @type {?} */
      var row = event.row; // TODO: For duplicated items this will not work

      /** @type {?} */

      var rowIndex = this._rows.findIndex(
      /**
      * @param {?} r
      * @return {?}
      */
      function (r) {
        return r[_this20.treeToRelation] === event.row[_this20.treeToRelation];
      });

      this.treeAction.emit({
        row: row,
        rowIndex: rowIndex
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._subscriptions.forEach(
      /**
      * @param {?} subscription
      * @return {?}
      */
      function (subscription) {
        return subscription.unsubscribe();
      });
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     * @private
     * @return {?}
     */

  }, {
    key: "listenForColumnInputChanges",
    value: function listenForColumnInputChanges() {
      var _this21 = this;

      this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(
      /**
      * @return {?}
      */
      function () {
        if (_this21.columnTemplates) {
          _this21.columnTemplates.notifyOnChanges();
        }
      }));
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "sortInternalRows",
    value: function sortInternalRows() {
      this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
  }, {
    key: "rows",
    set: function set(val) {
      this._rows = val;

      if (val) {
        this._internalRows = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(val);
      } // auto sort on new updates


      if (!this.externalSorting) {
        this.sortInternalRows();
      } // auto group by parent on new update


      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

      this.recalculate();

      if (this._rows && this._groupRowsBy) {
        // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }

      this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     * @return {?}
     */
    ,
    get: function get() {
      return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "groupRowsBy",
    set: function set(val) {
      if (val) {
        this._groupRowsBy = val;

        if (this._rows && this._groupRowsBy) {
          // cretes a new array with the data grouped
          this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "columns",
    set: function set(val) {
      if (val) {
        this._internalColumns = Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(val);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
      }

      this._columns = val;
    }
    /**
     * Get the columns.
     * @return {?}
     */
    ,
    get: function get() {
      return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "limit",
    set: function set(val) {
      this._limit = val; // recalculate sizes/etc

      this.recalculate();
    }
    /**
     * Gets the limit.
     * @return {?}
     */
    ,
    get: function get() {
      return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "count",
    set: function set(val) {
      this._count = val; // recalculate sizes/etc

      this.recalculate();
    }
    /**
     * Gets the count.
     * @return {?}
     */
    ,
    get: function get() {
      return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "offset",
    set: function set(val) {
      this._offset = val;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     * @return {?}
     */

  }, {
    key: "isFixedHeader",
    get: function get() {
      /** @type {?} */
      var headerHeight = this.headerHeight;
      return typeof headerHeight === 'string' ?
      /** @type {?} */
      headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     * @return {?}
     */

  }, {
    key: "isFixedRow",
    get: function get() {
      return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     * @return {?}
     */

  }, {
    key: "isVertScroll",
    get: function get() {
      return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     * @return {?}
     */

  }, {
    key: "isVirtualized",
    get: function get() {
      return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     * @return {?}
     */

  }, {
    key: "isHorScroll",
    get: function get() {
      return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     * @return {?}
     */

  }, {
    key: "isSelectable",
    get: function get() {
      return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     * @return {?}
     */

  }, {
    key: "isCheckboxSelection",
    get: function get() {
      return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     * @return {?}
     */

  }, {
    key: "isCellSelection",
    get: function get() {
      return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     * @return {?}
     */

  }, {
    key: "isSingleSelection",
    get: function get() {
      return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     * @return {?}
     */

  }, {
    key: "isMultiSelection",
    get: function get() {
      return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     * @return {?}
     */

  }, {
    key: "isMultiClickSelection",
    get: function get() {
      return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "columnTemplates",
    set: function set(val) {
      this._columnTemplates = val;
      this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     * @return {?}
     */
    ,
    get: function get() {
      return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     * @return {?}
     */

  }, {
    key: "allRowsSelected",
    get: function get() {
      /** @type {?} */
      var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

      if (this.selectAllRowsOnPage) {
        /** @type {?} */
        var indexes = this.bodyComponent.indexes;
        /** @type {?} */

        var rowsOnPage = indexes.last - indexes.first;
        allRowsSelected = this.selected.length === rowsOnPage;
      }

      return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
  }]);

  return DatatableComponent;
}();

DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('configuration', 8));
};

DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DatatableComponent,
  selectors: [["ngx-datatable"]],
  contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    }
  },
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](DataTableBodyComponent, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](DataTableHeaderComponent, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    }
  },
  hostAttrs: [1, "ngx-datatable"],
  hostVars: 22,
  hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    }
  },
  inputs: {
    selected: "selected",
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    rowHeight: "rowHeight",
    columnMode: "columnMode",
    headerHeight: "headerHeight",
    footerHeight: "footerHeight",
    externalPaging: "externalPaging",
    externalSorting: "externalSorting",
    loadingIndicator: "loadingIndicator",
    reorderable: "reorderable",
    swapColumns: "swapColumns",
    sortType: "sortType",
    sorts: "sorts",
    cssClasses: "cssClasses",
    messages: "messages",
    groupExpansionDefault: "groupExpansionDefault",
    selectAllRowsOnPage: "selectAllRowsOnPage",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryHeight: "summaryHeight",
    summaryPosition: "summaryPosition",
    rowIdentity: "rowIdentity",
    rows: "rows",
    groupedRows: "groupedRows",
    groupRowsBy: "groupRowsBy",
    columns: "columns",
    limit: "limit",
    count: "count",
    offset: "offset",
    targetMarkerTemplate: "targetMarkerTemplate",
    selectionType: "selectionType",
    rowClass: "rowClass",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    treeFromRelation: "treeFromRelation",
    treeToRelation: "treeToRelation"
  },
  outputs: {
    scroll: "scroll",
    activate: "activate",
    select: "select",
    sort: "sort",
    page: "page",
    reorder: "reorder",
    resize: "resize",
    tableContextmenu: "tableContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 34,
  consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
        return ctx.recalculate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 16, "datatable-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "datatable-body", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
        return ctx.onBodyPage($event);
      })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
        return ctx.activate.emit($event);
      })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
        return ctx.onRowContextmenu($event);
      })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
        return ctx.onBodySelect($event);
      })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
        return ctx.onBodyScroll($event);
      })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
        return ctx.onTreeAction($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.headerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    }
  },
  directives: function directives() {
    return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent];
  },
  pipes: function pipes() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]];
  },
  styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;-webkit-transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DatatableComponent.ctorParameters = function () {
  return [{
    type: ScrollbarHelper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }, {
    type: DimensionsHelper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
  }, {
    type: ColumnChangesService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: ['configuration']
    }]
  }];
};

DatatableComponent.propDecorators = {
  targetMarkerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupRowsBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupedRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollbarV: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scrollbarH: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columnMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  headerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  footerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  externalPaging: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  externalSorting: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  limit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  count: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  loadingIndicator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectionType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  reorderable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  swapColumns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sorts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  cssClasses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  messages: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  displayCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupExpansionDefault: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  trackByProp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectAllRowsOnPage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  virtualization: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  treeFromRelation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  treeToRelation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryRow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  summaryPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  activate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  sort: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  reorder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  resize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  tableContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  treeAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  isFixedHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.fixed-header']
  }],
  isFixedRow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.fixed-row']
  }],
  isVertScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.scroll-vertical']
  }],
  isVirtualized: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.virtualized']
  }],
  isHorScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.scroll-horz']
  }],
  isSelectable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.selectable']
  }],
  isCheckboxSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.checkbox-selection']
  }],
  isCellSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.cell-selection']
  }],
  isSingleSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.single-selection']
  }],
  isMultiSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.multi-selection']
  }],
  isMultiClickSelection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class.multi-click-selection']
  }],
  columnTemplates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
    args: [DataTableColumnDirective]
  }],
  rowDetail: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DatatableRowDetailDirective, {
      static: false
    }]
  }],
  groupHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DatatableGroupHeaderDirective, {
      static: false
    }]
  }],
  footer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [DatatableFooterDirective, {
      static: false
    }]
  }],
  bodyComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: [DataTableBodyComponent, {
      static: false
    }]
  }],
  headerComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: [DataTableHeaderComponent, {
      static: false
    }]
  }],
  rowIdentity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  onWindowResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['window:resize']
  }]
};

Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__decorate"])([throttleable(5), Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:returntype", void 0)], DatatableComponent.prototype, "onWindowResize", null);
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ScrollbarHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DimensionsHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
  }], null, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ColumnChangesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-footer-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](VisibilityDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[visibilityObserver]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }];
  }, {
    isVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.visible']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[draggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }];
  }, {
    dragX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    dragY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    dragEventTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    dragModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ResizeableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[resizeable]',
      host: {
        '[class.resizeable]': 'resizeEnabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }];
  }, {
    resizeEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['mousedown', ['$event']]
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OrderableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[orderable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }];
  }, {
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    targetChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
      args: [DraggableDirective, {
        descendants: true
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](LongPressDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[long-press]'
    }]
  }], function () {
    return [];
  }, {
    pressEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    longPressStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    longPressing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    longPressEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    press: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.press']
    }],
    isLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.longpress']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['mousedown', ['$event']]
    }],
    pressModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ScrollerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-scroller',
      template: "\n    <ng-content></ng-content>\n  ",
      host: {
        class: 'datatable-scroll'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-group-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ngx-datatable-group-header'
    }]
  }], function () {
    return [];
  }, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DatatableGroupHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: true
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-cell-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-tree-toggle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ngx-datatable-column'
    }]
  }], function () {
    return [{
      type: ColumnChangesService
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    prop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    frozenLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    frozenRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    flexGrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    resizeable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    comparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pipe: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    canAutoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    checkboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerCheckboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    cellClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    isTreeColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    treeLevelIndent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryFunc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    _cellTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cellTemplate']
    }],
    _cellTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DataTableColumnCellDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: true
      }]
    }],
    _headerTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['headerTemplate']
    }],
    _headerTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DataTableColumnHeaderDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: true
      }]
    }],
    _treeToggleTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['treeToggleTemplate']
    }],
    _treeToggleTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DataTableColumnCellTreeToggle, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: true
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[ngx-datatable-row-detail-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ngx-datatable-row-detail'
    }]
  }], function () {
    return [];
  }, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DatatableRowDetailTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: true
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableFooterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ngx-datatable-footer'
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DataTableFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
        static: false
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableBodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-body',
      template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      host: {
        class: 'datatable-body'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, {
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    detailToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    bodyWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width']
    }],
    bodyHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height']
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: [ScrollerComponent, {
        static: false
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-header',
      template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
      host: {
        class: 'datatable-header'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, {
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width']
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    dealsWithGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'ngx-datatable',
      template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      host: {
        class: 'ngx-datatable'
      },
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;-webkit-transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
    }]
  }], function () {
    return [{
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }, {
      type: DimensionsHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
    }, {
      type: ColumnChangesService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: ['configuration']
      }]
    }];
  }, {
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columnMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    externalSorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    swapColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    cssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    messages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectAllRowsOnPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    tableContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    isFixedHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.fixed-header']
    }],
    isFixedRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.fixed-row']
    }],
    isVertScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.scroll-vertical']
    }],
    isVirtualized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.virtualized']
    }],
    isHorScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.scroll-horz']
    }],
    isSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.selectable']
    }],
    isCheckboxSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.checkbox-selection']
    }],
    isCellSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.cell-selection']
    }],
    isSingleSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.single-selection']
    }],
    isMultiSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.multi-selection']
    }],
    isMultiClickSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class.multi-click-selection']
    }],
    columnTemplates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
      args: [DataTableColumnDirective]
    }],

    /**
     * Window resize handler to update sizes.
     * @return {?}
     */
    onWindowResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['window:resize']
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    treeFromRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    treeToRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DatatableRowDetailDirective, {
        static: false
      }]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DatatableGroupHeaderDirective, {
        static: false
      }]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [DatatableFooterDirective, {
        static: false
      }]
    }],
    bodyComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: [DataTableBodyComponent, {
        static: false
      }]
    }],
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: [DataTableHeaderComponent, {
        static: false
      }]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableHeaderCellComponent = /*#__PURE__*/function () {
  /**
   * @param {?} cd
   */
  function DataTableHeaderCellComponent(cd) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableHeaderCellComponent);

    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](false);
    this.sortFn = this.onSort.bind(this);
    this.selectFn = this.select.emit.bind(this.select);
    this.cellContext = {
      column: this.column,
      sortDir: this.sortDir,
      sortFn: this.sortFn,
      allRowsSelected: this.allRowsSelected,
      selectFn: this.selectFn
    };
  }
  /**
   * @param {?} value
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableHeaderCellComponent, [{
    key: "onContextmenu",

    /**
     * @param {?} $event
     * @return {?}
     */
    value: function onContextmenu($event) {
      this.columnContextmenu.emit({
        event: $event,
        column: this.column
      });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */

  }, {
    key: "calcSortDir",
    value: function calcSortDir(sorts) {
      var _this22 = this;

      if (sorts && this.column) {
        /** @type {?} */
        var sort = sorts.find(
        /**
        * @param {?} s
        * @return {?}
        */
        function (s) {
          return s.prop === _this22.column.prop;
        });
        if (sort) return sort.dir;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onSort",
    value: function onSort() {
      if (!this.column.sortable) return;
      /** @type {?} */

      var newValue = nextSortDir(this.sortType, this.sortDir);
      this.sort.emit({
        column: this.column,
        prevValue: this.sortDir,
        newValue: newValue
      });
    }
    /**
     * @param {?} sortDir
     * @return {?}
     */

  }, {
    key: "calcSortClass",
    value: function calcSortClass(sortDir) {
      if (sortDir === SortDirection.asc) {
        return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
      } else if (sortDir === SortDirection.desc) {
        return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
      } else {
        return "sort-btn";
      }
    }
  }, {
    key: "allRowsSelected",
    set: function set(value) {
      this._allRowsSelected = value;
      this.cellContext.allRowsSelected = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._allRowsSelected;
    }
    /**
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "column",
    set: function set(column) {
      this._column = column;
      this.cellContext.column = column;
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._column;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "sorts",
    set: function set(val) {
      this._sorts = val;
      this.sortDir = this.calcSortDir(val);
      this.cellContext.sortDir = this.sortDir;
      this.sortClass = this.calcSortClass(this.sortDir);
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._sorts;
    }
    /**
     * @return {?}
     */

  }, {
    key: "columnCssClasses",
    get: function get() {
      /** @type {?} */
      var cls = 'datatable-header-cell';
      if (this.column.sortable) cls += ' sortable';
      if (this.column.resizeable) cls += ' resizeable';

      if (this.column.headerClass) {
        if (typeof this.column.headerClass === 'string') {
          cls += ' ' + this.column.headerClass;
        } else if (typeof this.column.headerClass === 'function') {
          /** @type {?} */
          var res = this.column.headerClass({
            column: this.column
          });

          if (typeof res === 'string') {
            cls += res;
          } else if (typeof res === 'object') {
            /** @type {?} */
            var keys = Object.keys(res);

            for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
              var k = _keys[_i4];
              if (res[k] === true) cls += " ".concat(k);
            }
          }
        }
      }
      /** @type {?} */


      var sortDir = this.sortDir;

      if (sortDir) {
        cls += " sort-active sort-".concat(sortDir);
      }

      return cls;
    }
    /**
     * @return {?}
     */

  }, {
    key: "name",
    get: function get() {
      // guaranteed to have a value by setColumnDefaults() in column-helper.ts
      return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    /**
     * @return {?}
     */

  }, {
    key: "minWidth",
    get: function get() {
      return this.column.minWidth;
    }
    /**
     * @return {?}
     */

  }, {
    key: "maxWidth",
    get: function get() {
      return this.column.maxWidth;
    }
    /**
     * @return {?}
     */

  }, {
    key: "width",
    get: function get() {
      return this.column.width;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isCheckboxable",
    get: function get() {
      return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
  }]);

  return DataTableHeaderCellComponent;
}();

DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
  return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
};

DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableHeaderCellComponent,
  selectors: [["datatable-header-cell"]],
  hostAttrs: [1, "datatable-header-cell"],
  hostVars: 11,
  hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    }
  },
  inputs: {
    allRowsSelected: "allRowsSelected",
    column: "column",
    sorts: "sorts",
    sortType: "sortType",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    isTarget: "isTarget",
    targetMarkerTemplate: "targetMarkerTemplate",
    targetMarkerContext: "targetMarkerContext",
    selectionType: "selectionType",
    headerHeight: "headerHeight"
  },
  outputs: {
    sort: "sort",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
  template: function DataTableHeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
        return ctx.onSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.sortClass);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableHeaderCellComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};

DataTableHeaderCellComponent.propDecorators = {
  sortType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortAscendingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sortDescendingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  isTarget: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  targetMarkerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  targetMarkerContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  allRowsSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectionType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  column: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  headerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height.px']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sorts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sort: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  columnContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  columnCssClasses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class']
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['attr.title']
  }],
  minWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.minWidth.px']
  }],
  maxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.maxWidth.px']
  }],
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width.px']
  }],
  onContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['contextmenu', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-header-cell',
      template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\"\n      >\n      </ng-template>\n      <label *ngIf=\"isCheckboxable\" class=\"datatable-checkbox\">\n        <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"select.emit(!allRowsSelected)\" />\n      </label>\n      <span *ngIf=\"!column.headerTemplate\" class=\"datatable-header-cell-wrapper\">\n        <span class=\"datatable-header-cell-label draggable\" (click)=\"onSort()\" [innerHTML]=\"name\"> </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n      <span (click)=\"onSort()\" [class]=\"sortClass\"> </span>\n    </div>\n  ",
      host: {
        class: 'datatable-header-cell'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, {
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['attr.title']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.maxWidth.px']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width.px']
    }],

    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['contextmenu', ['$event']]
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    isTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    targetMarkerContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableFooterComponent = /*#__PURE__*/function () {
  function DataTableFooterComponent() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableFooterComponent);

    this.selectedCount = 0;
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableFooterComponent, [{
    key: "isVisible",
    get: function get() {
      return this.rowCount / this.pageSize > 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "curPage",
    get: function get() {
      return this.offset + 1;
    }
  }]);

  return DataTableFooterComponent;
}();

DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
  return new (t || DataTableFooterComponent)();
};

DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableFooterComponent,
  selectors: [["datatable-footer"]],
  hostAttrs: [1, "datatable-footer"],
  inputs: {
    selectedCount: "selectedCount",
    footerHeight: "footerHeight",
    rowCount: "rowCount",
    pageSize: "pageSize",
    offset: "offset",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    totalMessage: "totalMessage",
    footerTemplate: "footerTemplate",
    selectedMessage: "selectedMessage"
  },
  outputs: {
    page: "page"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
  template: function DataTableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], DataTablePagerComponent];
  },
  encapsulation: 2,
  changeDetection: 0
});
DataTableFooterComponent.propDecorators = {
  footerHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowCount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerLeftArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerRightArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerPreviousIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerNextIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  totalMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectedCount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectedMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-footer',
      template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{ 'selected-count': selectedMessage }\"\n      [style.height.px]=\"footerHeight\"\n    >\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{\n          rowCount: rowCount,\n          pageSize: pageSize,\n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\"\n      >\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>\n        {{ rowCount?.toLocaleString() }} {{ totalMessage }}\n      </div>\n      <datatable-pager\n        *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\"\n      >\n      </datatable-pager>\n    </div>\n  ",
      host: {
        class: 'datatable-footer'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [];
  }, {
    selectedCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTablePagerComponent = /*#__PURE__*/function () {
  function DataTablePagerComponent() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTablePagerComponent);

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this._count = 0;
    this._page = 1;
    this._size = 0;
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTablePagerComponent, [{
    key: "canPrevious",

    /**
     * @return {?}
     */
    value: function canPrevious() {
      return this.page > 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "canNext",
    value: function canNext() {
      return this.page < this.totalPages;
    }
    /**
     * @return {?}
     */

  }, {
    key: "prevPage",
    value: function prevPage() {
      this.selectPage(this.page - 1);
    }
    /**
     * @return {?}
     */

  }, {
    key: "nextPage",
    value: function nextPage() {
      this.selectPage(this.page + 1);
    }
    /**
     * @param {?} page
     * @return {?}
     */

  }, {
    key: "selectPage",
    value: function selectPage(page) {
      if (page > 0 && page <= this.totalPages && page !== this.page) {
        this.page = page;
        this.change.emit({
          page: page
        });
      }
    }
    /**
     * @param {?=} page
     * @return {?}
     */

  }, {
    key: "calcPages",
    value: function calcPages(page) {
      /** @type {?} */
      var pages = [];
      /** @type {?} */

      var startPage = 1;
      /** @type {?} */

      var endPage = this.totalPages;
      /** @type {?} */

      var maxSize = 5;
      /** @type {?} */

      var isMaxSized = maxSize < this.totalPages;
      page = page || this.page;

      if (isMaxSized) {
        startPage = page - Math.floor(maxSize / 2);
        endPage = page + Math.floor(maxSize / 2);

        if (startPage < 1) {
          startPage = 1;
          endPage = Math.min(startPage + maxSize - 1, this.totalPages);
        } else if (endPage > this.totalPages) {
          startPage = Math.max(this.totalPages - maxSize + 1, 1);
          endPage = this.totalPages;
        }
      }

      for (var num = startPage; num <= endPage; num++) {
        pages.push({
          number: num,
          text:
          /** @type {?} */

          /** @type {?} */
          num
        });
      }

      return pages;
    }
  }, {
    key: "size",
    set: function set(val) {
      this._size = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "count",
    set: function set(val) {
      this._count = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._count;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "page",
    set: function set(val) {
      this._page = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._page;
    }
    /**
     * @return {?}
     */

  }, {
    key: "totalPages",
    get: function get() {
      /** @type {?} */
      var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
      return Math.max(count || 0, 1);
    }
  }]);

  return DataTablePagerComponent;
}();

DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
  return new (t || DataTablePagerComponent)();
};

DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTablePagerComponent,
  selectors: [["datatable-pager"]],
  hostAttrs: [1, "datatable-pager"],
  inputs: {
    size: "size",
    count: "count",
    page: "page",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon"
  },
  outputs: {
    change: "change"
  },
  decls: 14,
  vars: 21,
  consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
  template: function DataTablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
        return ctx.selectPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
        return ctx.prevPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
        return ctx.selectPage(ctx.totalPages);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerPreviousIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerNextIcon);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
  encapsulation: 2,
  changeDetection: 0
});
DataTablePagerComponent.propDecorators = {
  pagerLeftArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerRightArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerPreviousIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerNextIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  count: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTablePagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-pager',
      template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to first page\" href=\"javascript:void(0)\" (click)=\"selectPage(1)\">\n          <i class=\"{{ pagerPreviousIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a role=\"button\" aria-label=\"go to previous page\" href=\"javascript:void(0)\" (click)=\"prevPage()\">\n          <i class=\"{{ pagerLeftArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n      >\n        <a href=\"javascript:void(0)\" (click)=\"selectPage(pg.number)\">\n          {{ pg.text }}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to next page\" href=\"javascript:void(0)\" (click)=\"nextPage()\">\n          <i class=\"{{ pagerRightArrowIcon }}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a role=\"button\" aria-label=\"go to last page\" href=\"javascript:void(0)\" (click)=\"selectPage(totalPages)\">\n          <i class=\"{{ pagerNextIcon }}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
      host: {
        class: 'datatable-pager'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ProgressBarComponent = function ProgressBarComponent() {
  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProgressBarComponent);
};

ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)();
};

ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["datatable-progress"]],
  decls: 3,
  vars: 0,
  consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProgressBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-progress',
      template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */


var Keys = {
  up: 38,
  down: 40,
  return: 13,
  escape: 27,
  left: 37,
  right: 39
};
Keys[Keys.up] = 'up';
Keys[Keys.down] = 'down';
Keys[Keys.return] = 'return';
Keys[Keys.escape] = 'escape';
Keys[Keys.left] = 'left';
Keys[Keys.right] = 'right';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var DataTableBodyRowComponent = /*#__PURE__*/function () {
  /**
   * @param {?} differs
   * @param {?} scrollbarHelper
   * @param {?} cd
   * @param {?} element
   */
  function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyRowComponent);

    this.differs = differs;
    this.scrollbarHelper = scrollbarHelper;
    this.cd = cd;
    this.treeStatus = 'collapsed';
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this._groupStyles = {
      left: {},
      center: {},
      right: {}
    };
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyRowComponent, [{
    key: "ngDoCheck",

    /**
     * @return {?}
     */
    value: function ngDoCheck() {
      if (this._rowDiffer.diff(this.row)) {
        this.cd.markForCheck();
      }
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */

  }, {
    key: "trackByGroups",
    value: function trackByGroups(index, colGroup) {
      return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "columnTrackingFn",
    value: function columnTrackingFn(index, column) {
      return column.$$id;
    }
    /**
     * @return {?}
     */

  }, {
    key: "buildStylesByGroup",
    value: function buildStylesByGroup() {
      this._groupStyles.left = this.calcStylesByGroup('left');
      this._groupStyles.center = this.calcStylesByGroup('center');
      this._groupStyles.right = this.calcStylesByGroup('right');
      this.cd.markForCheck();
    }
    /**
     * @param {?} group
     * @return {?}
     */

  }, {
    key: "calcStylesByGroup",
    value: function calcStylesByGroup(group) {
      /** @type {?} */
      var widths = this._columnGroupWidths;
      /** @type {?} */

      var offsetX = this.offsetX;
      /** @type {?} */

      var styles = {
        width: "".concat(widths[group], "px")
      };

      if (group === 'left') {
        translateXY(styles, offsetX, 0);
      } else if (group === 'right') {
        /** @type {?} */
        var bodyWidth = parseInt(this.innerWidth + '', 0);
        /** @type {?} */

        var totalDiff = widths.total - bodyWidth;
        /** @type {?} */

        var offsetDiff = totalDiff - offsetX;
        /** @type {?} */

        var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
        translateXY(styles, offset, 0);
      }

      return styles;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "onActivate",
    value: function onActivate(event, index) {
      event.cellIndex = index;
      event.rowElement = this._element;
      this.activate.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      /** @type {?} */
      var keyCode = event.keyCode;
      /** @type {?} */

      var isTargetRow = event.target === this._element;
      /** @type {?} */

      var isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

      if (isAction && isTargetRow) {
        event.preventDefault();
        event.stopPropagation();
        this.activate.emit({
          type: 'keydown',
          event: event,
          row: this.row,
          rowElement: this._element
        });
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onMouseenter",
    value: function onMouseenter(event) {
      this.activate.emit({
        type: 'mouseenter',
        event: event,
        row: this.row,
        rowElement: this._element
      });
    }
    /**
     * @param {?=} val
     * @return {?}
     */

  }, {
    key: "recalculateColumns",
    value: function recalculateColumns() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
      this._columns = val;
      /** @type {?} */

      var colsByPin = columnsByPin(this._columns);
      this._columnsByPin = columnsByPinArr(this._columns);
      this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onTreeAction",
    value: function onTreeAction() {
      this.treeAction.emit();
    }
  }, {
    key: "columns",
    set: function set(val) {
      this._columns = val;
      this.recalculateColumns(val);
      this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "innerWidth",
    set: function set(val) {
      if (this._columns) {
        /** @type {?} */
        var colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
      }

      this._innerWidth = val;
      this.recalculateColumns();
      this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "offsetX",
    set: function set(val) {
      this._offsetX = val;
      this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._offsetX;
    }
    /**
     * @return {?}
     */

  }, {
    key: "cssClass",
    get: function get() {
      /** @type {?} */
      var cls = 'datatable-body-row';

      if (this.isSelected) {
        cls += ' active';
      }

      if (this.rowIndex % 2 !== 0) {
        cls += ' datatable-row-odd';
      }

      if (this.rowIndex % 2 === 0) {
        cls += ' datatable-row-even';
      }

      if (this.rowClass) {
        /** @type {?} */
        var res = this.rowClass(this.row);

        if (typeof res === 'string') {
          cls += " ".concat(res);
        } else if (typeof res === 'object') {
          /** @type {?} */
          var keys = Object.keys(res);

          for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
            var k = _keys2[_i5];

            if (res[k] === true) {
              cls += " ".concat(k);
            }
          }
        }
      }

      return cls;
    }
    /**
     * @return {?}
     */

  }, {
    key: "columnsTotalWidths",
    get: function get() {
      return this._columnGroupWidths.total;
    }
  }]);

  return DataTableBodyRowComponent;
}();

DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
  return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
};

DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableBodyRowComponent,
  selectors: [["datatable-body-row"]],
  hostVars: 6,
  hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseenter($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.cssClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    }
  },
  inputs: {
    treeStatus: "treeStatus",
    columns: "columns",
    innerWidth: "innerWidth",
    offsetX: "offsetX",
    expanded: "expanded",
    rowClass: "rowClass",
    row: "row",
    group: "group",
    isSelected: "isSelected",
    rowIndex: "rowIndex",
    displayCheck: "displayCheck",
    rowHeight: "rowHeight"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 1,
  vars: 2,
  consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
  template: function DataTableBodyRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], DataTableBodyCellComponent];
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableBodyRowComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
  }, {
    type: ScrollbarHelper,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }];
};

DataTableBodyRowComponent.propDecorators = {
  columns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  innerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  row: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  group: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  isSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  displayCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  treeStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offsetX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  cssClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class']
  }],
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height.px']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columnsTotalWidths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width.px']
  }],
  activate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  treeAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  onKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['keydown', ['$event']]
  }],
  onMouseenter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['mouseenter', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-body-row',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
    }, {
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }];
  }, {
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class']
    }],
    columnsTotalWidths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width.px']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['keydown', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onMouseenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['mouseenter', ['$event']]
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableRowWrapperComponent = /*#__PURE__*/function () {
  /**
   * @param {?} cd
   * @param {?} differs
   */
  function DataTableRowWrapperComponent(cd, differs) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableRowWrapperComponent);

    this.cd = cd;
    this.differs = differs;
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](false);
    this.groupContext = {
      group: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowContext = {
      row: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this._expanded = false;
    this.rowDiffer = differs.find({}).create();
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableRowWrapperComponent, [{
    key: "ngDoCheck",

    /**
     * @return {?}
     */
    value: function ngDoCheck() {
      if (this.rowDiffer.diff(this.row)) {
        this.rowContext.row = this.row;
        this.groupContext.group = this.row;
        this.cd.markForCheck();
      }
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "onContextmenu",
    value: function onContextmenu($event) {
      this.rowContextmenu.emit({
        event: $event,
        row: this.row
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "getGroupHeaderStyle",
    value: function getGroupHeaderStyle() {
      /** @type {?} */
      var styles = {};
      styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
      styles['backface-visibility'] = 'hidden';
      styles['width'] = this.innerWidth;
      return styles;
    }
  }, {
    key: "rowIndex",
    set: function set(val) {
      this._rowIndex = val;
      this.rowContext.rowIndex = val;
      this.groupContext.rowIndex = val;
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._rowIndex;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "expanded",
    set: function set(val) {
      this._expanded = val;
      this.groupContext.expanded = val;
      this.rowContext.expanded = val;
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._expanded;
    }
  }]);

  return DataTableRowWrapperComponent;
}();

DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
  return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]));
};

DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableRowWrapperComponent,
  selectors: [["datatable-row-wrapper"]],
  hostAttrs: [1, "datatable-row-wrapper"],
  hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
  },
  inputs: {
    rowIndex: "rowIndex",
    expanded: "expanded",
    innerWidth: "innerWidth",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    offsetX: "offsetX",
    detailRowHeight: "detailRowHeight",
    row: "row",
    groupedRows: "groupedRows"
  },
  outputs: {
    rowContextmenu: "rowContextmenu"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
  template: function DataTableRowWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableRowWrapperComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
  }];
};

DataTableRowWrapperComponent.propDecorators = {
  innerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowDetail: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offsetX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  detailRowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  row: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  groupedRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  rowIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  onContextmenu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['contextmenu', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-row-wrapper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || (!groupHeader || !groupHeader.template)\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
      host: {
        class: 'datatable-row-wrapper'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"]
    }];
  }, {
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],

    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['contextmenu', ['$event']]
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    detailRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DataTableBodyCellComponent = /*#__PURE__*/function () {
  /**
   * @param {?} element
   * @param {?} cd
   */
  function DataTableBodyCellComponent(element, cd) {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyCellComponent);

    this.cd = cd;
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.isFocused = false;
    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
    this.activateFn = this.activate.emit.bind(this.activate);
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      onTreeAction: this.onTreeAction.bind(this)
    };
    this._element = element.nativeElement;
  }
  /**
   * @param {?} group
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyCellComponent, [{
    key: "ngDoCheck",

    /**
     * @return {?}
     */
    value: function ngDoCheck() {
      this.checkValueUpdates();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.cellTemplate) {
        this.cellTemplate.clear();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "checkValueUpdates",
    value: function checkValueUpdates() {
      /** @type {?} */
      var value = '';

      if (!this.row || !this.column) {
        value = '';
      } else {
        /** @type {?} */
        var val = this.column.$$valueGetter(this.row, this.column.prop);
        /** @type {?} */

        var userPipe = this.column.pipe;

        if (userPipe) {
          value = userPipe.transform(val);
        } else if (value !== undefined) {
          value = val;
        }
      }

      if (this.value !== value) {
        this.value = value;
        this.cellContext.value = value;
        this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
        this.cd.markForCheck();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      this.isFocused = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this.isFocused = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      this.activate.emit({
        type: 'click',
        event: event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onDblClick",
    value: function onDblClick(event) {
      this.activate.emit({
        type: 'dblclick',
        event: event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      /** @type {?} */
      var keyCode = event.keyCode;
      /** @type {?} */

      var isTargetCell = event.target === this._element;
      /** @type {?} */

      var isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

      if (isAction && isTargetCell) {
        event.preventDefault();
        event.stopPropagation();
        this.activate.emit({
          type: 'keydown',
          event: event,
          row: this.row,
          group: this.group,
          rowHeight: this.rowHeight,
          column: this.column,
          value: this.value,
          cellElement: this._element
        });
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      this.activate.emit({
        type: 'checkbox',
        event: event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element,
        treeStatus: 'collapsed'
      });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */

  }, {
    key: "calcSortDir",
    value: function calcSortDir(sorts) {
      var _this23 = this;

      if (!sorts) {
        return;
      }
      /** @type {?} */


      var sort = sorts.find(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return s.prop === _this23.column.prop;
      });

      if (sort) {
        return sort.dir;
      }
    }
    /**
     * @param {?} html
     * @return {?}
     */

  }, {
    key: "stripHtml",
    value: function stripHtml(html) {
      if (!html.replace) {
        return html;
      }

      return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @return {?}
     */

  }, {
    key: "onTreeAction",
    value: function onTreeAction() {
      this.treeAction.emit(this.row);
    }
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "calcLeftMargin",
    value: function calcLeftMargin(column, row) {
      /** @type {?} */
      var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
      return column.isTreeColumn ? row.level * levelIndent : 0;
    }
  }, {
    key: "group",
    set: function set(group) {
      this._group = group;
      this.cellContext.group = group;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._group;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "rowHeight",
    set: function set(val) {
      this._rowHeight = val;
      this.cellContext.rowHeight = val;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._rowHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "isSelected",
    set: function set(val) {
      this._isSelected = val;
      this.cellContext.isSelected = val;
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._isSelected;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "expanded",
    set: function set(val) {
      this._expanded = val;
      this.cellContext.expanded = val;
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._expanded;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "rowIndex",
    set: function set(val) {
      this._rowIndex = val;
      this.cellContext.rowIndex = val;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._rowIndex;
    }
    /**
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "column",
    set: function set(column) {
      this._column = column;
      this.cellContext.column = column;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._column;
    }
    /**
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "row",
    set: function set(row) {
      this._row = row;
      this.cellContext.row = row;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._row;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "sorts",
    set: function set(val) {
      this._sorts = val;
      this.calcSortDir = this.calcSortDir(val);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._sorts;
    }
    /**
     * @param {?} status
     * @return {?}
     */

  }, {
    key: "treeStatus",
    set: function set(status) {
      if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
        this._treeStatus = 'collapsed';
      } else {
        this._treeStatus = status;
      }

      this.cellContext.treeStatus = this._treeStatus;
      this.checkValueUpdates();
      this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._treeStatus;
    }
    /**
     * @return {?}
     */

  }, {
    key: "columnCssClasses",
    get: function get() {
      /** @type {?} */
      var cls = 'datatable-body-cell';

      if (this.column.cellClass) {
        if (typeof this.column.cellClass === 'string') {
          cls += ' ' + this.column.cellClass;
        } else if (typeof this.column.cellClass === 'function') {
          /** @type {?} */
          var res = this.column.cellClass({
            row: this.row,
            group: this.group,
            column: this.column,
            value: this.value,
            rowHeight: this.rowHeight
          });

          if (typeof res === 'string') {
            cls += res;
          } else if (typeof res === 'object') {
            /** @type {?} */
            var keys = Object.keys(res);

            for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
              var k = _keys3[_i6];

              if (res[k] === true) {
                cls += " ".concat(k);
              }
            }
          }
        }
      }

      if (!this.sortDir) {
        cls += ' sort-active';
      }

      if (this.isFocused) {
        cls += ' active';
      }

      if (this.sortDir === SortDirection.asc) {
        cls += ' sort-asc';
      }

      if (this.sortDir === SortDirection.desc) {
        cls += ' sort-desc';
      }

      return cls;
    }
    /**
     * @return {?}
     */

  }, {
    key: "width",
    get: function get() {
      return this.column.width;
    }
    /**
     * @return {?}
     */

  }, {
    key: "minWidth",
    get: function get() {
      return this.column.minWidth;
    }
    /**
     * @return {?}
     */

  }, {
    key: "maxWidth",
    get: function get() {
      return this.column.maxWidth;
    }
    /**
     * @return {?}
     */

  }, {
    key: "height",
    get: function get() {
      /** @type {?} */
      var height = this.rowHeight;

      if (isNaN(height)) {
        return height;
      }

      return height + 'px';
    }
  }]);

  return DataTableBodyCellComponent;
}();

DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
  return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
};

DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableBodyCellComponent,
  selectors: [["datatable-body-cell"]],
  viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
        return ctx.onDblClick($event);
      })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    }
  },
  inputs: {
    group: "group",
    rowHeight: "rowHeight",
    isSelected: "isSelected",
    expanded: "expanded",
    rowIndex: "rowIndex",
    column: "column",
    row: "row",
    sorts: "sorts",
    treeStatus: "treeStatus",
    displayCheck: "displayCheck"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
  template: function DataTableBodyCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

DataTableBodyCellComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};

DataTableBodyCellComponent.propDecorators = {
  displayCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  group: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  isSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  column: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  row: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  sorts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  treeStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  activate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  treeAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  cellTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: ['cellTemplate', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"],
      static: true
    }]
  }],
  columnCssClasses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['class']
  }],
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.width.px']
  }],
  minWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.minWidth.px']
  }],
  maxWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.maxWidth.px']
  }],
  height: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
    args: ['style.height']
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['focus']
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['blur']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['click', ['$event']]
  }],
  onDblClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['dblclick', ['$event']]
  }],
  onKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
    args: ['keydown', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-body-cell',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, {
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['class']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.width.px']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.maxWidth.px']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
      args: ['style.height']
    }],

    /**
     * @return {?}
     */
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['focus']
    }],

    /**
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['blur']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['click', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['dblclick', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
      args: ['keydown', ['$event']]
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: ['cellTemplate', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"],
        static: true
      }]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} selected
 * @param {?} row
 * @param {?} comparefn
 * @return {?}
 */


function selectRows(selected, row, comparefn) {
  /** @type {?} */
  var selectedIndex = comparefn(row, selected);

  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }

  return selected;
}
/**
 * @param {?} selected
 * @param {?} rows
 * @param {?} index
 * @param {?} prevIndex
 * @param {?} comparefn
 * @return {?}
 */


function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  /** @type {?} */
  var reverse = index < prevIndex;

  for (var i = 0; i < rows.length; i++) {
    /** @type {?} */
    var row = rows[i];
    /** @type {?} */

    var greater = i >= prevIndex && i <= index;
    /** @type {?} */

    var lesser = i <= prevIndex && i >= index;
    /** @type {?} */

    var range = {
      start: 0,
      end: 0
    };

    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }

    if (reverse && lesser || !reverse && greater) {
      // if in the positive range to be added to `selected`, and
      // not already in the selected array, add it
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }

  return selected;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function Model() {}

if (false) {}

var DataTableSelectionComponent = /*#__PURE__*/function () {
  function DataTableSelectionComponent() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableSelectionComponent);

    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @param {?} event
   * @param {?} index
   * @param {?} row
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableSelectionComponent, [{
    key: "selectRow",
    value: function selectRow(event, index, row) {
      var _this$selected3;

      if (!this.selectEnabled) return;
      /** @type {?} */

      var chkbox = this.selectionType === SelectionType.checkbox;
      /** @type {?} */

      var multi = this.selectionType === SelectionType.multi;
      /** @type {?} */

      var multiClick = this.selectionType === SelectionType.multiClick;
      /** @type {?} */

      var selected = [];

      if (multi || chkbox || multiClick) {
        if (event.shiftKey) {
          selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
        } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
          selected = selectRows(Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selected), row, this.getRowSelectedIdx.bind(this));
        } else {
          selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }

      if (typeof this.selectCheck === 'function') {
        selected = selected.filter(this.selectCheck.bind(this));
      }

      this.selected.splice(0, this.selected.length);

      (_this$selected3 = this.selected).push.apply(_this$selected3, Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));

      this.prevIndex = index;
      this.select.emit({
        selected: selected
      });
    }
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "onActivate",
    value: function onActivate(model, index) {
      var type = model.type,
          event = model.event,
          row = model.row;
      /** @type {?} */

      var chkbox = this.selectionType === SelectionType.checkbox;
      /** @type {?} */

      var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

      if (select) {
        this.selectRow(event, index, row);
      } else if (type === 'keydown') {
        if (
        /** @type {?} */
        event.keyCode === Keys.return) {
          this.selectRow(event, index, row);
        } else {
          this.onKeyboardFocus(model);
        }
      }

      this.activate.emit(model);
    }
    /**
     * @param {?} model
     * @return {?}
     */

  }, {
    key: "onKeyboardFocus",
    value: function onKeyboardFocus(model) {
      var keyCode =
      /** @type {?} */
      model.event.keyCode;
      /** @type {?} */

      var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

      if (shouldFocus) {
        /** @type {?} */
        var isCellSelection = this.selectionType === SelectionType.cell;

        if (!model.cellElement || !isCellSelection) {
          this.focusRow(model.rowElement, keyCode);
        } else if (isCellSelection) {
          this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
        }
      }
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */

  }, {
    key: "focusRow",
    value: function focusRow(rowElement, keyCode) {
      /** @type {?} */
      var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if (nextRowElement) nextRowElement.focus();
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */

  }, {
    key: "getPrevNextRow",
    value: function getPrevNextRow(rowElement, keyCode) {
      /** @type {?} */
      var parentElement = rowElement.parentElement;

      if (parentElement) {
        /** @type {?} */
        var focusElement;

        if (keyCode === Keys.up) {
          focusElement = parentElement.previousElementSibling;
        } else if (keyCode === Keys.down) {
          focusElement = parentElement.nextElementSibling;
        }

        if (focusElement && focusElement.children.length) {
          return focusElement.children[0];
        }
      }
    }
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */

  }, {
    key: "focusCell",
    value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
      /** @type {?} */
      var nextCellElement;

      if (keyCode === Keys.left) {
        nextCellElement = cellElement.previousElementSibling;
      } else if (keyCode === Keys.right) {
        nextCellElement = cellElement.nextElementSibling;
      } else if (keyCode === Keys.up || keyCode === Keys.down) {
        /** @type {?} */
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

        if (nextRowElement) {
          /** @type {?} */
          var children = nextRowElement.getElementsByClassName('datatable-body-cell');
          if (children.length) nextCellElement = children[cellIndex];
        }
      }

      if (nextCellElement) nextCellElement.focus();
    }
    /**
     * @param {?} row
     * @return {?}
     */

  }, {
    key: "getRowSelected",
    value: function getRowSelected(row) {
      return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */

  }, {
    key: "getRowSelectedIdx",
    value: function getRowSelectedIdx(row, selected) {
      var _this24 = this;

      if (!selected || !selected.length) return -1;
      /** @type {?} */

      var rowId = this.rowIdentity(row);
      return selected.findIndex(
      /**
      * @param {?} r
      * @return {?}
      */
      function (r) {
        /** @type {?} */
        var id = _this24.rowIdentity(r);

        return id === rowId;
      });
    }
  }]);

  return DataTableSelectionComponent;
}();

DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
  return new (t || DataTableSelectionComponent)();
};

DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableSelectionComponent,
  selectors: [["datatable-selection"]],
  inputs: {
    rows: "rows",
    selected: "selected",
    selectEnabled: "selectEnabled",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    selectCheck: "selectCheck"
  },
  outputs: {
    activate: "activate",
    select: "select"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DataTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
DataTableSelectionComponent.propDecorators = {
  rows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectEnabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectionType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowIdentity: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  selectCheck: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  activate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-selection',
      template: "\n    <ng-content></ng-content>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [];
  }, {
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function ISummaryColumn() {}

if (false) {}
/**
 * @param {?} cells
 * @return {?}
 */


function defaultSumFunc(cells) {
  /** @type {?} */
  var cellsWithValues = cells.filter(
  /**
  * @param {?} cell
  * @return {?}
  */
  function (cell) {
    return !!cell;
  });

  if (!cellsWithValues.length) {
    return null;
  }

  if (cellsWithValues.some(
  /**
  * @param {?} cell
  * @return {?}
  */
  function (cell) {
    return typeof cell !== 'number';
  })) {
    return null;
  }

  return cellsWithValues.reduce(
  /**
  * @param {?} res
  * @param {?} cell
  * @return {?}
  */
  function (res, cell) {
    return res + cell;
  });
}
/**
 * @param {?} cells
 * @return {?}
 */


function noopSumFunc(cells) {
  return null;
}

var DataTableSummaryRowComponent = /*#__PURE__*/function () {
  function DataTableSummaryRowComponent() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableSummaryRowComponent);

    this.summaryRow = {};
  }
  /**
   * @return {?}
   */


  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableSummaryRowComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges() {
      if (!this.columns || !this.rows) {
        return;
      }

      this.updateInternalColumns();
      this.updateValues();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "updateInternalColumns",
    value: function updateInternalColumns() {
      this._internalColumns = this.columns.map(
      /**
      * @param {?} col
      * @return {?}
      */
      function (col) {
        return Object.assign({}, col, {
          cellTemplate: col.summaryTemplate
        });
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "updateValues",
    value: function updateValues() {
      var _this25 = this;

      this.summaryRow = {};
      this.columns.filter(
      /**
      * @param {?} col
      * @return {?}
      */
      function (col) {
        return !col.summaryTemplate;
      }).forEach(
      /**
      * @param {?} col
      * @return {?}
      */
      function (col) {
        /** @type {?} */
        var cellsFromSingleColumn = _this25.rows.map(
        /**
        * @param {?} row
        * @return {?}
        */
        function (row) {
          return row[col.prop];
        });
        /** @type {?} */


        var sumFunc = _this25.getSummaryFunction(col);

        _this25.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
      });
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */

  }, {
    key: "getSummaryFunction",
    value: function getSummaryFunction(column) {
      if (column.summaryFunc === undefined) {
        return defaultSumFunc;
      } else if (column.summaryFunc === null) {
        return noopSumFunc;
      } else {
        return column.summaryFunc;
      }
    }
  }]);

  return DataTableSummaryRowComponent;
}();

DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
  return new (t || DataTableSummaryRowComponent)();
};

DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DataTableSummaryRowComponent,
  selectors: [["datatable-summary-row"]],
  hostAttrs: [1, "datatable-summary-row"],
  inputs: {
    rows: "rows",
    columns: "columns",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    innerWidth: "innerWidth"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
  template: function DataTableSummaryRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], DataTableBodyRowComponent],
  encapsulation: 2
});
DataTableSummaryRowComponent.propDecorators = {
  rows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  columns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  rowHeight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  offsetX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  innerWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'datatable-summary-row',
      template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
      host: {
        class: 'datatable-summary-row'
      }
    }]
  }], function () {
    return [];
  }, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var NgxDatatableModule = /*#__PURE__*/function () {
  function NgxDatatableModule() {
    Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NgxDatatableModule);
  }

  Object(E_github_kohort_role_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDatatableModule, null, [{
    key: "forRoot",

    /**
     * Configure global configuration via INgxDatatableConfig
     * @param {?} configuration
     * @return {?}
     */
    value: function forRoot(configuration) {
      return {
        ngModule: NgxDatatableModule,
        providers: [{
          provide: 'configuration',
          useValue: configuration
        }]
      };
    }
  }]);

  return NgxDatatableModule;
}();

NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: NgxDatatableModule
});
NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function NgxDatatableModule_Factory(t) {
    return new (t || NgxDatatableModule)();
  },
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgxDatatableModule, {
    declarations: function declarations() {
      return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
    },
    exports: function exports() {
      return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NgxDatatableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
      exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
    }]
  }], null, null);
})();
/**
 * Interface definition for INgxDatatableConfig global configuration
 * @record
 */


function INgxDatatableConfig() {}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {string} */


var ClickType = {
  single: 'single',
  double: 'double'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Column Type
 * @record
 */

function TableColumn() {}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function SortPropDir() {}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


if (typeof document !== 'undefined' && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/

/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 * @param {?} x
 * @param {?} y
 * @return {?}
 */


function elementsFromPoint(x, y) {
  /** @type {?} */
  var elements = [];
  /** @type {?} */

  var previousPointerEvents = [];
  /** @type {?} */

  var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

  /** @type {?} */

  var i;
  /** @type {?} */

  var d; //if (document === undefined) return elements;
  // get all elements via elementFromPoint, and remove them from hit-testing in order

  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    }); // add "pointer-events: none", to get to the underlying element

    current.style.setProperty('pointer-events', 'none', 'important');
  } // restore the previous pointer-events values


  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  } // return our results


  return elements;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

}]);
//# sourceMappingURL=app-content-dashboard-dashboard-module.js.map