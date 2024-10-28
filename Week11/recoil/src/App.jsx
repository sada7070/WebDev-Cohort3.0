/*  recoil with selector:
  > A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
  > Derived state is a powerful concept because it lets us build dynamic data that depends on other data.
  > refer image 'react-selector-example' to understand the below example
*/

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return <div>
    <RecoilRoot>
      <Buttons></Buttons>
      <Counter></Counter>
      <IsEven></IsEven>
    </RecoilRoot>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom);

  return <div>
    <button onClick={() => setCount(c => c+2)}>Increase</button>    
    <button onClick={() => setCount(c => c-1)}>Decrease</button>    
  </div>
}

// subscribing to the atom
function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

// subscribing to the selector
// it re-renders only when there is a change in isEven value, it will not check whether the change in counter made any changes in isEven.  
function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>
    {even ? "even" : "odd"}
  </div>
}

export default App;