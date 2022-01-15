import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordlistComponent } from './wordlist/wordlist.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: WordlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
