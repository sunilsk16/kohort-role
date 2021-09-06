import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class MentorService {

  ref = firebase.firestore().collection('users');

  constructor(
    private firestore: AngularFirestore,
    public afs: AngularFirestore,
    private httpService: HttpClient
  ) {
  }

  generateUniqNumber(length?: any) {
    var length = length || 8,
      charset = "0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  // updateMentor(uid: string, user: any) {
  //   user.timeStamp = moment().format('x')
  //   return this.afs.doc('mentors/' + uid).set(user);
  // }
  updateMentor(uid: string, data: any) {
    data.timeStamp = moment().format('x')
    return this.afs.doc('mentors/' + data.id).set(data);
  }

  addMentor(data: any) {
    data.timeStamp = moment().format('x')
    return firebase.firestore().collection('mentors').add(data);
  }

  deleteMentorById(id) {
    return this.afs.doc('mentors/' + id).delete();
  }

  getAllMentors() {
    return new Promise((resolve) => {
      this.firestore.collection('mentors').snapshotChanges()
        .subscribe(mentors => {
          let contactList = mentors.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getMentorsById(id: any) {
    return new Promise((resolve) => {
      var docRef = this.firestore.collection("mentors").doc(id);

      docRef.ref.get().then(function(doc) {
        if (doc.exists) {
          let res = { ...doc.data() as {}, id: doc.id }
          resolve(res)
        }
      }).catch(function(error) {
        resolve(null);
      });
    })
  }

  getMentorsBId(mentorId: any) {
    return new Promise((resolve) => {
      this.firestore.collection('mentors',
        ref => ref.where('mentorId', '==', parseInt(mentorId))).snapshotChanges()
        .subscribe(mentors => {
          let contactList = mentors.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  addTestiMonial(data: any) {
    data.timeStamp = moment().format('x')
    return firebase.firestore().collection('testimonial').add(data);
  }

  updateTestiMonial(uid: string, data: any) {
    data.timeStamp = moment().format('x')
    return this.afs.doc('testimonial/' + data.id).set(data);
  }

  deleteTestiMonialById(id) {
    return this.afs.doc('testimonial/' + id).delete();
  }

  getAllTestiMonial() {
    return new Promise((resolve) => {
      this.firestore.collection('testimonial').snapshotChanges()
        .subscribe(testimonial => {
          let contactList = testimonial.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }
  getTestiMonialById(id: any) {
    return new Promise((resolve) => {
      var docRef = this.firestore.collection("testimonial").doc(id);

      docRef.ref.get().then(function(doc) {
        if (doc.exists) {
          let res = { ...doc.data() as {}, id: doc.id }
          resolve(res)
        }
      }).catch(function(error) {
        resolve(null);
      });
    })
  }

  getTestiMonialBId(testimonialId: any) {
    return new Promise((resolve) => {
      this.firestore.collection('testimonial',
        ref => ref.where('testimonialId', '==', parseInt(testimonialId))).snapshotChanges()
        .subscribe(testimonial => {
          let contactList = testimonial.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  createCoupons(data: any) {
    data.timeStamp = moment().format('x')
    return firebase.firestore().collection('coupons').add(data);
  }

  updateCoupons(uid: string, data: any) {
    data.timeStamp = moment().format('x')
    return this.afs.doc('coupons/' + data.id).set(data);
  }

  deleteCouponsById(id) {
    return this.afs.doc('coupons/' + id).delete();
  }

  getAllCoupons() {
    return new Promise((resolve) => {
      this.firestore.collection('coupons').snapshotChanges()
        .subscribe(coupons => {
          let contactList = coupons.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getCouponsById(id: any) {
    return new Promise((resolve) => {
      var docRef = this.firestore.collection("coupons").doc(id);

      docRef.ref.get().then(function(doc) {
        if (doc.exists) {
          let res = { ...doc.data() as {}, id: doc.id }
          resolve(res)
        }
      }).catch(function(error) {
        resolve(null);
      });
    })
  }

  getCouponsBId(couponsId: any) {
    return new Promise((resolve) => {
      this.firestore.collection('coupons',
        ref => ref.where('couponsId', '==', parseInt(couponsId))).snapshotChanges()
        .subscribe(coupons => {
          let contactList = coupons.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }


    addCommunitie(data: any) {
      data.timeStamp = moment().format('x')
      return firebase.firestore().collection('communitie').add(data);
    }

    updateCommunitie(uid: string, data: any) {
      data.timeStamp = moment().format('x')
      return this.afs.doc('communitie/' + data.id).set(data);
    }

    deleteCommunitieById(id) {
      return this.afs.doc('communitie/' + id).delete();
    }

    getAllCommunitie() {
      return new Promise((resolve) => {
        this.firestore.collection('communitie').snapshotChanges()
          .subscribe(communitie => {
            let contactList = communitie.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }
    getCommunitieById(id: any) {
      return new Promise((resolve) => {
        var docRef = this.firestore.collection("communitie").doc(id);

        docRef.ref.get().then(function(doc) {
          if (doc.exists) {
            let res = { ...doc.data() as {}, id: doc.id }
            resolve(res)
          }
        }).catch(function(error) {
          resolve(null);
        });
      })
    }

    getCommunitieBId(communitieId: any) {
      return new Promise((resolve) => {
        this.firestore.collection('communitie',
          ref => ref.where('communitieId', '==', parseInt(communitieId))).snapshotChanges()
          .subscribe(communitie => {
            let contactList = communitie.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }

    addStudies(data: any) {
      data.timeStamp = moment().format('x')
      return firebase.firestore().collection('studies').add(data);
    }

    updateStudies(uid: string, data: any) {
      data.timeStamp = moment().format('x')
      return this.afs.doc('studies/' + data.id).set(data);
    }

    deleteStudiesById(id) {
      return this.afs.doc('studies/' + id).delete();
    }

    getAllStudies() {
      return new Promise((resolve) => {
        this.firestore.collection('studies').snapshotChanges()
          .subscribe(studies => {
            let contactList = studies.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }
    getStudiesById(id: any) {
      return new Promise((resolve) => {
        var docRef = this.firestore.collection("studies").doc(id);

        docRef.ref.get().then(function(doc) {
          if (doc.exists) {
            let res = { ...doc.data() as {}, id: doc.id }
            resolve(res)
          }
        }).catch(function(error) {
          resolve(null);
        });
      })
    }

    getStudiesBId(studiesId: any) {
      return new Promise((resolve) => {
        this.firestore.collection('studies',
          ref => ref.where('studiesId', '==', parseInt(studiesId))).snapshotChanges()
          .subscribe(communitie => {
            let contactList = communitie.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }

    addLanguage(data: any) {
      data.timeStamp = moment().format('x')
      return firebase.firestore().collection('language').add(data);
    }

    updateLanguage	(uid: string, data: any) {
      data.timeStamp = moment().format('x')
      return this.afs.doc('language/' + data.id).set(data);
    }

    deleteLanguageById(id) {
      return this.afs.doc('language/' + id).delete();
    }

    getAllLanguage() {
      return new Promise((resolve) => {
        this.firestore.collection('language').snapshotChanges()
          .subscribe(language => {
            let contactList = language.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }
    getLanguageById(id: any) {
      return new Promise((resolve) => {
        var docRef = this.firestore.collection("language").doc(id);

        docRef.ref.get().then(function(doc) {
          if (doc.exists) {
            let res = { ...doc.data() as {}, id: doc.id }
            resolve(res)
          }
        }).catch(function(error) {
          resolve(null);
        });
      })
    }

    getLanguageBId(languageId: any) {
      return new Promise((resolve) => {
        this.firestore.collection('language',
          ref => ref.where('languageId', '==', parseInt(languageId))).snapshotChanges()
          .subscribe(language => {
            let contactList = language.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }

    addReview(data: any) {
      data.timeStamp = moment().format('x')
      return firebase.firestore().collection('reviews').add(data);
    }

    updateReview(uid: string, data: any) {
      data.timeStamp = moment().format('x')
      return this.afs.doc('reviews/' + data.id).set(data);
    }

    deleteReviewById(id) {
      return this.afs.doc('reviews/' + id).delete();
    }

    getAllReview() {
      return new Promise((resolve) => {
        this.firestore.collection('reviews').snapshotChanges()
          .subscribe(reviews => {
            let contactList = reviews.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }
    getReviewById(id: any) {
      return new Promise((resolve) => {
        var docRef = this.firestore.collection("reviews").doc(id);

        docRef.ref.get().then(function(doc) {
          if (doc.exists) {
            let res = { ...doc.data() as {}, id: doc.id }
            resolve(res)
          }
        }).catch(function(error) {
          resolve(null);
        });
      })
    }

    getReviewBId(reviewsId: any) {
      return new Promise((resolve) => {
        this.firestore.collection('reviews',
          ref => ref.where('reviewsId', '==', parseInt(reviewsId))).snapshotChanges()
          .subscribe(reviews => {
            let contactList = reviews.map(item => {
              return {
                ...item.payload.doc.data() as {},
                id: item.payload.doc.id
              };
            });
            resolve(contactList);
          })
      })
    }


}
