import { useState } from "react";
import { useFetch } from "./hooks/useFetch"

function App() {
  // useState for multile buttons.
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if(loading) {
    return <div>
      Loading...
    </div>
  }
  // buttons to toggle between the posts.
  return <>
  <button onClick={() => setCurrentPost(1)}>1</button>
  <button onClick={() => setCurrentPost(2)}>2</button>
  <button onClick={() => setCurrentPost(3)}>3</button>
  {JSON.stringify(finalData)}
  </>
}
export default App
