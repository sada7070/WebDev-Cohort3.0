// client side of ping-pong
import { useEffect, useRef, useState } from "react"

function App() {

  const[socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket) {
      return;
    }
    //taking message from input using ref and  sending it to the server 
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  // websocket connection happens only once at starting when this App mounts/renders. For that we use UseEffect hook with empty dependency
  useEffect(() => {
    // initiating client side server. 
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    // using 'useRef' to send text to client server from the input box 
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
