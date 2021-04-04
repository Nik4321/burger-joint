import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public readonly burgerCacheKey = 'burgers';

  readLocalStorage(key: string): any {
    const data = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }

    return null;
  }

  writeLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
