export const appRoutePaths = {
  HOME: () => '/',
  ONBOARDING: () => '/onboarding',
  ONBOARDING_TOPICS: () => '/onboarding/topics',
  ONBOARDING_MUSIC: () => '/onboarding/music',
  ONBOARDING_TODO: () => '/onboarding/todo',
  ONBOARDING_DONE: () => '/onboarding/done',
} satisfies Record<Uppercase<string>, (...params: Array<string>) => string>;
