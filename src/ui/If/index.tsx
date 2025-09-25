import type { IfProps } from './types';

export type * from './types';

export function If({ condition, children, fallback = null }: IfProps) {
  if (!condition) {
    return fallback;
  }

  return children;
}
