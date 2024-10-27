import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";


function App() {
  const [inputVal, setInputVal] = useState("");
  // we pass original and updated input values, and delay time as input to the deBounce hook.
  const debouncedValue = useDebounce(inputVal, 200);

  // this function triggers and update the 'inputval' through 'setInputVal' whenever there is change in input.
  function change(e) {
    setInputVal(e.target.value);
  }

  // useEffect performs the expensive operations like fetch whenever "debouncedValue" changes.
  useEffect(() => {
    fetch("api.amazon.com/search");
    console.log("expensive operations.");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}
export default App;
