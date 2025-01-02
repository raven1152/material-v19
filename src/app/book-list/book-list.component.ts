import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
