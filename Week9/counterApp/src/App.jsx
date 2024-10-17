// useEffect, dependency array, cleanups
import { useEffect, useState } from "react"

export default function App() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(c => c + 1);
  }

  return <div>
    <Counter count = {count}></Counter>
    <button onClick={increase}>Increase count</button>
  </div>
}

function Counter(props) {
  useEffect(function() {
    console.log("mount");

    return function() {
      console.log("unmount");
    }
  }, []);

  useEffect(function() {
    console.log("count has changed.");

    return function() {
      console.log("cleanup inside 2nd effect");
    }
  }, [props.count])

  return <div>
  Counter {props.count}
</div>
}