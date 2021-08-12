import { getPosts, getUsers } from "../data";

export async function getEdgeProps({ params, query, event }) {
  const [posts, users] = await Promise.all([
    getPosts(),
    getUsers()
  ]);
  
  return {
    props: {
      posts,
      users: users.map((user) => [user.id, user])
    },
  };
}

function Posts({ posts, users }) {
  const usersMap = new Map(users);
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
          const postUrl = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
          const userUrl = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
          const user = usersMap.get(post.userId);
          return (
            <li key={post.id}>
              <a href={userUrl}>{user.name}</a> posted "<a href={postUrl}>{post.title}</a>"
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function Index({ posts, users }) {
  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <Posts posts={posts} users={users} />
    </>
  );
}
