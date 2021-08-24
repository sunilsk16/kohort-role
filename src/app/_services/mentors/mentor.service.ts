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

}
