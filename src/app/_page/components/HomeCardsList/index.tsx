'use client';

import { List } from '@/ui/List';

import { useAskNeroContext } from '../../contexts/AskNero';
import { data } from '../../utils/data';
import { CardsCarousel } from '../CardsCarousel';
import { HomeCard } from '../HomeCard';
import { homeCardsListStyles } from './styles';

export function HomeCardsList() {
  const { askedData } = useAskNeroContext();

  const styles = homeCardsListStyles();

  return (
    <CardsCarousel items={data} className={styles.container()}>
      {(item: (typeof data)[number]) => (
        <List.Item
          key={item.title}
          className={styles.listItem({ hasAsked: askedData.hasAsked })}
          style={{ scrollSnapAlign: 'start' }}
        >
          <HomeCard className={styles.card()}>
            <HomeCard.Content>
              <HomeCard.Title title={item.title} />
              {item.content}
              <HomeCard.Actions actions={item.actions} />
            </HomeCard.Content>
            <HomeCard.Footer />
          </HomeCard>
        </List.Item>
      )}
    </CardsCarousel>
  );
}
