'use client';

import { Chip } from '@/ui/Chip';
import { Icon } from '@/ui/Icon';
import { NeroTextarea } from '@/ui/NeroTextarea';

import { useAskNeroContext } from '../../contexts/AskNero';
import { data } from '../../utils/data';
import { HomeCard } from '../HomeCard';
import { cardInFocusStyles } from './styles';

export function CardInFocus() {
  const { askedData, handleAskNero } = useAskNeroContext();

  const styles = cardInFocusStyles();

  const cardData = data[askedData.dataIndex];

  if (!askedData.hasAsked || !cardData) {
    return null;
  }

  return (
    <div className={styles.overlay()}>
      <div className={styles.container()}>
        <div>
          <div className={styles.header()}>
            <button
              type="button"
              onClick={() => handleAskNero(false)}
              className={styles.cancelButton()}
            >
              <Icon.Cancel
                width={24}
                height={24}
                color="neutral-900"
                className={styles.icon()}
              />
            </button>
            <Icon.MoreHorizontal
              width={24}
              height={24}
              color="neutral-900"
              className={styles.moreHorizontalIcon()}
            />
          </div>
          <div className={styles.cardRoot()}>
            <HomeCard.Title title={cardData.title} />
            {cardData.content}
            <HomeCard.Actions
              actions={cardData.actions}
              className={styles.cardActions()}
            />
            <HomeCard.Footer
              className={styles.cardFooter()}
              sideAction={
                <Chip className={styles.shareChip()}>
                  <Icon.Share
                    width={20}
                    height={20}
                    color="neutral-900"
                    className={styles.icon()}
                  />
                  Share
                </Chip>
              }
            />
          </div>
          <div className={styles.divider()} />
        </div>
        <div className={styles.textareaContainer()}>
          <NeroTextarea className={styles.textarea()} />
        </div>
      </div>
    </div>
  );
}
