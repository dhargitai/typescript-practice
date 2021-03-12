import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Model } from "./model";
import { ApiSync } from "./api-sync";

type PostProps = {
  id?: number;
  title?: string;
  content?: string;
};

export class Post extends Model<PostProps> {
  static build(attributes: PostProps) {
    return new Post(
      new Attributes<PostProps>(attributes),
      new ApiSync<PostProps>("http://localhost:3000/posts"),
      new Eventing()
    );
  }
}
