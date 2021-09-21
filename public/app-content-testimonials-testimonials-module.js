(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-testimonials-testimonials-module"],{

/***/ "0OMK":
/*!*************************************************************************************!*\
  !*** ./src/app/content/testimonials/testimonial-list/testimonial-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TestimonialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialListComponent", function() { return TestimonialListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_testimonial_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./testimonial-list.component.html */ "soLL");
/* harmony import */ var _testimonial_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-list.component.css */ "yHgY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/mentors/mentor.service */ "nGRl");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);










var TestimonialListComponent = /** @class */ (function () {
    function TestimonialListComponent(mentorService, router, alertService) {
        this.mentorService = mentorService;
        this.router = router;
        this.alertService = alertService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.testMonial = {
            name: '',
            bio: '',
            specialties: '',
        };
    }
    TestimonialListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            processing: true, order: [],
        };
        this.breadcrumb = {
            'mainlabel': 'Testimonial List',
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
        this.mentorService.getAllTestiMonial()
            .then(function (res) {
            console.log('TestiMonial ', res);
            _this.testiMonialList = res;
        });
    };
    TestimonialListComponent.prototype.editTestMonial = function (data) {
        console.log('edit ', data);
        this.router.navigate(['/testimonial/edit', data.id]);
    };
    TestimonialListComponent.prototype.deleteTestMonial = function (data) {
        console.log('delete ', data);
        this.mentorService.deleteTestiMonialById(data.id);
    };
    TestimonialListComponent.prototype.toggleUser = function (data) {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Do you want to ' + (!data.isActive ? 'Activate' : 'Deactivate') + ' the ?',
            showCancelButton: true,
            confirmButtonText: "Continue",
        })
            .then(function (result) {
            if (result.isConfirmed) {
                data.isActive = !data.isActive;
                _this.mentorService.updateTestiMonial(data.id, data)
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
    TestimonialListComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TestimonialListComponent.ctorParameters = function () { return [
        { type: _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_8__["MentorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    TestimonialListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-testimonial-list',
            template: _raw_loader_testimonial_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_testimonial_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_8__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], TestimonialListComponent);
    return TestimonialListComponent;
}());



/***/ }),

/***/ "InJp":
/*!***********************************************************************************!*\
  !*** ./src/app/content/testimonials/new-testimonial/new-testimonial.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewTestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTestimonialComponent", function() { return NewTestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_testimonial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-testimonial.component.html */ "vf0C");
/* harmony import */ var _new_testimonial_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-testimonial.component.css */ "ebeE");
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













var NewTestimonialComponent = /** @class */ (function () {
    function NewTestimonialComponent(formBuilder, mentorsService, alertService, route, router) {
        this.formBuilder = formBuilder;
        this.mentorsService = mentorsService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
        this.isEdit = false;
        this.images = [];
        this.imageList = [];
        this.viewSubscriptionList = [];
        this.mentorList = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.submitted = false;
        if (window.localStorage.getItem('currentUser')) {
            this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
        }
    }
    NewTestimonialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'Create Testimonial',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard'
                },
                {
                    'name': 'Testimonials',
                    'isLink': false,
                },
            ]
        };
        this.iconTab = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            specialties: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mentor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        if (this.route.snapshot.params.id) {
            this.mentorsService.getTestiMonialById(this.route.snapshot.params.id)
                .then(function (res) {
                _this.isEdit = true;
                _this.monialId = res.id;
                _this.imageList = res.fileSource || [];
                console.log("img", _this.imageList);
                console.log('edit Mentor ', res);
                if (res && res.id) {
                    _this.iconTab.patchValue(res);
                }
            });
        }
        this.mentorsService.getAllMentors()
            .then(function (res) {
            console.log('mentorList ', res);
            _this.mentorList = res;
            // this.mentorLists =  mentorList.name || [];
            // console.log('mentorListnnnnnn ',   this.mentorList);
        });
    };
    Object.defineProperty(NewTestimonialComponent.prototype, "f", {
        get: function () {
            return this.iconTab.controls;
        },
        enumerable: false,
        configurable: true
    });
    NewTestimonialComponent.prototype.onDropdownChange = function (e) {
        console.log(e); //you will get the id
        this.mentorId = e; //if you want to bind it to your model
    };
    NewTestimonialComponent.prototype.reloadIconTabs = function () {
        var _this = this;
        this.blockUIIconTabs.start('Loading..');
        setTimeout(function () {
            _this.blockUIIconTabs.stop();
        }, 2500);
    };
    NewTestimonialComponent.prototype.cancel = function () {
        console.log("form submitted");
        console.log(this.iconTab.value);
        this.iconTab.reset();
    };
    NewTestimonialComponent.prototype.chooseFile = function () {
        document.getElementById("avatar").click();
    };
    NewTestimonialComponent.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_10__["storage"]().ref();
        for (var _i = 0, _a = [document.getElementById('avatar').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/testimonial/' + Date.now() + ("" + selectedFile.name);
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
    NewTestimonialComponent.prototype.removeImage = function (index) {
        this.imageList.splice(index, 1);
    };
    NewTestimonialComponent.prototype.createMonial = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.iconTab.invalid) {
            this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
            return;
        }
        console.log("form submitted");
        console.log(this.iconTab.value);
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.iconTab.value), { mentorId: this.mentorId, createdBy: this.loggedInUser, createdOn: moment__WEBPACK_IMPORTED_MODULE_11__().format('DD-MM-YYYY hh:mm A'), createdAt: moment__WEBPACK_IMPORTED_MODULE_11__().format('x') });
        this.isLoading = true;
        this.mentorsService.addTestiMonial(data)
            .then(function () {
            _this.isLoading = false;
            _this.alertService.showSuccess(' added successfully !!');
            _this.iconTab.reset();
            _this.imageList = [];
            _this.router.navigate(['/testimonial/list']);
        })
            .catch(function () {
            _this.isLoading = false;
        });
    };
    NewTestimonialComponent.prototype.updateTestiMonials = function () {
        var _this = this;
        this.isLoading = true;
        var data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.iconTab.value), { mentorId: this.mentorId, id: this.monialId, updatedBy: this.loggedInUser, updatedOn: moment__WEBPACK_IMPORTED_MODULE_11__().format('DD-MM-YYYY hh:mm A') });
        console.log('data ', data);
        this.mentorsService.updateTestiMonial(data.id, data)
            .then(function () {
            _this.isLoading = false;
            _this.alertService.showSuccess(' updated successfully !!');
            _this.router.navigate(['/testimonial/list']);
        });
    };
    NewTestimonialComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])('iconTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NewTestimonialComponent.prototype, "blockUIIconTabs", void 0);
    NewTestimonialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-new-testimonial',
            template: _raw_loader_new_testimonial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_new_testimonial_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_mentors_mentor_service__WEBPACK_IMPORTED_MODULE_7__["MentorService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], NewTestimonialComponent);
    return NewTestimonialComponent;
}());



/***/ }),

/***/ "LF97":
/*!*************************************************************!*\
  !*** ./src/app/content/testimonials/testimonials.module.ts ***!
  \*************************************************************/
/*! exports provided: TestimonialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsModule", function() { return TestimonialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _new_testimonial_new_testimonial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-testimonial/new-testimonial.component */ "InJp");
/* harmony import */ var _testimonial_list_testimonial_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial-list/testimonial-list.component */ "0OMK");
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


















var TestimonialsModule = /** @class */ (function () {
    function TestimonialsModule() {
    }
    TestimonialsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_testimonial_new_testimonial_component__WEBPACK_IMPORTED_MODULE_5__["NewTestimonialComponent"], _testimonial_list_testimonial_list_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialListComponent"]],
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
                        component: _testimonial_list_testimonial_list_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialListComponent"]
                    },
                    {
                        path: 'create',
                        component: _new_testimonial_new_testimonial_component__WEBPACK_IMPORTED_MODULE_5__["NewTestimonialComponent"]
                    },
                    {
                        path: 'edit/:id',
                        component: _new_testimonial_new_testimonial_component__WEBPACK_IMPORTED_MODULE_5__["NewTestimonialComponent"]
                    },
                ]),
            ]
        })
    ], TestimonialsModule);
    return TestimonialsModule;
}());



/***/ }),

/***/ "ebeE":
/*!************************************************************************************!*\
  !*** ./src/app/content/testimonials/new-testimonial/new-testimonial.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".photo-upload {\r\n      /* background-color: lightgrey; */\r\n      width: 150px;\r\n      border: 3px solid ;\r\n      padding: 50px;\r\n      margin: 20px;\r\n      height: 150px;\r\n      cursor: pointer;\r\n}\r\nimg.profile-picture.circle {\r\n  margin:25px 0 0 -10px;\r\n  width: 60px !important;\r\n  height: 60px !important;\r\n}\r\n.logo-text {\r\n    width: 100px;\r\n    margin: -30px 0 0 -20px;\r\n    color: hsl(0deg 0% 0%);\r\n}\r\n.img-holder {\r\n  height: 150px;\r\n  width: 150px;\r\n  margin-top: 20px;\r\n  margin-right: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n:host ::ng-deep .custom-ctr {\r\n  background: white;\r\n  padding: 15px;\r\n  border: 1px solid gainsboro;\r\n  padding-top: 30px;\r\n  /* margin-left: 20px */\r\n}\r\ninput[type=date]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\ninput[type=date]::-webkit-calendar-picker-indicator {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\n.txt-hdr {\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  padding-left: 10px;\r\n}\r\n.scrollable-table {\r\n  overflow-x: auto;\r\n}\r\n.alert {\r\n  padding: 15px !important;\r\n}\r\n.alert-warning {\r\n  color: #856404 !important;\r\n  background-color: #fff3cd !important;\r\n  border-color: #ffeeba !important;\r\n}\r\n.tab-content .tab-pane {\r\n  padding-top: 20px;\r\n}\r\n.form-check-inline {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding-left: 0;\r\n  margin-right: 1.75rem;\r\n  margin-left: 10px;\r\n}\r\ntable {\r\n  size: fixed;\r\n  color: #2b335e;\r\n  /* margin-left: -320px; */\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  /* width: 50px; */\r\n}\r\na:hover {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\na {\r\n  color: blue;\r\n}\r\ncontrol[readonly][_ngcontent-fpe-c203] {\r\n  background-color: #ECEFF1;\r\n  width: 100px;\r\n}\r\n.form-control[readonly][_ngcontent-atn-c203] {\r\n  background-color: #ECEFF1;\r\n  width: -webkit-fill-available;\r\n}\r\n.custom-control-label {\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  vertical-align: top;\r\n  margin-left: 45px;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\n.mat-radio-button~.mat-radio-button {\r\n  margin-left: 16px;\r\n}\r\n/* .col-md-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 33%;\r\n} */\r\n.alert {\r\n  padding: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.form-control.is-invalid {\r\n  border-color: #cacfe7;\r\n  background-image: none !important;\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n:host ::ng-deep .wizard-steps.vertical {\r\n  width: 90%;\r\n}\r\n:host ::ng-deep .vertical .large-filled-symbols {\r\n  width: 10;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .wizard-steps.vertical {\r\n    width: 80% !important;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .vertical .large-filled-symbols {\r\n    width: 20% !important;\r\n  }\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li:after {\r\n  color: #999;\r\n  font-size: 19px;\r\n  text-align: center;\r\n  border: 5px solid #f4f5fa;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.editing:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.editing1:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.current:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep.horizontal.large-filled-symbols ul.steps-indicator li.done:after {\r\n  color: #fff;\r\n  border: 5px solid #666ee8;\r\n  background-color: #666ee8;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #e6e6e6;\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.done:before {\r\n  background-color: #666ee8;\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #f4f5fa;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n  background-color: #666ee8;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:after {\r\n  color: #999;\r\n  font-size: 18px;\r\n  border: 5px solid #f4f5fa;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.editing:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.current:after {\r\n  color: #666ee8;\r\n  border: 5px solid #666ee8;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:after {\r\n  color: #fff;\r\n  border: 5px solid #666ee8;\r\n  background-color: #666ee8;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #f4f5fa;\r\n  height: 5px;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n  background-color: #666ee8;\r\n  height: 35px;\r\n}\r\n:host ::ng-deep .horizontal.large-filled-symbols ul.steps-indicator li.done.step:after {\r\n  background-color: #666ee8;\r\n  border-color: #666ee8;\r\n  color: #fff;\r\n  line-height: 40px;\r\n}\r\n:host ::ng-deep .horizontal ul.steps-indicator li .step-indicator {\r\n  position: relative;\r\n  margin: 0px;\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n:host ::ng-deep .btn-light:not(:disabled):not(.disabled):active {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: #d3d9df !important;\r\n}\r\n:host ::ng-deep .btn-light:hover:not(.disabled):active {\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\n:host ::ng-deep .btn-light {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: unset !important;\r\n}\r\n:host ::ng-deep .bg-primary {\r\n  background-color: #007bff !important;\r\n}\r\n:host ::ng-deep .text-white {\r\n  color: #fff !important;\r\n}\r\n:host ::ng-deep .custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n:host ::ng-deep .custom-day:active {\r\n  color: #6d7183 !important;\r\n  background-color: #fff !important;\r\n  border-block-color: rgb(2, 117, 216) !important;\r\n}\r\n.bg-light {\r\n  background-color: #f8f9fa !important;\r\n}\r\n:host ::ng-deep .hidden {\r\n  display: block !important;\r\n}\r\n.ngb-dp-weekday {\r\n  color: #17a2b8;\r\n}\r\n.ngb-dp-week-number,\r\n.ngb-dp-weekday {\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n.ngb-datepicker-month-view {\r\n  pointer-events: auto;\r\n}\r\n.small {\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n}\r\n.ngb-dp-day {\r\n  cursor: pointer !important;\r\n}\r\n.ngb-dp-month {\r\n  pointer-events: none;\r\n}\r\n.btn-light:hover {\r\n  color: #212529 !important;\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\nh5 {\r\n  color: #6B6F82;\r\n  line-height: 14px;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  transition: .25s;\r\n  cursor: pointer;\r\n}\r\n.ngb-datepicker-month-view {\r\n  pointer-events: auto;\r\n}\r\n.ngb-dp-header {\r\n  border-bottom: 0;\r\n  border-radius: 0.25rem 0.25rem 0 0;\r\n  padding-top: 0.25rem;\r\n}\r\n.ngb-dp-day,\r\n.ngb-dp-week-number,\r\n.ngb-dp-weekday {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n.custom-day.focused {\r\n  background-color: #e6e6e6;\r\n}\r\n.custom-day.range,\r\n.custom-day:hover {\r\n  background-color: rgb(2, 117, 216);\r\n  color: white;\r\n}\r\n.custom-day.faded {\r\n  background-color: rgba(2, 117, 216, 0.5);\r\n}\r\n:host ::ng-deep .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10ZXN0aW1vbmlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO01BQ00saUNBQWlDO01BQ2pDLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVk7TUFDWixhQUFhO01BQ2IsZUFBZTtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOzs7R0FHRztBQUVIO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLCtDQUErQztBQUNqRDtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG9CQUFvQjtBQUN0QjtBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkO0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJuZXctdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by11cGxvYWQge1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7ICovXHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgO1xyXG4gICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbWcucHJvZmlsZS1waWN0dXJlLmNpcmNsZSB7XHJcbiAgbWFyZ2luOjI1cHggMCAwIC0xMHB4O1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAtMzBweCAwIDAgLTIwcHg7XHJcbiAgICBjb2xvcjogaHNsKDBkZWcgMCUgMCUpO1xyXG59XHJcbi5pbWctaG9sZGVyIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1jdHIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAyMHB4ICovXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udHh0LWhkciB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS10YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGVydC13YXJuaW5nIHtcclxuICBjb2xvcjogIzg1NjQwNCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2QgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNmZmVlYmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50IC50YWItcGFuZSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjc1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgc2l6ZTogZml4ZWQ7XHJcbiAgY29sb3I6ICMyYjMzNWU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IC0zMjBweDsgKi9cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiB3aWR0aDogNTBweDsgKi9cclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmNvbnRyb2xbcmVhZG9ubHldW19uZ2NvbnRlbnQtZnBlLWMyMDNdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbFtyZWFkb25seV1bX25nY29udGVudC1hdG4tYzIwM10ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9ufi5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLyogLmNvbC1tZC02IHtcclxuICBmbGV4OiAwIDAgNTAlO1xyXG4gIG1heC13aWR0aDogMzMlO1xyXG59ICovXHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2FjZmU3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC53aXphcmQtc3RlcHMudmVydGljYWwge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwgLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHtcclxuICB3aWR0aDogMTA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLndpemFyZC1zdGVwcy52ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC52ZXJ0aWNhbCAubGFyZ2UtZmlsbGVkLXN5bWJvbHMge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTphZnRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjRmNWZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZzphZnRlciB7XHJcbiAgY29sb3I6ICM2NjZlZTg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZzE6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjNjY2ZWU4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQ6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjNjY2ZWU4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlICsgMjVweCk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgdG9wOiAtMjVweDtcclxuICBsZWZ0OiBjYWxjKDUwJSArIDI1cHgpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmYTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuICBoZWlnaHQ6IDVweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjRmNWZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmc6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjNjY2ZWU4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50OmFmdGVyIHtcclxuICBjb2xvcjogIzY2NmVlODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2ZWU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZlZTg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZmE7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmUuc3RlcDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuICBib3JkZXItY29sb3I6ICM2NjZlZTg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XHJcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICBjb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLm5nYi1kcC13ZWVrLW51bWJlcixcclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5nYi1kcC1kYXkge1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmdiLWRwLW1vbnRoIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmg1IHtcclxuICBjb2xvcjogIzZCNkY4MjtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cztcclxuICB0cmFuc2l0aW9uOiAuMjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4ubmdiLWRwLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xyXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubmdiLWRwLWRheSxcclxuLm5nYi1kcC13ZWVrLW51bWJlcixcclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5yYW5nZSxcclxuLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "soLL":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/testimonials/testimonial-list/testimonial-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <app-breadcrumb class=\"col-12\" [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n    </div>\n    <div class=\"content-body\">\n      <section id=\"simple-user-cards\" class=\"row\">\n        <table class=\"custom-ctr table table-striped table-bordered table-lg row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n          <thead>\n            <tr>\n              <th>Sl</th>\n              <th>Name</th>\n              <th>Specialties</th>\n\n              <th>Action</th>\n              <th>Active/Pause</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let  monial of testiMonialList; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ monial.name }}</td>\n              <td>{{ monial.specialties }}</td>\n          \n              <!-- <td>{{ group.created_by ? group.created_by.displayName : '' }}</td> -->\n\n              <td>\n                <button (click)=\"editTestMonial(monial)\" class=\"btn btn-sm btn-outline-info\">\n                  Edit\n                </button>\n              </td>\n              <!-- <td>\n                <button disabled (click)=\"deleteMentor(mentor)\" class=\"btn btn-sm btn-outline-danger\">\n                  Delete\n                </button>\n              </td> -->\n              <td>\n                  <a class=\"nav-link modern-nav-toggle pr-0\" data-toggle=\"collapse\" (click)=\"toggleUser(monial)\">\n                    <i class=\"feather toggle-icon font-large-1 primary\" [ngClass]=\"{'ft-toggle-left': !monial.isActive, 'ft-toggle-right': monial.isActive}\"></i>\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </section>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "vf0C":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/testimonials/new-testimonial/new-testimonial.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-content content\">\n  <div class=\"content-wrapper\">\n    <div class=\"content-header row mb-1\">\n      <div class=\"col-12\">\n        <app-breadcrumb [breadcrumb]=\"breadcrumb\"></app-breadcrumb>\n      </div>\n    </div>\n\n    <div class=\"content-body\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <section id=\"icon-tabs\">\n            <div class=\"row\">\n              <div class=\"col-12\" *blockUI=\"'iconTabs'; message: 'Loading'\">\n\n                          <form [formGroup]=\"iconTab\" >\n                            <div class=\"row\">\n                              <div class='col-md-6'>\n                                <!-- <h2>Basic Details</h2> -->\n                                <!-- <div class=\"form-group\">\n                                  <label class=\"form-control-label\" for=\"corpID\">Mentor ID :</label>\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"corpID\" />\n\n                                </div> -->\n                                <div class=\"form-group\">\n                                  <label class=\"form-control-label\" for=\"clientName\">Name :</label>\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"name\" [value]=\"iconTab.value.name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"/>\n                                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.name.errors.required\"> Name is required</div>\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"form-control-label\" for=\"clietType\">Specialties :</label>\n                                  <input class=\"form-control\" type=\"text\" formControlName=\"specialties\" [ngClass]=\"{ 'is-invalid': submitted && f.specialties.errors }\" />\n                                  <div *ngIf=\"submitted && f.specialties.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.specialties.errors.required\">Specialties is required</div>\n                                  </div>\n                                </div>\n\n\n\n                            <div class=\"row\">\n                              <div class=\"form-group\">\n                              <div class=\"photo-upload\">\n                          <p class=\"logo-text\">Upload Photos</p>\n                          <img class=\"profile-picture circle\" (click)=\"chooseFile()\" src=\"assets/images/add.png\" />\n                        </div>\n                        <form ngNoForm style=\"display:none\">\n                          <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\" />\n                        </form>\n                        <br />\n                        <br />\n                          </div>\n                              <div class=\"col-md-4\">\n                              <div class=\"column\" *ngFor='let url of imageList; let i of index'>\n                                <img [src]=\"url\" alt=\"Snow\" class=\"img-holder\" style=\"width:100%\">\n                                <button class=\"btn btn-outline-danger\" (click)=\"removeImage(i)\">Remove</button>\n                              </div>\n                              </div>\n                            </div>\n                          <!-- <img class=\"profile-picture circle\" (click)=\"chooseFile()\" src=\"assets/images/add.png\" /> -->\n\n\n                              </div>\n                              <div class='col-md-6'>\n                                <div class=\"form-group\">\n                                  <label class=\"form-control-label\" for=\"clietType\">Mentor :</label>\n                                  <select class=\"form-control input-md\" [ngModel]=\"selectedValue\" (ngModelChange)=\"onDropdownChange($event)\" formControlName=\"mentor\" [ngClass]=\"{ 'is-invalid': submitted && f.mentor.errors }\" >\n                                    <option *ngFor=\"let mentor of mentorList\" [ngValue]=\"mentor.id\">{{mentor.name}}</option>\n                                  </select>\n                                  <div *ngIf=\"submitted && f.mentor.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.mentor.errors.required\">Mentor is required</div>\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label class=\"form-control-label\" for=\"subModel\">Bio :</label>\n                                  <textarea  rows=\"2\" cols=\"80\" class=\"form-control\" type=\"text\" formControlName=\"bio\" [ngClass]=\"{ 'is-invalid': submitted && f.bio.errors }\" ></textarea>\n                                  <div *ngIf=\"submitted && f.bio.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.bio.errors.required\">Bio is required</div>\n                                  </div>\n                                </div>\n\n                              </div>\n                            </div>\n                            <div class=\"form-group text-center\">\n                              <button [disabled]=\"isLoading\" *ngIf=\"!isEdit\" uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"createMonial(iconTab.value)\">\n                              <i class=\"fa fa-refresh fa-spin\" *ngIf=\"isLoading\"></i>\n                              Submit\n                            </button>\n                            <button [disabled]=\"isLoading\" *ngIf=\"isEdit\" uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"updateTestiMonials(iconTab.value)\">\n                            <i class=\"fa fa-refresh fa-spin\" *ngIf=\"isLoading\"></i>\n                            Update\n                          </button>\n                            </div>\n                            <button routerLink=\"/a/subscription/view-subscription\" class=\"btn btn-outline-secondary secondary add-btn\" style=\"float:'right';\">\n                              Close\n                            </button>\n                          </form>\n\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "yHgY":
/*!**************************************************************************************!*\
  !*** ./src/app/content/testimonials/testimonial-list/testimonial-list.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .btn.btn-social-icon {\r\n    padding: unset !important;\r\n}\r\n:host ::ng-deep .custom-ctr {\r\n  background: white;\r\n\r\npadding: 5px;\r\n\r\n}\r\n:host ::ng-deep .add-btn {\r\n  float: right;\r\n  margin-top: -5%;\r\n  position: relative;\r\n}\r\n.txt-capitalize {\r\n  text-transform:capitalize;\r\n}\r\n.error {\r\n      font-size:10px;\r\n      color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQixZQUFZOztBQUVaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7TUFDTSxjQUFjO01BQ2QsU0FBUztBQUNmIiwiZmlsZSI6InRlc3RpbW9uaWFsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYnRuLmJ0bi1zb2NpYWwtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWN0ciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG5wYWRkaW5nOiA1cHg7XHJcblxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuYWRkLWJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC01JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50eHQtY2FwaXRhbGl6ZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgIGNvbG9yOnJlZDtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=app-content-testimonials-testimonials-module.js.map