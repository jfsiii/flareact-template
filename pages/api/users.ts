import type { FetchEvent } from '../../types'
import { getUsers } from '../../data';

export default async (event: FetchEvent) => {
    return getUsers();
};
