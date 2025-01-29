import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[socket, setSocket] = useState();
  const[message, setMessage] = useState("");

  function sendMessage() {
    // @ts-ignore
    socket!.send(message);
  }

  // creating persistent connection
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return <div>
    <input onChange={(e) => {
      setMessage(e.target.value);
    }} type='text' placeholder='Message...'></input>
    <button onClick={sendMessage}>Send</button>
  </div>
}

export default App
