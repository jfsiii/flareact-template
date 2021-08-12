import type { Post, User } from "../data";
import type { GetEdgeProps, EdgeProps } from "../types";
import { getPosts, getUsers } from "../data";
import Link from "flareact/link";

export interface IndexProps {
  posts: Post[];
  users: User[];
}

export async function getEdgeProps(props: GetEdgeProps): Promise<EdgeProps<IndexProps>> {
  console.log('index', 'params' in props, 'query' in props,'event' in props)
  const { params, query, event } = props;
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  return {
    props: {
      posts,
      users,
    },
  };
}

function Posts({ posts, users }: IndexProps) {
  const usersMap = new Map(users.map((user) => [user.id, user]));
  return (
    <div>
      <h1>Posts</h1>
      <small>
        with example API data from{" "}
        <a href="https://jsonplaceholder.typicode.com/">
          https://jsonplaceholder.typicode.com/
        </a>
      </small>
      <ul>
        {posts.map((post) => {
          const postUrl = `/posts/${post.id}`;
          const userUrl = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
          const user = usersMap.get(post.userId);
          return (
            <li key={post.id}>
              <a href={userUrl}>{user.name}</a> posted
              <Link href="/posts/[id]" as={postUrl}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Index({ posts, users }: IndexProps) {
  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <Posts posts={posts} users={users} />
    </>
  );
}
