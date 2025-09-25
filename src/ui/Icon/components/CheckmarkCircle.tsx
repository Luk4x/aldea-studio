import { getColorValue } from '@/styles/theme';

import { iconStyles } from '../styles';
import type { IconProps } from '../types';

export function CheckmarkCircle({
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.83317 14.9998C3.87513 14.9998 0.666504 11.7912 0.666504 7.83317C0.666504 3.87513 3.87513 0.666504 7.83317 0.666504C11.7912 0.666504 14.9998 3.87513 14.9998 7.83317C14.9998 11.7912 11.7912 14.9998 7.83317 14.9998ZM11.012 6.25996C11.2477 5.9771 11.2095 5.55673 10.9266 5.32102C10.6438 5.08531 10.2234 5.12352 9.9877 5.40638L7.1217 8.84557L5.63791 7.36177C5.37756 7.10144 4.95545 7.10144 4.6951 7.36177C4.43475 7.6221 4.43475 8.04424 4.6951 8.30457L6.6951 10.3046C6.82757 10.437 7.00957 10.5076 7.1967 10.4992C7.38384 10.4906 7.55877 10.4038 7.67864 10.26L11.012 6.25996Z"
        fill={getColorValue(color)}
        className={styles.container()}
      />
    </svg>
  );
}
