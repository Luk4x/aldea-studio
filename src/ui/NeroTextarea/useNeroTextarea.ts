import {
  type ChangeEventHandler,
  type InputEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import type { UseNeroTextareaProps } from './types';

const DEFAULT_SIZE = '22px';

export function useNeroTextarea({ onChange, onInput }: UseNeroTextareaProps) {
  const [inputValueState, setInputValueState] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const resize = () => {
    if (!textareaRef.current) {
      return;
    }

    if (textareaRef.current.style.height !== DEFAULT_SIZE) {
      textareaRef.current.style.height = 'auto';
    }

    const newHeight = textareaRef.current.value
      ? `${textareaRef.current.scrollHeight}px`
      : DEFAULT_SIZE;

    textareaRef.current.style.height = newHeight;
  };

  useEffect(() => {
    resize();
  }, []);

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    onChange?.(e);
    setInputValueState(e.target.value);
  };

  const handleOnInput: InputEventHandler<HTMLTextAreaElement> = e => {
    onInput?.(e);
    resize();
  };

  const isEmpty = !inputValueState;

  return { handleOnChange, textareaRef, isEmpty, handleOnInput };
}
