/*
Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript 
functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.
*/

import { useState } from "react"

// custom hook named 'useCounter' where we defined the logic of the counter(every custom hook name should start with 'use')
function useCounter() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    return setCount(c => c+1);
  }
  return {
    count: count,
    IncreaseCount: IncreaseCount
  }
}

function App() {
  return <>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
  </>
}

function Counter() {
  const { count, IncreaseCount } = useCounter();
  return <div>
     <button onClick={IncreaseCount}>counter {count}</button>
  </div>

}



export default App
