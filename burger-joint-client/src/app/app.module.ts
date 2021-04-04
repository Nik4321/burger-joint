import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerRandomDialogComponent } from './components/burger-random-dialog/burger-random-dialog.component';
import { BurgersFavoriteComponent } from './components/burgers-favorite/burgers-favorite.component';
import { BurgersListComponent } from './components/burgers-list/burgers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BurgersListComponent,
    BurgersFavoriteComponent,
    BurgerRandomDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
