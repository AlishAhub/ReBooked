import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private firestore: Firestore) {}

  addBook(book: any) {
    const bookRef = collection(this.firestore, 'books');
    return addDoc(bookRef, book);
  }

  getBooks(): Observable<any[]> {
    const bookRef = collection(this.firestore, 'books');
    return collectionData(bookRef, { idField: 'id' });
  }
}
