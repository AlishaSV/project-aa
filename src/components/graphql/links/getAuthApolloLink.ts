import { setContext } from '@apollo/client/link/context';

export const getAuthApolloLink = (getAuthToken: () => string | null) => {
  return setContext((_, context) => {
    if (!context.headers) context.headers = {};
    try {
      const token = getAuthToken();
      if (token) {
        context.headers.authorization = token;
      }
      return context;
    } catch (e) {
      return context;
    }
  });
};
