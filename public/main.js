(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/8v":
/*!************************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.service.ts ***!
  \************************************************************/
/*! exports provided: THEME_SETTINGS_CONFIG, ThemeSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_SETTINGS_CONFIG", function() { return THEME_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsService", function() { return ThemeSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var THEME_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('themeCustomConfig');
var ThemeSettingsService = /** @class */ (function () {
    function ThemeSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    ThemeSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](_this._configSubject.getValue());
                // Reset the layout from the default config
                // config.layout = _.cloneDeep(this._defaultConfig.layout);
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(ThemeSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: false,
        configurable: true
    });
    ThemeSettingsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [THEME_SETTINGS_CONFIG,] }] }
    ]; };
    ThemeSettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], ThemeSettingsService);
    return ThemeSettingsService;
}());



/***/ }),

/***/ "+kQa":
/*!***********************************************!*\
  !*** ./src/app/_directives/card.directive.ts ***!
  \***********************************************/
/*! exports provided: CardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDirective", function() { return CardDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var CardDirective = /** @class */ (function () {
    function CardDirective(el) {
        this.el = el;
        this.class = this.el.nativeElement.classList;
    }
    CardDirective.prototype.ngOnInit = function () { };
    CardDirective.prototype.ngAfterViewInit = function () {
    };
    CardDirective.prototype.ngOnDestroy = function () {
    };
    CardDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    CardDirective.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class',] }]
    };
    CardDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mCard]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CardDirective);
    return CardDirective;
}());



/***/ }),

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-left-5{\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdC01e1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "/DnI":
/*!************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "56Vo");
/* harmony import */ var _breadcrumb_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component.css */ "ChsR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.processBreadCrumbLinks();
    };
    BreadcrumbComponent.prototype.processBreadCrumbLinks = function () {
    };
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        breadcrumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-breadcrumb',
            template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_breadcrumb_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\github\kohort-role\src\main.ts */"zUnb");


/***/ }),

/***/ "0KhJ":
/*!******************************************************************!*\
  !*** ./src/app/_layout/public-layout/public-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_public_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./public-layout.component.html */ "IY49");
/* harmony import */ var _public_layout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-layout.component.css */ "yVDo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        this.setBodyClass();
    };
    PublicLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PublicLayoutComponent.prototype.setBodyClass = function () {
        var previosBodyClassList = [].slice.call(document.body.classList);
        var self = this;
        previosBodyClassList.forEach(function (c) {
            self.renderer.removeClass(document.body, c);
        });
        var currentBodyClassList = ['vertical-layout', 'bg-full-screen-image', 'vertical-overlay-menu',
            '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
        currentBodyClassList.forEach(function (c) {
            self.renderer.addClass(document.body, c);
        });
    };
    PublicLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    PublicLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-public-layout',
            template: _raw_loader_public_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_public_layout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document])
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());



/***/ }),

/***/ "0SQT":
/*!****************************************************!*\
  !*** ./src/app/_layout/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "ReIo");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "pdKX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/app.constants */ "2iER");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");










var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_renderer, document, _themeSettingsService, deviceService) {
        this._renderer = _renderer;
        this.document = document;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.isMobile = false;
        this.selectedColorClass = '';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
            _this.refreshView();
        });
    };
    HeaderComponent.prototype.refreshView = function () {
        var self = this;
        var headerElement = document.getElementsByClassName('header-navbar');
        if (headerElement.item(0)) {
            var currentHeaderClassList = [];
            var navbar = this.document.getElementById('navbar-mobile');
            // Layout
            if (self._themeSettingsConfig.layout.style === 'horizontal') {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu',
                    'navbar-without-dd-arrow', 'navbar-static-top'];
                var topHeaderElement = document.getElementById('top-header');
                if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
                    currentHeaderClassList.push('fixed-top');
                    this._renderer.removeClass(topHeaderElement, 'navbar-brand-center');
                    navbar.classList.remove('show');
                }
                else {
                    currentHeaderClassList.push('navbar-brand-center');
                    this._renderer.removeClass(topHeaderElement, 'fixed-top');
                    navbar.classList.add('show');
                }
            }
            else {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'fixed-top',
                    'navbar-shadow'];
                if (self._themeSettingsConfig.colorTheme === 'semi-light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    if (self._themeSettingsConfig.layout.style === 'vertical') {
                        // currentHeaderClassList.push('bg-info');
                    }
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                }
                else if (self._themeSettingsConfig.colorTheme === 'semi-dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
            }
            currentHeaderClassList.forEach(function (c) {
                self._renderer.addClass(headerElement.item(0), c);
            });
        }
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HeaderComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        this.refreshView();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"] }
    ]; };
    HeaderComponent.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document,
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "0cLh":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/horizontalnav/horizontalnav.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sticky-wrapper\" class=\"sticky-wrapper\">\n  <div\n    class=\"menu-header header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-dark navbar-without-dd-arrow navbar-shadow\"\n    role=\"navigation\" data-menu=\"menu-wrapper\" (scroll)=\"onWindowScroll($event);\" id=\"menu-header\">\n    <div class=\"navbar-container main-menu-content\" data-menu=\"menu-container\">\n      <ul class=\"nav navbar-nav\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\n        <li *ngFor=\"let child of _menuSettingsConfig.horizontal_menu.items\" class=\"nav-item\" [ngClass]=\"{\n          'dropdown nav-item ':(child.title && child.submenu),\n          'nav-item' : true,\n          'open': child.isOpen,\n        'active': child.isSelected }\" [attr.data-menu]=\"child.submenu? 'dropdown' : ''\"\n          (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\n          <!-- Top Menu -->\n          <a class=\"nav-link \" [ngClass]=\"{'dropdown-item dropdown-toggle active': child.submenu}\"\n            [attr.data-toggle]=\"child.submenu? 'dropdown' : ''\" (click)=\"toggleMenu($event, child)\"\n            routerLink=\"{{child.page != 'null'?child.page:router.url}}\" *ngIf=\"!child.isExternalLink\">\n            <i class=\"la\" [ngClass]=\"child.icon\"></i><span data-i18n=\"nav.dash.main\">{{child.title}}</span>\n          </a>\n          <a class=\"nav-link \" [ngClass]=\"{'dropdown-item dropdown-toggle active': child.submenu}\"\n            [attr.data-toggle]=\"child.submenu? 'dropdown' : ''\" (click)=\"toggleMenu($event, child)\" [href]=\"child.page\"\n            target=\"_blank\" *ngIf=\"!child.section && child.isExternalLink\">\n            <i class=\"la\" [ngClass]=\"child.icon\"></i><span data-i18n=\"nav.dash.main\">{{child.title}}</span>\n          </a>\n\n          <ul class=\"dropdown-menu\" *ngIf=\"child.submenu\">\n            <li *ngFor=\"let subchild of child.submenu.items\" class=\"\"\n              [ngClass]=\"{'dropdown dropdown-submenu':(subchild.submenu), 'dropdown-divider':(subchild.title =='horizontal-divider'), 'active': subchild.isSelected }\"\n              (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\"\n              [attr.data-menu]=\"subchild.submenu? 'dropdown-submenu' : ''\">\n              <a class=\"dropdown-item\" (click)=\"toggleMenu($event, subchild)\"\n                routerLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\" data-toggle=\"dropdown\"\n                *ngIf=\"!subchild.isExternalLink\">\n                <i class=\"la\" [ngClass]=\"subchild.icon\"></i> <span data-i18n=\"nav.dash.main\">{{subchild.title}}</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "0eR2":
/*!***************************************!*\
  !*** ./src/app/_services/data.api.ts ***!
  \***************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataApiService = /** @class */ (function () {
    function DataApiService(http) {
        this.http = http;
        this.apiBaseURL = 'assets/data';
        this.loadDataURL = null;
        this.loadDataURL = this.apiBaseURL + "/chartist/charts/chartist.json";
    }
    DataApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Error
            console.error('error:', error.error.message);
        }
        else {
            // Error
            console.error("Api server returned " + error.status + ", " +
                ("error body: " + error.error));
        }
        // throwError is observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Error has happened');
    };
    DataApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    DataApiService.prototype.getDashboardData = function () {
        return this.http.get(this.loadDataURL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DataApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, alertService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.errorMessage = '';
        this.successMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.doRegister(this.registerForm.value)
            .then(function (res) {
            _this.loading = false;
            console.log(res);
            _this.errorMessage = '';
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.alertService.error(err.message);
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "2iER":
/*!*******************************************!*\
  !*** ./src/app/_helpers/app.constants.ts ***!
  \*******************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.MOBILE_RESPONSIVE_WIDTH = 992;
    AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL = 768;
    AppConstants.NAVIGATION_TYPE_COLLAPSIBLE = 'menu-collapsible';
    AppConstants.NAVIGATION_TYPE_ACCORDATION = 'menu-accordation';
    AppConstants.LAYOUT_STYLE_HORIZONTAL = 'horizontal';
    AppConstants.LAYOUT_STYLE_VERTICAL = 'vertical';
    AppConstants.fireRefreshEventOnWindow = function () {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
    };
    return AppConstants;
}());



/***/ }),

/***/ "3UuA":
/*!*********************************************************************!*\
  !*** ./src/app/_layout/private-layout/private-layout.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "56Vo":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/breadcrumb/breadcrumb.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"content-header-left col-md-6 col-12 mb-2 breadcrumb-new\" *ngIf=\"breadcrumb\">\n    <h3 class=\"content-header-title mb-0 d-inline-block\">{{breadcrumb.mainlabel}}</h3>\n    <div class=\"row breadcrumbs-top d-inline-block\">\n      <div class=\"breadcrumb-wrapper col-12\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\" *ngFor=\"let link of breadcrumb.links\">\n            <a *ngIf=\"link.isLink\" routerLink=\"{{link.link}}\">{{link.name}}</a>\n            <span *ngIf=\"!link.isLink\">{{link.name}}</span>\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"content-header-right col-md-6 col-12\">\n    <div ngbDropdown class=\"d-inline-block float-md-right\">\n      <button class=\"btn btn-info\" id=\"dropdownBasic1\" ngbDropdownToggle>Action</button>\n      <div ngbDropdownMenu class=\"arrow _dropdown_mob dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\n        <button class=\"dropdown-item\">Calender</button>\n        <button class=\"dropdown-item\">Cart</button>\n        <button class=\"dropdown-item\">Support</button>\n        <div class=\"dropdown-divider\"></div>\n        <button class=\"dropdown-item\">Settings</button>\n      </div>\n    </div>\n  </div> -->\n</div>\n");

/***/ }),

/***/ "5skR":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/verticalnav/verticalnav.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" id=\"main-menu\"\n\tclass=\"main-menu menu-fixed menu-dark menu-accordion menu-bordered menu-shadow\" data-scroll-to-active=\"true\">\n\t<div id=\"main-menu-content\" class=\"main-menu-content ps-container ps-theme-light\" fxFlex=\"auto\"\n\t\t[perfectScrollbar]=\"config\">\n\t\t<ul class=\"navigation navigation-main\" id=\"main-menu-navigation\" data-menu=\"menu-navigation\">\n\t\t\t<!-- Menu -->\n\t\t\t{{child?child.title:''}}\n\t\t\t<li *ngFor=\"let child of _menuSettingsConfig.vertical_menu.items\" class=\"\" [ngClass]=\"{\n            'has-sub': child.submenu,\n            'open': child.isOpen && child.submenu,\n            'nav-item': child.title,\n            'navigation-header':child.section,\n            'active': child.isSelected && !child.submenu,\n            'menu-collapsed-open': child.isSelected && child.submenu,\n            'hover': child.hover\n          }\">\n\t\t\t\t<!-- Section -->\n\t\t\t\t<span class=\"menu-title\" *ngIf=\"child.section\">{{child.section}}</span>\n\t\t\t\t<i class=\"la\" *ngIf=\"child.section\" [ngClass]=\"child.icon\" data-toggle=\"tooltip\" data-placement=\"right\"\n\t\t\t\t\tdata-original-title=\"Support\"></i>\n\n\t\t\t\t<!-- Root Menu -->\n\t\t\t\t<a  [showFor]=\"child.roleValue\" *ngIf=\"child.title && !child.submenu && !child.excludeInVertical && !child.isExternalLink && !child.issupportExternalLink\"\n\t\t\t\t\trouterLink=\"{{child.page != 'null'?child.page:router.url}}\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t\t<a *ngIf=\"child.title && !child.submenu && !child.excludeInVertical && child.isExternalLink\"\n          [href]=\"child.page\"  target=\"_blank\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\n\n\t\t\t\t<!-- Submenu -->\n\t\t\t\t<a *ngIf=\"child.title && child.submenu && !child.excludeInVertical\"  [showFor]=\"child.roleValue\"\n\t\t\t\t\trouterLink=\"{{child.page != 'null'?child.page:router.url}}\" (click)=\"toggleMenu($event, child)\">\n\t\t\t\t\t<i class=\"la\" [ngClass]=\"child.icon\"></i>\n\t\t\t\t\t<span class=\"menu-title\" data-i18n=\"\">{{child.title}}</span>\n\t\t\t\t\t<span *ngIf=\"child.badge\" class=\"badge badge-pill float-right\"\n\t\t\t\t\t\t[ngClass]=\"{'badge-info mr-2': child.badge.type=='badge-info' , 'badge-danger':child.badge.type=='badge-danger'}\">\n\t\t\t\t\t\t{{child.badge.value}}\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t\t<ul *ngIf=\"child.submenu\" class=\"menu-content\" [@popOverState]=\"child.isOpen\">\n          <!-- Submenu of Submenu -->\n\t\t\t\t\t<li *ngFor=\"let subchild of child.submenu.items\" class=\"isShown\"\n\t\t\t\t\t\t[ngClass]=\"{'has-sub':(subchild.submenu),'active': subchild.isSelected && !subchild.submenu, 'open': subchild.isOpen && subchild.submenu}\">\n\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"!subchild.submenu && !subchild.excludeInVertical\" (click)=\"toggleMenu($event, subchild, true)\"\n\t\t\t\t\t\t\trouterLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\">{{subchild.title}}</a>\n\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"subchild.submenu && !subchild.excludeInVertical\" (click)=\"toggleMenu($event, subchild, true)\"\n\t\t\t\t\t\t\trouterLink=\"{{subchild.page != 'null'?subchild.page:router.url}}\">{{subchild.title}}</a>\n\t\t\t\t\t\t<ul *ngIf=\"subchild.submenu && !subchild.excludeInVertical\" class=\"menu-content\">\n\t\t\t\t\t\t\t<li *ngFor=\"let subchild of subchild.submenu.items\" [ngClass]=\"{'active': subchild.isSelected && !subchild.submenu}\">\n\t\t\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"!subchild.event\"\n\t\t\t\t\t\t\t\t\trouterLink=\"{{subchild.page}}\" (click)=\"toggleMenu($event, subchild, true)\">{{subchild.title}}</a>\n\t\t\t\t\t\t\t\t<a class=\"menu-item\" *ngIf=\"subchild.event\"\n\t\t\t\t\t\t\t\t\t(click)=\"callFunction(subchild.event, subchild)\">{{subchild.title}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n");

/***/ }),

/***/ "76vB":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/customizer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customizer border-left ft-blue-grey border-left ft-lighten-4 d-none d-xl-block\" id=\"customizer\">\n  <a [routerLink]=\"\" class=\"customizer-close\" (click)=\"toggleCustomizer($event)\"><i class=\"feather ft-x font-medium-3\"></i></a>\n  <a [routerLink]=\"\" class=\"customizer-toggle bg-danger box-shadow-3\" (click)=\"toggleCustomizer($event)\"><i\n      class=\"feather ft-settings font-medium-3 spinner white\"></i></a>\n  <div class=\"customizer-content p-2\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n    <h4 class=\"text-uppercase mb-0\">Theme Customizer</h4>\n    <hr>\n    <p>Customize & Preview in Real Time</p>\n    <h5 class=\"mt-1 mb-1 text-bold-500\">Menu Color Options</h5>\n    <div class=\"form-group\">\n      <!-- Outline Button group -->\n      <div class=\"btn-group customizer-sidebar-options\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-info _light\" (click)=\"setMenuColor('menu-light',$event)\"\n          data-sidebar=\"menu-light\" id=\"light-menu\">Light Menu\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-info _dark active\" (click)=\"setMenuColor('menu-dark',$event)\"\n          data-sidebar=\"menu-dark\" id=\"dark-menu\">Dark Menu\n        </button>\n      </div>\n    </div>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Layout Options</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified layout-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Layouts</ng-template>\n              <ng-template ngbTabContent>\n                <div role=\"tabpanel\" class=\"tab-panel active px-1 pt-1\" id=\"tabIcon21\" aria-expanded=\"true\"\n                  aria-labelledby=\"baseIcon-tab21\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"_themeSettingsConfig.menu == 'collapse'\" (change)=\"toggleFixMenu($event)\"\n                    [(ngModel)]=\"isCollapsedMenu\"  name=\"collapsed-sidebar\" id=\"collapsed-sidebar\" >\n                    <label class=\"custom-control-label\" for=\"collapsed-sidebar\">Collapsed Menu</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\"\n                      name=\"fixed-layout\" id=\"fixed-layout\" (ngModelChange)=\"toggleLayout('fixed')\" [(ngModel)]=\"isfixChecked\">\n                    <label class=\"custom-control-label\" for=\"fixed-layout\">Fixed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\"\n                      name=\"boxed-layout\" id=\"boxed-layout\" (ngModelChange)=\"toggleLayout('boxed')\" [(ngModel)]=\"isboxChecked\">\n                    <label class=\"custom-control-label\" for=\"boxed-layout\">Boxed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"setLayout('static',$event)\"\n                    [(ngModel)]=\"isStaticLayout\" name=\"static-layout\" id=\"static-layout\">\n                    <label class=\"custom-control-label\" for=\"static-layout\">Static Layout</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Navigation</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon22\" aria-labelledby=\"baseIcon-tab22\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"right-side-icons\"\n                    [(ngModel)]=\"isRightSideIcons\" (change)=\"setNavigation('menu-icon-right',$event)\" id=\"right-side-icons\">\n                    <label class=\"custom-control-label\" for=\"right-side-icons\">Right Side Icons</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"bordered-navigation\"\n                    [(ngModel)]=\"isBorderedNavigation\" (change)=\"setNavigation('menu-bordered',$event)\" id=\"bordered-navigation\">\n                    <label class=\"custom-control-label\" for=\"bordered-navigation\">Bordered Navigation</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"flipped-navigation\"\n                    [(ngModel)]=\"isFlippedNavigation\" (change)=\"setNavigation('menu-flipped',$event)\" id=\"flipped-navigation\">\n                    <label class=\"custom-control-label\" for=\"flipped-navigation\">Flipped Navigation</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"collapsible-navigation\"\n                    [(ngModel)]=\"isCollapsibleNavigation\" (change)=\"setNavigation('menu-collapsible',$event)\" id=\"collapsible-navigation\">\n                    <label class=\"custom-control-label\" for=\"collapsible-navigation\">Collapsible Navigation</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"static-navigation\"\n                    [(ngModel)]=\"isStaticNavigation\" (change)=\"setNavigation('menu-static',$event)\" id=\"static-navigation\">\n                    <label class=\"custom-control-label\" for=\"static-navigation\">Static Navigation</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Navbar</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon23\" aria-labelledby=\"baseIcon-tab23\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"navbar-static-top\"\n                    [(ngModel)]=\"isStaticTop\" (change)=\"setNavbar($event)\" id=\"navbar-static-top\">\n                    <label class=\"custom-control-label\" for=\"navbar-static-top\">Static Top</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Navigation Color Options</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified color-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset (tabChange)=\"changeNavbarFontColor($event)\">\n            <ngb-tab id=\"semi-dark\">\n              <ng-template ngbTabTitle>Semi Dark</ng-template>\n              <ng-template ngbTabContent class=\"px-1\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" checked class=\"custom-control-input bg-default\"\n                        (click)=\"setColor('bg-default')\" id=\"opt-default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-default')\"\n                        for=\"opt-default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"opt-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\"\n                        for=\"opt-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"opt-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\"\n                        for=\"opt-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"opt-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\"\n                        for=\"opt-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"opt-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"opt-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"opt-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"opt-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-sdark-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"opt-pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"opt-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"semi-light\">\n              <ng-template ngbTabTitle>Semi Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h6>Solid</h6>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h6>Gradient</h6>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-gradient-x-pink')\" id=\"bg-gradient-x-pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"dark\">\n              <ng-template ngbTabTitle>Dark</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h3>Solid</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h3>Gradient</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        id=\"bg-gradient-x-pink\" (click)=\"setColor('bg-gradient-x-pink')\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"light\">\n              <ng-template ngbTabTitle>Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-pane\" id=\"clrOpt4\" aria-labelledby=\"color-opt-4\">\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue-grey\"\n                      (click)=\"setColor('bg-blue-grey bg-lighten-4')\" id=\"light-blue-grey\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey bg-lighten-4')\"\n                      for=\"light-blue-grey\">Default</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-primary\"\n                      (click)=\"setColor('bg-primary bg-lighten-4')\" id=\"light-primary\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-primary bg-lighten-4')\"\n                      for=\"light-primary\">Primary</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-danger\"\n                      (click)=\"setColor('bg-danger bg-lighten-4')\" id=\"light-danger\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-danger bg-lighten-4')\"\n                      for=\"light-danger\">Danger</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-success\"\n                      (click)=\"setColor('bg-success bg-lighten-4')\" id=\"light-success\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-success bg-lighten-4')\"\n                      for=\"light-success\">Success</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue\"\n                      (click)=\"setColor('bg-blue bg-lighten-4')\" id=\"light-blue\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue bg-lighten-4')\"\n                      for=\"light-blue\">Blue</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-cyan\"\n                      (click)=\"setColor('bg-cyan bg-lighten-4')\" id=\"light-cyan\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan bg-lighten-4')\"\n                      for=\"light-cyan\">Cyan</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-pink\"\n                      (click)=\"setColor('bg-pink bg-lighten-4')\" id=\"light-pink\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-pink bg-lighten-4')\"\n                      for=\"light-pink\">Pink</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n");

/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doAnonymousLogin = function () {
        return this.afAuth.auth.signInAnonymously();
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGitHubLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('permissions');
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('permissions');
                reject();
            }
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "8i7L":
/*!*****************************************!*\
  !*** ./src/app/_directives/show-for.ts ***!
  \*****************************************/
/*! exports provided: ShowForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowForDirective", function() { return ShowForDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var ShowForDirective = /** @class */ (function () {
    function ShowForDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.allPermissions = [];
    }
    ShowForDirective.prototype.ngOnChanges = function () {
        if (!window.localStorage.getItem('permissions')) {
            console.log('You do not have permissions ');
            return false;
        }
        this.allPermissions = JSON.parse(window.localStorage.getItem('permissions'));
        var pos = this.allPermissions.indexOf(this.roles);
        console.log('pos ', pos);
        if (pos == -1) {
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
    };
    ShowForDirective.prototype.ngOnInit = function () { };
    ShowForDirective.prototype.ngAfterViewInit = function () {
    };
    ShowForDirective.prototype.ngOnDestroy = function () {
    };
    ShowForDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    ShowForDirective.propDecorators = {
        roles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['showFor',] }]
    };
    ShowForDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[showFor]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ShowForDirective);
    return ShowForDirective;
}());



/***/ }),

/***/ "9OSX":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/horizontal/horizontal.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- fixed-top-->\n<nav\n  class=\"top-header header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow navbar-static-top navbar-light navbar-brand-center\"\n  id=\"top-header\" [ngClass]=\"selectedHeaderNavBarClass\">\n  <div class=\"navbar-wrapper\">\n    <div id=\"navbar-header\" class=\"navbar-header\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <li class=\"nav-item mobile-menu d-md-none mr-auto\" ><a\n            class=\"nav-link nav-menu-main menu-toggle hidden-xs11\" (click)=\"toggleNavigation($event)\"><i\n              class=\"feather ft-menu font-large-1\" ></i></a></li>\n        <li class=\"nav-item\"><a [routerLink]=\"['/dashboard']\" class=\"navbar-brand\"><img class=\"brand-logo\" alt=\"modern admin logo\"\n              src=\"../../../../assets/images/logo/logo.png\">\n            <h3 class=\"brand-text\">{{_themeSettingsConfig.brand.brand_name}}</h3>\n          </a></li>\n\n        <li class=\"nav-item d-md-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"navbar-container content\">\n      <div class=\"collapse navbar-collapse show\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav mr-auto float-left\">\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-menu-main menu-toggle hidden-xs\"\n              (click)=\"toggleFixMenu($event)\" ><i class=\"feather ft-menu\"></i></a></li>\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-link-expand\"\n              (click)=\"toggleFullScreen()\" *ngIf =\"maximize === 'on'\"><i class=\"ficon feather ft-maximize\"></i></a></li>\n          <li class=\"nav-item nav-search\"><a [routerLink]=\"\" class=\"nav-link nav-link-search\" (click)=\"clickSearch()\" *ngIf =\"search === 'on'\"><i\n                class=\"ficon feather ft-search\"></i></a>\n            <div class=\"search-input\" [ngClass]=\"{'open': isHeaderSearchOpen}\">\n              <input class=\"input\" type=\"text\" placeholder=\"Explore Modern...\">\n            </div>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav float-right\" >\n          <li class=\"dropdown-language nav-item\" ngbDropdown *ngIf =\"internationalization === 'on'\">\n            <a [routerLink]=\"\" class=\"dropdown-toggle nav-link\" ngbDropdownToggle id=\"dropdown-flag\">\n              <i class=\"flag-icon flag-icon-gb\"></i><span class=\"selected-language\"></span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownLangMenu\">\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-gb\"></i> English\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-fr\"></i> French\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-cn\"></i> Chinese\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-de\"></i> German\n              </a>\n            </div>\n          </li>\n          <li class=\"dropdown-notification nav-item dropdown\" ngbDropdown *ngIf =\"notification === 'on'\">\n            <a class=\"nav-link nav-link-label\" ngbDropdownToggle>\n              <i class=\"ficon feather ft-bell\"></i>\n              <span class=\"badge badge-pill badge-danger badge-up badge-glow\">5</span>\n            </a>\n            <ul class=\"dropdown-menu-media dropdown-menu-right\" ngbDropdownMenu>\n              <li class=\"dropdown-menu-header\">\n                <h6 class=\"dropdown-header m-0\"><span class=\"grey darken-2\">Notifications</span></h6><span\n                  class=\"notification-tag badge badge-default badge-danger float-right m-0\">5 New</span>\n              </li>\n              <li class=\"scrollable-container media-list w-100 ps-container ps-theme-dark ps-active-y\" fxFlex=\"auto\"\n                [perfectScrollbar]=\"config\">\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i class=\"feather ft-plus-square icon-bg-circle bg-cyan\"></i>\n                    </div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">You have new order!</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Lorem ipsum dolor sit amet, consectetuer\n                        elit.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">30 minutes\n                          ago</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-download-cloud icon-bg-circle bg-red bg-darken-1\"></i></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading red darken-1\">99% Server load</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Aliquam tincidunt mauris eu risus.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Five hour\n                          ago</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3\"></i></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading yellow darken-3\">Warning notifixation</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Vestibulum auctor dapibus neque.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Today</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i class=\"feather ft-check-circle icon-bg-circle bg-cyan\"></i>\n                    </div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Complete the task</h6><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Last\n                          week</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i class=\"feather ft-file icon-bg-circle bg-teal\"></i></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Generate monthly report</h6><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Last\n                          month</time></small>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"dropdown-menu-footer\"><a class=\"dropdown-item text-muted text-center\"\n                  href=\"javascript:void(0)\">Read all notifications</a></li>\n            </ul>\n          </li>\n          <li class=\"dropdown-notification nav-item\" ngbDropdown *ngIf =\"email === 'on'\">\n            <a class=\"nav-link nav-link-label\" ngbDropdownToggle><i class=\"ficon feather ft-mail\"></i></a>\n            <ul class=\"dropdown-menu-media dropdown-menu-right\" ngbDropdownMenu>\n              <li class=\"dropdown-menu-header\">\n                <h6 class=\"dropdown-header m-0\"><span class=\"grey darken-2\">Messages</span></h6><span\n                  class=\"notification-tag badge badge-default badge-warning float-right m-0\">4 New</span>\n              </li>\n              <li class=\"scrollable-container media-list w-100 ps-container ps-theme-dark ps-active-y\" fxFlex=\"auto\"\n                [perfectScrollbar]=\"config\">\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-online rounded-circle\"><img\n                          src=\"../../../../assets/images/portrait/small/avatar-s-19.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Margaret Govan</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">I like your portfolio, let's start.</p>\n                      <small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Today</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-busy rounded-circle\"><img\n                          src=\"../../../../assets/images/portrait/small/avatar-s-2.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Bret Lezama</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">I have seen your work, there is</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Tuesday</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-online rounded-circle\"><img\n                          src=\"../../../../assets/images/portrait/small/avatar-s-3.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Carie Berra</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Can we have call in this week ?</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Friday</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media border_bottom\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-away rounded-circle\"><img\n                          src=\"../../../../assets/images/portrait/small/avatar-s-6.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Eric Alsobrook</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">We have project party this saturday.</p>\n                      <small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">last\n                          month</time></small>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"dropdown-menu-footer\"><a class=\"dropdown-item text-muted text-center\"\n                  href=\"javascript:void(0)\">Read all messages</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown-user nav-item\" ngbDropdown>\n            <a class=\"nav-link dropdown-user-link\" ngbDropdownToggle>\n              <span *ngIf=\"currentUser.displayName\"\n                class=\"mr-1 user-name text-bold-700\">{{currentUser.displayName}}</span>\n              <span *ngIf=\"!currentUser.displayName\" class=\"mr-1 user-name text-bold-700\">John Doe</span>\n              <span class=\"avatar avatar-online\">\n                <img *ngIf=\"currentUser.photoURL\" src=\"{{currentUser.photoURL}}\" alt=\"avatar\">\n                <img *ngIf=\"!currentUser.photoURL\" src=\"../../../../assets/images/portrait/small/avatar-s-19.png\"\n                  alt=\"avatar\">\n                <i></i>\n              </span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownProfileMenu\">\n              <a class=\"dropdown-item\" [routerLink]=\"['/user/user-profile']\"><i class=\"feather ft-user\"></i> Edit Profile </a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/email']\"><i class=\"feather ft-mail\"></i> My Inbox </a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/todos']\"><i class=\"feather ft-check-square\"></i> Task </a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/chats']\"><i class=\"feather ft-message-square\"></i> Chats </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\"><i class=\"feather ft-power\"></i> Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AgUQ":
/*!***********************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FullLayoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutNavbarComponent", function() { return FullLayoutNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_full_layout_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./full-layout-navbar.component.html */ "iKjf");
/* harmony import */ var _full_layout_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-layout-navbar.component.css */ "S2SW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





var FullLayoutNavbarComponent = /** @class */ (function () {
    function FullLayoutNavbarComponent(document) {
        this.document = document;
    }
    FullLayoutNavbarComponent.prototype.ngOnInit = function () {
    };
    FullLayoutNavbarComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    FullLayoutNavbarComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    FullLayoutNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-full-layout-navbar',
            template: _raw_loader_full_layout_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_full_layout_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document])
    ], FullLayoutNavbarComponent);
    return FullLayoutNavbarComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDCgpVPWrlzySpZEMl-slunM8-CS5FH_pc",
        authDomain: "kohort-live.firebaseapp.com",
        projectId: "kohort-live",
        storageBucket: "kohort-live.appspot.com",
        messagingSenderId: "771474749014",
        appId: "1:771474749014:web:eb98e8c9cb2fa804a7edf7",
        measurementId: "G-Z1GTC69GNT"
    },
    googleApiKey: 'AIzaSyBHoO0a4Yqbmrx7wnoZiQ2EZ3vvz4eC_WI'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BKfb":
/*!****************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu-right {\n    right: 0;\n    left: auto;\n    top: auto;\n}\n\n.header-navbar .navbar-container ul.nav li a.dropdown-user-link .user-name {\n    margin-left: 0rem !important;\n}\n\n.nav-item:hover {\n    color: #fff;\n}\n\n.border_bottom {\n    border-bottom: none !important;\n}\n\n:host ::ng-deep .dropdown-item:active {\n    color: #fff !important;\n}\n\n@media only screen and (max-width: 991.98px) {\n  .ft-toggle-right {\n    display: none !important;\n  }\n\n  .ft-toggle-left {\n        display: none !important;\n  }\n\n  .collapse:not(.show) {\n    display: unset !important;\n  }\n}\n\n.header-navbar .navbar-header .navbar-brand .brand-text {\n  padding-left: 11px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO1FBQ00sd0JBQXdCO0VBQzlCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoidmVydGljYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRvcDogYXV0bztcbn1cblxuLmhlYWRlci1uYXZiYXIgLm5hdmJhci1jb250YWluZXIgdWwubmF2IGxpIGEuZHJvcGRvd24tdXNlci1saW5rIC51c2VyLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ib3JkZXJfYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmZ0LXRvZ2dsZS1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZ0LXRvZ2dsZS1sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCAuYnJhbmQtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTFweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "BScm":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.config.ts ***!
  \***********************************************************/
/*! exports provided: ThemeSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsConfig", function() { return ThemeSettingsConfig; });
// Default theme settings configurations
var ThemeSettingsConfig = {
    colorTheme: 'semi-light',
    layout: {
        style: 'vertical',
        pattern: 'fixed' // fixed, boxed, static
    },
    menuColor: 'menu-light',
    navigation: 'menu-bordered',
    menu: 'expand',
    header: 'fix',
    footer: 'static',
    customizer: 'off',
    buybutton: 'off',
    headerIcons: {
        maximize: 'on',
        search: 'off',
        internationalization: 'off',
        notification: 'off',
        email: 'off' // on, off
    },
    brand: {
        brand_name: 'CorpCRS ',
        logo: {
            type: 'internal',
            value: 'assets/custom/images/logo.png' // recommended location for custom images
            // type:'url',
            // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
        },
    },
    defaultTitleSuffix: ' CorpCRS'
};


/***/ }),

/***/ "CTrt":
/*!*************************************************************************!*\
  !*** ./src/app/_layout/navigation/verticalnav/verticalnav.component.ts ***!
  \*************************************************************************/
/*! exports provided: VerticalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalnavComponent", function() { return VerticalnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verticalnav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verticalnav.component.html */ "5skR");
/* harmony import */ var _verticalnav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verticalnav.component.css */ "X+AN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");















var VerticalnavComponent = /** @class */ (function () {
    function VerticalnavComponent(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router, ngZone) {
        var _this = this;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this.ngZone = ngZone;
        this.config = { wheelPropagation: true };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                _this.resetMainMenu();
                _this.setActiveRouteInNavbar();
            }
        });
    }
    VerticalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        // TODO Patch to reset menu after login
        this.resetMainMenu();
        this.setActiveRouteInNavbar();
    };
    VerticalnavComponent.prototype.resetMainMenu = function () {
        var nodes = this.document.getElementById('main-menu-navigation').childNodes;
        for (var i = 0; i < nodes.length; i++) {
            this.resetCollapseMenu(nodes[i]);
        }
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['isOpen'] = false;
            this.resetSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i]);
        }
    };
    VerticalnavComponent.prototype.resetCollapseMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('hover');
            element.classList.remove('menu-collapsed-open');
        }
    };
    VerticalnavComponent.prototype.resetSubmenuItems = function (parentItem) {
        if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            parentItem['isOpen'] = false;
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                parentItem['submenu']['items'][j]['isSelected'] = false;
                this.resetSubmenuItems(parentItem['submenu']['items'][j]);
            }
        }
    };
    VerticalnavComponent.prototype.refreshView = function () {
        var mainMenuElement = document.getElementsByClassName('main-menu');
        if (mainMenuElement && mainMenuElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-fixed');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-static');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-fixed');
            }
        }
    };
    VerticalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            if (!this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalnavComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.callFunction = function (event, child, isSubmenuOfSubmenu) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_12__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        child['isSelected'] = true;
    };
    VerticalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    VerticalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    VerticalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    VerticalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this.handleSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    VerticalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_14__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_14__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            if (parentItem.title !== selectedChild.title && parentItem['isOpen'] === true && !isSubmenuOfSubmenu &&
                this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_14__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE) {
                parentItem['isOpen'] = false;
            }
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.page !== 'null') {
                    parentItem['submenu']['items'][j]['isSelected'] = false;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
            }
        }
        else if (parentItem.title !== selectedChild.title && !selectedChild.submenu
            && this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_14__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE
            && parentItem['isOpen'] === true) {
            parentItem['isOpen'] = false;
        }
    };
    VerticalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        var target = event.target || event.srcElement || event.currentTarget;
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        if (child['isSelected'] === true) {
            child['isSelected'] = false;
        }
        else {
            child['isSelected'] = true;
        }
        if (child['hover'] === true) {
            child['hover'] = false;
        }
        else {
            child['hover'] = true;
        }
        if (child['isOpen'] === true) {
            child['isOpen'] = false;
        }
        else {
            child['isOpen'] = true;
        }
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
    };
    VerticalnavComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_11__["MenuSettingsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
    ]; };
    VerticalnavComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], { static: false },] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], { static: true },] }]
    };
    VerticalnavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verticalnav',
            template: _raw_loader_verticalnav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
                        opacity: '1',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
                        opacity: '0',
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('200ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('200ms ease-in-out'))
                ])
            ],
            styles: [_verticalnav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_11__["MenuSettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], VerticalnavComponent);
    return VerticalnavComponent;
}());



/***/ }),

/***/ "ChsR":
/*!*************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu-right {\n  right: 0;\n  left: auto !important;\n}\n\n.dropdown-menu.arrow:before {\n    left: 70px !important;\n    border-bottom-color: #ffffff;\n}\n\n.dropdown-menu.arrow:after {\n    top: 0px;\n}\n\n@media only screen and (max-width:767px) {\n  ._dropdown_mob {\n      margin-left: 150px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0VBQ0U7TUFDSSw2QkFBNkI7RUFDakM7QUFDRiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LmFycm93OmJlZm9yZSB7XG4gICAgbGVmdDogNzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kcm9wZG93bi1tZW51LmFycm93OmFmdGVyIHtcbiAgICB0b3A6IDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC5fZHJvcGRvd25fbW9iIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "CtvL":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changelog/changelog.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"drag-area\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" *blockUI=\"'changelog'; message: 'Loading'\">\n            <m-card [options]=\"options\" (reloadFunction)=\"reloadChangelog($event)\">\n              <ng-container mCardHeaderTitle>\n                Initial Release\n              </ng-container>\n              <ng-container mCardBody>\n                <h5 class=\"my-2\">14-11-2020 [V2.2]</h5>\n                  <div class=\"card-text\">\n                    <ul>\n                      <li>Upgraded project to use Angular 11.0.0.</li>\n                      <li>Upgraded project to use ng-bootstrap 5.0.0.</li>\n                    </ul>\n                  </div>\n                <h5 class=\"my-2\">29-07-2020 [V2.1]</h5>\n                  <div class=\"card-text\">\n                    <ul>\n                      <li>Upgraded project to use Angular 10.0.6.</li>\n                      <li>Fixed Block UI issue.</li>\n                      <li>Fixed card minimize icon issue.</li>\n                    </ul>\n                  </div>\n                <h5 class=\"my-2\">15-02-2020 [V2.0]</h5>\n                  <div class=\"card-text\">\n                    <ul>\n                      <li>Upgraded project to use Angular 9.0.0.</li>\n                      <li>Fixed bank navigation menu highlight issue.</li>\n                    </ul>\n                  </div>\n                <h5 class=\"my-2\">11-08-2019 [V1.1]</h5>\n                  <div class=\"card-text\">\n                    <ul>\n                      <li>Added configuration to hide header icons.</li>\n                    </ul>\n                  </div>\n                <h5 class=\"my-2\">10-12-2019 [V1.0]</h5>\n                <div class=\"card-text\">\n                  <ul>\n                    <li>Initial release</li>\n                  </ul>\n                </div>\n              </ng-container>\n            </m-card>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "DifB":
/*!********************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767.98px) {\n    .header-navbar .navbar-header {\n        width: 100% !important;\n        top: 3px;\n    }\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n  top: auto;\n}\n\n/* .navbar-light {\n    z-index: 1038 !important;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFFBQVE7SUFDWjtBQUNKOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0dBRUciLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogYXV0bztcbn1cblxuLyogLm5hdmJhci1saWdodCB7XG4gICAgei1pbmRleDogMTAzOCAhaW1wb3J0YW50O1xufSAqL1xuIl19 */");

/***/ }),

/***/ "ErSb":
/*!*********************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.module.ts ***!
  \*********************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/content/partials/general/card/card.module */ "vj4e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb.component */ "/DnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");







var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([])
            ],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"]],
            exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"]]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());



/***/ }),

/***/ "FhuM":
/*!*****************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "LGTx");
/* harmony import */ var _card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.css */ "tn+2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/_helpers/app.constants */ "2iER");






var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.reloadFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    CardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.elHeader && this.elHeader.nativeElement.children.length === 0) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['headerClass']) {
            this.options['headerClass'].forEach(function (element) {
                _this.elHeader.nativeElement.classList.add(element);
            });
        }
        if (this.elHeaderTitle && (this.elHeaderTitle.nativeElement.children.length === 0
            && this.elHeaderTitle.nativeElement.innerText.trim().length === 0)) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        if (this.elFooter && this.elFooter.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elHeaderTools && this.elHeaderTools.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elContent && this.elContent.nativeElement.children.length === 0) {
            this.elContent.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['contentClass']) {
            this.options['contentClass'].forEach(function (element) {
                _this.elContent.nativeElement.classList.add(element);
            });
        }
        if (this.elBody && this.elBody.nativeElement.children.length === 0) {
            this.elBody.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['bodyClass']) {
            this.options['bodyClass'].forEach(function (element) {
                _this.elBody.nativeElement.classList.add(element);
            });
        }
        if (this.options && this.options['cardClass']) {
            this.options['cardClass'].forEach(function (element) {
                _this.elCard.nativeElement.classList.add(element);
            });
        }
    };
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.toggleCollpase = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elContent.nativeElement.classList.contains('show')) {
            this.elContent.nativeElement.classList.add('collapse');
            this.elContent.nativeElement.classList.remove('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            target.classList.remove('ft-minus');
            target.classList.add('ft-plus');
        }
        else {
            this.elContent.nativeElement.classList.add('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            this.elContent.nativeElement.classList.remove('collapse');
            target.classList.remove('ft-plus');
            target.classList.add('ft-minus');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.reload = function () {
        this.reloadFunction.emit(this.options);
    };
    CardComponent.prototype.close = function () {
        this.elCard.nativeElement.classList.add('hidden');
        this.elCard.nativeElement.classList.remove('card-fullscreen');
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleExpand = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elCard.nativeElement.classList.contains('card-fullscreen')) {
            this.elCard.nativeElement.classList.remove('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.add('ft-maximize');
            target.classList.remove('ft-minimize');
        }
        else {
            this.elCard.nativeElement.classList.add('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.remove('ft-maximize');
            target.classList.add('ft-minimize');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleMobileMenu = function () {
        if (this.elHeaderTools.nativeElement.classList.contains('visible')) {
            this.elHeaderTools.nativeElement.classList.remove('visible');
        }
        else {
            this.elHeaderTools.nativeElement.classList.add('visible');
        }
        // fire resize event for graphs
        setTimeout(function () { _app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        loading$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        reloadFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        elCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCard', { static: true },] }],
        elHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardHeader', { static: true },] }],
        elHeaderTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardHeaderTitle', { static: true },] }],
        elContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardContent', { static: true },] }],
        elBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardBody', { static: true },] }],
        elFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardFooter', { static: true },] }],
        elHeaderTools: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mCardHeaderTools', { static: true },] }]
    };
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'm-card',
            template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "H3Uw":
/*!*********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HorizontalCustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCustomizerComponent", function() { return HorizontalCustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontal_customizer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontal-customizer.component.html */ "ND4L");
/* harmony import */ var _horizontal_customizer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-customizer.component.css */ "ic24");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");












var colors = __webpack_require__(/*! ../../../../assets/data/customizer/customizerColor.json */ "cveO");
var HorizontalCustomizerComponent = /** @class */ (function () {
    function HorizontalCustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.activeIdString = 'light';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    HorizontalCustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    HorizontalCustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    HorizontalCustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('top-header');
        if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-shadow');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-shadow');
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    HorizontalCustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    HorizontalCustomizerComponent.prototype.setMenuColor = function (e) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        var menuHeaderElement = document.getElementById('menu-header');
        if (e.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-light');
            this._renderer.addClass(darkMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-dark');
        }
        else if (e.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.addClass(lightMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-light');
        }
        // this._themeSettingsService.config = {
        //   menuColor: colorClass, // menu-dark, menu-light
        // };
    };
    HorizontalCustomizerComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-right');
            e.srcElement.classList.add('ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-left');
            e.srcElement.classList.add('ft-toggle-right');
            this.isCollapsedMenu = false;
        }
    };
    HorizontalCustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var isSticky = document.getElementsByClassName('sticky-wrapper');
        var element = document.getElementById('sticky-wrapper');
        if (e.currentTarget.checked === true && layout === 'static') {
            // this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
            this.isStaticLayout = true;
            this._themeSettingsConfig.layout.pattern = 'static';
            element.classList.add('is-static');
            if (this.isboxChecked === false) {
                this._renderer.removeClass(footer, 'fixed-bottom');
            }
        }
        else {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.removeClass(menuHeader, 'navbar-static');
            this._renderer.removeClass(isSticky.item(0), 'is-static');
            this.isStaticLayout = false;
            if (this.isboxChecked === true) {
                this.boxedLayout();
            }
            if (this.isfixChecked === true) {
                this.fixedLayout();
            }
        }
    };
    HorizontalCustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('menu-header');
        if (event.target.checked === true) {
            this._themeSettingsService.config = {
                navigation: navigationClass,
            };
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
    };
    HorizontalCustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var element = document.getElementById('sticky-wrapper');
        if (layout === 'boxed' && this.isboxChecked === true) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === false) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            element.classList.remove('container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
    };
    HorizontalCustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.addClass(footer, 'fixed-bottom');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(document.body, 'container');
        element.classList.remove('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    HorizontalCustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        element.classList.add('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    HorizontalCustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] }
    ]; };
    HorizontalCustomizerComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], { static: false },] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], { static: true },] }]
    };
    HorizontalCustomizerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-horizontal-customizer',
            template: _raw_loader_horizontal_customizer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_horizontal_customizer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document,
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"]])
    ], HorizontalCustomizerComponent);
    return HorizontalCustomizerComponent;
}());



/***/ }),

/***/ "IY49":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/public-layout/public-layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n");

/***/ }),

/***/ "JlEV":
/*!************************************************!*\
  !*** ./src/app/_services/user/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var UserService = /** @class */ (function () {
    function UserService(firestore, afs) {
        this.firestore = firestore;
        this.afs = afs;
        this.ref = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('users');
        this.roleCollection = this.afs.collection('rolemanagement', function (ref) { return ref.orderBy('roleName'); });
    }
    UserService.prototype.getUsers = function () {
        return this.firestore.collection('users').snapshotChanges();
    };
    UserService.prototype.updateUser = function (uid, user) {
        return this.afs.doc('admins/' + uid).set(user);
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('users').snapshotChanges()
                .subscribe(function (users) {
                var contactList = users.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    UserService.prototype.getAllAdmins = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('admins').snapshotChanges()
                .subscribe(function (users) {
                var contactList = users.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    UserService.prototype.getUserRole = function (roleValue) {
        return this.firestore.collection('rolemanagement', function (ref) { return ref.where('roleValue', '==', parseInt(roleValue)); }).valueChanges();
    };
    UserService.prototype.getUserById = function (uid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('admins', function (ref) { return ref.where('uid', '==', uid); }).snapshotChanges()
                .subscribe(function (users) {
                var contactList = users.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    UserService.prototype.getAllRoles = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('rolemanagement').snapshotChanges()
                .subscribe(function (users) {
                var contactList = users.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    UserService.prototype.getRoleById = function (roleValue) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('rolemanagement', function (ref) { return ref.where('roleValue', '==', parseInt(roleValue)); }).snapshotChanges()
                .subscribe(function (users) {
                var contactList = users.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    UserService.prototype.deleteRoleById = function (id) {
        return this.afs.doc('rolemanagement/' + id).delete();
    };
    UserService.prototype.getCurrentUser = function (userId) {
        return this.firestore.collection('users', function (ref) { return ref.where('uid', '==', userId); }).snapshotChanges();
    };
    UserService.prototype.deleteUserById = function (id) {
        return this.afs.doc('admins/' + id).delete();
    };
    UserService.prototype.createUser = function (user) {
        return this.ref.add(user);
    };
    UserService.prototype.createRole = function (role) {
        var _this = this;
        return new Promise(function (resolve) {
            if (role.id) {
                _this.updateCurrRole(role)
                    .then(function () {
                    resolve();
                });
            }
            else {
                _this.newRole(role)
                    .then(function () {
                    resolve();
                });
            }
        });
    };
    UserService.prototype.updateCurrRole = function (role) {
        return this.afs.doc('rolemanagement/' + role.id).set(role);
    };
    UserService.prototype.newRole = function (role) {
        return this.roleCollection.add(role);
    };
    UserService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "L7Rk":
/*!****************************************************!*\
  !*** ./src/app/_services/helper/helper.service.ts ***!
  \****************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.sendEmail = function (subject, body, toAddress) {
        var emailList = toAddress || "firozss31@gmail.com,";
        // let toAddress = "firozss31@gmail.com";
        return Email.send({
            Host: "smtp.gmail.com",
            Username: "info.corpcrs@gmail.com",
            Password: "Corp@123",
            To: emailList,
            From: "info.corpcrs@gmail.com",
            Subject: subject,
            Body: body,
        });
    };
    HelperService.ctorParameters = function () { return []; };
    HelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "LGTx":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/general/card/card.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--begin::Card-->\n<div mCard #mCard [options]=\"options\" class=\"card\">\n  <div class=\"card-header\" #mCardHeader>\n    <h4 class=\"card-title\" #mCardHeaderTitle>\n      <ng-content select=\"[mCardHeaderTitle]\"></ng-content>\n    </h4>\n    <a class=\"heading-elements-toggle\" (click)=\"toggleMobileMenu()\"><i class=\"la la-ellipsis-v font-medium-3\"></i></a>\n    <div class=\"heading-elements\" #mCardHeaderTools>\n      <ng-content select=\"[mCardHeaderTools]\"></ng-content>\n      <ul class=\"list-inline mb-0\">\n        <li *ngIf=\"options && options.minimize\"><a data-action=\"collapse\"><i class=\"feather ft-minus\"\n              (click)=\"toggleCollpase($event)\"></i></a></li>\n        <li *ngIf=\"options && options.reload\"><a data-action=\"reload\"><i class=\"feather ft-rotate-cw\"\n              (click)=\"reload()\"></i></a></li>\n        <li *ngIf=\"options && options.expand\"><a data-action=\"expand\"><i class=\"feather ft-maximize\"\n              (click)=\"toggleExpand($event)\"></i></a></li>\n        <li *ngIf=\"options && options.close\"><a data-action=\"close\"><i class=\"feather ft-x\" (click)=\"close($event)\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card-content collpase show\" #mCardContent>\n    <ng-content select=\"[mCardContent]\"></ng-content>\n    <div class=\"card-body\" #mCardBody>\n      <ng-content select=\"[mCardBody]\"></ng-content>\n    </div>\n  </div>\n  <div class=\"card-footer\" #mCardFooter>\n    <ng-content select=\"[mCardFooter]\"></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "Mpkd":
/*!*****************************************************!*\
  !*** ./src/app/_layout/footer/footer.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ND4L":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customizer border-left ft-blue-grey border-left ft-lighten-4 d-none d-xl-block\" id=\"customizer\">\n  <a [routerLink]=\"\" class=\"customizer-close\" (click)=\"toggleCustomizer($event)\"><i class=\"feather ft-x font-medium-3\"></i></a>\n  <a [routerLink]=\"\" class=\"customizer-toggle bg-danger box-shadow-3\" (click)=\"toggleCustomizer($event)\"><i\n      class=\"feather ft-settings font-medium-3 spinner white\"></i></a>\n  <div class=\"customizer-content p-2\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n    <h4 class=\"text-uppercase mb-0\">Theme Customizer</h4>\n    <hr>\n    <p>Customize & Preview in Real Time</p>\n    <h5 class=\"mt-1 mb-1 text-bold-500\">Menu Color Options</h5>\n    <div class=\"form-group\">\n      <!-- Outline Button group -->\n      <div class=\"btn-group customizer-sidebar-options\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-info _light active\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-light\" id=\"light-menu\">Light Menu\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-info _dark\" (click)=\"setMenuColor($event)\"\n          data-sidebar=\"navbar-dark\" id=\"dark-menu\">Dark Menu\n        </button>\n      </div>\n    </div>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Layout Options</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified layout-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Layouts</ng-template>\n              <ng-template ngbTabContent>\n                <div role=\"tabpanel\" class=\"tab-panel active px-1 pt-1\" id=\"tabIcon21\" aria-expanded=\"true\"\n                  aria-labelledby=\"baseIcon-tab21\">\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"toggleFixMenu($event)\"\n                      [(ngModel)]=\"isCollapsedMenu\" name=\"collapsed-sidebar\" id=\"collapsed-sidebar\">\n                    <label class=\"custom-control-label\" for=\"collapsed-sidebar\">Collapsed Menu</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"fixed-layout\" id=\"fixed-layout\"\n                      [(ngModel)]=\"isfixChecked\" (ngModelChange)=\"toggleLayout('fixed')\">\n                    <label class=\"custom-control-label\" for=\"fixed-layout\">Fixed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"isboxChecked\"\n                      (ngModelChange)=\"toggleLayout('boxed')\" name=\"boxed-layout\" id=\"boxed-layout\">\n                    <label class=\"custom-control-label\" for=\"boxed-layout\">Boxed Layout</label>\n                  </div>\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" (change)=\"setLayout('static',$event)\"\n                      [(ngModel)]=\"isStaticLayout\" name=\"static-layout\" id=\"static-layout\">\n                    <label class=\"custom-control-label\" for=\"static-layout\">Static Layout</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>Navigation</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-panel px-1 pt-1\" id=\"tabIcon22\" aria-labelledby=\"baseIcon-tab22\">\n\n                  <div class=\"custom-control custom-checkbox mb-1\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"right-side-icons\"\n                      [(ngModel)]=\"isRightSideIcons\" (click)=\"setNavigation('navbar-icon-right',$event)\"\n                      id=\"right-side-icons\">\n                    <label class=\"custom-control-label\" for=\"right-side-icons\">Right Side Icons</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n    <hr>\n    <h5 class=\"mt-1 text-bold-500\">Navigation Color Options</h5>\n    <ul class=\"nav nav-tabs nav-underline nav-justified color-options tabsborder\">\n      <div class=\"col-lg-12 layout_space\">\n        <div class=\"ngtab\">\n          <ngb-tabset [activeId]=\"activeIdString\" (tabChange)=\"changeNavbarFontColor($event)\">\n            <ngb-tab id=\"dark\">\n              <ng-template ngbTabTitle>Dark</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <h3>Solid</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-blue-grey')\" id=\"default\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey')\"\n                        for=\"default\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-primary')\" id=\"primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-primary')\" for=\"primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-danger')\" id=\"danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-danger')\" for=\"danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-success')\" id=\"success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-success')\" for=\"success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-blue')\" id=\"blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-blue')\" for=\"blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-cyan')\" id=\"cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan')\" for=\"cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        (click)=\"setColor('bg-pink')\" id=\"pink\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-pink')\" for=\"pink\">Pink</label>\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <h3>Gradient</h3>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue-grey\"\n                        (click)=\"setColor('bg-gradient-x-grey-blue')\" id=\"bg-gradient-x-grey-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-grey-blue')\"\n                        for=\"bg-gradient-x-grey-blue\">Default</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-primary\"\n                        (click)=\"setColor('bg-gradient-x-primary')\" id=\"bg-gradient-x-primary\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-primary')\"\n                        for=\"bg-gradient-x-primary\">Primary</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-danger\"\n                        (click)=\"setColor('bg-gradient-x-danger')\" id=\"bg-gradient-x-danger\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-danger')\"\n                        for=\"bg-gradient-x-danger\">Danger</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-success\"\n                        (click)=\"setColor('bg-gradient-x-success')\" id=\"bg-gradient-x-success\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-success')\"\n                        for=\"bg-gradient-x-success\">Success</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-blue\"\n                        (click)=\"setColor('bg-gradient-x-blue')\" id=\"bg-gradient-x-blue\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-blue')\"\n                        for=\"bg-gradient-x-blue\">Blue</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-cyan\"\n                        (click)=\"setColor('bg-gradient-x-cyan')\" id=\"bg-gradient-x-cyan\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-cyan')\"\n                        for=\"bg-gradient-x-cyan\">Cyan</label>\n                    </div>\n                    <div class=\"custom-control custom-radio mb-1\">\n                      <input type=\"radio\" name=\"nav-slight-clr\" class=\"custom-control-input bg-pink\"\n                        id=\"bg-gradient-x-pink\" (click)=\"setColor('bg-gradient-x-pink')\">\n                      <label class=\"custom-control-label\" (click)=\"setColor('bg-gradient-x-pink')\"\n                        for=\"bg-gradient-x-pink\">Pink</label>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"light\">\n              <ng-template ngbTabTitle>Light</ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"tab-pane\" id=\"clrOpt4\" aria-labelledby=\"color-opt-4\">\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue-grey\"\n                      (click)=\"setColor('bg-blue-grey bg-lighten-4')\" id=\"light-blue-grey\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue-grey bg-lighten-4')\"\n                      for=\"light-blue-grey\">Default</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-primary\"\n                      (click)=\"setColor('bg-primary bg-lighten-4')\" id=\"light-primary\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-primary bg-lighten-4')\"\n                      for=\"light-primary\">Primary</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-danger\"\n                      (click)=\"setColor('bg-danger bg-lighten-4')\" id=\"light-danger\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-danger bg-lighten-4')\"\n                      for=\"light-danger\">Danger</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-success\"\n                      (click)=\"setColor('bg-success bg-lighten-4')\" id=\"light-success\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-success bg-lighten-4')\"\n                      for=\"light-success\">Success</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-blue\"\n                      (click)=\"setColor('bg-blue bg-lighten-4')\" id=\"light-blue\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-blue bg-lighten-4')\"\n                      for=\"light-blue\">Blue</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-cyan\"\n                      (click)=\"setColor('bg-cyan bg-lighten-4')\" id=\"light-cyan\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-cyan bg-lighten-4')\"\n                      for=\"light-cyan\">Cyan</label>\n                  </div>\n                  <div class=\"custom-control custom-radio mb-1\">\n                    <input type=\"radio\" name=\"nav-light-clr\" class=\"custom-control-input bg-pink\"\n                      (click)=\"setColor('bg-pink bg-lighten-4')\" id=\"light-pink\">\n                    <label class=\"custom-control-label\" (click)=\"setColor('bg-pink bg-lighten-4')\"\n                      for=\"light-pink\">Pink</label>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "NFyy":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "Ne4N":
/*!**************************************************************!*\
  !*** ./src/app/_layout/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_full_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./full-layout.component.html */ "XwKH");
/* harmony import */ var _full_layout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-layout.component.css */ "uzBM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");






var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(renderer, router, document) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.showFooter = true;
        this.showNavbar = true;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        this.renderer.removeClass(document.body, 'vertical-overlay-menu');
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        this.renderer.removeClass(document.body, 'vertical-menu-modern');
        this.renderer.addClass(document.body, 'blank-page');
        this.renderer.addClass(document.body, 'pace-done');
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0)) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.addClass(document.body, 'fixed-navbar');
            this.renderer.removeClass(document.body, 'blank-page');
        }
        else if (this.router.url.indexOf('WithBgImage') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-full-screen-image');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('WithBg') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('Simple') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('searchPage') >= 0) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url === '/others/bgImage') {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonOne');
        }
        else if (this.router.url.indexOf('bgVideo') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonVideo');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url.indexOf('error400') >= 0 && this.router.url.indexOf('error400Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error401') >= 0 && this.router.url.indexOf('error401Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error403') >= 0 && this.router.url.indexOf('error403Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error404') >= 0 && this.router.url.indexOf('error404Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error500') >= 0 && this.router.url.indexOf('error500Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('maintenance') >= 0 || this.router.url.indexOf('recoverPassword') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('unlockUser') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'bg-cyan');
            this.renderer.removeClass(document.body, 'bg-lighten-2');
        }
    };
    FullLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    FullLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-full-layout',
            template: _raw_loader_full_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_full_layout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            Document])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n    <div class=\"content-wrapper\">\n        <div class=\"content-header row mb-1\">\n        </div>\n        <div class=\"content-body\">\n            <section class=\"flexbox-container\">\n                <div class=\"col-12 d-flex align-items-center justify-content-center\">\n                    <div class=\"col-md-4 col-10 box-shadow-2 p-0\">\n                        <div class=\"card border-grey border-lighten-3 px-1 py-1 m-0\">\n                            <div class=\"card-header border-0 pb-0\">\n                              <div class=\"card-title text-center\">\n                                  <img src=\"assets/images/logo/logo.png\" alt=\"branding logo\">\n                                  <h3 class=\"brand-text\">Corp CRS</h3>\n                              </div>\n                                <h6 class=\"card-subtitle line-on-side text-muted text-center font-small-3 pt-2\">\n                                    <span>Hotel System</span></h6>\n                            </div>\n                            <div class=\"card-content\">\n                                <!-- <app-social-signin></app-social-signin>\n                                <p class=\"card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1\">\n                                    <span>OR Using Email</span></p> -->\n                                <div class=\"card-body\">\n                                    <form class=\"form-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"tryRegister()\">\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                                                placeholder=\"User Name\">\n                                            <div class=\"form-control-position\">\n                                                <i class=\"feather ft-user\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.firstName.errors.required\">Username is required</div>\n                                            </div>\n                                        </fieldset>\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" email\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                                                placeholder=\"Your Email Address\" required>\n                                            <div class=\"form-control-position\">\n                                                <i class=\"feather ft-mail\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                            </div>\n                                        </fieldset>\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                                                id=\"user-password\" placeholder=\"Enter Password\" required>\n                                            <div class=\"form-control-position\">\n                                                <i class=\"la la-key\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6\n                                                    characters</div>\n                                            </div>\n                                        </fieldset>\n                                        <div class=\"form-group row\">\n                                            <div class=\"col-md-6 col-12 text-center text-sm-left\">\n                                                <div class=\"custom-control custom-checkbox mb-1\">\n                                                    <input type=\"checkbox\" class=\"custom-control-input\"\n                                                        name=\"remember-me\" id=\"remember-me\">\n                                                    <label class=\"custom-control-label\" for=\"remember-me\">Remember\n                                                        Me</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 col-12 float-sm-left text-center text-sm-right\"><a\n                                                    href=\"recover-password.html\" class=\"card-link\">Forgot Password?</a>\n                                            </div>\n                                        </div>\n                                        <button type=\"submit\" class=\"btn btn-outline-info btn-block\">\n                                            <i class=\"fa fa-refresh fa-spin\" *ngIf=\"submitted\"></i>\n                                            <i class=\"feather ft-user\" *ngIf=\"!submitted\"></i> Register\n                                        </button>\n                                    </form>\n                                </div>\n                                <div class=\"card-body\">\n                                    <a [routerLink]=\"['/login']\" class=\"btn btn-outline-danger btn-block\"><i\n                                            class=\"feather ft-unlock\"></i> Login</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "OY+d":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_directives/alert.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>");

/***/ }),

/***/ "Or6d":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\" class=\"footer footer-static footer-light navbar-border navbar-shadow\" *ngIf=\"showFooter\">\n  <p class=\"clearfix blue-grey lighten-2 text-sm-center mb-0 px-2\"><span\n      class=\"float-md-left d-block d-md-inline-block\">Copyright &copy; 2021 <a [routerLink]=\"\"\n        class=\"text-bold-800 grey darken-2\" href=\"\">Kohort</a></span><span\n      class=\"float-md-right d-block d-md-inline-block d-none d-lg-block\">Version 1.2<span id=\"scroll-top\"></span></span></p>\n</footer>\n\n<footer id=\"footer\" class=\"footer fixed-bottom footer-dark navbar-border navbar-shadow\" *ngIf=\"!showFooter\">\n  <p class=\"clearfix blue-grey lighten-2 text-sm-center mb-0 px-2\"><span\n      class=\"float-md-left d-block d-md-inline-block\">Copyright &copy; 2021 <a [routerLink]=\"\"\n        class=\"text-bold-800 grey darken-2\" href=\"\">Kohort</a></span><span class=\"float-md-right d-none d-lg-block\">Version 1.2<span id=\"scroll-top\"></span></span></p>\n</footer>\n");

/***/ }),

/***/ "OwLc":
/*!*******************************************************!*\
  !*** ./src/app/_directives/match-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeightFunction(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeightFunction(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.matchHeightFunction = function (parent, className) {
        // match height logic here
        if (!parent) {
            return;
        }
        var children = parent.getElementsByClassName(className);
        if (!children) {
            return;
        }
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        if (window.innerWidth > 1200) {
            // apply max height
            Array.from(children)
                .forEach(function (x) { return x.style.height = maxHeight + "px"; });
            parent.style.height = maxHeight + "px";
            parent.style.marginBottom = "1.875rem";
        }
        else {
            Array.from(children)
                .forEach(function (x) { return x.style.height = 'unset'; });
            parent.style.height = 'unset';
            parent.style.marginBottom = "1.875rem";
        }
    };
    MatchHeightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    MatchHeightDirective.propDecorators = {
        matchHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] }]
    };
    MatchHeightDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[matchHeight]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "ReIo":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"layout === 'vertical'\">\n  <app-header-vertical></app-header-vertical>\n</ng-container>\n\n<ng-container *ngIf=\"layout === 'horizontal'\" (window:resize)=\"onResize($event)\">\n  <app-header-horizontal></app-header-horizontal>\n</ng-container>\n");

/***/ }),

/***/ "S2SW":
/*!************************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 767.98px) {\n    .collapse:not(.show) {\n        display: flex !important;\n    }\n}\n\n@media (min-width: 767.98px) {\n    .justify-content-end {\n        display: flex !important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtbGF5b3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoiZnVsbC1sYXlvdXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "TtxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/app.constants */ "2iER");
/* harmony import */ var _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_layout/settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/user/user.service */ "JlEV");
















var AppComponent = /** @class */ (function () {
    function AppComponent(spinner, document, router, loader, deviceService, _menuSettingsService, titleService, userService) {
        this.spinner = spinner;
        this.document = document;
        this.router = router;
        this.loader = loader;
        this.deviceService = deviceService;
        this._menuSettingsService = _menuSettingsService;
        this.titleService = titleService;
        this.userService = userService;
        this.showContent = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.setTitle();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        if (window.localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(window.localStorage.currentUser);
            this.userService
                .getUserRole(this.currentUser.roleValue)
                .subscribe(function (res) {
                console.log("curr user permissions ", res);
                if (res && res.length) {
                    window.localStorage.setItem("permissions", JSON.stringify(res[0].permissions));
                }
            });
        }
        console.log('getCurrentUser ');
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteConfigLoadStart"]) {
                _this.loader.increment(35);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteConfigLoadEnd"]) {
                _this.loader.increment(75);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationCancel"]) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
                _this.showContent = true;
                // close menu for mobile view
                if (_this.deviceService.isMobile() || window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    if (document.body.classList.contains('menu-open')) {
                        document.body.classList.remove('menu-open');
                        document.body.classList.add('menu-close');
                    }
                }
            }
        });
    };
    AppComponent.prototype.setTitle = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                for (var i = 0; i < _this._menuSettingsConfig.vertical_menu.items.length; i++) {
                    if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                        _this._menuSettingsConfig.vertical_menu.items[i].page === _this.router.url) {
                        _this.title = _this._menuSettingsConfig.vertical_menu.items[i].title;
                        break;
                    }
                    else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                        // Level 1 menu
                        for (var j = 0; j < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                            if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                                _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === _this.router.url) {
                                _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].title;
                                break;
                            }
                            else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                                // Level 2 menu
                                for (var k = 0; k < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                                    if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === _this.router.url) {
                                        _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].title;
                                    }
                                }
                            }
                        }
                    }
                }
                if (_this.title && _this.router.url !== '/') {
                    _this.titleService.setTitle(_this.title + ' - Kohort');
                }
                else {
                    if (_this.router.url === '/') {
                        _this.title = 'Login';
                        _this.titleService.setTitle(_this.title + ' - Kohort');
                        _this.title = '';
                    }
                    else if (_this.router.url === '/login') {
                        _this.title = 'Login';
                        _this.titleService.setTitle(_this.title + ' - Kohort');
                        _this.title = '';
                    }
                    else if (_this.router.url === '/register') {
                        _this.title = 'Register';
                        _this.titleService.setTitle(_this.title + ' - Kohort');
                        _this.title = '';
                    }
                }
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] },
        { type: _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__["MenuSettingsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-main',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"],
            _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__["MenuSettingsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UDOh":
/*!*********************************************!*\
  !*** ./src/app/_services/navbar.service.ts ***!
  \*********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.mouseInMenuRegion = false;
        this.fixedMenu = false;
    }
    NavbarService.prototype.isMouseInRegion = function () {
        return this.mouseInMenuRegion;
    };
    NavbarService.prototype.setMouseInRegion = function (flag) {
        this.mouseInMenuRegion = flag;
    };
    NavbarService.prototype.isFixedMenu = function () {
        return this.fixedMenu;
    };
    NavbarService.prototype.setFixedMenu = function (flag) {
        this.fixedMenu = flag;
    };
    NavbarService.ctorParameters = function () { return []; };
    NavbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "ULWD":
/*!***********************************************************!*\
  !*** ./src/app/social-signin/social-signin.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "UyOY":
/*!*****************************************************!*\
  !*** ./src/app/_layout/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-settings.service */ "+/8v");
/* harmony import */ var _menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-settings.service */ "erhg");




var SettingsModule = /** @class */ (function () {
    function SettingsModule(parentModule) {
        if (parentModule) {
            throw new Error('SettingsModule is already loaded. Import it in the AppModule only!');
        }
    }
    SettingsModule_1 = SettingsModule;
    SettingsModule.forRoot = function (themeConfig, menuConfig) {
        return {
            ngModule: SettingsModule_1,
            providers: [
                {
                    provide: _theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["THEME_SETTINGS_CONFIG"],
                    useValue: themeConfig
                },
                {
                    provide: _menu_settings_service__WEBPACK_IMPORTED_MODULE_3__["MENU_SETTINGS_CONFIG"],
                    useValue: menuConfig
                }
            ]
        };
    };
    var SettingsModule_1;
    SettingsModule.ctorParameters = function () { return [
        { type: SettingsModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    SettingsModule = SettingsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [SettingsModule])
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "V3S5":
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_changelog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./changelog.component.html */ "CtvL");
/* harmony import */ var _changelog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog.component.css */ "mgMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");





var ChangelogComponent = /** @class */ (function () {
    function ChangelogComponent() {
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
    }
    ChangelogComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'ChangeLog',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'ChangeLog',
                    'isLink': false,
                    'link': '#'
                },
            ]
        };
    };
    ChangelogComponent.prototype.reloadChangelog = function () {
        var _this = this;
        this.blockUIChangelog.start('Loading..');
        setTimeout(function () {
            _this.blockUIChangelog.stop();
        }, 2500);
    };
    ChangelogComponent.ctorParameters = function () { return []; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])('changelog'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChangelogComponent.prototype, "blockUIChangelog", void 0);
    ChangelogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_changelog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_changelog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ChangelogComponent);
    return ChangelogComponent;
}());



/***/ }),

/***/ "Vv3h":
/*!**********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.config.ts ***!
  \**********************************************************/
/*! exports provided: MenuSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsConfig", function() { return MenuSettingsConfig; });
// Default menu settings configurations
var MenuSettingsConfig = {
    vertical_menu: {
        items: [
            {
                title: 'Home',
                roleValue: "MEETUPS_VIEW",
                icon: 'la-home',
                page: '/dashboard'
            },
            // {
            //   title: 'Confirmed Transactions',
            //   icon: 'la-calendar',
            //   page: 'null',
            //   submenu: {
            //     items: [
            //      {
            //         title: 'Room Bookings',
            //         page: '/dashboard'
            //       },
            //       {
            //         title: 'Group Bookings',
            //         page: '/dashboard'
            //       },
            //       {
            //         title: 'Banquet Bookings',
            //         page: '/dashboard'
            //       },
            //     ]
            //   }
            // },
            // {
            //   title: 'Pending Transactions',
            //   icon: 'la-calendar-plus-o',
            //   page: 'null',
            //   submenu: {
            //     items: [
            //      {
            //         title: 'Room Bookings',
            //         page: '/dashboard'
            //       },
            //       {
            //         title: 'Group Bookings',
            //         page: '/dashboard'
            //       },
            //       {
            //         title: 'Banquet Bookings',
            //         page: '/dashboard'
            //       },
            //     ]
            //   }
            // },
            {
                title: 'User Management',
                roleValue: 'USER_MANAGEMENT_VIEW',
                icon: 'la la-users',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'User List',
                            page: '/users/list',
                        },
                    ]
                }
            },
            {
                title: 'Role Management',
                roleValue: 'ROLE_MANAGEMENT_VIEW',
                icon: 'la-user',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'New Role',
                            page: '/roles/create',
                        },
                        {
                            title: 'Role List',
                            page: '/roles/list',
                        },
                    ]
                }
            },
            {
                title: 'Meetups',
                roleValue: 'MEETUPS_VIEW',
                icon: 'la la-forumbee',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'New Meetups',
                            page: '/meetups/create',
                        },
                        {
                            title: 'Meetups List',
                            page: '/meetups/list',
                        },
                    ]
                }
            },
            {
                title: 'Mentors',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-user-plus',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'New Mentors',
                            page: '/mentors/create',
                        },
                        {
                            title: 'Mentors List',
                            page: '/mentors/list',
                        },
                    ]
                }
            },
            {
                title: 'Testimonial',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-empire',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'New Testimonial',
                            page: '/testimonial/create',
                        },
                        {
                            title: 'Testimonial List',
                            page: '/testimonial/list',
                        },
                    ]
                }
            },
            {
                title: 'Coupons',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-empire',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Create Coupons',
                            page: '/coupons/create',
                        },
                        {
                            title: 'Coupons List',
                            page: '/coupons/list',
                        },
                    ]
                }
            },
            {
                title: 'Communities',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-empire',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Create Communities',
                            page: '/communitie/create',
                        },
                        {
                            title: 'Communities List',
                            page: '/communitie/list',
                        },
                    ]
                }
            },
            {
                title: 'Studies',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-empire',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Create Studies',
                            page: '/studies/create',
                        },
                        {
                            title: 'Studies List',
                            page: '/studies/list',
                        },
                    ]
                }
            },
            {
                title: 'Language',
                roleValue: 'MENTORS_VIEW',
                icon: 'la la-empire',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Create Language	',
                            page: '/language/create',
                        },
                        {
                            title: 'Language	 List',
                            page: '/language/list',
                        },
                    ]
                }
            },
        ]
    }
};


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\n\n<ngx-loading-bar [includeSpinner]='false' height='3px' color=\"#FF4961\"></ngx-loading-bar>\n<app-alert></app-alert>\n<router-outlet *ngIf=\"showContent\"></router-outlet>\n\n<!-- credits -->\n");

/***/ }),

/***/ "X+AN":
/*!**************************************************************************!*\
  !*** ./src/app/_layout/navigation/verticalnav/verticalnav.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbG5hdi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "X1Yx":
/*!*******************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.ts ***!
  \*******************************************************************/
/*! exports provided: HorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalComponent", function() { return HorizontalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontal.component.html */ "9OSX");
/* harmony import */ var _horizontal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal.component.css */ "DifB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");















var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent(document, _renderer, renderer, navbarService, authService, router, _menuSettingsService, _themeSettingsService, deviceService) {
        this.document = document;
        this._renderer = _renderer;
        this.renderer = renderer;
        this.navbarService = navbarService;
        this.authService = authService;
        this.router = router;
        this._menuSettingsService = _menuSettingsService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.placement = 'bottom-right';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    HorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
        this.maximize = this._themeSettingsConfig.headerIcons.maximize;
        this.search = this._themeSettingsConfig.headerIcons.search;
        this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
        this.notification = this._themeSettingsConfig.headerIcons.notification;
        this.email = this._themeSettingsConfig.headerIcons.email;
    };
    HorizontalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        var currentBodyClassList = [];
        if (window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL && this._themeSettingsConfig.layout.style === 'horizontal') {
            currentBodyClassList = ['horizontal-layout', '2-columns', 'vertical-overlay-menu', 'menu-hide'];
            currentBodyClassList.push('fixed-navbar');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
    };
    HorizontalComponent.prototype.logout = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                _this.router.navigate(['/login']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    HorizontalComponent.prototype.refreshView = function () {
        var topHeaderElement = document.getElementsByClassName('top-header');
        var menuColorElement = document.getElementsByClassName('menu-header');
        var navigationElement = document.getElementsByClassName('menu-header');
        if (topHeaderElement) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-light');
            }
        }
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'navbar-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'navbar-icon-right');
            }
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'navbar-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-light');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'navbar-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-light');
            }
        }
    };
    HorizontalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    HorizontalComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    HorizontalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        var navbar = this.document.getElementById('navbar-mobile');
        if (this.document.body.classList.contains('menu-hide')) {
            this.document.body.classList.remove('menu-hide');
            this._renderer.removeClass(sidenav, 'd-none');
            this._renderer.addClass(sidenav, 'd-block');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.document.body.classList.add('menu-expanded');
            navbar.classList.remove('show');
        }
        else if (!this.document.body.classList.contains('menu-hide') && !this.document.body.classList.contains('menu-open')) {
            this.document.body.classList.add('menu-open');
            this._renderer.addClass(sidenav, 'd-block');
            this._renderer.removeClass(sidenav, 'd-none');
        }
        else {
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-hide');
            this._renderer.addClass(sidenav, 'd-none');
            navbar.classList.remove('show');
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    HorizontalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    HorizontalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    HorizontalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    HorizontalComponent.prototype.onResize = function (event) {
        var sidenav = document.getElementById('sidenav-overlay');
        if (event.target.innerWidth <= 767) {
            this.document.body.classList.add('vertical-overlay-menu');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.addClass(sidenav, 'd-none');
        }
    };
    HorizontalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    HorizontalComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__["DeviceDetectorService"] }
    ]; };
    HorizontalComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarComponent"], { static: false },] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarDirective"], { static: true },] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    HorizontalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header-horizontal',
            template: _raw_loader_horizontal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_horizontal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__["DeviceDetectorService"]])
    ], HorizontalComponent);
    return HorizontalComponent;
}());



/***/ }),

/***/ "X577":
/*!*************************************************************!*\
  !*** ./src/app/_layout/navigation/navigation.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "XwKH":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/full-layout/full-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-full-layout-navbar *ngIf=\"showNavbar\"></app-full-layout-navbar>\n<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n<app-footer *ngIf=\"showFooter\"></app-footer>\n");

/***/ }),

/***/ "XxPO":
/*!*************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabsborder{\n    border-bottom: none !important;\n  }\n\n.h6, h6 {\n  font-size: 1rem;\n}\n\n:host ::ng-deep .tab-content{\n  padding: 1rem;\n}\n\n:host ::ng-deep .layout_space{\n  padding: 0%;\n}\n\n:host ::ng-deep .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n\n:host ::ng-deep .btn-outline-info .active {\n  background: rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiY3VzdG9taXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnNib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbi5oNiwgaDYge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFiLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGF5b3V0X3NwYWNle1xuICBwYWRkaW5nOiAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMubmF2LXVuZGVybGluZSAubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZS1pbmZvIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG59XG4iXX0= */");

/***/ }),

/***/ "Z6f3":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/private-layout/private-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (window:resize)=\"onResize($event)\"></div>\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n<div class=\"sidenav-overlay d-none\" id=\"sidenav-overlay\" (click)=\"rightbar($event)\"></div>\n<app-footer></app-footer>\n<div *ngIf =\"customizer === 'on'\">\n<app-customizer *ngIf=\"layout === 'vertical'\"></app-customizer>\n<app-horizontal-customizer *ngIf=\"layout === 'horizontal'\"></app-horizontal-customizer>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_directives/alert.component */ "uxX+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/alert.service */ "f5O9");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/auth.service */ "7Vn+");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/user/user.service */ "JlEV");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/helper/helper.service */ "L7Rk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_layout/settings/settings.module */ "UyOY");
/* harmony import */ var _layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_layout/settings/theme-settings.config */ "BScm");
/* harmony import */ var _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_layout/settings/menu-settings.config */ "Vv3h");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_layout/header/header.component */ "0SQT");
/* harmony import */ var _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_layout/header/vertical/vertical.component */ "yYK4");
/* harmony import */ var _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_layout/header/horizontal/horizontal.component */ "X1Yx");
/* harmony import */ var _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_layout/header/full-layout-navbar/full-layout-navbar.component */ "AgUQ");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_layout/footer/footer.component */ "sD6o");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_layout/navigation/navigation.component */ "jLIj");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "0KhJ");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "tqKT");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./social-signin/social-signin.component */ "g+q+");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./changelog/changelog.component */ "V3S5");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_services/navbar.service */ "UDOh");
/* harmony import */ var _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_layout/navigation/verticalnav/verticalnav.component */ "CTrt");
/* harmony import */ var _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_layout/navigation/horizontalnav/horizontalnav.component */ "z2wB");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ngx-loading-bar/router */ "lNyj");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_layout/customizer/customizer.component */ "n1uN");
/* harmony import */ var _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./content/partials/partials.module */ "ofOD");
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _services_data_api__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./_services/data.api */ "0eR2");
/* harmony import */ var _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./_layout/customizer/horizontal-customizer/horizontal-customizer.component */ "H3Uw");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./content/partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ "Ne4N");
/* harmony import */ var _content_partials_general_show_for_show_for_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./content/partials/general/show-for/show-for.module */ "tsOp");




















// Routing

// Components



















// perfect scroll bar

// spinner














;
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_45__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_51__["MatchHeightModule"],
                _content_partials_general_show_for_show_for_module__WEBPACK_IMPORTED_MODULE_53__["ShowForModule"],
                _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_46__["BreadcrumbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_19__["routing"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                // Settings modules
                _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_21__["SettingsModule"].forRoot(_layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_22__["ThemeSettingsConfig"], _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_23__["MenuSettingsConfig"]),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PerfectScrollbarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_40__["NgxSpinnerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_42__["DeviceDetectorModule"].forRoot(),
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_41__["LoadingBarRouterModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_50__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_49__["BlockTemplateComponent"]
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_30__["PublicLayoutComponent"],
                _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_31__["PrivateLayoutComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_27__["FullLayoutNavbarComponent"],
                _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_26__["HorizontalComponent"],
                _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_25__["VerticalComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
                _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_29__["NavigationComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _register__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
                _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_33__["SocialSigninComponent"],
                _login__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"],
                _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_35__["ChangelogComponent"],
                _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_37__["VerticalnavComponent"],
                _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_38__["HorizontalnavComponent"],
                _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_44__["CustomizerComponent"],
                _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_48__["HorizontalCustomizerComponent"],
                _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_49__["BlockTemplateComponent"],
                _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_52__["FullLayoutComponent"],
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
                _services_navbar_service__WEBPACK_IMPORTED_MODULE_36__["NavbarService"],
                _services_data_api__WEBPACK_IMPORTED_MODULE_47__["DataApiService"],
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_17__["HelperService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
                    useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"]
                },
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
            ],
            entryComponents: [
                _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_49__["BlockTemplateComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "0KhJ");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "tqKT");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelog/changelog.component */ "V3S5");







var appRoutes = [
    // Public layout
    {
        path: '',
        component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicLayoutComponent"],
        children: [
            { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: '', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
        ]
    },
    // Private layout
    {
        path: '',
        component: _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrivateLayoutComponent"],
        children: [
            { path: 'logout', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'changelog', component: _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__["ChangelogComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | app-content-dashboard-dashboard-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("app-content-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../app/content/dashboard/dashboard.module */ "An5s")).then(function (m) { return m.DashboardModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'users', loadChildren: function () { return Promise.all(/*! import() | app-content-user-management-user-management-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-role-management-role-management-module~app-content-user-management-user-management-module"), __webpack_require__.e("app-content-user-management-user-management-module")]).then(__webpack_require__.bind(null, /*! ../app/content/user-management/user-management.module */ "9aji")).then(function (m) { return m.UserManagementModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'roles', loadChildren: function () { return Promise.all(/*! import() | app-content-role-management-role-management-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-role-management-role-management-module~app-content-user-management-user-management-module"), __webpack_require__.e("app-content-role-management-role-management-module")]).then(__webpack_require__.bind(null, /*! ../app/content/role-management/role-management.module */ "/VRI")).then(function (m) { return m.RoleManagementModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'meetups', loadChildren: function () { return Promise.all(/*! import() | app-content-meetups-meetups-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("default~app-content-meetups-meetups-module~app-content-mentors-mentors-module~app-content-testimonia~e58d7753"), __webpack_require__.e("common"), __webpack_require__.e("app-content-meetups-meetups-module")]).then(__webpack_require__.bind(null, /*! ../app/content/meetups/meetups.module */ "aFxW")).then(function (m) { return m.MeetupsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'mentors', loadChildren: function () { return Promise.all(/*! import() | app-content-mentors-mentors-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("default~app-content-meetups-meetups-module~app-content-mentors-mentors-module~app-content-testimonia~e58d7753"), __webpack_require__.e("app-content-mentors-mentors-module")]).then(__webpack_require__.bind(null, /*! ../app/content/mentors/mentors.module */ "JVDd")).then(function (m) { return m.MentorsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'testimonial', loadChildren: function () { return Promise.all(/*! import() | app-content-testimonials-testimonials-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("default~app-content-meetups-meetups-module~app-content-mentors-mentors-module~app-content-testimonia~e58d7753"), __webpack_require__.e("app-content-testimonials-testimonials-module")]).then(__webpack_require__.bind(null, /*! ../app/content/testimonials/testimonials.module */ "LF97")).then(function (m) { return m.TestimonialsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'coupons', loadChildren: function () { return Promise.all(/*! import() | app-content-coupons-coupons-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("app-content-coupons-coupons-module")]).then(__webpack_require__.bind(null, /*! ../app/content/coupons/coupons.module */ "MhbF")).then(function (m) { return m.CouponsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'communitie', loadChildren: function () { return Promise.all(/*! import() | app-content-communities-communities-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("common"), __webpack_require__.e("app-content-communities-communities-module")]).then(__webpack_require__.bind(null, /*! ../app/content/communities/communities.module */ "z21m")).then(function (m) { return m.CommunitiesModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'studies', loadChildren: function () { return Promise.all(/*! import() | app-content-studies-studies-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("common"), __webpack_require__.e("app-content-studies-studies-module")]).then(__webpack_require__.bind(null, /*! ../app/content/studies/studies.module */ "il3L")).then(function (m) { return m.StudiesModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'language', loadChildren: function () { return Promise.all(/*! import() | app-content-language-language-module */[__webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-da~c0054a2a"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~cbd7710b"), __webpack_require__.e("default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"), __webpack_require__.e("common"), __webpack_require__.e("app-content-language-language-module")]).then(__webpack_require__.bind(null, /*! ../app/content/language/language.module */ "ZBsy")).then(function (m) { return m.LanguageModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
        ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' });


/***/ }),

/***/ "c0c3":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-signin/social-signin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n    <a (click)=\"tryFacebookLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\"><span class=\"la la-facebook\"></span></a>\n    <a (click)=\"tryTwitterLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\"><span class=\"la la-twitter\"></span></a>\n    <a (click)=\"tryGoogleLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\"><span class=\"la la-google font-medium-4\"></span></a>\n    <a (click)=\"tryGithubLogin()\" class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\"><span class=\"la la-github font-medium-4\"></span></a>\n</div>");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cveO":
/*!*********************************************************!*\
  !*** ./src/assets/data/customizer/customizerColor.json ***!
  \*********************************************************/
/*! exports provided: colorArray, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"colorArray\":[{\"cssClass\":\"bg-blue-grey\"},{\"cssClass\":\"bg-primary\"},{\"cssClass\":\"bg-danger\"},{\"cssClass\":\"bg-success\"},{\"cssClass\":\"bg-blue\"},{\"cssClass\":\"bg-cyan\"},{\"cssClass\":\"bg-pink\"},{\"cssClass\":\"bg-gradient-x-grey-blue\"},{\"cssClass\":\"bg-gradient-x-primary\"},{\"cssClass\":\"bg-gradient-x-danger\"},{\"cssClass\":\"bg-gradient-x-success\"},{\"cssClass\":\"bg-gradient-x-blue\"},{\"cssClass\":\"bg-gradient-x-cyan\"},{\"cssClass\":\"bg-gradient-x-pink\"},{\"cssClass\":\"bg-default\"},{\"cssClass\":\"bg-blue-grey bg-lighten-4\"},{\"cssClass\":\"bg-primary bg-lighten-4\"},{\"cssClass\":\"bg-danger bg-lighten-4\"},{\"cssClass\":\"bg-success bg-lighten-4\"},{\"cssClass\":\"bg-blue bg-lighten-4\"},{\"cssClass\":\"bg-cyan bg-lighten-4\"},{\"cssClass\":\"bg-pink bg-lighten-4\"}]}");

/***/ }),

/***/ "erhg":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.service.ts ***!
  \***********************************************************/
/*! exports provided: MENU_SETTINGS_CONFIG, MenuSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SETTINGS_CONFIG", function() { return MENU_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsService", function() { return MenuSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var MENU_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('menuCustomConfig');
var MenuSettingsService = /** @class */ (function () {
    function MenuSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    MenuSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](_this._configSubject.getValue());
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(MenuSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_5__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: false,
        configurable: true
    });
    MenuSettingsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MENU_SETTINGS_CONFIG,] }] }
    ]; };
    MenuSettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], MenuSettingsService);
    return MenuSettingsService;
}());



/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");





var AlertService = /** @class */ (function () {
    function AlertService(router, toastr) {
        var _this = this;
        this.router = router;
        this.toastr = toastr;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.showSuccess = function (message, duration) {
        this.toastr.success('', message, { timeOut: (duration || 3000), closeButton: true });
    };
    AlertService.prototype.showError = function (message, duration, msg) {
        var title = msg || '';
        this.toastr.error(title, message, { timeOut: (duration || 3000), closeButton: true });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "g+q+":
/*!**********************************************************!*\
  !*** ./src/app/social-signin/social-signin.component.ts ***!
  \**********************************************************/
/*! exports provided: SocialSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSigninComponent", function() { return SocialSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-signin.component.html */ "c0c3");
/* harmony import */ var _social_signin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-signin.component.css */ "ULWD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







var SocialSigninComponent = /** @class */ (function () {
    function SocialSigninComponent(route, router, alertService, authService) {
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.homeURL = '/home';
    }
    SocialSigninComponent.prototype.ngOnInit = function () {
    };
    SocialSigninComponent.prototype.tryAnonymousLogin = function () {
        return this.authService.doAnonymousLogin();
    };
    SocialSigninComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryGithubLogin = function () {
        var _this = this;
        this.authService.doGitHubLogin()
            .then(function (res) {
            _this.setUserInStorage(res);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.setUserInStorage = function (res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    SocialSigninComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    SocialSigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-social-signin',
            template: _raw_loader_social_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_social_signin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SocialSigninComponent);
    return SocialSigninComponent;
}());



/***/ }),

/***/ "heLC":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/vertical/vertical.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-shadow\"\n  [ngClass]=\"selectedHeaderNavBarClass\">\n  <div class=\"navbar-wrapper\">\n    <div id=\"navbar-header\" class=\"navbar-header\" [ngClass]=\"selectedNavBarHeaderClass\"\n      (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <!-- Remove position relative in responsive -->\n        <li class=\"nav-item mobile-menu d-lg-none mr-auto\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs11\"\n            (click)=\"toggleNavigation($event)\">\n            <i class=\"feather ft-menu font-large-1\"></i></a></li>\n        <li class=\"nav-item mr-auto\"><a [routerLink]=\"['/dashboard/sales']\" class=\"navbar-brand\"\n            routerLink=\"/dashboard/sales\">\n            <img class=\"brand-logo\" alt=\"modern admin logo\"\n              src=\"assets/images/logo/logo.png\">\n            <!-- <h3 class=\"brand-text\">{{_themeSettingsConfig.brand.brand_name}}</h3> -->\n            <!-- <h3 class=\"brand-text\">Corp CRS</h3> -->\n          </a></li>\n        <!-- <li class=\"nav-item d-none d-md-block nav-toggle\">\n          <a [routerLink]=\"\" class=\"nav-link modern-nav-toggle pr-0\" data-toggle=\"collapse\"\n            (click)=\"toggleFixMenu($event)\">\n            <i class=\"feather toggle-icon font-medium-3 white\"\n              [ngClass]=\"{'ft-toggle-left': _themeSettingsConfig.menu == 'collapse','ft-toggle-right': _themeSettingsConfig.menu == 'expand'}\"></i>\n          </a>\n        </li> -->\n        <li class=\"nav-item d-lg-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <!-- New-->\n    <div class=\"navbar-container content\" [hidden]=\"isMobile && !showNavbar\">\n      <div class=\"collapse navbar-collapse\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav mr-auto float-left\">\n          <li class=\"nav-item d-none d-md-block\"><a [routerLink]=\"\" class=\"nav-link nav-link-expand\"\n              (click)=\"toggleFullScreen()\" *ngIf=\"maximize === 'on'\"><i class=\"ficon feather ft-maximize\"></i></a></li>\n          <!-- <li class=\"nav-item nav-search\">\n            <a [routerLink]=\"\" class=\"nav-link nav-link-search\" (click)=\"clickSearch()\"\n              *ngIf=\"search === 'on'\"><i class=\"ficon feather ft-search\"></i></a>\n            <div class=\"search-input\" [ngClass]=\"{'open': isHeaderSearchOpen}\">\n              <input class=\"input\" type=\"text\" placeholder=\"Explore Modern...\">\n            </div>\n          </li> -->\n        </ul>\n        <ul class=\"nav navbar-nav float-right\">\n          <!-- <li class=\"dropdown-language nav-item\" ngbDropdown *ngIf=\"internationalization === 'on'\">\n            <a [routerLink]=\"\" class=\"dropdown-toggle nav-link\" ngbDropdownToggle id=\"dropdown-flag\">\n              <i class=\"flag-icon flag-icon-gb\"></i><span class=\"selected-language\"></span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownLangMenu\">\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-gb\"></i> English\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-fr\"></i> French\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-cn\"></i> Chinese\n              </a>\n              <a [routerLink]=\"\" class=\"dropdown-item\">\n                <i class=\"flag-icon flag-icon-de\"></i> German\n              </a>\n            </div>\n          </li> -->\n          <!-- <li class=\"dropdown-notification nav-item dropdown\" ngbDropdown *ngIf=\"notification === 'on'\">\n            <a class=\"nav-link nav-link-label\" ngbDropdownToggle>\n              <i class=\"ficon feather ft-bell\"></i>\n              <span class=\"badge badge-pill badge-danger badge-up badge-glow\">5</span>\n            </a>\n            <ul class=\"dropdown-menu-media dropdown-menu-right\" ngbDropdownMenu>\n              <li class=\"dropdown-menu-header\">\n                <h6 class=\"dropdown-header m-0\"><span class=\"grey darken-2\">Notifications</span></h6><span\n                  class=\"notification-tag badge badge-default badge-danger float-right m-0\">5 New</span>\n              </li>\n              <li class=\"scrollable-container media-list w-100 ps-container ps-theme-dark ps-active-y\" fxFlex=\"auto\" [perfectScrollbar]=\"config\">\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-plus-square icon-bg-circle bg-cyan\"></i>\n                    </div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">You have new order!</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Lorem ipsum dolor sit amet, consectetuer\n                        elit.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">30 minutes\n                          ago</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-download-cloud icon-bg-circle bg-red bg-darken-1\"></i></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading red darken-1\">99% Server load</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Aliquam tincidunt mauris eu risus.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Five hour\n                          ago</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3\"></i></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading yellow darken-3\">Warning notifixation</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Vestibulum auctor dapibus neque.</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Today</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i\n                        class=\"feather ft-check-circle icon-bg-circle bg-cyan\"></i>\n                    </div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Complete the task</h6><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Last\n                          week</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left align-self-center\"><i class=\"feather ft-file icon-bg-circle bg-teal\"></i>\n                    </div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Generate monthly report</h6><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Last\n                          month</time></small>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"dropdown-menu-footer\"><a class=\"dropdown-item text-muted text-center\"\n                  href=\"javascript:void(0)\">Read all notifications</a></li>\n            </ul>\n          </li> -->\n          <!-- <li class=\"dropdown-notification nav-item\" ngbDropdown>\n            <a class=\"nav-link nav-link-label\" ngbDropdownToggle *ngIf=\"email === 'on'\"><i\n                class=\"ficon feather ft-mail\"></i></a>\n            <ul class=\"dropdown-menu-media dropdown-menu-right\" ngbDropdownMenu>\n              <li class=\"dropdown-menu-header\">\n                <h6 class=\"dropdown-header m-0\"><span class=\"grey darken-2\">Messages</span></h6><span\n                  class=\"notification-tag badge badge-default badge-warning float-right m-0\">4 New</span>\n              </li>\n              <li class=\"scrollable-container media-list w-100 ps-container ps-theme-dark ps-active-y\" fxFlex=\"auto\"\n                [perfectScrollbar]=\"config\">\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-online rounded-circle\"><img\n                          src=\"../../../assets/images/portrait/small/avatar-s-19.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Margaret Govan</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">I like your portfolio, let's start.</p>\n                      <small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Today</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-busy rounded-circle\"><img\n                          src=\"../../../assets/images/portrait/small/avatar-s-2.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Bret Lezama</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">I have seen your work, there is</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Tuesday</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-online rounded-circle\"><img\n                          src=\"../../../assets/images/portrait/small/avatar-s-3.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Carie Berra</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">Can we have call in this week ?</p><small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">Friday</time></small>\n                    </div>\n                  </div>\n                </a>\n                <a href=\"javascript:void(0)\">\n                  <div class=\"media border_bottom\">\n                    <div class=\"media-left\"><span class=\"avatar avatar-sm avatar-away rounded-circle\"><img\n                          src=\"../../../assets/images/portrait/small/avatar-s-6.png\" alt=\"avatar\"><i></i></span></div>\n                    <div class=\"media-body\">\n                      <h6 class=\"media-heading\">Eric Alsobrook</h6>\n                      <p class=\"notification-text font-small-3 text-muted\">We have project party this saturday.</p>\n                      <small>\n                        <time class=\"media-meta text-muted\" datetime=\"2015-06-11T18:29:20+08:00\">last\n                          month</time></small>\n                    </div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"dropdown-menu-footer\"><a class=\"dropdown-item text-muted text-center\"\n                  href=\"javascript:void(0)\">Read all messages</a></li>\n            </ul>\n          </li> -->\n\n          <li class=\"dropdown-user nav-item\" ngbDropdown>\n            <a class=\"nav-link dropdown-user-link\" ngbDropdownToggle>\n              <span *ngIf=\"currentUser.name\"\n                class=\"mr-1 user-name text-bold-700\">{{currentUser.name}}</span>\n              <span *ngIf=\"!currentUser.name\" class=\"mr-1 user-name text-bold-700\">John Doe</span>\n              <span class=\"avatar avatar-online\">\n                <img *ngIf=\"currentUser.photoURL\" src=\"{{currentUser.photoURL}}\" alt=\"avatar\">\n                <img *ngIf=\"!currentUser.photoURL\" src=\"../../../assets/images/portrait/small/avatar-s-19.png\"\n                  alt=\"avatar\">\n                <i></i>\n              </span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownProfileMenu\">\n              <a class=\"dropdown-item\"><i class=\"feather ft-user\"></i> Edit\n                Profile </a>\n              <!-- <a class=\"dropdown-item\" [routerLink]=\"['/user/user-profile']\"><i class=\"feather ft-user\"></i> Edit\n                Profile </a> -->\n              <!-- <a class=\"dropdown-item\" [routerLink]=\"['/email']\"><i class=\"feather ft-mail\"></i> My Inbox </a> -->\n              <!-- <a class=\"dropdown-item\" [routerLink]=\"['/todos']\"><i class=\"feather ft-check-square\"></i> Task </a> -->\n              <!-- <a class=\"dropdown-item\" [routerLink]=\"['/chats']\"><i class=\"feather ft-message-square\"></i> Chats </a> -->\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\"><i class=\"feather ft-power\"></i> Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- New-->\n  </div>\n</nav>\n");

/***/ }),

/***/ "iKjf":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-dark navbar-shadow\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav flex-row\">\n        <li class=\"nav-item mobile-menu d-md-none mr-auto\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs\"\n            [routerLink]=\"\"></a></li>\n        <li class=\"nav-item\"><a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\"><img class=\"brand-logo\"\n              alt=\"CorpCRS logo\" src=\"../../../../assets/images/logo/logo.png\">\n            <h3 class=\"brand-text\">CorpCRS</h3>\n          </a></li>\n        <li class=\"nav-item d-md-none\"><a class=\"nav-link open-navbar-container\" data-toggle=\"collapse\"\n            data-target=\"#navbar-mobile\" (click)=\"toggleNavbar($event)\"><i class=\"la la-ellipsis-v\"></i></a></li>\n      </ul>\n    </div>\n    <div class=\"navbar-container\">\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-mobile\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link mr-2 nav-link-label\" [routerLink]=\"['/dashboard']\"><i\n                class=\"ficon feather ft-arrow-left\"></i></a></li>\n          <li class=\"dropdown nav-item\"><a class=\"nav-link mr-2 nav-link-label\" [routerLink]=\"\"\n              data-toggle=\"dropdown\"><i class=\"ficon feather ft-settings\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "ic24":
/*!**********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabsborder{\n    border-bottom: none !important;\n  }\n\n.h6, h6 {\n  font-size: 1rem;\n}\n\n:host ::ng-deep .tab-content{\n  padding: 1rem;\n}\n\n:host ::ng-deep .layout_space{\n  padding: 0%;\n}\n\n:host ::ng-deep .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtY3VzdG9taXplci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0VBQ2hDOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJob3Jpem9udGFsLWN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4uaDYsIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1jb250ZW50e1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxheW91dF9zcGFjZXtcbiAgcGFkZGluZzogMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzLm5hdi11bmRlcmxpbmUgLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n    <div class=\"content-overlay\"></div>\n        <div class=\"row content\">\n            <div class=\"col-sm-5 infoSection\">\n                <div style=\"padding:50px;color:white\">\n                        <div class=\"row\">\n                            <div>\n                                <img src=\"assets/images/logo/logo.png\" alt=\"no image\" width=\"165px\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div style=\"padding-top: 200px;color: #fff;font-size: 2rem; font-weight: 500;line-height: 2;\">\n                                <p style=\"float:right;\">Discover your passion</p>\n                                <p style=\"font-size: 16px;\">Level up your skills, follow your passions </p>\n                                <!-- <p style=\"float:right;\">layouts and visual mockups.</p> -->\n                            </div>\n                        </div>\n                        <div class=\"row mt-5 pt-5\" style=\"float: right;cursor: pointer\">\n                            <div class=\"mt-5 pt-5\" style=\"display: flex;\">\n                                <p class=\"mr-4\">Privacy</p>\n                                <p>Contact</p>\n                            </div>\n                        </div>\n                </div>\n            </div>\n            <div class=\"col-sm-7 loginSection\">\n                <div class=\"login-container\">\n                    <form class=\"form-horizontal mt-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"tryLogin()\">\n                    <div class=\"row\" style=\"justify-content: center;\">\n                    <div class=\"col-sm-8\">\n                            <div class=\"card-title text-center\">\n                                <img src=\"assets/images/logo/logo.png\" style=\"width: 240px\" alt=\"branding logo\">\n                            </div>\n                            <!-- <h3 class=\"card-subtitle line-on-side text-muted text-center font-small-3 pt-2\">\n                                <span>Login</span>\n                            </h3> -->\n                                    <div class=\"text-field\">\n                                        <input style =\"background-color: #fff!important;\"\n                                        formControlName=\"email\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" id=\"user-name\" required>\n                                        <label>Email*</label>\n                                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"text-field\">\n                                        <input style =\"background-color:   #fff!important;\"\n                                        formControlName=\"password\" type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" required>\n                                        <label>Password*</label>\n                                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                        </div>\n                                    </div>\n                                        <!-- <div class=\"text-field\">\n                                            <input style =\"background-color: white!important;\" type=\"password\"\n                                        formControlName=\"password\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                                        <label>Password*</label>\n                                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.email.errors.required\">Password is required</div>\n                                            </div>\n                                    </div> -->\n                            <div class=\"mt-5\" style=\"display: flex;\">\n                                <!-- <div style=\"color: #aba9b4!important;font-size: 20px;\">\n                                    Forgot Password\n                                </div> -->\n                                <div style=\"margin-left: 51%!important;\">\n                                    <button type=\"submit\" style=\"width: 160px!important;\" class=\"btn btn-primary btn-block\">\n                                        <i class=\"fa fa-refresh fa-spin\" *ngIf=\"submitted\"></i>\n                                        <i class=\"feather ft-unlock\" *ngIf=\"!submitted\"></i> Login\n                                    </button>\n                                </div>\n                            </div>\n                        <!-- </div> -->\n                        </div>\n\n\n\n\n                    </div>\n\n                </form>\n                </div>\n            </div>\n        </div>\n        <ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\n</div>\n\n\n<!-- <div class=\"app-content content\">\n    <div class=\"content-overlay\"></div>\n    <div class=\"content-wrapper\">\n        <div class=\"content-header row\">\n        </div>\n        <div class=\"content-body\">\n            <section class=\"row flexbox-container\">\n                <div class=\"col-12 d-flex align-items-center justify-content-center\">\n                    <div class=\"col-lg-4 col-md-8 col-10 box-shadow-2 p-0\">\n                        <div class=\"card border-grey border-lighten-3 px-1 py-1 m-0\">\n                            <div class=\"card-header border-0\">\n                                <div class=\"card-title text-center\">\n                                    <img src=\"assets/images/logo/logo.png\" style=\"width: 140px\" alt=\"branding logo\">\n                                </div>\n                                <h6 class=\"card-subtitle line-on-side text-muted text-center font-small-3 pt-2\">\n                                    <span>Hotel System</span></h6>\n                            </div>\n                            <div class=\"card-content\">\n                                <div class=\"card-body\">\n                                    <form class=\"form-horizontal\" [formGroup]=\"loginForm\" (ngSubmit)=\"tryLogin()\">\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" id=\"user-name\"\n                                                placeholder=\"Your Username\" required>\n                                            <div class=\"form-control-position\">\n                                                <i class=\"la la-user\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                                            </div>\n                                        </fieldset>\n                                        <fieldset class=\"form-group position-relative has-icon-left\">\n                                            <input type=\"password\" placeholder=\"Enter Password\"\n                                                formControlName=\"password\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                            <div class=\"form-control-position\">\n                                                <i class=\"la la-key\"></i>\n                                            </div>\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                            </div>\n\n                                        </fieldset>\n                                        <div class=\"form-group row\">\n                                            <div class=\"col-md-6 col-12 text-center text-sm-left pr-0\">\n                                            </div>\n                                            <div class=\"col-md-6 col-12 float-sm-left text-center text-sm-right\"><a\n                                                    href=\"/\" class=\"card-link\">Forgot Password?</a>\n                                            </div>\n                                        </div>\n                                        <button type=\"submit\" class=\"btn btn-outline-info btn-block\">\n                                            <i class=\"fa fa-refresh fa-spin\" *ngIf=\"submitted\"></i>\n                                            <i class=\"feather ft-unlock\" *ngIf=\"!submitted\"></i> Login\n                                        </button>\n                                    </form>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <a [routerLink]=\"\">Privacy Policy</a>\n                                        </div>\n                                        <div class=\"col-md-6 terms\">\n\n                                            <a [routerLink]=\"\">Terms & Conditions</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n        </div>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "jLIj":
/*!************************************************************!*\
  !*** ./src/app/_layout/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "lVjk");
/* harmony import */ var _navigation_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component.css */ "X577");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");









var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_renderer, _themeSettingsService, deviceService) {
        this._renderer = _renderer;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.isMobile = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
        });
    };
    NavigationComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] }
    ]; };
    NavigationComponent.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navigation_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_5__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "jT46":
/*!******************************************************************************!*\
  !*** ./src/app/content/partials/general/match-height/match-height.module.ts ***!
  \******************************************************************************/
/*! exports provided: MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ "OwLc");




var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__["MatchHeightDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__["MatchHeightDirective"]]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ }),

/***/ "kaWu":
/*!*************************************************************!*\
  !*** ./src/app/_layout/blockui/block-template.component.ts ***!
  \*************************************************************/
/*! exports provided: BlockTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTemplateComponent", function() { return BlockTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var BlockTemplateComponent = /** @class */ (function () {
    function BlockTemplateComponent() {
    }
    BlockTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-temp',
            template: "\n    <div class=\"block-ui-template\">\n      <i class=\"feather ft-refresh-cw icon-spin font-medium-2\" aria-hidden=\"true\"></i>\n      <div><strong>{{message}}</strong></div>\n    </div>\n  ",
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        })
    ], BlockTemplateComponent);
    return BlockTemplateComponent;
}());



/***/ }),

/***/ "lVjk":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_layout/navigation/navigation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (window:resize)=\"onResize($event)\">\n\t<app-header></app-header>\n\t<ng-container *ngIf=\"layout === 'vertical' || isMobile == true\">\n\t\t<app-verticalnav></app-verticalnav>\n\t</ng-container>\n\n\t<ng-container *ngIf=\"layout === 'horizontal' && isMobile == false\">\n\t\t<app-horizontalnav></app-horizontalnav>\n\t</ng-container>\n</div>\n");

/***/ }),

/***/ "lZQ7":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "1W4x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "mgMU":
/*!***************************************************!*\
  !*** ./src/app/changelog/changelog.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6ImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "myvz":
/*!******************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-sticky {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  z-index: 999;\n}\n\n.container {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.is-static {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 999;\n}\n\n:host ::ng-deep .navbar-dark .navbar-nav .nav-link {\n  color: white !important;\n}\n\n:host ::ng-deep .navbar-light .navbar-nav .nav-link {\n  color: #6b6f82 !important;\n}\n\n.dropdown-menu .dropdown-submenu>a:after {\n  top: 14px;\n}\n\n.dropdown .dropdown-menu {\n  min-width: 13rem !important;\n}\n\n.navbar-horizontal .dropdown-menu .dropdown-submenu>a:after,\n.navbar-horizontal .dropdown-menu .dropdown-submenu>button:after {\n  right: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWxuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLGFBQWE7QUFDZiIsImZpbGUiOiJob3Jpem9udGFsbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtc3RpY2t5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXMtc3RhdGljIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjNmI2ZjgyICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIge1xuICB0b3A6IDE0cHg7XG59XG5cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIsXG4ubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnU+YnV0dG9uOmFmdGVyIHtcbiAgcmlnaHQ6IDAuNXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "n1uN":
/*!************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customizer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customizer.component.html */ "76vB");
/* harmony import */ var _customizer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customizer.component.css */ "XxPO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");












var colors = __webpack_require__(/*! ../../../assets/data/customizer/customizerColor.json */ "cveO");
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.isBorderedNavigation = false;
        this.isFlippedNavigation = false;
        this.isCollapsibleNavigation = false;
        this.isStaticNavigation = false;
        this.isStaticTop = false;
        this.config = { wheelPropagation: false };
        this.collapsed = true;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    CustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    CustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        if (layout === 'static' && e.currentTarget.checked === true) {
            this.staticLayout(e);
        }
        else if (layout === 'static' && e.currentTarget.checked === false) {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(mainMenu.item(0), 'menu-fixed');
            this.isStaticLayout = false;
        }
    };
    CustomizerComponent.prototype.toggleFixMenu = function (e) {
        var toggleIcon = document.getElementsByClassName('toggle-icon');
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            this._themeCustomizerConfig.navbar = 'collapse';
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-right');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this._themeCustomizerConfig.navbar = 'expand';
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-left');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-right');
            this.isCollapsedMenu = false;
        }
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        this.resetOpenMenu();
    };
    CustomizerComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuCustomizerConfig.vertical_menu.items.length; i++) {
            var menu = this._menuCustomizerConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    CustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('header-navbar');
        var navbarHeaderElement = document.getElementsByClassName('navbar-header');
        if ($event.nextId === 'semi-dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
            this._themeCustomizerConfig.colorTheme = 'semi-dark';
        }
        else if ($event.nextId === 'semi-light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
            this._themeCustomizerConfig.colorTheme = 'semi-light';
        }
        else if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
            this._themeCustomizerConfig.colorTheme = 'dark';
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._themeCustomizerConfig.colorTheme = 'light';
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    CustomizerComponent.prototype.setMenuColor = function (colorClass, event) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        if (event.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.addClass(darkMenuButton, 'active');
        }
        else if (event.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.addClass(lightMenuButton, 'active');
        }
        this._themeSettingsService.config = {
            menuColor: colorClass,
        };
    };
    CustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('main-menu');
        var element = document.getElementById('customizer');
        if (event.target.checked === true && navigationClass !== 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
            if (navigationClass === 'menu-flipped') {
                this._renderer.removeClass(element, 'open');
            }
            else if (navigationClass === 'menu-static') {
                this._renderer.removeClass(navigationElement, 'menu-fixed');
            }
        }
        else if (event.target.checked === false && navigationClass !== 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
            if (navigationClass === 'menu-static') {
                this._renderer.addClass(navigationElement, 'menu-fixed');
            }
        }
        if (event.target.checked === true && navigationClass === 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
        }
        else if (event.target.checked === false && navigationClass === 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
        if (navigationClass === 'menu-bordered' && event.currentTarget.checked === true) {
            this.isBorderedNavigation = true;
        }
        else if (navigationClass === 'menu-bordered' && event.currentTarget.checked === false) {
            this.isBorderedNavigation = false;
        }
        if (navigationClass === 'menu-flipped' && event.currentTarget.checked === true) {
            this.isFlippedNavigation = true;
        }
        else if (navigationClass === 'menu-flipped' && event.currentTarget.checked === false) {
            this.isFlippedNavigation = false;
        }
        if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === true) {
            this.isCollapsibleNavigation = true;
        }
        else if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === false) {
            this.isCollapsibleNavigation = false;
        }
        if (navigationClass === 'menu-static' && event.currentTarget.checked === true) {
            this.isStaticNavigation = true;
        }
        else if (navigationClass === 'menu-static' && event.currentTarget.checked === false) {
            this.isStaticNavigation = false;
        }
    };
    CustomizerComponent.prototype.setNavbar = function (event) {
        var navbarElement = document.getElementsByClassName('header-navbar');
        var navigationElement = document.getElementById('main-menu');
        if (event.target.checked === true) {
            this._renderer.removeClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(navbarElement.item(0), 'fixed-top');
            this._renderer.removeClass(navigationElement, 'menu-fixed');
            this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.addClass(navigationElement, 'menu-static');
            this.isStaticTop = true;
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.removeClass(navigationElement, 'menu-static');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(navbarElement.item(0), 'fixed-top');
            this._renderer.addClass(navigationElement, 'menu-fixed');
            this.isStaticTop = false;
        }
    };
    CustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    CustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        if (layout === 'boxed' && this.isboxChecked === false) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._themeSettingsConfig.layout.pattern = '';
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_11__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
    };
    CustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(document.body, 'container');
        this._renderer.addClass(footer, 'fixed-bottom');
        if (this.isStaticLayout === true) {
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(footer, 'fixed-bottom');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    CustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(document.body, 'fixed-navbar');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    CustomizerComponent.prototype.staticLayout = function (e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        this._renderer.removeClass(document.body, 'fixed-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.removeClass(mainMenu.item(0), 'menu-fixed');
        this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
        this._renderer.addClass(footer, 'footer-static');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this.isStaticLayout = true;
        this._themeSettingsConfig.layout.pattern = 'static';
    };
    CustomizerComponent.prototype.onResize = function () {
        if (this.document.body.classList.contains('menu-expanded')) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;
        }
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] }
    ]; };
    CustomizerComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], { static: false },] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], { static: true },] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    CustomizerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-customizer',
            template: _raw_loader_customizer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_customizer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document,
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-left-5 {\n  margin-left: 5px;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n}\n\n.infoSection {\n  background: url(\"/assets/images/bg-6.jpg\") no-repeat center center\n    fixed;\n  background-size: cover;\n  /* background-image: linear-gradient(to bottom, #0773b3, #6fbf9a);\n  flex: 1;\n  padding: 50px; */\n}\n\n.loginSection {\n  background-color: #fff;\n}\n\n.login-container {\n  padding: 200px 150px;\n}\n\n.bg-secondary {\n  border: 0 !important;\n  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;\n  border: 0 !important;\n  background-color: #f4f5f7 !important;\n}\n\n.form-control-position {\n  position: absolute;\n  top: 1px;\n  z-index: 2;\n  display: block;\n  width: 2.5rem;\n  height: 2.5rem;\n  line-height: 3.2rem;\n  text-align: center;\n}\n\n.has-icon-left .form-control {\n  padding-right: 1rem;\n  padding-left: calc(1.25em + 1.5rem + 2px);\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\ninput {\n  width: 100%;\n}\n\n.text-field {\n  position: relative;\n  margin: 10px 2.5px 20px 2.5px;\n}\n\ninput {\n  display: inline-block;\n  /* border: 1px solid #fd397a; */\n  /* border-bottom: 1px solid #fd397a; */\n  /* color: #fd397a; */\n  background-color: white !important;\n  padding: 20px;\n  /* border-radius: 10px; */\n}\n\ninput:focus {\n  /* border: 1px solid #fd397a !important; */\n  background-color: white !important;\n  /* border-radius: 10px; */\n}\n\nlabel {\n  /* color: #fd397a; */\n  position: absolute;\n  pointer-events: none;\n  left: 10px;\n  top: 20px;\n  transition: 0.2s;\n}\n\ninput:focus ~ label,\ninput:valid ~ label {\n  top: -10px;\n  left: 15px;\n  font-size: small;\n  color: #fd397a;\n  background-color: #fff;\n  padding: 0 5px 0 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7U0FDTztFQUNQLHNCQUFzQjtFQUN0Qjs7a0JBRWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdGQUF3RjtFQUN4RixvQkFBb0I7RUFDcEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pbmZvU2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLTYuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyXG4gICAgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNzczYjMsICM2ZmJmOWEpO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1MHB4OyAqL1xufVxuXG4ubG9naW5TZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwMHB4IDE1MHB4O1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IHJnYmEoNTAsIDUwLCA5MywgMC4xKSwgMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY3ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2wtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhhcy1pY29uLWxlZnQgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogY2FsYygxLjI1ZW0gKyAxLjVyZW0gKyAycHgpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IDIuNXB4IDIwcHggMi41cHg7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZmQzOTdhOyAqL1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZkMzk3YTsgKi9cbiAgLyogY29sb3I6ICNmZDM5N2E7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG59XG5cbmlucHV0OmZvY3VzIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgI2ZkMzk3YSAhaW1wb3J0YW50OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xufVxuXG5sYWJlbCB7XG4gIC8qIGNvbG9yOiAjZmQzOTdhOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbmlucHV0OmZvY3VzIH4gbGFiZWwsXG5pbnB1dDp2YWxpZCB+IGxhYmVsIHtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICNmZDM5N2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "ofOD":
/*!*****************************************************!*\
  !*** ./src/app/content/partials/partials.module.ts ***!
  \*****************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _general_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general/card/card.module */ "vj4e");






var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            exports: [
                _general_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ]
        })
    ], PartialsModule);
    return PartialsModule;
}());



/***/ }),

/***/ "pdKX":
/*!*****************************************************!*\
  !*** ./src/app/_layout/header/header.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "sD6o":
/*!****************************************************!*\
  !*** ./src/app/_layout/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "Or6d");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "Mpkd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../full-layout/full-layout.component */ "Ne4N");











var FooterComponent = /** @class */ (function () {
    function FooterComponent(renderer, _renderer, router, document, spinner, _themeSettingsService) {
        var _this = this;
        this.renderer = renderer;
        this._renderer = _renderer;
        this.router = router;
        this.document = document;
        this.spinner = spinner;
        this._themeSettingsService = _themeSettingsService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.router.events.subscribe(function (event) {
            var footerElement = document.getElementsByClassName('footer');
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                if ((_this.router.url === '/chats' || _this.router.url === '/email') && footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'footer-static');
                    _this.renderer.addClass(footerElement.item(0), 'fixed-bottom');
                }
                else if (footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'fixed-bottom');
                    _this.renderer.addClass(footerElement.item(0), 'footer-static');
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0) ||
            (this.router.url.indexOf('searchPage') >= 0)) {
            this.showFooter = false;
        }
        else if (_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_10__["FullLayoutComponent"]) {
            this.showFooter = true;
        }
        else {
            this.showFooter = true;
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
        var footerElement = document.getElementsByClassName('footer');
        if (this.router.url === '/chats' || this.router.url === '/email' && footerElement.item(0)) {
            this._renderer.removeClass(footerElement.item(0), 'footer-static');
            this._renderer.addClass(footerElement.item(0), 'fixed-bottom');
        }
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"] }
    ]; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            Document,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "tn+2":
/*!******************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "tqKT":
/*!********************************************************************!*\
  !*** ./src/app/_layout/private-layout/private-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: PrivateLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function() { return PrivateLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_private_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./private-layout.component.html */ "Z6f3");
/* harmony import */ var _private_layout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private-layout.component.css */ "3UuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");












var PrivateLayoutComponent = /** @class */ (function () {
    function PrivateLayoutComponent(renderer, document, router, navbarService, _themeSettingsService, deviceService) {
        var _this = this;
        this.renderer = renderer;
        this.document = document;
        this.router = router;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.deviceInfo = null;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                // Hide loading indicator
                if (_this.router.url === '/chats') {
                    _this.renderer.addClass(document.body, 'chat-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'chat-application');
                }
                if (_this.router.url === '/email') {
                    _this.renderer.addClass(document.body, 'email-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'email-application');
                }
                if (_this.router.url === '/contacts') {
                    _this.renderer.addClass(document.body, 'app-contacts');
                }
                else {
                    _this.renderer.removeClass(document.body, 'app-contacts');
                }
                if (_this.router.url === '/todos') {
                    _this.renderer.addClass(document.body, 'todo');
                }
                else {
                    _this.renderer.removeClass(document.body, 'todo');
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationError"]) {
                // Hide loading indicator
            }
        });
    }
    PrivateLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (localStorage.getItem('currentLayoutStyle')) {
                _this._themeSettingsConfig.layout.style = localStorage.getItem('currentLayoutStyle');
            }
        });
        this.deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
        this.handleCollapsibleMenu();
    };
    PrivateLayoutComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        if (this._themeSettingsConfig.layout.style === 'vertical') {
            _self.renderer.setAttribute(document.body, 'data-menu', 'vertical-menu-modern');
        }
        else {
            _self.renderer.setAttribute(document.body, 'data-menu', 'horizontal-menu-modern');
        }
        var currentBodyClassList = [];
        this.layout = this._themeSettingsConfig.layout.style;
        this.customizer = this._themeSettingsConfig.customizer;
        // Vertical resposive view
        if (this._themeSettingsConfig.layout.style === 'vertical' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                currentBodyClassList = ['vertical-layout', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['vertical-layout', '2-columns', 'vertical-overlay-menu', 'pace-done', 'menu-hide'];
            }
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Horizontal resposive view
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            currentBodyClassList = ['horizontal-layout', 'horizontal-menu', '2-columns', 'pace-done',
                'fixed-navbar', 'menu-hide'];
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Normal view
        }
        else {
            var previosBodyClassList = [].slice.call(document.body.classList);
            var callapseOrExpanded_1 = '';
            previosBodyClassList.forEach(function (c) {
                if (c === 'menu-collapsed') {
                    callapseOrExpanded_1 = 'menu-collapsed';
                }
                else if (c === 'menu-expanded') {
                    callapseOrExpanded_1 = 'menu-expanded';
                }
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                if (callapseOrExpanded_1 === '') {
                    var toggleIcon = document.getElementsByClassName('toggle-icon');
                    if (toggleIcon.item && toggleIcon.item(0) &&
                        toggleIcon.item(0).classList.contains('ft-toggle-right')) {
                        callapseOrExpanded_1 = 'menu-expanded';
                    }
                    else {
                        callapseOrExpanded_1 = 'menu-collapsed';
                    }
                }
                // callapseOrExpanded = callapseOrExpanded !== '' ? callapseOrExpanded : 'menu-collapsed';
                currentBodyClassList = ['vertical-layout', 'vertical-menu-modern', '2-columns', 'pace-done', 'menu-close', callapseOrExpanded_1];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === '') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                    this.renderer.addClass(document.body, 'fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['horizontal-layout', '2-columns', 'horizontal-menu'];
                if (window.innerWidth >= _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    currentBodyClassList.push('menu-expanded');
                }
                else {
                    currentBodyClassList.push('menu-collapsed');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                }
            }
        }
        var footer = document.getElementById('footer');
        // if (this.router.url == '/chats') {
        // const footer = document.getElementById('footer');
        if (this.router.url === '/chats') {
            currentBodyClassList.push('chat-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('chat-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/email') {
            currentBodyClassList.push('email-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('email-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/contacts') {
            currentBodyClassList.push('app-contacts');
        }
        if (this.router.url === '/todos') {
            currentBodyClassList.push('todo');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
        this.handleFullScreen();
    };
    PrivateLayoutComponent.prototype.handleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (window.innerWidth === screen.width && window.innerHeight === screen.height && toggleIcon.item(0)) {
            this.renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0)) {
            this.renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    PrivateLayoutComponent.prototype.handleCollapsibleMenu = function () {
        if (this._themeSettingsConfig.menu === 'collapse') {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    PrivateLayoutComponent.prototype.onResize = function (event) {
        var menuClose = document.body.getElementsByClassName('menu-close');
        var toggle = document.getElementsByClassName('content-overlay');
        var sidenavOverlay = document.getElementsByClassName('sidenav-overlay');
        var emailMenu = document.getElementsByClassName('email-app-menu');
        var toggleIcon = document.getElementById('sidebar-left');
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.handleBody(true);
            if (menuClose) {
                this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
                this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            }
        }
        else {
            this.handleBody(false);
        }
        if (toggle && (this.router.url === '/chats' || this.router.url === '/todos' || this.router.url === '/contacts') &&
            event.target.innerWidth > _helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            this.renderer.removeClass(toggleIcon, 'show');
        }
        if ((toggle || sidenavOverlay) && this.router.url === '/email' && event.target.innerWidth > 767) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(emailMenu.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
        }
    };
    PrivateLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PrivateLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_11__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] }
    ]; };
    PrivateLayoutComponent.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    PrivateLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-private-layout',
            template: _raw_loader_private_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_private_layout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_11__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__["ThemeSettingsService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]])
    ], PrivateLayoutComponent);
    return PrivateLayoutComponent;
}());



/***/ }),

/***/ "tsOp":
/*!**********************************************************************!*\
  !*** ./src/app/content/partials/general/show-for/show-for.module.ts ***!
  \**********************************************************************/
/*! exports provided: ShowForModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowForModule", function() { return ShowForModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_directives_show_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_directives/show-for */ "8i7L");




var ShowForModule = /** @class */ (function () {
    function ShowForModule() {
    }
    ShowForModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_directives_show_for__WEBPACK_IMPORTED_MODULE_3__["ShowForDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [src_app_directives_show_for__WEBPACK_IMPORTED_MODULE_3__["ShowForDirective"]]
        })
    ], ShowForModule);
    return ShowForModule;
}());



/***/ }),

/***/ "uxX+":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "OY+d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alert',
            template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "uzBM":
/*!***************************************************************!*\
  !*** ./src/app/_layout/full-layout/full-layout.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vj4e":
/*!**************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.module.ts ***!
  \**************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.component */ "FhuM");
/* harmony import */ var _app_directives_card_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/_directives/card.directive */ "+kQa");






var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_3__["MatchHeightModule"]
            ],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _app_directives_card_directive__WEBPACK_IMPORTED_MODULE_5__["CardDirective"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/user/user.service */ "JlEV");











var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, spinner, alertService, userService, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.alertService = alertService;
        this.userService = userService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = "";
        this.password = '';
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            rememberMe: true
        });
        // Remember Me
        if (localStorage.getItem('remember')) {
            // this.renderer.removeClass(document.body, 'bg-full-screen-image');
            localStorage.removeItem('currentLayoutStyle');
            this.router.navigate(['/dashboard']);
        }
        else if (localStorage.getItem('currentUser')) {
            // Force logout on login if not remember me
            // this.authService.doLogout();
            // this.isPageLoaded = true;
        }
        else {
            // this.isPageLoaded = true;
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.spinner.hide();
            return;
        }
        var value = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.doLogin(value)
            .then(function (res) {
            console.log('after login ', res);
            // this.setUserInStorage(res);
            _this.getCurrentUser(res.user.uid)
                .then(function () {
                if (_this.currentUser && _this.currentUser.id && !_this.currentUser.mailVerified) {
                    _this.currentUser.mailVerified = true;
                    _this.spinner.hide();
                    localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                    _this.userService.updateUser(_this.currentUser.id, _this.currentUser);
                }
                if (_this.currentUser.isActive) {
                    localStorage.removeItem('currentLayoutStyle');
                    _this.spinner.hide();
                    var returnUrl_1 = '/dashboard';
                    if (_this.returnUrl) {
                        returnUrl_1 = _this.returnUrl;
                    }
                    _this.userService
                        .getUserRole(_this.currentUser.roleValue)
                        .subscribe(function (res) {
                        console.log("curr user permissions ", res);
                        if (res && res.length) {
                            window.localStorage.setItem("permissions", JSON.stringify(res[0].permissions));
                            _this.router.navigate([returnUrl_1]);
                        }
                    });
                }
                else {
                    _this.spinner.hide();
                    _this.submitted = false;
                    _this.alertService.showError('Account has been suspended !!', '5000', 'Contact Admin');
                }
            });
        }, function (err) {
            _this.spinner.hide();
            _this.submitted = false;
            _this.alertService.error(err.message);
        });
    };
    LoginComponent.prototype.setUserInStorage = function (res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    LoginComponent.prototype.simpleAlert = function () {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('forget password');
    };
    LoginComponent.prototype.getCurrentUser = function (uid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.userService.getUserById(uid)
                .then(function (res) {
                console.log('user after :: login ', res);
                if (res && res.length) {
                    _this.currentUser = res[0];
                    localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                }
                resolve();
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "yVDo":
/*!*******************************************************************!*\
  !*** ./src/app/_layout/public-layout/public-layout.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "yYK4":
/*!***************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.ts ***!
  \***************************************************************/
/*! exports provided: VerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalComponent", function() { return VerticalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vertical_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vertical.component.html */ "heLC");
/* harmony import */ var _vertical_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical.component.css */ "BKfb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");














var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var VerticalComponent = /** @class */ (function () {
    function VerticalComponent(document, _renderer, navbarService, _themeSettingsService, _menuSettingsService, authService, router, elementRef) {
        this.document = document;
        this._renderer = _renderer;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.isMobile = false;
        this.showNavbar = false;
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    VerticalComponent.prototype.logout = function () {
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                window.location.href = '/login';
            }, function (err) {
                console.log(err);
            });
        }
    };
    VerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppConstants"].MOBILE_RESPONSIVE_WIDTH;
        if (!this.isMobile) {
            this.showNavbar = true;
        }
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this.maximize = this._themeSettingsConfig.headerIcons.maximize;
        this.search = this._themeSettingsConfig.headerIcons.search;
        this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
        this.notification = this._themeSettingsConfig.headerIcons.notification;
        this.email = this._themeSettingsConfig.headerIcons.email;
    };
    VerticalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    VerticalComponent.prototype.refreshView = function () {
        var iconElement = document.getElementsByClassName('toggle-icon');
        var menuColorElement = document.getElementsByClassName('main-menu');
        var navigationElement = document.getElementsByClassName('main-menu');
        var navbarElement = document.getElementsByClassName('header-navbar');
        var themeColorElement = document.getElementsByClassName('header-navbar');
        var element = document.getElementsByClassName('navbar-header');
        var boxelement = document.getElementById('customizer');
        if (iconElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(iconElement.item(0), 'white');
                this._renderer.addClass(iconElement.item(0), 'blue-grey');
                this._renderer.addClass(iconElement.item(0), 'darken-3');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(iconElement.item(0), 'white');
                this._renderer.removeClass(iconElement.item(0), 'blue-grey');
                this._renderer.removeClass(iconElement.item(0), 'darken-3');
            }
        }
        if (this._themeSettingsConfig.colorTheme === 'semi-light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
            this.selectedHeaderNavBarClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'dark') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'menu-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
                this._renderer.addClass(menuColorElement.item(0), 'menu-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'menu-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
                this._renderer.addClass(menuColorElement.item(0), 'menu-light');
            }
        }
        if (themeColorElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
            }
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'menu-native-scroll') {
                this._renderer.addClass(navigationElement.item(0), 'menu-native-scroll');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'menu-icon-right');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-bordered') {
                this._renderer.addClass(navigationElement.item(0), 'menu-bordered');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-flipped') {
                this._renderer.addClass(document.body, 'menu-flipped');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-collapsible') {
                this._renderer.addClass(navigationElement.item(0), 'menu-collapsible');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-static') {
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'navbar-static-top') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'semi-light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-light bg-gradient-x-grey-blue');
            }
            else if (this._themeSettingsConfig.menu === 'semi-dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-dark');
            }
            else if (this._themeSettingsConfig.menu === 'dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menu === 'light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-light');
            }
        }
    };
    VerticalComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    // example to update badge value dynamically from another component
    VerticalComponent.prototype.updateMenuBadgeValue = function () {
        for (var i = 0; i < this._menuSettingsConfig.items.length; i++) {
            if (this._menuSettingsConfig.items[i].badge) {
                this._menuSettingsConfig.items[i].badge.value = 19;
            }
        }
        this._menuSettingsService.config = this._menuSettingsConfig;
    };
    VerticalComponent.prototype.handleCollapseOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.remove('hover');
            element.classList.add('menu-collapsed-open');
        }
    };
    VerticalComponent.prototype.handleExpandOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') &&
            element.classList.contains('menu-collapsed-open')) {
            element.classList.remove('menu-collapsed-open');
            element.classList.add('open');
            element.classList.add('hover');
        }
    };
    VerticalComponent.prototype.toggleMenu = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var parent = target.parentElement;
        if (parent && parent.classList.contains('has-sub')) {
            this.openSubMenuUsingParent(parent);
        }
        else {
            var parentOfParent = parent.parentElement;
            this.openSubMenuUsingParent(parentOfParent);
        }
    };
    VerticalComponent.prototype.openSubMenuUsingParent = function (parent) {
        if (parent.classList && parent.classList.contains('has-sub') &&
            !parent.classList.contains('open')) {
            parent.classList.add('open');
        }
        else if (parent.classList && parent.classList.contains('has-sub') &&
            parent.classList.contains('open')) {
            parent.classList.remove('open');
        }
    };
    VerticalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    VerticalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    VerticalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    VerticalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._themeSettingsConfig.menu = 'collapse';
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._themeSettingsConfig.menu = 'expand';
        }
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        this._renderer.addClass(navBar, 'expanded');
        this._renderer.addClass(mainMenu, 'expanded');
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    VerticalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        if (this.document.body.classList.contains('menu-open') && (this.router.url === '/todos' || this.router.url === '/contacts' ||
            this.router.url === '/email' || this.router.url === '/chats')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.removeClass(contentOverlay, 'show');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else if (this.document.body.classList.contains('menu-open')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else {
            this._renderer.removeClass(sidenav, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this._renderer.addClass(sidenav, 'd-block');
            this.showNavbar = false;
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    VerticalComponent.prototype.toggleNavbar = function (e) {
        if (this.showNavbar) {
            this.showNavbar = false;
        }
        else {
            this.showNavbar = true;
        }
    };
    VerticalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    VerticalComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
            this.showNavbar = false;
        }
        else {
            this.isMobile = false;
            this.showNavbar = true;
        }
    };
    VerticalComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    VerticalComponent.propDecorators = {
        componentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarComponent"], { static: false },] }],
        directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarDirective"], { static: true },] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    VerticalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header-vertical',
            template: _raw_loader_vertical_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vertical_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_6__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], VerticalComponent);
    return VerticalComponent;
}());



/***/ }),

/***/ "z2wB":
/*!*****************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HorizontalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalnavComponent", function() { return HorizontalnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontalnav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontalnav.component.html */ "0cLh");
/* harmony import */ var _horizontalnav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontalnav.component.css */ "myvz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");














var HorizontalnavComponent = /** @class */ (function () {
    function HorizontalnavComponent(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router) {
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    HorizontalnavComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this.setActiveRouteInNavbar();
    };
    HorizontalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    HorizontalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    HorizontalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    HorizontalnavComponent.prototype.callFunction = function (event) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_11__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
    };
    HorizontalnavComponent.prototype.refreshView = function () {
        var menuHeaderElement = document.getElementsByClassName('menu-header');
        // Theme
        if (menuHeaderElement && menuHeaderElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.addClass(menuHeaderElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'menu-static');
            }
        }
    };
    HorizontalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu &&
                this._menuSettingsConfig.horizontal_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    HorizontalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        var target = event.target || event.srcElement || event.currentTarget;
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        child['isSelected'] = true;
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
    };
    HorizontalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (selectedChild.page !== 'null') {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = false;
            }
            this.handleSubmenuItems(this._menuSettingsConfig.horizontal_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    HorizontalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        var isSelectedChildExist = false;
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_13__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.title === parentItem['submenu']['items'][j].title) {
                    isSelectedChildExist = true;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
                if (parentItem['submenu']['items'][j]['isSelected'] === true) {
                    isSelectedChildExist = true;
                }
            }
            if (!isSelectedChildExist) {
                parentItem['isSelected'] = false;
            }
            else {
                parentItem['isSelected'] = true;
            }
        }
        else if (parentItem.title !== selectedChild.title && !isSubmenuOfSubmenu) {
            parentItem['isSelected'] = false;
        }
    };
    HorizontalnavComponent.prototype.onWindowScroll = function (e) {
        var element = document.getElementById('sticky-wrapper');
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            if (this._themeSettingsConfig.layout.pattern === 'fixed' ||
                this._themeSettingsConfig.layout.pattern === '') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.remove('container');
                }
                else {
                    element.classList.remove('is-sticky');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.add('container');
                }
                else {
                    element.classList.remove('is-sticky');
                    element.classList.remove('container');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'static') {
                element.classList.remove('is-sticky');
                element.classList.remove('container');
                element.classList.add('is-static');
            }
        }
    };
    HorizontalnavComponent.prototype.mouseEnter = function (e) {
        var _event = e;
        _event.srcElement.classList.add('show');
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    HorizontalnavComponent.prototype.mouseLeave = function (event) {
        var _event = event;
        _event.srcElement.classList.remove('show');
    };
    HorizontalnavComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
        { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
        { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_7__["ThemeSettingsService"] },
        { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__["MenuSettingsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
    ]; };
    HorizontalnavComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    HorizontalnavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-horizontalnav',
            template: _raw_loader_horizontalnav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500)]),
                ])
            ],
            styles: [_horizontalnav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"],
            _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_7__["ThemeSettingsService"],
            _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_10__["MenuSettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], HorizontalnavComponent);
    return HorizontalnavComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map