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
 console.log('User COnnected to socket.io server');
 console.log(socket.id)
})
//Connection
httpServer.listen(PORT, (req, res, next) => {
    console.log(`Connected to ${PORT}`);
})