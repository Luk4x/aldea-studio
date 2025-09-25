'use client';

import type { CSSProperties } from 'react';

import { List, type ListElementType, type ListRootProps } from '@/ui/List';

import type { ListAnyProps } from './types';
import { useCardsCarousel } from './useCardsCarousel';

export function CardsCarousel<GData, GElement extends ListElementType = 'ul'>(
  listRootProps: ListRootProps<GData, GElement>,
) {
  const { containerRef } = useCardsCarousel();

  const ListAny =
    List as unknown as React.ForwardRefExoticComponent<ListAnyProps>;

  return (
    <ListAny
      {...(listRootProps as unknown as Record<string, unknown>)}
      ref={containerRef}
      style={{
        overscrollBehavior: 'contain',
        scrollSnapType: 'y proximity',
        scrollPaddingTop: '80px',
        scrollPaddingBottom: '128px',
        scrollSnapStop: 'always',
        overflowY: 'auto',
        height: 'calc(100vh - 80px)',
        paddingBottom: '128px',
        gap: '32px',
        ...((listRootProps as { style?: CSSProperties }).style ?? {}),
      }}
    />
  );
}
