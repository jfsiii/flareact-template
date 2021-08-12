import type { FetchEvent } from '../../types'
import { getPosts } from '../../data';

export default async (event: FetchEvent) => {
    return getPosts();
};
