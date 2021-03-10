import { Sortable } from "./interfaces";

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  compare(leftIndex: number, rightIndex?: number): boolean {
    if (!rightIndex) {
      rightIndex = leftIndex + 1;
    }
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const swap = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = swap;
  }

  get length(): number {
    return this.data.length;
  }
}
