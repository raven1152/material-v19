import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-book-collection',
  standalone: false,
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
