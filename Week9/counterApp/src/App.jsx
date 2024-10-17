import { useEffect, useState } from "react"

function App() {
  // conditional rendering
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function() {
    setInterval(function() {
      setCounterVisible(c => !c)
    }, 5000)                                                // here we are mounting and unmounting for succussive 5 sec
  }, [])

  return <div>
    <Counter></Counter>
    { counterVisible && <Timer></Timer> }
  </div>
}

// counter component
function Counter() {
  // counter state
  const [ count, setCount ] = useState(0);

  function increaseCount() {
    setCount(count+1);
  }

  function decreaseCount() {
    setCount(count-1);
  }

  function resetCount() {
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset</button>
  </div>
}

// timer component for conditional rendering(5 sec here)
function Timer() {
  const [ count, setCount ] = useState(0);

  // useEffect hook gaurds our setInterval from re-rendering again and again. In mounts the functions which present inside only once at first.
  useEffect(function() {
    let clock = setInterval(function() {
      // we can not call 'count+1', it will stop after '2' so it has to be function(here count is an empty function)
      setCount(count => count+1);
    }, 1000);

    // when component unmount we have to stop the clock manually using clear interval
    return function() {
      clearInterval(clock);
    }
  }, [])

  return <div>
    <h1>{count}</h1>
  </div>
}

export default App  
