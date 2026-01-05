import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { BookList } from './books/book-list/book-list';
import { AddBook } from './books/add-book/add-book';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList },
  { path: 'add-book', component: AddBook },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup }
];
