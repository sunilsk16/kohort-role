(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-user-management-user-management-module"],{

/***/ "9aji":
/*!*******************************************************************!*\
  !*** ./src/app/content/user-management/user-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "gYSB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-datatables */ "oTcB");
















var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
                angular2_photoswipe__WEBPACK_IMPORTED_MODULE_14__["Angular2PhotoswipeModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_15__["DataTablesModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_12__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_11__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'list',
                        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
                    },
                ]),
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "PXJR":
/*!***************************************************************************!*\
  !*** ./src/app/content/user-management/user-list/user-list.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .btn.btn-social-icon {\n    padding: unset !important;\n}\n:host ::ng-deep .custom-ctr {\n    background: white;\n    padding: 15px;\n    border: 1px solid gainsboro;\n    padding-top: 30px;\n}\n:host ::ng-deep .add-btn {\n  float: right;\n  margin-top: -5%;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5idG4uYnRuLXNvY2lhbC1pY29uIHtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY3RyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYWRkLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */");

/***/ }),

/***/ "dZ4w":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/user-management/user-list/user-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n\n    <ng-template class=\"modal text-left\" #inviteUserModal let-d=\"dismiss\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title text-600\" id=\"myModalLabel34\">Invite User</h3>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form>\n          <div class=\"modal-body\">\n            <fieldset class=\"form-group floating-label-form-group\">\n              <label for=\"email\">Full Name *</label>\n              <input type=\"text\" ngbAutofocus class=\"form-control\" name=\"fullName\" [(ngModel)]=\"user.fullName\" placeholder=\"Enter Name here ..\">\n            </fieldset>\n            <br>\n            <fieldset class=\"form-group floating-label-form-group\">\n              <label for=\"title\">E-Mail *</label>\n              <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter email here ...\">\n            </fieldset>\n            <br>\n            <fieldset class=\"form-group floating-label-form-group\">\n              <label for=\"title1\">Organization *</label>\n              <select name=\"organization\" [(ngModel)]=\"user.organization\" class=\"form-control input-md\">\n                <option value=\"CorpCRS\">Kohort</option>\n                <!-- <option value=\"Hotel\">Hotel</option>\n                <option value=\"Corporate\">Corporate</option> -->\n              </select>\n            </fieldset>\n            <fieldset class=\"form-group floating-label-form-group\">\n              <label for=\"title1\">Role *</label>\n              <select name=\"roleValue\" [(ngModel)]=\"user.roleValue\" class=\"form-control input-md\">\n                <option value=\"\">Select Role</option>\n                <option [value]=\"role.roleValue\" *ngFor=\"let role of roleList\">{{ role.roleName }}</option>\n              </select>\n            </fieldset>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"reset\" class=\"btn grey btn-outline-secondary btn-lg\" (click)=\"d('Close modal')\">Close</button>\n            <button type=\"button\" class=\"btn btn-outline-primary btn-lg\" (click)=\"createUser()\">\n              <i class=\"fa fa-refresh fa-spin\" *ngIf=\"isLoading\"></i>\n              Invite\n            </button>\n          </div>\n        </form>\n      </div>\n    </ng-template>\n\n    <div class=\"content-body\">\n      <button [showFor]=\"'ADMIN_MNG_EDIT'\" #showFor class=\"btn btn-outline-primary primary add-btn\" style=\"float:'right';\" (click)=\"inviteUser(inviteUserModal)\">\n        Add User\n      </button>\n      <section id=\"simple-user-cards\" class=\"row\">\n        <table class=\"custom-ctr table table-striped table-bordered table-lg row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n            <tr>\n              <th>Sl</th>\n              <th>Organization</th>\n              <th>Role</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Active</th>\n              <th>Verified</th>\n              <th>Action</th>\n              <!-- <th>Action</th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of userList; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ user.organization }}</td>\n              <td>{{ getRoleName(user.roleValue) }}</td>\n              <td>{{ user.name }}</td>\n              <td>{{ user.email }}</td>\n              <td>\n                <a class=\"nav-link modern-nav-toggle pr-0\" data-toggle=\"collapse\"\n                  (click)=\"toggleUser(user)\">\n                  <i class=\"feather toggle-icon font-medium-3 primary\"\n                    [ngClass]=\"{'ft-toggle-left': !user.isActive, 'ft-toggle-right': user.isActive}\"></i>\n                </a>\n              </td>\n              <td>{{ user.mailVerified ? 'Yes' : 'No' }}</td>\n              <td>\n                <button class=\"btn btn-outline-danger danger\" style=\"float:'right';\" (click)=\"deleteUser(user, i)\">\n                  Delete\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </section>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "gYSB":
/*!**************************************************************************!*\
  !*** ./src/app/content/user-management/user-list/user-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-list.component.html */ "dZ4w");
/* harmony import */ var _user_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component.css */ "PXJR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/user/user.service */ "JlEV");
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_services/helper/helper.service */ "L7Rk");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "xG9w");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");














var UserListComponent = /** @class */ (function () {
    function UserListComponent(alertService, userService, modalService, authService, helper) {
        this.alertService = alertService;
        this.userService = userService;
        this.modalService = modalService;
        this.authService = authService;
        this.helper = helper;
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.userList = [];
        this.roleList = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.user = {
            fullName: '',
            email: '',
            organization: 'Kohort',
            roleValue: ''
        };
        this.isLoading = false;
        if (window.localStorage.getItem('currentUser')) {
            this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
        }
    }
    UserListComponent.prototype.ngOnInit = function () {
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
            return _this.userService.getAllAdmins();
        })
            .then(function (res) {
            _this.userList = res;
            console.log('userList ', res);
            _this.dtTrigger.next();
        });
        this.breadcrumb = {
            'mainlabel': 'User Management',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'User List',
                    'isLink': false
                }
            ]
        };
    };
    UserListComponent.prototype.getRoleName = function (roleValue) {
        var roleName = '';
        if (underscore__WEBPACK_IMPORTED_MODULE_10__["groupBy"](this.roleList, 'roleValue')[roleValue] && underscore__WEBPACK_IMPORTED_MODULE_10__["groupBy"](this.roleList, 'roleValue')[roleValue].length) {
            roleName = underscore__WEBPACK_IMPORTED_MODULE_10__["groupBy"](this.roleList, 'roleValue')[roleValue][0].roleName;
        }
        return roleName;
    };
    UserListComponent.prototype.toggleUser = function (user) {
        var _this = this;
        user.isActive = !user.isActive;
        this.userService.updateUser(user.id, user)
            .then(function () {
            var msg = user.isActive ? 'User activated successfully !!' : 'User deactivated successfully !!';
            _this.alertService.showSuccess(msg);
        })
            .catch(function () {
            _this.alertService.showError('Error updating user !!');
        });
    };
    UserListComponent.prototype.deleteUser = function (user, index) {
        var _this = this;
        this.userService.deleteUserById(user.id)
            .then(function () {
            _this.userList.splice(index, 1);
            _this.alertService.showSuccess('User deleted successfully !!');
        })
            .catch(function () {
            _this.alertService.showError('Error deleting user !!');
        });
    };
    UserListComponent.prototype.generatePassword = function () {
        var length = 8, charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    UserListComponent.prototype.sendEmail = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var subject = '[NOTICE] You are Invited | kohort.';
            var body = "<div style='border:1.1px solid #efefef;padding:5px'>" +
                "<div style='margin:-5px;text-align:center;border-bottom:1.1px solid#efefef;'>" +
                "<img style='height:70px;width:auto' src='https://stg-kohort.web.app/assets/images/logo/logo.png'/>" +
                "</div><div style='padding:10px 5px'>" +
                "Hello " + _this.user.fullName + " ,<br/><br/>" +
                "You have been invited by " + _this.loggedInUser.displayName + " to kohort application." +
                "<br/><br/>Click below link to accept invitation and login with temporary password.<br/><br/>" +
                "Username : " + _this.user.email +
                "<br/>Password: " + _this.tempPassword +
                "<br/><br/><br/><br/>" +
                "<a href='https://stg-corpcrs.web.app' style='text-decoration:none;padding:10px 10px 10px 12px;border:0;font-family:roboto,sans-serif;font-weight:500;text-transform:none;letter-spacing:0.25px;border-radius:8px;background-color:#039be5;color:#ffffff' target='_blank'>Accept pending <span class='il'>invitation</span></a>" +
                "<br/></div><br/>Regards,<br/>kohort Support Team<br/><br/>" +
                "<div style='margin:-5px;background:#78909c;padding:20px;color:white'>" +
                "kohort<span style='float:right;font-size:12px'>kohort Solutions Pvt Ltd" +
                "<br/>Banglore,Karnataka</span></div></div>";
            var toAddress = "firozss31@gmail.com";
            console.log('triggerMail ', subject, body);
            _this.helper.sendEmail(subject, body, _this.user.email)
                .then(function (res) {
                console.log('res ', res);
                resolve();
            })
                .catch(function (err) {
                console.log('err ', err);
                resolve();
            });
        });
    };
    UserListComponent.prototype.createUser = function () {
        var _this = this;
        this.isLoading = true;
        if (!this.user.fullName || !this.user.email || !this.user.roleValue) {
            this.alertService.showError('Enter mandatory fields !!');
            this.isLoading = false;
            return false;
        }
        this.tempPassword = "123456" || false;
        console.log('invite user ', this.user, this.tempPassword);
        this.authService.doRegister({ email: this.user.email, password: this.tempPassword })
            .then(function (authData) {
            return _this.userService.updateUser(authData.user.uid, {
                uid: authData.user.uid,
                email: authData.user.email,
                name: _this.user.fullName,
                roleValue: _this.user.roleValue,
                organization: _this.user.organization,
                isActive: true,
                mailVerified: false,
                invitedBy: _this.loggedInUser,
                invitedOn: moment__WEBPACK_IMPORTED_MODULE_11__().format('DD-MM-YYYY hh:mm A')
            });
        })
            .then(function () {
            return _this.sendEmail();
        })
            .then(function () {
            _this.isLoading = false;
            _this.alertService.showSuccess('Invitation sent !!');
            _this.modalRef.close();
        })
            .catch(function (err) {
            console.log('err ', err);
            _this.isLoading = false;
            _this.alertService.showSuccess('Error sending invitation !!');
            _this.modalRef.close();
        });
    };
    UserListComponent.prototype.inviteUser = function (content) {
        this.modalRef = this.modalService.open(content, { windowClass: 'animated fadeInDown' });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])('basicModals'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], UserListComponent.prototype, "blockUIBasicModals", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])('modalThemes'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], UserListComponent.prototype, "blockUIModalThemes", void 0);
    UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-list',
            template: _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-content-user-management-user-management-module.js.map