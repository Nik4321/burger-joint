export interface IPagedCollection<T> {
	collection: Array<T>;
	requested: number;
	skip: number;
	total: number;
}