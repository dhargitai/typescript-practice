import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

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
