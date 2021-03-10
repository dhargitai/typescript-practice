export interface Sortable {
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex?: number): boolean;
  length: number;
}
