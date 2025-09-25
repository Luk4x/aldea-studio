import { cn } from '@/utils/cn';

import { chipStyles } from './styles';
import type { ChipProps } from './types';

export type * from './types';

export function Chip({
  type = 'button',
  isActive = false,
  disabled = false,
  variant = 'primary-500',
  iconPosition = 'left',
  Icon,
  iconConfig,
  children,
  className,
  ...chipProps
}: ChipProps) {
  const styles = chipStyles({ disabled, isActive, iconPosition, variant });

  return (
    <button
      type={type}
      disabled={disabled}
      aria-pressed={isActive}
      className={cn(styles.button(), className, styles.buttonVariant())}
      {...chipProps}
    >
      {Icon ? (
        <Icon {...iconConfig} color={isActive ? variant : iconConfig?.color} />
      ) : null}
      {children}
    </button>
  );
}
