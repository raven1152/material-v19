import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/books.model';

export const selectBooksState = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectBookCollectionState = createFeatureSelector<ReadonlyArray<string>>('bookCollection');

export const selectBookCollection = createSelector(
  selectBooksState,
  selectBookCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
