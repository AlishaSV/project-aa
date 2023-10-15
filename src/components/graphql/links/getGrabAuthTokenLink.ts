import { ApolloLink } from '@apollo/client';

export const getGrabAuthTokenLink = (setToken: (token: string) => void) => {
  /**
   * Apollo Link:
   * Grab Auth Token
   */
  return new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      const data = response?.data;
      const token = data?.['logIn']?.token || data?.['register']?.token;
      if (token) {
        setToken(token);
      }
      return response;
    });
  });
};
