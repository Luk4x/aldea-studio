import { useRouter } from 'next/navigation';

import { appRoutePaths } from '@/config/routing';
import { useLocalStorage } from '@/hooks/use-location-storage';
import { LocalStorageKeysEnum } from '@/utils/local-storage-keys';

export function useTodoCard() {
  const router = useRouter();

  const [todosDone, updateTodosDone] = useLocalStorage<Array<string>>(
    LocalStorageKeysEnum.ONBOARDING_TODOS,
    [],
  );

  const isConnected = (rawTodoLabel: string) => {
    const todo = rawTodoLabel.toLocaleLowerCase();
    return todosDone.includes(todo);
  };

  const onConnect = (rawTodoLabel: string) => {
    const todo = rawTodoLabel.toLocaleLowerCase();

    if (todosDone.includes(todo)) {
      const newTodosDone = todosDone.filter(todo => todo !== todo);

      updateTodosDone(newTodosDone);
      return;
    }

    const newTodosDone = [...todosDone, todo];

    updateTodosDone(newTodosDone);
  };

  const onClickChipContinue = () => {
    router.push(appRoutePaths.ONBOARDING_DONE());
  };

  const isTodosDoneEmpty = todosDone.length === 0;

  return {
    onConnect,
    isConnected,
    isTodosDoneEmpty,
    onClickChipContinue,
  };
}
