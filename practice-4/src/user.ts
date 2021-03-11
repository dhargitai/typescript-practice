import axios, { AxiosResponse } from "axios";

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(
    public data: {
      [key: string]: string | number | boolean;
    }
  ) {}

  save(): void {
    axios
      .post("http://localhost:3000/users", this.data)
      .then(() => console.log("mentve"));
  }

  fetch(): void {
    if (typeof this.data.id !== "number") {
      throw new Error("Missing id");
    }

    axios
      .get(`http://localhost:3000/users/${this.data.id}`)
      .then((response: AxiosResponse) => {
        this.data = { ...this.data, ...response.data };
      });
  }

  get(key: string): string | number | boolean {
    return this.data[key];
  }

  set(key: string, value: string | number | boolean) {
    this.data[key] = value;
  }

  subscribe(event: string, callback: Callback) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }

  dispatch(event: string) {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach((callback) => callback());
  }
}
