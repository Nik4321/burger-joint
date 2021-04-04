import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Burger } from 'src/app/models/dtos/burger';
import { BurgerService } from 'src/app/services/burger.service';
import { ConfigService } from 'src/app/services/config.service';
import { PagedCollectionParams } from 'src/app/shared/paged-collection-params';
import { PagedCollection } from 'src/app/shared/paged-collection.interface';

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.css']
})
export class BurgersListComponent implements OnInit {

  public readonly paginatorPageSizeOptions: Array<number> = [5, 10, 25, 100];

  public burgerSearchInput: string = '';

  public burgersPagedCollection: PagedCollection<Burger>;
  public favoriteBurgers: Array<Burger> = [];

  public burgerQuerySkip: number = 0;
  public burgerQueryTake: number = 25;

  constructor(readonly burgerService: BurgerService, readonly configService: ConfigService) { }

  ngOnInit(): void {
    this.getBurgers();
    this.favoriteBurgers = this.configService.readLocalStorage(this.configService.burgerCacheKey);
  }

  getBurgers(): void {
    const pagedCollectionParams: PagedCollectionParams = {
      skip: this.burgerQuerySkip,
      take: this.burgerQueryTake,
      filter: this.burgerSearchInput
    };

    this.burgerService.getBurgers(pagedCollectionParams).subscribe((pagedCollection: PagedCollection<Burger>) => {
      this.burgersPagedCollection = pagedCollection;
    });
  }

  burgerSearch(event: any): void {
    event.preventDefault();
    this.getBurgers();
  }

  pageEvent(event: PageEvent) {
    this.burgerQueryTake = event.pageSize;
    this.burgerQuerySkip = event.pageIndex * event.pageSize;

    this.getBurgers();
  }

  addBurgerToFavorite(burger: Burger): void {
    let newData: Array<Burger>;
    const favoriteBurgers: Array<Burger> = this.configService.readLocalStorage(this.configService.burgerCacheKey);
    if (favoriteBurgers && favoriteBurgers.length > 0) {
      // Check if burger is already in favorite
      const burgerAlreadyFavorite = favoriteBurgers.some(x => x.id === burger.id);
      if (burgerAlreadyFavorite) {
        return;
      }

      // Update array
      newData = [
        ...favoriteBurgers,
        burger
      ]
    } else {
      newData = [burger]
    }

    this.favoriteBurgers = newData;
    this.configService.writeLocalStorage(this.configService.burgerCacheKey, newData);
  }

  burgerIsFavorite(burgerId: number): boolean {
    return this.favoriteBurgers.some(x => x.id === burgerId);
  }
}
