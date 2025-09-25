import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function ThumbsDown({
  width = 24,
  height = 24,
  color = 'primary-500',
  ...svgProps
}: IconProps) {
  const styles = iconStyles();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M5.83341 2.9165L2.50008 2.91652C2.03984 2.91652 1.66675 3.28961 1.66675 3.74985V10.4165C1.66675 10.8767 2.03985 11.2498 2.50008 11.2498H5.83341"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9563 2.9165H5.83325V11.2498L11.5964 17.0831L11.6555 17.0233C12.8599 15.8042 13.1982 13.9603 12.5064 12.3848L12.0081 11.2498H16.6853C17.8196 11.2498 18.6142 10.1162 18.2394 9.03256L16.5105 4.03259C16.2793 3.36411 15.6561 2.9165 14.9563 2.9165Z"
        stroke={getColorValue(color)}
        className={styles.container()}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
