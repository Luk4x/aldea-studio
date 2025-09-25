import { getColorValue } from '@/styles/theme';
import { cn } from '@/utils/cn';

import { stepsStyles } from './styles';
import type { StepsProps } from './types';

export function Steps({
  current,
  max,
  color = 'primary-500',
  className,
  ...stepsProps
}: StepsProps) {
  const styles = stepsStyles();

  const progress = Math.min(Math.max(current / max, 0), 1);
  const width = `${progress * 100}%`;

  return (
    <div
      className={cn(styles.container(), className)}
      role="progressbar"
      aria-label={`Step ${current} of ${max}`}
      {...stepsProps}
    >
      <div
        style={{ backgroundColor: getColorValue(color) }}
        className={styles.overlay()}
      />
      <div
        style={{ width, backgroundColor: getColorValue(color) }}
        className={styles.progress()}
      />
    </div>
  );
}
