'use client';

import { Icon } from '@/ui/Icon';
import { If } from '@/ui/If';
import { cn } from '@/utils/cn';

import { neroTextareaStyles } from './styles';
import type { NeroTextareaProps } from './types';
import { useNeroTextarea } from './useNeroTextarea';

export function NeroTextarea({
  className,
  onChange,
  onInput,
  ...textareaProps
}: NeroTextareaProps) {
  const { handleOnChange, handleOnInput, textareaRef, isEmpty } =
    useNeroTextarea({
      onChange,
      onInput,
    });

  const styles = neroTextareaStyles({ isEmpty });

  return (
    <div className={cn(styles.container(), className)}>
      <div className={styles.mainWrapper()}>
        <textarea
          placeholder="Ask a follow up..."
          className={styles.textarea()}
          ref={textareaRef}
          onInput={handleOnInput}
          onChange={handleOnChange}
          {...textareaProps}
        />
        <If condition={isEmpty}>
          <button type="button" className={styles.audio()}>
            <Icon.AudioWave width={24} height={24} color="neutral-50" />
          </button>
        </If>
      </div>
      <If condition={!isEmpty}>
        <div className={styles.actionsWrapper()}>
          <button type="button" className={styles.attachment()}>
            <Icon.Attachment
              width={20}
              height={20}
              color="neutral-900"
              className={styles.attachmentIcon()}
            />
          </button>
          <button type="button" className={styles.arrow()}>
            <Icon.Arrow
              direction="right"
              width={24}
              height={24}
              color="neutral-50"
            />
          </button>
        </div>
      </If>
    </div>
  );
}
