import { createContext, useContext } from 'react';

type TEncryptLocalStorageContext = {
  setDataToLocalStorage: (data: string, localStorageKey: string) => void;
  getDataFromLocalStorage: (localStorageKey: string) => string | null;
};

export const EncryptLocalStorageContext = createContext<TEncryptLocalStorageContext | null>(null);

export const useEncryptLocalStorageContext = (): TEncryptLocalStorageContext => {
  const context = useContext(EncryptLocalStorageContext);
  if (!context) {
    throw new Error(
      'useEncryptLocalStorageContext has to be used within <EncryptLocalStorageContext.Provider>',
    );
  }

  return context;
};
