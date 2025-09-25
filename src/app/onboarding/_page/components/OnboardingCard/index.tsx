'use client';

import { Card } from '@/ui/Card';
import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { List } from '@/ui/List';

import { onboardingCardStyles } from './styles';
import { useOnboardingCard } from './useOnboardingCard';
import { features, userName } from './utils';

export function OnboardingCard() {
  const { onContinueChipClick } = useOnboardingCard();

  const styles = onboardingCardStyles();

  return (
    <Card className={styles.card()}>
      <div className={styles.mainIcon()}>
        <Icon.WavingHand color="primary-500" width={24} height={24} />
      </div>
      <h1 className={styles.title()}>Hey, {userName}!</h1>
      <h2 className={styles.subtitle()}>
        Clear the chaos and make Nero work for you.
      </h2>
      <p className={styles.description()}>
        Answer a few quick questions to unlock your personalized feed.
      </p>
      <List items={features} className={styles.featureList()}>
        {feature => {
          const { label: featureLabel, Icon: FeatureIcon } = feature;

          return (
            <List.Item key={featureLabel} className={styles.featureItem()}>
              <FeatureIcon
                width={24}
                height={24}
                className={styles.featureIcon()}
              />
              <p className={styles.featureLabel()}>{featureLabel}</p>
            </List.Item>
          );
        }}
      </List>
      <div className={styles.chipContainer()}>
        <Chip onClick={onContinueChipClick}>
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
