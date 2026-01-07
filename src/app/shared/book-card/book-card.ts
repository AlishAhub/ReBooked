import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css']
})
export class BookCard {

  @Input() bookId!: number;
  @Input() title!: string;
  @Input() author!: string;
  @Input() image!: string;
  @Input() condition!: string;

}
