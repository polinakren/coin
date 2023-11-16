import { useState } from 'react';
import { useDebounce } from 'react-use';

export const useDelay = <T>(value: T, onChange: (data: T) => void, delay = 500) => {
  const [initValue, setInitValue] = useState(value);

  const [, cancelDelay] = useDebounce(
    function () {
      onChange(initValue);
    },
    delay,
    [initValue]
  );
  return { initValue, setInitValue, cancelDelay };
};
