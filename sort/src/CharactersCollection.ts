import { Sorter } from "./sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const swap = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = swap;
    this.data = characters.join("");
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex?: number) {
    if (rightIndex === undefined) {
      rightIndex = leftIndex + 1;
    }
    return (
      this.data.charAt(leftIndex).toLowerCase() >
      this.data.charAt(rightIndex).toLowerCase()
    );
  }
}
