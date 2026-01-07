import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async testConnection() {
    return addDoc(collection(this.firestore, 'connection_test'), {
      connected: true,
      time: new Date()
    });
  }
}
