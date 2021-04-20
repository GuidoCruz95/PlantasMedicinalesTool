import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private firestore: AngularFirestore) {

  }

  getUsers(): any{
    return this.firestore.collection('users').snapshotChanges();
  }

  createUsers(users: any): any{
    this.firestore.collection('users').add(users);
  }

  deleteUser(id: any): any{
    this.firestore.collection('users').doc(id).delete();
  }
}
