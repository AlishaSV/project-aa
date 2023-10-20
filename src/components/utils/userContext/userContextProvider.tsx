'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { UserContext } from '@/components/utils/userContext/userContext';
import { AUTH_LOCAL_STORAGE_KEY } from '@/components/commonConsts';
import { usePathname, useRouter } from 'next/navigation';

type TUserContextProviderProps = PropsWithChildren;

export const UserContextProvider = ({ children }: TUserContextProviderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage?.getItem(AUTH_LOCAL_STORAGE_KEY));
  }, []);

  useEffect(() => {
    if (router && !isUserLoggedIn) {
      router.push('/login');
    }
  }, [router, pathname, isUserLoggedIn]);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
