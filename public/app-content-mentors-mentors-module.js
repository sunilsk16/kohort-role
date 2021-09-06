(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-mentors-mentors-module"],{

/***/ "+zF9":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/mentors/new-mentors/new-mentors.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"content-header row mb-1\">\r\n      <div class=\"col-12\">\r\n        <app-breadcrumb [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content-body\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <section id=\"icon-tabs\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" *blockUI=\"'iconTabs'; message: 'Loading'\">\r\n\r\n                          <form [formGroup]=\"iconTab\" >\r\n                            <div class=\"row\">\r\n                              <div class='col-md-4'>\r\n                                <!-- <h2>Basic Details</h2> -->\r\n                                <!-- <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"corpID\">Mentor ID :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"corpID\" />\r\n\r\n                                </div> -->\r\n\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"clientName\">Name :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"name\" [value]=\"iconTab.value.name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"clietType\">Designation :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"designation\" [value]=\"iconTab.value.designation\" [ngClass]=\"{ 'is-invalid': submitted && f.designation.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.designation.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.designation.errors.required\">Designation is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subModel\">Bio :</label>\r\n                                  <textarea  rows=\"2\" cols=\"80\" class=\"form-control\" type=\"text\" formControlName=\"bio\" [value]=\"iconTab.value.bio\" [ngClass]=\"{ 'is-invalid': submitted && f.bio.errors }\"></textarea>\r\n                                  <div *ngIf=\"submitted && f.bio.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.bio.errors.required\">Bio is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subModel\">Short Bio :</label>\r\n                                  <textarea  rows=\"2\" cols=\"80\" class=\"form-control\" type=\"text\" formControlName=\"shortBio\" [value]=\"iconTab.value.shortBio\" [ngClass]=\"{ 'is-invalid': submitted && f.shortBio.errors }\"></textarea>\r\n                                  <div *ngIf=\"submitted && f.shortBio.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.shortBio.errors.required\">Short Bio is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"clientName\">Specialties :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"specialties\" [value]=\"iconTab.value.specialties\" [ngClass]=\"{ 'is-invalid': submitted && f.specialties.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.specialties.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.specialties.errors.required\">Specialties is required</div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                <div class=\"photo-upload\">\r\n                            <p class=\"logo-text\">Upload Photos</p>\r\n                            <img class=\"profile-picture circle\" (click)=\"chooseFile()\" src=\"assets/images/add.png\" />\r\n                          </div>\r\n                            </div>\r\n                          <!-- <img class=\"profile-picture circle\" (click)=\"chooseFile()\" src=\"assets/images/add.png\" /> -->\r\n\r\n                          <form ngNoForm style=\"display:none\">\r\n                            <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\" />\r\n                          </form>\r\n                          <br />\r\n                          <br />\r\n                              </div>\r\n                              <div class='col-md-4'>\r\n\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"education\"> Education :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"education\" [value]=\"iconTab.value.education\" [ngClass]=\"{ 'is-invalid': submitted && f.education.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.education.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.education.errors.required\">Education is required</div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"language\"> Language :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"name\" [value]=\"iconTab.value.language\" [ngClass]=\"{ 'is-invalid': submitted && f.language.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.language.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.language.errors.required\">Language is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"address\">Address :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"address\" [value]=\"iconTab.value.address\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"/>\r\n                                  <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"city\">City :</label>\r\n                                  <input   class=\"form-control\" type=\"text\" formControlName=\"city\" [value]=\"iconTab.value.city\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\r\n                                  <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.city.errors.required\">City is required</div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"state\">State :</label>\r\n                                  <input  rows=\"2\" cols=\"80\" class=\"form-control\" type=\"text\" formControlName=\"state\" [value]=\"iconTab.value.state\" [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" />\r\n                                  <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.state.errors.required\">State is required</div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <div class='col-md-4'>\r\n\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subDate\">Facebook :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"facebook\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subDate\">Instagram :</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"instagram\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subDate\">Twitter:</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"twitter\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subDate\">Website:</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"website\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label class=\"form-control-label\" for=\"subDate\">Linked In:</label>\r\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"linkedIn\" />\r\n                                </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"column\" *ngFor='let url of imageList; let i of index'>\r\n                              <img [src]=\"url\" alt=\"Snow\" class=\"img-holder\" style=\"width:100%\">\r\n                              <button class=\"btn btn-outline-danger\" (click)=\"removeImage(i)\">Remove</button>\r\n                            </div>\r\n                          </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group text-center\">\r\n                              <button [disabled]=\"isLoading\" *ngIf=\"!isEdit\" uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"createMentor(iconTab.value)\">\r\n                              <i class=\"fa fa-refresh fa-spin\" *ngIf=\"isLoading\"></i>\r\n                              Submit\r\n                            </button>\r\n                            <button [disabled]=\"isLoading\" *ngIf=\"isEdit\" uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"updateMentors(iconTab.value)\">\r\n                            <i class=\"fa fa-refresh fa-spin\" *ngIf=\"isLoading\"></i>\r\n                            Update\r\n                          </button>\r\n                            </div>\r\n                            <button routerLink=\"/a/subscription/view-subscription\" class=\"btn btn-outline-secondary secondary add-btn\" style=\"float:'right';\">\r\n                              Close\r\n                            </button>\r\n                          </form>\r\n\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "JVDd":
/*!***************************************************!*\
  !*** ./src/app/content/mentors/mentors.module.ts ***!
  \***************************************************/
/*! exports provided: MentorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsModule", function() { return MentorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _new_mentors_new_mentors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-mentors/new-mentors.component */ "r7mu");
/* harmony import */ var _mentors_list_mentors_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentors-list/mentors-list.component */ "rnAR");
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


















var MentorsModule = /** @class */ (function () {
    function MentorsModule() {
    }
    MentorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_mentors_new_mentors_component__WEBPACK_IMPORTED_MODULE_5__["NewMentorsComponent"], _mentors_list_mentors_list_component__WEBPACK_IMPORTED_MODULE_6__["MentorsListComponent"]],
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
                        component: _mentors_list_mentors_list_component__WEBPACK_IMPORTED_MODULE_6__["MentorsListComponent"]
                    },
                    {
                        path: 'create',
                        component: _new_mentors_new_mentors_component__WEBPACK_IMPORTED_MODULE_5__["NewMentorsComponent"]
                    },
                    {
                        path: 'edit/:id',
                        component: _new_mentors_new_mentors_component__WEBPACK_IMPORTED_MODULE_5__["NewMentorsComponent"]
                    },
                ]),
            ]
        })
    ], MentorsModule);
    return MentorsModule;
}());



/***/ }),

/***/ "W+f4":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/mentors/mentors-list/mentors-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"simple-user-cards\" class=\"row\">\n        <table class=\"custom-ctr table table-striped table-bordered table-lg row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n            <tr>\n              <th>Sl</th>\n              <th>Name</th>\n              <th>Specialties</th>\n              <th>Bio</th>\n              <th>Created On</th>\n              <th>Action</th>\n              <th>Active/Pause</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let  mentor of mentorList; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ mentor.name }}</td>\n              <td>{{ mentor.specialties }}</td>\n              <td>{{ mentor.bio}}</td>\n              <!-- <td>{{ group.created_by ? group.created_by.displayName : '' }}</td> -->\n              <td>{{ mentor.created_on }}</td>\n              <td>\n                <button (click)=\"editMentor(mentor)\" class=\"btn btn-sm btn-outline-info\">\n                  Edit\n                </button>\n              </td>\n              <!-- <td>\n                <button disabled (click)=\"deleteMentor(mentor)\" class=\"btn btn-sm btn-outline-danger\">\n                  Delete\n                </button>\n              </td> -->\n              <td>\n                  <a class=\"nav-link modern-nav-toggle pr-0\" data-toggle=\"collapse\" (click)=\"toggleUser(mentor)\">\n                    <i class=\"feather toggle-icon font-large-1 primary\" [ngClass]=\"{'ft-toggle-left': !mentor.isActive, 'ft-toggle-right': mentor.isActive}\"></i>\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </section>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "X+5S":
/*!*************************************************************************!*\
  !*** ./src/app/content/mentors/mentors-list/mentors-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .btn.btn-social-icon {\r\n    padding: unset !important;\r\n}\r\n:host ::ng-deep .custom-ctr {\r\n  background: white;\r\n\r\npadding: 5px;\r\n\r\n}\r\n:host ::ng-deep .add-btn {\r\n  float: right;\r\n  margin-top: -5%;\r\n  position: relative;\r\n}\r\n.txt-capitalize {\r\n  text-transform:capitalize;\r\n}\r\n.error {\r\n      font-size:10px;\r\n      color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5CLFlBQVk7O0FBRVo7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtNQUNNLGNBQWM7TUFDZCxTQUFTO0FBQ2YiLCJmaWxlIjoibWVudG9ycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJ0bi5idG4tc29jaWFsLWljb24ge1xyXG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1jdHIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxucGFkZGluZzogNXB4O1xyXG5cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmFkZC1idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udHh0LWNhcGl0YWxpemUge1xyXG4gIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICBjb2xvcjpyZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nLMN":
/*!***********************************************************************!*\
  !*** ./src/app/content/mentors/new-mentors/new-mentors.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".photo-upload {\r\n      /* background-color: lightgrey; */\r\n      width: 150px;\r\n      border: 3px solid ;\r\n      padding: 50px;\r\n      margin: 20px;\r\n      height: 150px;\r\n      cursor: pointer;\r\n}\r\nimg.profile-picture.circle {\r\n  margin:25px 0 0 -10px;\r\n  width: 60px !important;\r\n  height: 60px !important;\r\n}\r\n.logo-text {\r\n    width: 100px;\r\n    margin: -30px 0 0 -20px;\r\n    color: hsl(0deg 0% 0%);\r\n}\r\n.img-holder {\r\n  height: 150px;\r\n  width: 150px;\r\n  margin-top: 20px;\r\n  margin-right: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n:host ::ng-deep .custom-ctr {\r\n  background: white;\r\n  padding: 15px;\r\n  border: 1px solid gainsboro;\r\n  padding-top: 30px;\r\n  /* margin-left: 20px */\r\n}\r\ninput[type=date]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\ninput[type=date]::-webkit-calendar-picker-indicator {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\n.txt-hdr {\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  padding-left: 10px;\r\n}\r\n.scrollable-table {\r\n  overflow-x: auto;\r\n}\r\n.alert {\r\n  padding: 15px !important;\r\n}\r\n.alert-warning {\r\n  color: #856404 !important;\r\n  background-color: #fff3cd !important;\r\n  border-color: #ffeeba !important;\r\n}\r\n.tab-content .tab-pane {\r\n  padding-top: 20px;\r\n}\r\n.form-check-inline {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding-left: 0;\r\n  margin-right: 1.75rem;\r\n  margin-left: 10px;\r\n}\r\ntable {\r\n  size: fixed;\r\n  color: #2b335e;\r\n  /* margin-left: -320px; */\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  /* width: 50px; */\r\n}\r\na:hover {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\na {\r\n  color: blue;\r\n}\r\ncontrol[readonly][_ngcontent-fpe-c203] {\r\n  background-color: #ECEFF1;\r\n  width: 100px;\r\n}\r\n.form-control[readonly][_ngcontent-atn-c203] {\r\n  background-color: #ECEFF1;\r\n  width: -webkit-fill-available;\r\n}\r\n.custom-control-label {\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  vertical-align: top;\r\n  margin-left: 45px;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\n.mat-radio-button~.mat-radio-button {\r\n  margin-left: 16px;\r\n}\r\n/* .col-md-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 33%;\r\n} */\r\n.alert {\r\n  padding: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.form-control.is-invalid {\r\n  border-color: #cacfe7;\r\n  background-image: none !important;\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n:host ::ng-deep .wizard-steps.vertical {\r\n  width: 90%;\r\n}\r\n:host ::ng-deep .vertical .large-filled-symbols {\r\n  width: 10;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .wizard-steps.vertical {\r\n    width: 80% !important;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .vertical .large-filled-symbols {\r\n    width: 20% !important;\r\n  }\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li:after {\r\n  color: #999;\r\n  font-size: 19px;\r\n  text-align: center;\r\n  border: 5px solid #f4f5fa;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.editing:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.editing1:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.current:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep.horizontal.large-filled-symbols ul.steps-indicator li.done:after {\r\n  color: #fff;\r\n  border: 5px solid #666ee8;\r\n  background-color: #666ee8;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #e6e6e6;\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.done:before {\r\n  background-color: #666ee8;\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #f4f5fa;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n  background-color: #666ee8;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:after {\r\n  color: #999;\r\n  font-size: 18px;\r\n  border: 5px solid #f4f5fa;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.editing:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.current:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:after {\r\n  color: #fff;\r\n  border: 5px solid #666ee8;\r\n  background-color: #666ee8;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #f4f5fa;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n  background-color: #666ee8;\r\n  height: 35px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.done.step:after {\r\n  background-color: #666ee8;\r\n  border-color: #666ee8;\r\n  color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal ul.steps-indicator li .step-indicator {\r\n  position: relative;\r\n  margin: 0px;\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n:host ::ng-deep .btn-light:not(:disabled):not(.disabled):active {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: #d3d9df !important;\r\n}\r\n:host ::ng-deep .btn-light:hover:not(.disabled):active {\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\n:host ::ng-deep .btn-light {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: unset !important;\r\n}\r\n:host ::ng-deep .bg-primary {\r\n  background-color: #007bff !important;\r\n}\r\n:host ::ng-deep .text-white {\r\n  color: #fff !important;\r\n}\r\n:host ::ng-deep .custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n:host ::ng-deep .custom-day:active {\r\n  color: #6d7183 !important;\r\n  background-color: #fff !important;\r\n  border-block-color: rgb(2, 117, 216) !important;\r\n}\r\n.bg-light {\r\n  background-color: #f8f9fa !important;\r\n}\r\n:host ::ng-deep .hidden {\r\n  display: block !important;\r\n}\r\n.ngb-dp-weekday {\r\n  color: #17a2b8;\r\n}\r\n.ngb-dp-week-number,\r\n.ngb-dp-weekday {\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n.ngb-datepicker-month-view {\r\n  pointer-events: auto;\r\n}\r\n.small {\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n}\r\n.ngb-dp-day {\r\n  cursor: pointer !important;\r\n}\r\n.ngb-dp-month {\r\n  pointer-events: none;\r\n}\r\n.btn-light:hover {\r\n  color: #212529 !important;\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\nh5 {\r\n  color: #6B6F82;\r\n  line-height: 14px;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  transition: .25s;\r\n  cursor: pointer;\r\n}\r\n.ngb-datepicker-month-view {\r\n  pointer-events: auto;\r\n}\r\n.ngb-dp-header {\r\n  border-bottom: 0;\r\n  border-radius: 0.25rem 0.25rem 0 0;\r\n  padding-top: 0.25rem;\r\n}\r\n.ngb-dp-day,\r\n.ngb-dp-week-number,\r\n.ngb-dp-weekday {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n.custom-day.focused {\r\n  background-color: #e6e6e6;\r\n}\r\n.custom-day.range,\r\n.custom-day:hover {\r\n  background-color: rgb(2, 117, 216);\r\n  color: white;\r\n}\r\n.custom-day.faded {\r\n  background-color: rgba(2, 117, 216, 0.5);\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tZW50b3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxpQ0FBaUM7TUFDakMsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWTtNQUNaLGFBQWE7TUFDYixlQUFlO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7OztHQUdHO0FBRUg7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGO0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsb0JBQW9CO0FBQ3RCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6Im5ldy1tZW50b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG8tdXBsb2FkIHtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OyAqL1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIDtcclxuICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW1nLnByb2ZpbGUtcGljdHVyZS5jaXJjbGUge1xyXG4gIG1hcmdpbjoyNXB4IDAgMCAtMTBweDtcclxuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogLTMwcHggMCAwIC0yMHB4O1xyXG4gICAgY29sb3I6IGhzbCgwZGVnIDAlIDAlKTtcclxufVxyXG4uaW1nLWhvbGRlciB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY3RyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMjBweCAqL1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnR4dC1oZHIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGUtdGFibGUge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxlcnQtd2FybmluZyB7XHJcbiAgY29sb3I6ICM4NTY0MDQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWItY29udGVudCAudGFiLXBhbmUge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMS43NXJlbTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHNpemU6IGZpeGVkO1xyXG4gIGNvbG9yOiAjMmIzMzVlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAtMzIwcHg7ICovXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogd2lkdGg6IDUwcHg7ICovXHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5jb250cm9sW3JlYWRvbmx5XVtfbmdjb250ZW50LWZwZS1jMjAzXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUZGMTtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2xbcmVhZG9ubHldW19uZ2NvbnRlbnQtYXRuLWMyMDNdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbn4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIC5jb2wtbWQtNiB7XHJcbiAgZmxleDogMCAwIDUwJTtcclxuICBtYXgtd2lkdGg6IDMzJTtcclxufSAqL1xyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2NhY2ZlNztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAud2l6YXJkLXN0ZXBzLnZlcnRpY2FsIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsIC5sYXJnZS1maWxsZWQtc3ltYm9scyB7XHJcbiAgd2lkdGg6IDEwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC53aXphcmQtc3RlcHMudmVydGljYWwge1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAudmVydGljYWwgLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y0ZjVmYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmc6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjNjY2ZWU4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmcxOmFmdGVyIHtcclxuICBjb2xvcjogIzY2NmVlODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50OmFmdGVyIHtcclxuICBjb2xvcjogIzY2NmVlODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmFmdGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgdG9wOiAtMjVweDtcclxuICBsZWZ0OiBjYWxjKDUwJSArIDI1cHgpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gIHRvcDogLTI1cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgKyAyNXB4KTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZmE7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOmFmdGVyIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y0ZjVmYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5lZGl0aW5nOmFmdGVyIHtcclxuICBjb2xvcjogIzY2NmVlODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuY3VycmVudDphZnRlciB7XHJcbiAgY29sb3I6ICM2NjZlZTg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzY2NmVlODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmFmdGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZhO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lLnN0ZXA6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY2ZWU4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwgdWwuc3RlcHMtaW5kaWNhdG9yIGxpIC5zdGVwLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xyXG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xyXG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuXHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uZ2ItZHAtZGF5IHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nYi1kcC1tb250aCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgY29sb3I6ICM2QjZGODI7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4yNXM7XHJcbiAgdHJhbnNpdGlvbjogLjI1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLm5nYi1kcC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcclxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLm5nYi1kcC1kYXksXHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkucmFuZ2UsXHJcbi5jdXN0b20tZGF5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "r7mu":
/*!**********************************************************************!*\
  !*** ./src/app/content/mentors/new-mentors/new-mentors.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewMentorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMentorsComponent", function() { return NewMentorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_mentors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-mentors.component.html */ "+zF9");
/* harmony import */ var _new_mentors_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-mentors.component.css */ "nLMN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/mentors/mentor.service */ "nGRl");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);













var NewMentorsComponent = /** @class */ (function () {
    function NewMentorsComponent(formBuilder, mentorsService, alertService, route, router) {
        this.formBuilder = formBuilder;
        this.mentorsService = mentorsService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.isLoading = false;
        this.isEdit = false;
        this.images = [];
        this.imageList = [];
        this.viewSubscriptionList = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        if (window.localStorage.getItem('currentUser')) {
            this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
        }
    }
    NewMentorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'Create Mentor',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'Mentor',
                    'isLink': false,
                    'link': '/mentors/create'
                },
            ]
        };
        this.iconTab = this.formBuilder.group({
            // corpID: ['', Validators.required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            shortBio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            specialties: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            facebook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instagram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            twitter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            linkedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            experinceHours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            achievement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        if (this.route.snapshot.params.id) {
            this.mentorsService.getMentorsById(this.route.snapshot.params.id)
                .then(function (res) {
                _this.isEdit = true;
                _this.mentorId = res.id;
                console.log('edit Mentor ', res);
                if (res && res.id) {
                    _this.iconTab.patchValue(res);
                }
            });
        }
    };
    Object.defineProperty(NewMentorsComponent.prototype, "f", {
        get: function () {
            return this.iconTab.controls;
        },
        enumerable: false,
        configurable: true
    });
    NewMentorsComponent.prototype.reloadIconTabs = function () {
        var _this = this;
        this.blockUIIconTabs.start('Loading..');
        setTimeout(function () {
            _this.blockUIIconTabs.stop();
        }, 2500);
    };
    NewMentorsComponent.prototype.cancel = function () {
        console.log("form submitted");
        console.log(this.iconTab.value);
        this.iconTab.reset();
    };
    NewMentorsComponent.prototype.chooseFile = function () {
        document.getElementById("avatar").click();
    };
    NewMentorsComponent.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_10__["storage"]().ref();
        for (var _i = 0, _a = [document.getElementById('avatar').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/mentors/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                snapshot.ref.getDownloadURL()
                    .then(function (url) {
                    _this.imageList = _this.iconTab.value.fileSource || [];
                    _this.imageList.push(url);
                    _this.iconTab.patchValue({
                        fileSource: _this.imageList
                    });
                    console.log('downloadURL ', url, _this.iconTab.value);
                });
            });
        }
    };
    NewMentorsComponent.prototype.removeImage = function (index) {
        this.imageList.splice(index, 1);
    };
    NewMentorsComponent.prototype.createMentor = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.iconTab.invalid) {
            this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
            return;
        }
        console.log("form submitted");
        console.log(this.iconTab.value);
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.iconTab.value), { 
            // tenantId: this.currOrganization.tenantId,
            // hotelId: this.currOrganization.id,
            // hotelData: this.currOrganization,
            createdBy: this.loggedInUser, createdOn: moment__WEBPACK_IMPORTED_MODULE_11__().format('DD-MM-YYYY hh:mm A'), createdAt: moment__WEBPACK_IMPORTED_MODULE_11__().format('x') });
        this.isLoading = true;
        this.mentorsService.addMentor(data)
            .then(function () {
            _this.isLoading = false;
            _this.alertService.showSuccess('Mentor added successfully !!');
            _this.iconTab.reset();
            _this.imageList = [];
            _this.router.navigate(['/mentor/list']);
        })
            .catch(function () {
            _this.isLoading = false;
        });
    };
    NewMentorsComponent.prototype.updateMentors = function () {
        var _this = this;
        this.isLoading = true;
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.iconTab.value), { id: this.mentorId, updatedBy: this.loggedInUser, updatedOn: moment__WEBPACK_IMPORTED_MODULE_11__().format('DD-MM-YYYY hh:mm A') });
        console.log('data ', data);
        this.mentorsService.updateMentor(data.id, data)
            .then(function () {
            _this.isLoading = false;
            _this.alertService.showSuccess('Mentor updated successfully !!');
            _this.router.navigate(['/mentor/list']);
        });
    };
    NewMentorsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])('iconTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NewMentorsComponent.prototype, "blockUIIconTabs", void 0);
    NewMentorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-new-mentors',
            template: _raw_loader_new_mentors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_new_mentors_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], NewMentorsComponent);
    return NewMentorsComponent;
}());



/***/ }),

/***/ "rnAR":
/*!************************************************************************!*\
  !*** ./src/app/content/mentors/mentors-list/mentors-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MentorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsListComponent", function() { return MentorsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mentors_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mentors-list.component.html */ "W+f4");
/* harmony import */ var _mentors_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mentors-list.component.css */ "X+5S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/mentors/mentor.service */ "nGRl");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);









var MentorsListComponent = /** @class */ (function () {
    function MentorsListComponent(mentorService, router, alertService) {
        this.mentorService = mentorService;
        this.router = router;
        this.alertService = alertService;
        this.mentor = {
            name: '',
            bio: '',
            facebook: '',
            website: '',
            twitter: '',
            instagram: '',
        };
    }
    MentorsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'Mentor List',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'List',
                    'isLink': false,
                },
            ]
        };
        this.mentorService.getAllMentors()
            .then(function (res) {
            console.log('mentorList ', res);
            _this.mentorList = res;
        });
    };
    MentorsListComponent.prototype.editMentor = function (data) {
        this.router.navigate(['/mentors/edit', data.id]);
    };
    MentorsListComponent.prototype.deleteMeetups = function (data) {
        console.log('delete ', data);
        this.mentorService.deleteMentorById(data.id);
    };
    MentorsListComponent.prototype.toggleUser = function (data) {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Do you want to ' + (!data.isActive ? 'Activate' : 'Deactivate') + ' the ?',
            showCancelButton: true,
            confirmButtonText: "Continue",
        })
            .then(function (result) {
            if (result.isConfirmed) {
                data.isActive = !data.isActive;
                _this.mentorService.updateMentor(data.id, data)
                    .then(function () {
                    var msg = data.isActive ? ' activated successfully !!' : ' deactivated successfully !!';
                    _this.alertService.showSuccess(msg);
                })
                    .catch(function () {
                    _this.alertService.showError('Error updating !!');
                });
            }
        });
    };
    MentorsListComponent.ctorParameters = function () { return [
        { type: _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    MentorsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mentors-list',
            template: _raw_loader_mentors_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_mentors_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], MentorsListComponent);
    return MentorsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-content-mentors-mentors-module.js.map