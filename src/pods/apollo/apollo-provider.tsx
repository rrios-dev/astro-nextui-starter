import { ApolloProvider as AApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

import client from './client';

interface ApolloProviderProps {
    children: ReactNode;
}
const ApolloProvider = ({ children }: ApolloProviderProps) => {
    return <AApolloProvider client={client}>
        {children}
    </AApolloProvider>;
};

export default ApolloProvider;