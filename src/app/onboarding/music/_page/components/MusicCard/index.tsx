'use client';

import { Card } from '@/ui/Card';
import { Chip } from '@/ui/Chip';
import { Connection } from '@/ui/Connection';
import { Icon } from '@/ui/Icon';
import { List } from '@/ui/List';

import { musicCardCardStyles } from './styles';
import { useMusicCard } from './useMusicCard';
import { connections } from './utils';

export function MusicCard() {
  const {
    isConnected,
    isConnectionsDoneEmpty,
    onConnect,
    onClickChipContinue,
  } = useMusicCard();

  const styles = musicCardCardStyles();

  return (
    <Card className={styles.card()}>
      <div className={styles.mainIcon()}>
        <Icon.MusicNote color="highlight-500" width={24} height={24} />
      </div>
      <h2 className={styles.subtitle()}>Where do you listen to music?</h2>
      <p className={styles.description()}>
        Nero will use this connection to actively make recommendations based on
        your previous use.
      </p>
      <List items={connections} className={styles.connectionsList()}>
        {connection => {
          return (
            <List.Item key={connection.label}>
              <Connection
                label={connection.label}
                logo={connection.logo}
                connected={isConnected(connection.label)}
                onConnect={() => onConnect(connection.label)}
              />
            </List.Item>
          );
        }}
      </List>
      <div className={styles.chipContainer()}>
        <button type="button" className={styles.newIntegration()}>
          <Icon.AddCircle width={16} height={16} color="neutral-900" />
          Add a new integration
        </button>
        <Chip disabled={isConnectionsDoneEmpty} onClick={onClickChipContinue}>
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
