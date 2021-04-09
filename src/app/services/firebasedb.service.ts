import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {
  
  checkAllowedUsers(email: string) {
    throw new Error('Method not implemented.');
  }
  user: any;

  constructor(private firestore: AngularFirestore) { }

  getPractiques(): Observable<Practica[]> {
    return this.firestore.collection<Practica>("practiques").valueChanges({idField: 'id'});
  }

  esborraDetalls(id: string) {
    this.firestore.collection<Practica>("practiques").doc(id).delete();
  }

  afegirPractica(practica: Practica) {
    this.firestore.collection("practiques").add({
      tag: practica.tag,
      titol: practica.titol,
      dataexercici: practica.dataexercici,
      contingut: practica.contingut
    });
  }

  comprovarUser(email: string): Observable<any[]> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any) {
    return ref.where("email", "==", email);
  }

}
