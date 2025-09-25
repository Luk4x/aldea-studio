import { useEffect, useState } from 'react';

export function useLocalStorage<T = unknown>(
  key: string,
  initialValue: T,
): [T, (newValue: T) => void] {
  const [storedValueState, setStoredValueState] = useState<T>(initialValue);

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      storeValue(initialValue);
      return;
    }

    setStoredValueState(JSON.parse(item) as T);
  }, []);

  const storeValue = (newValue: T) => {
    setStoredValueState(newValue as T);

    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValueState as T, storeValue];
}
