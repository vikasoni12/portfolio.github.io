import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  saveFormData(data: { name: string; email: string; message: string }) {
    const formCollection = collection(this.firestore, 'formResponses');
    return addDoc(formCollection, data);
  }
}
