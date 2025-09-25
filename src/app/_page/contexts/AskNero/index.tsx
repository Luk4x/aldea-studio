'use client';

import { type ReactNode, createContext, useContext } from 'react';

import { useAskNero } from './useAskNero';

export const AskNeroContext = createContext(
  {} as ReturnType<typeof useAskNero>,
);

export function AskNeroProvider({ children }: { children: ReactNode }) {
  const value = useAskNero();

  return (
    <AskNeroContext.Provider value={value}>{children}</AskNeroContext.Provider>
  );
}

export const useAskNeroContext = () => {
  const context = useContext(AskNeroContext);

  if (!context) {
    throw new Error('useAskNeroContext must be used within a AskNeroProvider');
  }

  return context;
};
