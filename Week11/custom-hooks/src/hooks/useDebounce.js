import { useEffect, useState } from "react";

// this hook returns the value after a perticular time/delay as been passed.
// if the input is continuous without reaching delay(eg., typing continuously in searchbar before reaching delay), the hook will not trigger.
// when it passes delay time, it immediately run the hook and do its thing(hitting backed through fetch in this case)
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState("");
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // cleaner function which clears the old clock
      return () => {
        clearTimeout(handler);
      }
    }, [value, delay]);
  
    return debouncedValue;
  }