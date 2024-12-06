import { WebSocketServer, WebSocket } from "ws";

// initiating ws server
const wss = new WebSocketServer({ port: 8080 });

let userCount =  0;
// array of type websocket which will have all sockets
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    // pushing the new socket to the array
    allSockets.push(socket);

    userCount++;
    console.log("user counted #" + userCount);

    // to recieve message from server
    socket.on("message", (message) => {
        console.log("message recieved " + message.toString());

        allSockets.forEach(s => {    
            // to send message  from client
            s.send(message.toString() + " sent from client server.");
        })
    })

    // If the disconnected socket object is present in the allSockets array, it will be removed, and the result will be a new array that doesn't include the specified socket.
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x != socket);
    })
})