import type { Metadata } from 'next';

export function getMetadata(title: string, description?: string): Metadata {
  return {
    title: `Aldea Studio | ${title}`,
    description,
    appleWebApp: {
      title: 'Aldea Studio',
      statusBarStyle: 'black-translucent',
      capable: true,
    },
  };
}
