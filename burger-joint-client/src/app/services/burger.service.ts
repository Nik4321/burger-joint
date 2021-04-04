import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Burger } from '../models/dtos/burger';
import { BurgerCreateDto } from '../models/dtos/burger-create-dto';
import { PagedCollectionParams } from '../shared/paged-collection-params';
import { PagedCollection } from '../shared/paged-collection.interface';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  private readonly url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getBurgers(pagedCollectionParams: PagedCollectionParams = { skip: 0, take: 25, filter: '' }): Observable<PagedCollection<Burger>> {
    const httpParams = new HttpParams()
      .set('skip', pagedCollectionParams.skip.toString())
      .set('take', pagedCollectionParams.take.toString())
      .set('filter', pagedCollectionParams.filter);

    return this.http.get<PagedCollection<Burger>>(`${this.url}burgers`, { params: httpParams });
  }

  getRandomBurger(): Observable<Burger> {
    return this.http.get<Burger>(`${this.url}burgers/random`);
  }

  createBurger(burger: BurgerCreateDto): Observable<Burger> {
    return this.http.post<Burger>(`${this.url}burgers`, burger);
  }
}
