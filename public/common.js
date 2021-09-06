(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "UVTc":
/*!*****************************************************!*\
  !*** ./src/app/_services/meetups/meetup.service.ts ***!
  \*****************************************************/
/*! exports provided: MeetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetupService", function() { return MeetupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var MeetupService = /** @class */ (function () {
    function MeetupService(firestore, afs, httpService) {
        this.firestore = firestore;
        this.afs = afs;
        this.httpService = httpService;
        this.ref = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('users');
    }
    MeetupService.prototype.generateUniqNumber = function (length) {
        var length = length || 8, charset = "0123456789", retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    // updateMeetups(uid: string, user: any) {
    //   user.timeStamp = moment().format('x')
    //   return this.afs.doc('meetups/' + uid).set(user);
    // }
    MeetupService.prototype.updateMeetups = function (uid, data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return this.afs.doc('meetups/' + data.id).set(data);
    };
    MeetupService.prototype.addMeetups = function (data) {
        data.timeStamp = moment__WEBPACK_IMPORTED_MODULE_5__().format('x');
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('meetups').add(data);
    };
    MeetupService.prototype.deleteMeetupsById = function (id) {
        return this.afs.doc('meetups/' + id).delete();
    };
    MeetupService.prototype.getAllMeetups = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('meetups').snapshotChanges()
                .subscribe(function (meetups) {
                var contactList = meetups.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MeetupService.prototype.getMeetupsById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var docRef = _this.firestore.collection("meetups").doc(id);
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
    MeetupService.prototype.getMeetupsBId = function (meetupsId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.firestore.collection('meetups', function (ref) { return ref.where('meetupsId', '==', parseInt(meetupsId)); }).snapshotChanges()
                .subscribe(function (meetups) {
                var contactList = meetups.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                resolve(contactList);
            });
        });
    };
    MeetupService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    MeetupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MeetupService);
    return MeetupService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map