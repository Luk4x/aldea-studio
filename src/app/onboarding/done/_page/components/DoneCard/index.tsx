'use client';

import { Card } from '@/ui/Card';
import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';

import { doneCardStyles } from './styles';
import { useDoneCard } from './useDoneCard';
import { userName } from './utils';

export function DoneCard() {
  const { onDashboardChipClick } = useDoneCard();

  const styles = doneCardStyles();

  return (
    <Card className={styles.card()}>
      <div className={styles.mainIcon()}>
        <Icon.Party color="primary-500" width={24} height={24} />
      </div>
      <h1 className={styles.title()}>You’re all set, {userName}!</h1>
      <h2 className={styles.subtitle()}>Nero is ready to go</h2>
      <p className={styles.description()}>
        Your preferences are saved and Nero will start organizing and learning
        from the way you work.
      </p>
      <div className={styles.chipContainer()}>
        <Chip onClick={onDashboardChipClick}>
          Open my dashboard
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
