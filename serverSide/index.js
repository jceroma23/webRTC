import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const PORT = 3000;
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
        cors: {
          origin: "http://localhost:5173",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true
        }
});
// SOCKET IO
let connectedPeers = [];
let connectedPeersStrangers = [];

io.on('connection', (socket) => {
// Pust Connected user to Array    
 connectedPeers.push(socket.id);
 console.log(`Connected user ${connectedPeers}`);

  socket.on('pre-offer', (dataCallType) => {
    console.log("preOffer Came");
    console.log(dataCallType);

    const { callType, strangerCode } = dataCallType;

    const findConnectedPeer = connectedPeers.find((peerSocketId) => 
      peerSocketId === strangerCode
    )
    console.log('finding Peer' + findConnectedPeer)
      if (findConnectedPeer) {
        const dataCallType = {
          callerSocketId: socket.id,
          callType,
        };
        io.to(strangerCode).emit('pre-offer', dataCallType );
      };
  })

//Disconnected User
 socket.on("disconnect", () => {
    console.log(socket.rooms); // Set { <socket.id> }
    //socket.join("room1");
    
    const newConnectedPeers = connectedPeers.filter(
        (peerSocketId) => peerSocketId !== socket.id
      );
    connectedPeers = newConnectedPeers;
    console.log(connectedPeers);
    console.log(`User disconnected ${socket.id}`);
  })

})
//Connection
httpServer.listen(PORT, (req, res, next) => {
    console.log(`Connected to ${PORT}`);
})