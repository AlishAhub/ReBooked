import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BookCard } from '../../shared/book-card/book-card';

@Component({
  selector: 'app-browse-books',
  standalone:true,
  imports: [RouterLink,CommonModule,BookCard],
  templateUrl: './browse-books.html',
  styleUrl: './browse-books.css',
})
export class BrowseBooks {
  
  books = [
  {
    id: 1,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    image: 'assets/images/books/little_prince.png',
    condition: 'Good'
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    image: '',
    condition: 'New'
  },
  {
    id: 3,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    image: '',
    condition: 'Fair'
  },
  {
    id: 4,
    title: 'Harry Potter and the Philosopher’s Stone',
    author: 'J.K. Rowling',
    image: '',
    condition: 'Good'
  },
  {
    id: 5,
    title: 'Ikigai',
    author: 'Héctor García',
    image: '',
    condition: 'New'
  }
];
}
