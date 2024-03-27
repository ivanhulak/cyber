// @ts-nocheck

export type ObjectKeysAsString<T> = {
  [K in keyof T]: T[K] extends object
  ? `${K}.${ObjectKeysAsString<T[K]>}`
  : `${K}`;
}[keyof T];