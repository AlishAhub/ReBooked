import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Home } from './pages/home/home';
import { BookDetails } from './pages/book-details/book-details';
import { BrowseBooks } from './pages/browse-books/browse-books';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'books', component: BrowseBooks },
  { path: 'book/:id', component: BookDetails }
];
