(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-role-management-role-management-module"],{

/***/ "/VRI":
/*!*******************************************************************!*\
  !*** ./src/app/content/role-management/role-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: RoleManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementModule", function() { return RoleManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-list/role-list.component */ "kux/");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-role/create-role.component */ "pO5r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-datatables */ "oTcB");


















var RoleManagementModule = /** @class */ (function () {
    function RoleManagementModule() {
    }
    RoleManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoleComponent"]],
            entryComponents: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_photoswipe__WEBPACK_IMPORTED_MODULE_16__["Angular2PhotoswipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_17__["DataTablesModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_13__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                    {
                        path: 'list',
                        component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"]
                    },
                    {
                        path: 'create',
                        component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoleComponent"]
                    },
                    {
                        path: 'edit',
                        component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoleComponent"]
                    },
                ]),
            ]
        })
    ], RoleManagementModule);
    return RoleManagementModule;
}());



/***/ }),

/***/ "ENjR":
/*!*******************************************************************************!*\
  !*** ./src/app/content/role-management/create-role/create-role.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n:host ::ng-deep .custom-ctr {\n  background: white;\n    padding: 15px;\n    border: 1px solid gainsboro;\n    padding-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGlCQUFpQjtJQUNmLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImNyZWF0ZS1yb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWN0ciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "VvG5":
/*!***************************************************************************!*\
  !*** ./src/app/content/role-management/role-list/role-list.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .btn.btn-social-icon {\n    padding: unset !important;\n}\n:host ::ng-deep .custom-ctr {\n    background: white;\n    padding: 15px;\n    border: 1px solid gainsboro;\n    padding-top: 30px;\n}\ntable.dataTable thead {\n  /* background: red;\n  color: white */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7QUFDQTtFQUNFO2dCQUNjO0FBQ2hCIiwiZmlsZSI6InJvbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5idG4uYnRuLXNvY2lhbC1pY29uIHtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY3RyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCB7XG4gIC8qIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlICovXG59XG4iXX0= */");

/***/ }),

/***/ "c50R":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/role-management/create-role/create-role.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"user-profile-cards\" class=\"custom-ctr row mt-2\">\n        <div class=\"col-12\">\n          <button type=\"submit\" style=\"float:'right'\" class=\"btn btn-primary\" (click)=\"createRole()\">\n            Save\n          </button>\n          <h4 class=\"text-uppercase\">{{ isEdit ? 'Edit ' : ' Create ' }} Role</h4>\n          <!-- <div class=\"form-group col-md-6\">\n            <label class=\"form-control-label\" for=\"city\">Select Organization</label>\n            <select class=\"form-control input-md border-primary\" formControlName=\"country\">\n              <option value=\"CorpCRS\">CorpCRS</option>\n              <option value=\"Hotel\">Hotel</option>\n              <option value=\"Corporate\">Corporate</option>\n            </select>\n          </div> -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"userinput5\" class=\"text-uppercase\">Role Name *</label>\n            <input class=\"form-control border-primary\" type=\"text\" placeholder=\"Enter role name here ..\" [(ngModel)]=\"roleName\" name=\"roleName\">\n          </div>\n        </div>\n\n        <div class=\"col-xl-4 col-md-6 col-12\" *ngFor=\"let page of allPages; let index = index\">\n          <div class=\"card\">\n            <div style=\"padding-left: '2.5rem !important';border-bottom: '1px solid #b0b1b5'\" class=\"card-header custom-checkbox\">\n              <input class=\"custom-control-input\" (change)=\"checkAllPermission(page)\" type=\"checkbox\" [(ngModel)]=\"page.isAllChecked\" name=\"checkbox1\" id=\"{{ page.title }}\" value=\"{{ page.title }}\" />\n              <label class=\"custom-control-label\" for=\"{{ page.title }}\">{{ page.title }}\n              </label>\n            </div>\n            <div class=\"list-group\">\n              <div style=\"padding-left: '2.5rem !important'\" class=\"list-group-item custom-control custom-checkbox\" *ngFor=\"let permission of page.permissions; let j = index\">\n                <input class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"permission.isChecked\" name=\"checkbox1\" id=\"{{permission.value}}\" value=\"{{permission.name}}\" />\n                <label class=\"custom-control-label\" for=\"{{permission.value}}\">{{ permission.name }}\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "kux/":
/*!**************************************************************************!*\
  !*** ./src/app/content/role-management/role-list/role-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_role_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./role-list.component.html */ "y2fY");
/* harmony import */ var _role_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-list.component.css */ "VvG5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/user/user.service */ "JlEV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");









var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(router, alertService, userService) {
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
        this.userList = [];
        this.roleList = [];
        this.title = 'angulardatatables';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true
        };
        this.userService.getAllRoles()
            .then(function (res) {
            console.log('rolemanagement ', res);
            _this.roleList = res;
            _this.dtTrigger.next();
        });
        this.breadcrumb = {
            'mainlabel': 'Role Management',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'Role List',
                    'isLink': false
                }
            ]
        };
    };
    RoleListComponent.prototype.editRole = function (role) {
        console.log('edit role ', role);
        this.router.navigate(['/roles/edit'], { queryParams: { id: role.roleValue } });
    };
    RoleListComponent.prototype.deleteRole = function (role) {
        console.log('deleteRole ', role);
        // this.userService.deleteRoleById(role.id);
    };
    RoleListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    RoleListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    RoleListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-role-list',
            template: _raw_loader_role_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_role_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "pO5r":
/*!******************************************************************************!*\
  !*** ./src/app/content/role-management/create-role/create-role.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_role_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-role.component.html */ "c50R");
/* harmony import */ var _create_role_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-role.component.css */ "ENjR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/user/user.service */ "JlEV");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "xG9w");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var CreateRoleComponent = /** @class */ (function () {
    function CreateRoleComponent(alertService, userService, route) {
        this.alertService = alertService;
        this.userService = userService;
        this.route = route;
        this.userList = [];
        this.roleName = '';
        this.isEdit = false;
        this.allPages = [
            {
                title: 'Role Management',
                component: 'Role Management',
                isAllChecked: false,
                permissions: [{
                        name: "View",
                        value: "ROLE_MANAGEMENT_VIEW",
                        isChecked: false,
                    }, {
                        name: "Create",
                        value: "ROLE_MANAGEMENT_CREATE",
                        isChecked: false,
                    }, {
                        name: "Edit",
                        value: "ROLE_MANAGEMENT_EDIT",
                        isChecked: false,
                    }, {
                        name: "Delete",
                        value: "ROLE_MANAGEMENT_DELETE",
                        isChecked: false,
                    }, {
                        name: "Active/Inactive",
                        value: "ROLE_MANAGEMENT_ACTIVE_INACTIVE",
                        isChecked: false,
                    }
                ]
            }, {
                title: 'User Management',
                component: 'User Management',
                isAllChecked: false,
                permissions: [{
                        name: "View",
                        value: "USER_MANAGEMENT_VIEW",
                        isChecked: false,
                    }, {
                        name: "Create",
                        value: "USER_MANAGEMENT_CREATE",
                        isChecked: false,
                    }, {
                        name: "Edit",
                        value: "USER_MANAGEMENT_EDIT",
                        isChecked: false,
                    }, {
                        name: "Delete",
                        value: "USER_MANAGEMENT_DELETE",
                        isChecked: false,
                    }, {
                        name: "Active/Inactive",
                        value: "USER_MANAGEMENT_ACTIVE_INACTIVE",
                        isChecked: false,
                    }]
            }, {
                title: 'Meetups',
                component: 'Meetups',
                isAllChecked: false,
                permissions: [{
                        name: "View",
                        value: "MEETUPS_VIEW",
                        isChecked: false,
                    }, {
                        name: "Create",
                        value: "MEETUPS_CREATE",
                        isChecked: false,
                    },
                    {
                        name: "Edit",
                        value: "MEETUPS_EDIT",
                        isChecked: false,
                    },
                    {
                        name: "Delete",
                        value: "MEETUPS_DELETE",
                        isChecked: false,
                    },
                    {
                        name: "Active/Inactive",
                        value: "MEETUPS_ACTIVE_INACTIVE",
                        isChecked: false,
                    }]
            }, {
                title: 'Mentors',
                component: 'Mentors',
                isAllChecked: false,
                permissions: [{
                        name: "View",
                        value: "MENTORS_VIEW",
                        isChecked: false,
                    }, {
                        name: "Create",
                        value: "MENTORS_CREATE",
                        isChecked: false,
                    }, {
                        name: "Edit",
                        value: "MENTORS_EDIT",
                        isChecked: false,
                    }, {
                        name: "Delete",
                        value: "MENTORS_DELETE",
                        isChecked: false,
                    }, {
                        name: "Active/Inactive",
                        value: "MENTORS_ACTIVE_INACTIVE",
                        isChecked: false,
                    }]
            }
        ];
        if (window.localStorage.getItem('currentUser')) {
            this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
        }
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.queryParams['id']) {
            this.isEdit = true;
            this.userService.getRoleById(this.route.snapshot.queryParams['id'])
                .then(function (res) {
                console.log('res ', res);
                if (res && res.length) {
                    _this.roleData = res[0];
                    _this.roleName = _this.roleData.roleName;
                    var self_1 = _this;
                    underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this.allPages, function (page) {
                        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](page.permissions, function (p) {
                            var index = self_1.roleData.permissions.indexOf(p.value);
                            if (index >= 0) {
                                p.isChecked = true;
                            }
                        });
                    });
                }
            });
        }
        this.breadcrumb = {
            'mainlabel': 'Role Management',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'Role List',
                    'isLink': true,
                    'link': '/roles/list'
                },
                {
                    'name': this.isEdit ? 'Edit Role' : 'New Role',
                    'isLink': false
                }
            ]
        };
    };
    CreateRoleComponent.prototype.checkAllPermission = function (page) {
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](page.permissions, function (p) {
            p.isChecked = page.isAllChecked;
        });
    };
    CreateRoleComponent.prototype.refreshPages = function () {
        var _this = this;
        return new Promise(function (resolve) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this.allPages, function (page) {
                page.isAllChecked = false;
                underscore__WEBPACK_IMPORTED_MODULE_7__["each"](page.permissions, function (p) {
                    p.isChecked = false;
                });
            });
            resolve();
        });
    };
    CreateRoleComponent.prototype.createRole = function () {
        var _this = this;
        console.log('am in createRole ', this.allPages);
        if (!this.roleName) {
            this.alertService.showError("Role Name is manadatory !!");
            return false;
        }
        var pList = [];
        underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.allPages, function (page) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](page.permissions, function (p) {
                if (p.isChecked) {
                    pList.push(p.value);
                }
            });
        });
        if (!pList.length) {
            this.alertService.showError("Select atleast one permission");
            return false;
        }
        var role = {};
        if (this.isEdit) {
            role = this.roleData;
            role.roleName = this.roleName;
            role.updated_by = this.loggedInUser;
            role.permissions = pList;
            role.updated_on = moment__WEBPACK_IMPORTED_MODULE_8__().format('DD-MM-YYYY hh:mm A');
            role.timeStamp = moment__WEBPACK_IMPORTED_MODULE_8__().format('x');
        }
        else {
            role = {
                roleName: this.roleName,
                roleValue: Math.floor(Math.random() * 10000),
                permissions: pList,
                created_by: this.loggedInUser,
                updated_by: this.loggedInUser,
                created_on: moment__WEBPACK_IMPORTED_MODULE_8__().format('DD-MM-YYYY hh:mm A'),
                updated_on: moment__WEBPACK_IMPORTED_MODULE_8__().format('DD-MM-YYYY hh:mm A'),
                timeStamp: moment__WEBPACK_IMPORTED_MODULE_8__().format('x')
            };
        }
        console.log('before :: save ', role);
        // this.helper.showLoading();
        this.userService.createRole(role)
            .then(function () {
            return _this.refreshPages();
        })
            .then(function () {
            // this.helper.hideLoading();
            var msg = _this.isEdit ? 'Updated' : 'Created';
            _this.alertService.showSuccess('Role ' + msg + ' successfully');
            _this.roleName = '';
        })
            .catch(function () {
            // this.helper.hideLoading();
            _this.alertService.showError('Error creating role');
        });
    };
    CreateRoleComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CreateRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-role',
            template: _raw_loader_create_role_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_create_role_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}());



/***/ }),

/***/ "y2fY":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/role-management/role-list/role-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"simple-user-cards\" class=\"row\">\n        <table class=\"custom-ctr table table-striped table-bordered table-lg row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n            <tr>\n              <th>Sl</th>\n              <th>UID</th>\n              <th>Name</th>\n              <th>Permissions</th>\n              <th>Created By</th>\n              <th>Created On</th>\n              <th>Action</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let group of roleList; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ group.roleValue }}</td>\n              <td>{{ group.roleName }}</td>\n              <td>{{ group.permissions.length }}</td>\n              <td>{{ group.created_by ? group.created_by.displayName : '' }}</td>\n              <td>{{ group.created_on }}</td>\n              <td>\n                <button (click)=\"editRole(group)\" class=\"btn btn-sm btn-outline-info\">\n                  Edit\n                </button>\n              </td>\n              <td>\n                <button disabled (click)=\"deleteRole(group)\" class=\"btn btn-sm btn-outline-danger\">\n                  Delete\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </section>\n\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=app-content-role-management-role-management-module.js.map