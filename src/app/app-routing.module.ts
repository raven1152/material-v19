import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'account', component: ManageAccountComponent },
  { path: 'books', component: BookComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
