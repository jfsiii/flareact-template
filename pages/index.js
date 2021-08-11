
export async function getEdgeProps({ params, query, event }) {
  const [posts, users] = await Promise.all([
    getPosts(),
    getUsers()
  ]);
  const usersMap = new Map(users.map((user) => [user.id, user]))

  return {
    props: {
      posts,
      usersMap
    },
  };
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}


function Posts({ posts, usersMap }) {
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
          return (
            <li key={post.id}>
              <a href={userUrl}>{usersMap.get(post.userId).name}</a> posted "<a href={postUrl}>{post.title}</a>"
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function Index({ posts, usersMap }) {
  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <Posts posts={posts} usersMap={usersMap} />
    </>
  );
}
