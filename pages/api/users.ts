import { getUsers } from '../../data';

export default async (event) => {
    return getUsers();
};
