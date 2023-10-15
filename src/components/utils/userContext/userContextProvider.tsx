'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { UserContext } from '@/components/utils/userContext/userContext';
import { AUTH_LOCAL_STORAGE_KEY } from '@/components/commonConsts';

type TUserContextProviderProps = PropsWithChildren;

export const UserContextProvider = ({ children }: TUserContextProviderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage?.getItem(AUTH_LOCAL_STORAGE_KEY));
  }, []);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
