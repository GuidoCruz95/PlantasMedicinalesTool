import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

 @Injectable({
   providedIn: 'root'
 })
export class UsuarioServiceService {
  afAuth: any;
   updateUserData: any;

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

  
  async login(email: string, password: string): Promise<any> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
