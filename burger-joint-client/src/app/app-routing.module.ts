import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersFavoriteComponent } from './components/burgers-favorite/burgers-favorite.component';
import { BurgersListComponent } from './components/burgers-list/burgers-list.component';

const routes: Routes = [
  { path: '', component: BurgersListComponent },
  { path: 'favorite', component: BurgersFavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
