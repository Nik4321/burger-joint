import { Component, OnInit } from '@angular/core';
import { Burger } from 'src/app/models/dtos/burger';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-burgers-favorite',
  templateUrl: './burgers-favorite.component.html',
  styleUrls: ['./burgers-favorite.component.css']
})
export class BurgersFavoriteComponent implements OnInit {

  public favoriteBurgers: Array<Burger>;

  constructor(readonly configService: ConfigService) { }

  ngOnInit(): void {
    this.favoriteBurgers = this.configService.readLocalStorage(this.configService.burgerCacheKey);
  }

  removeBurgerFavorite(burgerId: number): void {
    this.favoriteBurgers = this.favoriteBurgers.filter(x => x.id !== burgerId);
    this.configService.writeLocalStorage(this.configService.burgerCacheKey, this.favoriteBurgers);
  }
}
