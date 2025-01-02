import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooksState } from '../+state/books.selectors';
import { BooksActions, BooksApiActions } from '../+state/books.actions';
import { GoogleBooksService } from '../services/books.service';
import { Book } from '../models/books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  books$: Observable<readonly Book[]>;
  bookCollection$: Observable<Book[]>;

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {
    this.books$ = this.store.select(selectBooksState);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
