import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  dataCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.dataCollection = firestore.collection<any>("plantas", ref => ref.orderBy('nombre', 'asc'));
  }

  getPlantas(): any {
    return this.dataCollection.valueChanges()
  }

  createPlantas(planta: any): any{
    return this.firestore.collection('plantas').add(planta);
  }
}
