import { useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';
import { useLocalStorage } from '@/hooks/use-location-storage';
import { LocalStorageKeysEnum } from '@/utils/local-storage-keys';

export function useTopicsCard() {
  const router = useRouter();

  const [selectedTopics, updateSelectedTopics] = useLocalStorage<Array<string>>(
    LocalStorageKeysEnum.ONBOARDING_TOPICS,
    [],
  );

  const isSelectedTopic = (rawTopicLabel: string) => {
    const topic = rawTopicLabel.toLocaleLowerCase();
    return selectedTopics.includes(topic);
  };

  const onClickTopic = (rawTopicLabel: string) => {
    const topic = rawTopicLabel.toLocaleLowerCase();

    if (selectedTopics.includes(topic)) {
      const newSelectedTopics = selectedTopics.filter(
        selectedTopic => selectedTopic !== topic,
      );

      updateSelectedTopics(newSelectedTopics);
      return;
    }

    const newSelectedTopics = [...selectedTopics, topic];

    updateSelectedTopics(newSelectedTopics);
  };

  const onClickChipContinue = () => {
    router.push(appRoutePaths.ONBOARDING_MUSIC());
  };

  const isSelectedTopicsEmpty = selectedTopics.length === 0;

  const topicsLimitReached = selectedTopics.length === 10;

  return {
    onClickTopic,
    isSelectedTopic,
    isSelectedTopicsEmpty,
    topicsLimitReached,
    onClickChipContinue,
  };
}
