import { Sortable } from "./interfaces";

export class Sorter {
  constructor(public collection: Sortable) {}

  sort() {
    for (let i = this.collection.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
