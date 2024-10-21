import { useEffect, useState } from "react";

function App() {
  // this state is for buttons
  const [currentTab, setCurrentTab] = useState(1);
  // this state is for incoming json data
  const [tabData, setTabData] = useState({});
  // this state is for "loading" till the data is being fetched from json
  const [loading, setLoading] = useState(true);

  // useEffect hook has 2 arguments, a function and a dependecy array
  // in this hook we are fetching json data whenever the todos switched i.e., this hook is hitting backend
  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then( async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });
      // this hook runs whenever 'currentTab'(dependency) changes. 
  }, [currentTab])

  return (
    // toggling colors when the button clicked & loading the data's title
  <div>
    <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
    <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
    <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
    <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
    <br></br>
    {loading ? "Loading..." : tabData.title}
  </div>
  );
}

export default App
