import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Model } from "./model";
import { Sync } from "./sync";

type PostProps = {
  id?: number;
  title?: string;
  content?: string;
};

export class Post extends Model<PostProps> {
  constructor(attributes: PostProps) {
    super(
      new Attributes<PostProps>(attributes),
      new Sync<PostProps>("http://localhost:3000/posts"),
      new Eventing()
    );
  }
}
