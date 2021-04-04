import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BurgerRandomDialogComponent } from './components/burger-random-dialog/burger-random-dialog.component';
import { Burger } from './models/dtos/burger';
import { BurgerService } from './services/burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly burgerService: BurgerService, private dialog: MatDialog) { }

  getRandomBurger(): void {
    this.burgerService.getRandomBurger().subscribe((burger: Burger) => {
      this.dialog.open(BurgerRandomDialogComponent, {
        width: '500px',
        height: '450px',
        data: burger
      });
    });
  }
}

