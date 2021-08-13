import type { Post, User } from "../../data";
import type { GetEdgeProps, EdgeProps } from "../../types";
import { getPost, getUser } from "../../data";
import Link from "flareact/link";

export interface PostDetailPageProps {
  post: Post;
  user: User;
}

export async function getEdgeProps(props: GetEdgeProps<{id: string}>): Promise<EdgeProps<PostDetailPageProps>> {
  const post = await getPost(parseInt(props.params.id, 10));
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
    <>
      <Link href="/"><a>Home</a></Link>
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
    </>
  );
}