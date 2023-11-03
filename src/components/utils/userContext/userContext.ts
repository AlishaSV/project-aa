'use client';
import { createContext, Dispatch, SetStateAction } from 'react';
import { useContext } from '@/components/utils';

type TUserContext = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<TUserContext | null>(null);
UserContext.displayName = 'UserContext';

export const useUserContext = (): TUserContext => {
  return useContext(UserContext);
};
