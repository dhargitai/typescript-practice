import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Sync } from "./sync";

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  attributes: Attributes<UserProps>;
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users");
  eventing: Eventing = new Eventing();

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

  get subscribe() {
    return this.eventing.subscribe;
  }

  get dispatch() {
    return this.eventing.dispatch;
  }

  set(updatedProps: UserProps) {
    this.attributes.set(updatedProps);
    this.dispatch("change");
  }

  get get() {
    return this.attributes.get;
  }
}
