import { Attributes } from "./attributes";
import { Sync } from "./sync";

type Callback = () => void;

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  events: { [key: string]: Callback[] } = {};
  attributes: Attributes<UserProps>;
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users");

  constructor(attributes: UserProps) {
    this.attributes = new Attributes<UserProps>(attributes);
  }

  async save(): Promise<void> {
    await this.sync.save(this.attributes.getAll());
    this.dispatch("save");
  }

  async fetch(): Promise<void> {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Missing id");
    }

    const data = await this.sync.fetch(id);
    this.dispatch("fetch");
    this.set(data);
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

  set(updatedProps: UserProps) {
    this.attributes.set(updatedProps);
    this.dispatch("change");
  }
}
