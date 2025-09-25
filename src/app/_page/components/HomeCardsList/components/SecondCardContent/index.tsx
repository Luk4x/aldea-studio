import Image from 'next/image';

import { List } from '@/ui/List';

import { secondCardContentStyles } from './styles';
import { list } from './utils';

export function SecondCardContent() {
  const styles = secondCardContentStyles();

  return (
    <>
      <p className={styles.description()}>
        You will finalize the Q3 product launch timeline, confirm the overall
        budget (including the allocation for influencer spend), and approve the
        final set of marketing assets. Please ensure the timeline includes key
        milestone dates, responsibilities for each team, and contingency
        buffers.
      </p>
      <List items={list} className={styles.listContainer()}>
        {item => (
          <List.Item key={item.src} className={styles.listItem()}>
            <Image src={item.src} width={20} height={20} alt={item.alt} />
            <p>{item.label}</p>
          </List.Item>
        )}
      </List>
    </>
  );
}
