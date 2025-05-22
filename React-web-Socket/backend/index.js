import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5174",
//     credentials: true,
//   })
// );

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
    credentials: true,
  },
}); // configuration of socket.io

io.on("connection", (socket) => {
  console.log("new user connect");

  socket.on("update-content", (content) => {
    //GET
    socket.broadcast.emit("recieve-update", content); //emit-> event send to frontend
  }); // 2 custom event same naam se frontend main call krdo
}); //api

io.on("disconnect", () => {
  console.log("user disconnected!");
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(` server is running on ${PORT}`);
});
