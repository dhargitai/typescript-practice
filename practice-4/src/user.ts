import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Model } from "./model";
import { ApiSync } from "./api-sync";

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User extends Model<UserProps> {
  static build(attributes: UserProps) {
    return new User(
      new Attributes<UserProps>(attributes),
      new ApiSync<UserProps>("http://localhost:3000/users"),
      new Eventing()
    );
  }
}
