import { getPosts } from '../../data';

export default async (event) => {
    return getPosts();
};
