import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

 @Injectable({
   providedIn: 'root'
 })
export class UsuarioServiceService {

  collectionName = "users"

  constructor(private firestore: AngularFirestore) {

  }

  getUsers(): any{
    return this.firestore.collection(this.collectionName, ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  createUsers(users: any): any{
    this.firestore.collection(this.collectionName).add(users);
  }

  deleteUser(id: any): any{
    this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
