import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { FirestoreService } from './services/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  protected readonly title = signal('ReBooked');

  constructor(private firestoreService: FirestoreService) {} // <-- inject

  async ngOnInit() {
    try {
      await this.firestoreService.testConnection(); // <-- use service
      console.log('🔥 Firebase backend connected');
    } catch (error) {
      console.error('❌ Firebase connection failed', error);
    }
  }
}
