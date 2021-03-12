import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Model } from "./model";
import { Sync } from "./sync";

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User extends Model<UserProps> {
  constructor(attributes: UserProps) {
    super(
      new Attributes<UserProps>(attributes),
      new Sync<UserProps>("http://localhost:3000/users"),
      new Eventing()
    );
  }
}
