import type { ComponentProps, HTMLElementType, ReactNode } from 'react';

type ListElementType = Extract<HTMLElementType, 'ul' | 'ol'>;

type RenderChildrenProps<GData> = (
  data: GData,
  index: number,
  array: Array<GData>,
) => ReactNode;

type ListRootProps<GData, GElement extends ListElementType = 'ul'> = {
  items: Array<GData>;
  children: RenderChildrenProps<GData>;
  emptyFallback?: ReactNode;
  as?: GElement;
} & Omit<ComponentProps<GElement>, 'children'>;

export type { ListElementType, ListRootProps, RenderChildrenProps };
