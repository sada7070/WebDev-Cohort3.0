// while using useState hook, react re-rendering all the childrens of the parent component when it changes even though childerns are not changing.
// memo lets you skip re-rendering a children component when its props are unchanged.
import { useEffect, useState, memo } from "react";

function App() {
  return (
    <>
        <Counter></Counter>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c+1); 
    }, 3000);
  }, []);

  // re-rendering following components every 3 sec.
  return (
    <div>
      <CurrentCount count={count}></CurrentCount>
      <Increase></Increase>
      <Decrease></Decrease>
    </div>
  );
}

// even though 'CurrentCount' in memoized, it re-renders since thee props are changing.
const CurrentCount = memo(function({count}) {
  return <div>{count}</div>;
})

// no re-rendering since no props have been changed/passed
const Increase = memo(function() {

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
})

// no re-rendering since no props have been changed/passed
const Decrease = memo(function() {

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
})

export default App;
