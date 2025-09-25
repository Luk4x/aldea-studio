import { useCallback, useState } from 'react';

import type { AskedProps } from './types';

export function useAskNero() {
  const [askedState, setAskedSate] = useState<AskedProps>({
    hasAsked: false,
    dataIndex: 0,
  });

  const handleAskNero = useCallback((hasAsked: boolean) => {
    setAskedSate(prevState => ({ ...prevState, hasAsked }));
  }, []);

  const handleDataAskedToNero = useCallback((dataIndex: number) => {
    setAskedSate(prevState => ({ ...prevState, dataIndex }));
  }, []);

  return { askedData: askedState, handleAskNero, handleDataAskedToNero };
}
