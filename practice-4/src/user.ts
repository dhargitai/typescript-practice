import axios, { AxiosResponse } from "axios";
import { Attributes } from "./attributes";

type Callback = () => void;

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

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
    this.attributes = new Attributes<UserProps>(response.data);
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

  set<K extends keyof UserProps>(key: K, value: UserProps[K]) {
    this.attributes.set(key, value);
    this.dispatch("edit");
  }
}
