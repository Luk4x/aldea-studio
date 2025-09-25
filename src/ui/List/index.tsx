import { ListItem } from './components/ListItem';
import { ListRoot } from './components/ListRoot';

export type * from './components/ListItem/types';
export type * from './components/ListRoot/types';

export const List = Object.assign(ListRoot, { Item: ListItem });
