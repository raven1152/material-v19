import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { reducers as appReducers } from './+state/app.reducers';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';

import { reducers as countReducers } from './+state/count.reducers';
import { booksReducer } from './+state/books-api.reducers';
import { collectionReducer } from './+state/books-collection.reducers';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookComponent } from './book/book.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ManageAccountComponent,
    HomeComponent,
    BookListComponent,
    BookCollectionComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconButton,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    StoreModule.forRoot({
      ...appReducers,
      ...countReducers,
      books: booksReducer,
      bookCollection: collectionReducer,
    }),
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
