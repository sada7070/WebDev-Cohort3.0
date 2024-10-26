// prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.
// The Context API enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

import {useState, createContext, useContext} from 'react'

// creating context which serves as a container for the data you want to share.
const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  //'Provider' wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
  return <>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <LightBulb></LightBulb>
    </BulbContext.Provider>
  </>

  function LightBulb() {
    return <div>
      <Bulb></Bulb>
      <Switch></Switch>
    </div>
  }

  function Bulb() {
    // Consumer: This component subscribes to context changes. It allows you to access the context value (using useContext  hook)
    const { bulbOn } = useContext(BulbContext);
    return <div>
      {bulbOn ?'Bulb on' : 'Bulb off'}
    </div>
  }

  function Switch() {
    const { bulbOn, setBulbOn } = useContext(BulbContext);
    function toggle () {
      setBulbOn(!bulbOn);
    }
    return <div>
      <button onClick={toggle}>Switch</button>
    </div>
  }
}

export default App
