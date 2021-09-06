(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235"],{

/***/ "nGRl":
/*!*****************************************************!*\
  !*** ./src/app/_services/mentors/mentor.service.ts ***!
  \*****************************************************/
/*! exports provided: MentorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorService", function() { return MentorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var MentorService = /** @class */ (function () {
    function MentorService(firestore, afs, httpService) {
        this.firestore = firestore;
        this.afs = afs;
        this.httpService = httpService;
        this.ref = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('users');
    }
    MentorService.prototype.generateUniqNumber = function (length) {
        var length = length || 8, charset = "0123456789", retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    // updateMentor(uid: string, user: any) {
    //   user.timeStamp = moment().format('x')
    //   return this.afs.doc('mentors/' + uid).set(user);
    // }
    MentorService.prototype.updateMentor = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('mentors/' + data.id).set(data);
    };
    MentorService.prototype.addMentor = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('mentors').add(data);
    };
    MentorService.prototype.deleteMentorById = function (id) {
        return this.afs.doc('mentors/' + id).delete();
    };
    MentorService.prototype.getAllMentors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('mentors').snapshotChanges()
                .subscribe(function (mentors) {
                var contactList = mentors.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getMentorsById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("mentors").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getMentorsBId = function (mentorId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('mentors', function (ref) { return ref.where('mentorId', '==', parseInt(mentorId)); }).snapshotChanges()
                .subscribe(function (mentors) {
                var contactList = mentors.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.addTestiMonial = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('testimonial').add(data);
    };
    MentorService.prototype.updateTestiMonial = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('testimonial/' + data.id).set(data);
    };
    MentorService.prototype.deleteTestiMonialById = function (id) {
        return this.afs.doc('testimonial/' + id).delete();
    };
    MentorService.prototype.getAllTestiMonial = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('testimonial').snapshotChanges()
                .subscribe(function (testimonial) {
                var contactList = testimonial.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getTestiMonialById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("testimonial").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getTestiMonialBId = function (testimonialId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('testimonial', function (ref) { return ref.where('testimonialId', '==', parseInt(testimonialId)); }).snapshotChanges()
                .subscribe(function (testimonial) {
                var contactList = testimonial.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.createCoupons = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('coupons').add(data);
    };
    MentorService.prototype.updateCoupons = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('coupons/' + data.id).set(data);
    };
    MentorService.prototype.deleteCouponsById = function (id) {
        return this.afs.doc('coupons/' + id).delete();
    };
    MentorService.prototype.getAllCoupons = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('coupons').snapshotChanges()
                .subscribe(function (coupons) {
                var contactList = coupons.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getCouponsById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("coupons").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getCouponsBId = function (couponsId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('coupons', function (ref) { return ref.where('couponsId', '==', parseInt(couponsId)); }).snapshotChanges()
                .subscribe(function (coupons) {
                var contactList = coupons.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.addCommunitie = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('communitie').add(data);
    };
    MentorService.prototype.updateCommunitie = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('communitie/' + data.id).set(data);
    };
    MentorService.prototype.deleteCommunitieById = function (id) {
        return this.afs.doc('communitie/' + id).delete();
    };
    MentorService.prototype.getAllCommunitie = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('communitie').snapshotChanges()
                .subscribe(function (communitie) {
                var contactList = communitie.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getCommunitieById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("communitie").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getCommunitieBId = function (communitieId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('communitie', function (ref) { return ref.where('communitieId', '==', parseInt(communitieId)); }).snapshotChanges()
                .subscribe(function (communitie) {
                var contactList = communitie.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.addStudies = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('studies').add(data);
    };
    MentorService.prototype.updateStudies = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('studies/' + data.id).set(data);
    };
    MentorService.prototype.deleteStudiesById = function (id) {
        return this.afs.doc('studies/' + id).delete();
    };
    MentorService.prototype.getAllStudies = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('studies').snapshotChanges()
                .subscribe(function (studies) {
                var contactList = studies.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getStudiesById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("studies").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getStudiesBId = function (studiesId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('studies', function (ref) { return ref.where('studiesId', '==', parseInt(studiesId)); }).snapshotChanges()
                .subscribe(function (communitie) {
                var contactList = communitie.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.addLanguage = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('language').add(data);
    };
    MentorService.prototype.updateLanguage = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('language/' + data.id).set(data);
    };
    MentorService.prototype.deleteLanguageById = function (id) {
        return this.afs.doc('language/' + id).delete();
    };
    MentorService.prototype.getAllLanguage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('language').snapshotChanges()
                .subscribe(function (language) {
                var contactList = language.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.prototype.getLanguageById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("language").doc(id);
            docRef.ref.get().then(function (doc) {
                if (doc.exists) {
                    var res = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, doc.data()), { id: doc.id });
                    resolve(res);
                }
            }).catch(function (error) {
                resolve(null);
            });
        });
    };
    MentorService.prototype.getLanguageBId = function (languageId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('language', function (ref) { return ref.where('languageId', '==', parseInt(languageId)); }).snapshotChanges()
                .subscribe(function (language) {
                var contactList = language.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MentorService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    MentorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MentorService);
    return MentorService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-content-communities-communities-module~app-content-coupons-coupons-module~app-content-la~0e0da235.js.map