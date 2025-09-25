'use client';

import { Icon } from '@/ui/Icon';

import { useAskNeroContext } from '../../contexts/AskNero';
import { neroBarStyles } from './styles';

export function NeroBar() {
  const { askedData, handleAskNero } = useAskNeroContext();

  const styles = neroBarStyles();

  return (
    <>
      <div className={styles.overlay()} />
      <button
        type="button"
        onClick={() => handleAskNero(true)}
        className={styles.container({ hasAsked: askedData.hasAsked })}
      >
        <div className={styles.audio()}>
          <Icon.AudioWave width={20} height={20} color="neutral-200" />
          <p className={styles.audioText()}>Ask Nero</p>
        </div>
        <div className={styles.message()}>
          <Icon.Message
            width={20}
            height={20}
            color="neutral-900"
            className={styles.messageIcon()}
          />
        </div>
      </button>
    </>
  );
}
