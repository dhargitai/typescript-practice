import axios, { AxiosResponse } from "axios";

type Callback = () => void;

// type UserProps = {
//   [key: string]: string | number | boolean;
// };
type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

class Attributes<T> {
  constructor(public data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.data[key] = value;
    // this.dispatch("edit");
  }
}

export class User {
  events: { [key: string]: Callback[] } = {};
  attributes: Attributes<UserProps>;

  constructor(attributes: UserProps) {
    this.attributes = new Attributes<UserProps>(attributes);
  }

  save(): void {
    if (typeof this.attributes.get("id") === "number") {
      axios
        .put(
          `http://localhost:3000/users/${this.attributes.get("id")}`,
          this.attributes
        )
        .then(() => this.dispatch("save"));
    } else {
      axios
        .post("http://localhost:3000/users", this.attributes)
        .then(() => this.dispatch("save"));
    }
  }

  async fetch(): Promise<AxiosResponse | void> {
    if (typeof this.attributes.get("id") !== "number") {
      throw new Error("Missing id");
    }

    const response = await axios.get(
      `http://localhost:3000/users/${this.attributes.get("id")}`
    );
    this.attributes = { ...this.attributes, ...response.data };
    this.dispatch("fetch");
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
