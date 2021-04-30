import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NuevoServicioPlantasService {

  constructor(private firestore: AngularFirestore) { }
  
  getPlantas(): any{
    return this.firestore.collection('plantas').snapshotChanges();
  }
}
