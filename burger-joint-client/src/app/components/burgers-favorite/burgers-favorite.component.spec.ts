import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersFavoriteComponent } from './burgers-favorite.component';

describe('BurgersFavoriteComponent', () => {
  let component: BurgersFavoriteComponent;
  let fixture: ComponentFixture<BurgersFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgersFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgersFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
