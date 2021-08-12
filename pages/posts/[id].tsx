import type { Post, User } from "../../data";
import type { GetEdgeProps, EdgeProps } from "../../types";
import { getPost, getUser } from "../../data";

export interface PostDetailPageProps {
  post: Post;
  user: User;
}

export async function getEdgeProps(props: GetEdgeProps<{id: string}>): Promise<EdgeProps<PostDetailPageProps>> {
  const post = await getPost(props.params.id);
  const user = await getUser(post.userId);

  return {
    props: {
      post,
      user,
    },
  };
}


export default function PostDetailPage({ post, user }: PostDetailPageProps) {
  
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <small>
          by {user.name} from {user.company.name}, where "{user.company.catchPhrase}"
        </small>
      </header>
      <hr />
      <section>
        {post.body}
      </section>
    </article>
  );
}