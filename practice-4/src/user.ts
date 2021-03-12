import axios, { AxiosResponse } from "axios";

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(
    public data: {
      [key: string]: string | number | boolean;
    }
  ) {}

  save(): void {
    if (typeof this.data.id === "number") {
      axios
        .put(`http://localhost:3000/users/${this.data.id}`, this.data)
        .then(() => this.dispatch("save"));
    } else {
      axios
        .post("http://localhost:3000/users", this.data)
        .then(() => this.dispatch("save"));
    }
  }

  async fetch(): Promise<AxiosResponse | void> {
    if (typeof this.data.id !== "number") {
      throw new Error("Missing id");
    }

    const response = await axios.get(
      `http://localhost:3000/users/${this.data.id}`
    );
    this.data = { ...this.data, ...response.data };
    this.dispatch("fetch");
  }

  get(key: string): string | number | boolean {
    return this.data[key];
  }

  set(key: string, value: string | number | boolean): User {
    this.data[key] = value;
    this.dispatch("edit");
    return this;
  }

  subscribe(event: string, callback: Callback): void {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }

  dispatch(event: string): void {
    if (!Array.isArray(this.events[event])) {
      return;
    }
    this.events[event].forEach((callback) => callback());
  }
}
