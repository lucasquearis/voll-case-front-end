import { useState } from 'react';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const setInputState = ({ target }) => {
    const { value } = target;
    setState(value);
  };
  return [state, setInputState];
};

export default useInput;
