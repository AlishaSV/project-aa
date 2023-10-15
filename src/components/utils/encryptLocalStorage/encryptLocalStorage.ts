import * as CryptoJS from 'crypto-js';

export function encryptAndStoreData(data: string, encryptionKey: string, localStorageKey: string) {
  const encryptedData = CryptoJS.AES.encrypt(data, encryptionKey).toString();

  localStorage.setItem(localStorageKey, encryptedData);
}

export function decryptStoredData(encryptionKey: string, localStorageKey: string): string | null {
  const encryptedString = localStorage.getItem(localStorageKey);
  if (!encryptedString) {
    return null; // No data to decrypt
  }
  return CryptoJS.AES.decrypt(encryptedString, encryptionKey).toString(CryptoJS.enc.Utf8);
}
