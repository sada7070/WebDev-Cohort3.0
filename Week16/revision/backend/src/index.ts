import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

// event handler
wss.on("connection", function(socket) {
    // to recieve msg form client
    socket.on("message", (e) => {
        if(e.toString() === "ping") {
            socket.send("pong");
        } else {
            socket.send("Incorrect input.")
        }
    });
})