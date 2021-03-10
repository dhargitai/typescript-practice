export abstract class Sorter {
  constructor() {}

  sort() {
    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
}
