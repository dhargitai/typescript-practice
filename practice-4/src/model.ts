import { Eventing } from "./eventing";
import { HasId, ModelAttributes, Sync } from "./interfaces";

export abstract class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Eventing
  ) {}

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
    return this.events.subscribe;
  }

  get dispatch() {
    return this.events.dispatch;
  }

  set(updatedProps: T) {
    this.attributes.set(updatedProps);
    this.dispatch("change");
  }

  get get() {
    return this.attributes.get;
  }

  get getAll() {
    return this.attributes.getAll;
  }
}
