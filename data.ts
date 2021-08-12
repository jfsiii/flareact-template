export interface Post {
  userId: User['id']
  id: number
  title: string
  body: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}
export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export async function getUsers(): Promise<User[]> {
  console.log(`data/getUsers`);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

export async function getPosts(): Promise<Post[]> {
  console.log(`data/getPosts`);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

export async function getUser(id: User['id']): Promise<User> {
  console.log(`data/getUser ${id}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return user;
}

export async function getPost(id: Post['id']): Promise<Post> {
  console.log(`data/getPost ${id}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}
