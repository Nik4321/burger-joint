import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerRandomDialogComponent } from './burger-random-dialog.component';

describe('BurgerRandomDialogComponent', () => {
  let component: BurgerRandomDialogComponent;
  let fixture: ComponentFixture<BurgerRandomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerRandomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerRandomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
