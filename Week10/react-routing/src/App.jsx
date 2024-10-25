//useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.
// Clock with start and stop functionality(Stopwatch)
import {useRef, useState} from 'react'

function App() {

  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c+1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return <div>
    {currentCount}
    <br></br>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}

export default App