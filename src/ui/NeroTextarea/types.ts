import type { ComponentProps } from 'react';

type NeroTextareaProps = ComponentProps<'textarea'>;

type UseNeroTextareaProps = {
  onChange: NeroTextareaProps['onChange'];
  onInput: NeroTextareaProps['onInput'];
};

export type { NeroTextareaProps, UseNeroTextareaProps };
