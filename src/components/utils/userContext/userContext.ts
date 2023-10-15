'use client';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type TUserContext = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<TUserContext | null>(null);

export const useUserContext = (): TUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext has to be used within <UseContext.Provider>');
  }
  return context;
};
