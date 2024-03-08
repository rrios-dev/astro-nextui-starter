import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import config from '../app/config';

const httpLink = createHttpLink({
    uri: config.strapi.graphqlUrl
});

export const STORAGE_KEY = 'auth-token';

const storageInstance = () => {
    if (typeof window === 'undefined') throw new Error('storage is not available');

    return localStorage;
};
export const authStorage = {
    get: () => storageInstance().getItem(STORAGE_KEY),
    set: (token: string) => storageInstance().setItem(STORAGE_KEY, token),
    remove: () => storageInstance().removeItem(STORAGE_KEY),
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authLink = setContext((_, { headers }) => {
    const token = authStorage.get();

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
