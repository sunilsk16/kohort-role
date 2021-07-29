import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ref = firebase.firestore().collection('users');
  private roleCollection: any;
  constructor(
    private firestore: AngularFirestore,
    public afs: AngularFirestore
  ) {
    this.roleCollection = this.afs.collection<any>('rolemanagement', ref => ref.orderBy('roleName'));
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  updateUser(uid: string, user: any) {
    return this.afs.doc('admins/' + uid).set(user);
  }

  getAllUsers() {
    return new Promise((resolve) => {
      this.firestore.collection('users').snapshotChanges()
        .subscribe(users => {
          let contactList = users.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getAllAdmins() {
    return new Promise((resolve) => {
      this.firestore.collection('admins').snapshotChanges()
        .subscribe(users => {
          let contactList = users.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getUserRole(roleValue: any) {
    return this.firestore.collection<any>('rolemanagement',
      ref => ref.where('roleValue', '==', parseInt(roleValue))).valueChanges();
  }

  getUserById(uid: any) {
    return new Promise((resolve) => {
      this.firestore.collection('admins',
        ref => ref.where('uid', '==', uid)).snapshotChanges()
        .subscribe(users => {
          let contactList = users.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getAllRoles() {
    return new Promise((resolve) => {
      this.firestore.collection('rolemanagement').snapshotChanges()
        .subscribe(users => {
          let contactList = users.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  getRoleById(roleValue: any) {
    return new Promise((resolve) => {
      this.firestore.collection('rolemanagement',
        ref => ref.where('roleValue', '==', parseInt(roleValue))).snapshotChanges()
        .subscribe(users => {
          let contactList = users.map(item => {
            return {
              ...item.payload.doc.data() as {},
              id: item.payload.doc.id
            };
          });
          resolve(contactList);
        })
    })
  }

  deleteRoleById(id) {
    return this.afs.doc('rolemanagement/' + id).delete();
  }

  getCurrentUser(userId): Observable<any> {
    return this.firestore.collection('users', ref => ref.where('uid', '==', userId)).snapshotChanges();
  }

  deleteUserById(id) {
    return this.afs.doc('admins/' + id).delete();
  }

  createUser(user) {
    return this.ref.add(user);
  }

  createRole(role: any) {
    return new Promise((resolve) => {
      if (role.id) {
        this.updateCurrRole(role)
          .then(() => {
            resolve();
          })
      } else {
        this.newRole(role)
          .then(() => {
            resolve();
          })
      }
    })
  }

  updateCurrRole(role: any) {
    return this.afs.doc<any>('rolemanagement/' + role.id).set(role);
  }

  newRole(role: any) {
    return this.roleCollection.add(role);
  }

}
