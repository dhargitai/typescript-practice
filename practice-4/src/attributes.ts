export class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  getAll(): T {
    return this.data;
  }

  set(newData: T): void {
    this.data = {
      ...this.data,
      ...newData,
    };
  }
}
