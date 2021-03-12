export interface HasId {
  id?: number;
}

export interface ModelAttributes<T extends HasId> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(attributes: T): void;
}

export interface Sync<T> {
  save(attributes: T): Promise<void>;
  fetch(id: number): Promise<T>;
}
