import type { ComponentProps } from 'react';

type MakeKeyRequiredType = Required<Pick<ComponentProps<'li'>, 'key'>>;

export type ListItemProps = ComponentProps<'li'> & MakeKeyRequiredType;
