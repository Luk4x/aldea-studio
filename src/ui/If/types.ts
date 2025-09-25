import type { ReactNode } from 'react';

export type IfProps = {
  condition: boolean;
  children: ReactNode;
  fallback?: null | ReactNode;
};
