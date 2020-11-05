import { useState } from "react";

// why is there this useHook Abstraction?
// how many places is it being used?
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  // handles input onChange
  return [
    { value, onChange: (e) => e.target.value },
    () => setValue(initialValue),
  ];
};
