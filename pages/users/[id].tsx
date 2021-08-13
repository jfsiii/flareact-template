import { Fragment } from 'react';
import type { User } from "../../data";
import type { GetEdgeProps, EdgeProps } from "../../types";
import { getUser } from "../../data";
import Link from "flareact/link";

export async function getEdgeProps(
  props: GetEdgeProps<{ id: string }>
): Promise<EdgeProps<UserDetailPageProps>> {
  const user = await getUser(+parseInt(props.params.id, 10));

  return {
    props: {
      user,
    },
  };
}

export interface UserDetailPageProps {
  user: User;
}

export default function UserDetailPage({ user }: UserDetailPageProps) {
  const keys = ["id", "name", "username", "email"];
  return (
    <>
      <Link href="/"><a>Home</a></Link>
      <h1>{user.name}</h1>
      <dl>
        {keys.map((key) => {
          return (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>{user[key]}</dd>
            </Fragment>
          );
        })}
      </dl>
    </>
  );
}
