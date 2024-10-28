import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter></Counter>
      </RecoilRoot>
    </>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount></CurrentCount>
      <Increase></Increase>
      <Decrease></Decrease>
    </div>
  );
}

function CurrentCount() {
  // subscibing to the atom
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increase() {
  // subscribing to the setter
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease() {
  // subscribing to the setter
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
