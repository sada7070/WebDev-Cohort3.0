// Rolling up the state
// As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state in each component, 
// you can lift the state up to the Lowest Common Ancestor, allowing the common ancestor to manage it.

import {useState} from 'react'
function App() {

  return <>
    <LightBulb></LightBulb>
  </>

  function LightBulb() {
    // state is rolled up here and state variables are sending as props to the children components.
    const [bulbOn, setBulbOn] = useState(true);
    return <div>
      <Bulb bulbOn={bulbOn}></Bulb>
      <Switch bulbOn={bulbOn} setBulbOn={setBulbOn}></Switch>
    </div>
  }

  function Bulb({bulbOn}) {
    // since 'bulbOn' and 'setBuldOn' variable need to be accessed by 'Switch' component and 'bulbOn' by Bulb component, the state is defined to their lowest common ancestor. 
    return <div>
      {bulbOn ?'Bulb on' : 'Bulb off'}
    </div>
  }

  function Switch({bulbOn, setBulbOn}) {
    function toggle () {
      setBulbOn(!bulbOn);
    }
    return <div>
      <button onClick={toggle}>Switch</button>
    </div>
  }
}

export default App
