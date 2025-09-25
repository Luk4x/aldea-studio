import { onboardingSteps } from '../../utils/onboarding-steps';

const MAX_STEPS = 4;

const getCurrentStep = (pathname: string) => {
  const currentStep = onboardingSteps.findIndex(
    stepPathName => stepPathName === pathname,
  );

  return currentStep;
};

export { getCurrentStep, MAX_STEPS };
