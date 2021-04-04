export interface PagedCollection<T> {
  collection: Array<T>;
  requested: number;
  skip: number;
  total: number;
}
