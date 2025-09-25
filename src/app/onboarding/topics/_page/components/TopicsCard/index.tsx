'use client';

import { Card } from '@/ui/Card';
import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { If } from '@/ui/If';
import { List } from '@/ui/List';

import { topicsCardStyles } from './styles';
import { useTopicsCard } from './useTopicsCard';
import { topics } from './utils';

export function TopicsCard() {
  const {
    isSelectedTopic,
    onClickTopic,
    isSelectedTopicsEmpty,
    topicsLimitReached,
    onClickChipContinue,
  } = useTopicsCard();

  const styles = topicsCardStyles();

  return (
    <Card className={styles.card()}>
      <div className={styles.mainIcon()}>
        <Icon.AccountSetting color="primary-500" width={24} height={24} />
      </div>
      <h2 className={styles.subtitle()}>What topics are you interested in?</h2>
      <p
        className={styles.description()}
        key={`description-key-${isSelectedTopicsEmpty}`}
      >
        <If
          condition={isSelectedTopicsEmpty}
          fallback="Choose up to 10 topics that interest you, and Nero will use them to recommend and tailor experiences relevant to your preferences."
        >
          Nero will use this connection to actively make recommendations based
          on your previous use.
        </If>
      </p>
      <List items={topics} className={styles.topicList()}>
        {topic => {
          const { label: topicLabel, Icon: TopicIcon } = topic;

          const isChipDisabled =
            topicsLimitReached && !isSelectedTopic(topicLabel);

          return (
            <List.Item key={topicLabel}>
              <Chip
                className={styles.topicChip()}
                onClick={() => onClickTopic(topicLabel)}
                isActive={isSelectedTopic(topicLabel)}
                variant="highlight-500"
                Icon={TopicIcon}
                disabled={isChipDisabled}
                iconConfig={{
                  color: 'neutral-900',
                  width: 12,
                  height: 12,
                  className: styles.topicIcon(),
                }}
              >
                {topicLabel}
              </Chip>
            </List.Item>
          );
        }}
      </List>
      <div className={styles.chipContainer()}>
        <Chip disabled={isSelectedTopicsEmpty} onClick={onClickChipContinue}>
          Continue
          <Icon.Arrow
            direction="right"
            color="neutral-900"
            className={styles.chipIcon()}
            width={16}
            height={16}
          />
        </Chip>
      </div>
    </Card>
  );
}
