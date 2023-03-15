import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs:AngularFirestore) { }

  add() {
    this.afs.collection("/final").doc("1").set({rpm:120});
    }

  retrive(){
    return this.afs.collection("/final").valueChanges();
  }

}
