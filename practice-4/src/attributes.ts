export class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.data[key] = value;
  }

  getAll(): T {
    return this.data;
  }
}
