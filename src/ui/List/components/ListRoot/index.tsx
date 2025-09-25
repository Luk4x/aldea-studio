import { createElement } from 'react';

import type { ListElementType, ListRootProps } from './types';

export function ListRoot<GData, GElement extends ListElementType = 'ul'>({
  items,
  children,
  emptyFallback = null,
  as = 'ul' as GElement,
  ...listProps
}: ListRootProps<GData, GElement>) {
  const hasData = items.length > 0;

  if (!hasData) {
    return emptyFallback;
  }

  return createElement(as, listProps, items.map(children));
}
