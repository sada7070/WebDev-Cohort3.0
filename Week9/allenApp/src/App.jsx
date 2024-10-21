import { useEffect, useState } from "react";

function App() {

  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer(currentValue => !currentValue);
    }, 5000);
  }, []);

  return <div>
    {showTimer && <Timer></Timer>}
  </div>
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      console.log("from inside timer");
      setSeconds(prev => prev+1);
    }, 1000);
    // cleanup function(it stops the timer running in the background, bcz even the function is unmounted it was running in the background)
    return function() {
      clearInterval(clock);
    }

  }, []);

  return <div>{seconds} seconds elapsed</div>
}

export default App
