'use client';
import { PropsWithChildren } from 'react';
import { EncryptLocalStorageContext } from '@/components/utils/encryptLocalStorage/encryptLocalStorageContext';
import {
  decryptStoredData,
  encryptAndStoreData,
} from '@/components/utils/encryptLocalStorage/encryptLocalStorage';

type TEncryptLocalStorageContextProviderProps = PropsWithChildren & {
  encryptSecret: string;
};
export const EncryptLocalStorageContextProvider = ({
  children,
  encryptSecret,
}: TEncryptLocalStorageContextProviderProps) => {
  const setDataToLocalStorage = (data: string, localStorageKey: string) => {
    encryptAndStoreData(data, encryptSecret, localStorageKey);
  };

  const getDataFromLocalStorage = (localStorageKey: string): string | null => {
    return decryptStoredData(encryptSecret, localStorageKey);
  };

  return (
    <EncryptLocalStorageContext.Provider
      value={{
        setDataToLocalStorage,
        getDataFromLocalStorage,
      }}
    >
      {children}
    </EncryptLocalStorageContext.Provider>
  );
};
