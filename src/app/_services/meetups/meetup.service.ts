import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class MeetupService {


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

  // updateMeetups(uid: string, user: any) {
  //   user.timeStamp = moment().format('x')
  //   return this.afs.doc('meetups/' + uid).set(user);
  // }
  updateMeetups(uid: string, data: any) {
  data.timeStamp = moment().format('x')
  return this.afs.doc('meetups/' + data.id).set(data);
}

  addMeetups(data: any) {
    data.timeStamp = moment().format('x')
    return firebase.firestore().collection('meetups').add(data);
  }

  deleteMeetupsById(id) {
  return this.afs.doc('meetups/' + id).delete();
}

  getAllMeetups() {
    return new Promise((resolve) => {
      this.firestore.collection('meetups').snapshotChanges()
        .subscribe(meetups => {
          let contactList = meetups.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getMeetupsById(id: any) {
    return new Promise((resolve) => {
      var docRef = this.firestore.collection("meetups").doc(id);

      docRef.ref.get().then(function(doc) {
        if (doc.exists) {
          let res = { ...doc.data()  as {} , id: doc.id }
          resolve(res)
        }
      }).catch(function(error) {
        resolve(null);
      });
    })
  }

  getMeetupsBId(meetupsId: any) {
    return new Promise((resolve) => {
      this.firestore.collection('meetups',
        ref => ref.where('meetupsId', '==', parseInt(meetupsId))).snapshotChanges()
        .subscribe(meetups => {
          let contactList = meetups.map(item => {
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
