'use client';
import { PropsWithChildren, useState } from 'react';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { useEncryptLocalStorageContext } from '@/components/utils/encryptLocalStorage/encryptLocalStorageContext';
import { getAuthApolloLink, getGrabAuthTokenLink } from '@/components/graphql/links';
import { useUserContext } from '@/components/utils';
import { AUTH_LOCAL_STORAGE_KEY } from '@/components/commonConsts';

type TGraphQLProviderProps = PropsWithChildren & {
  uri: string;
};

/**
 * Component that initialise Apollo Client and wrap children in Apollo.Provider
 */
export function GraphQLProvider({ children, uri }: TGraphQLProviderProps) {
  const { setDataToLocalStorage, getDataFromLocalStorage } = useEncryptLocalStorageContext();
  const { setIsUserLoggedIn } = useUserContext();

  const [client] = useState(() => {
    const link = ApolloLink.from([
      /** set Auth token in header */
      getAuthApolloLink(() => getDataFromLocalStorage(AUTH_LOCAL_STORAGE_KEY)),
      /** grab auth token */
      getGrabAuthTokenLink((token) => {
        setIsUserLoggedIn(true);
        setDataToLocalStorage(token, AUTH_LOCAL_STORAGE_KEY);
      }),
      new HttpLink({ uri, credentials: 'include' }),
    ]);
    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
      name: 'web',
      ssrMode: typeof window === 'undefined',
    });
  });
  if (!uri) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
