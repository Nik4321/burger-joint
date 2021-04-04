import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Burger } from 'src/app/models/dtos/burger';

@Component({
  selector: 'app-burger-random-dialog',
  templateUrl: './burger-random-dialog.component.html',
  styleUrls: ['./burger-random-dialog.component.css']
})
export class BurgerRandomDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BurgerRandomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Burger
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
