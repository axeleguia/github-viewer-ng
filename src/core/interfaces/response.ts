export interface Response<T> {
  data: T;
  pagination: Pagination;
}

export interface Pagination {
  next: number | null;
  prev: number | null;
  first: number | null;
  last: number | null;
}
