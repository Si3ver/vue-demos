const express = require("express");
const https = require("https");
const { Server } = require("socket.io");
const path = require("path");

const fs = require("fs");

const privateKey = fs
  .readFileSync(path.resolve(__dirname, "privatekey.pem"))
  .toString();
const certificate = fs
  .readFileSync(path.resolve(__dirname, "certificate.pem"))
  .toString();

const app = express();
app.use(express.static(path.resolve(__dirname, "../client")));

// peer server for video sharing
const { PeerServer } = require("peer");
PeerServer({
  ssl: { key: privateKey, cert: certificate },
  port: 3001,
  path: "/peerjs",
});

// socket.io
const server = https.createServer({ key: privateKey, cert: certificate }, app);
const io = new Server(server);

let state = {
  userList: [],
};
io.on("connection", (socket) => {
  function randomUserId() {
    return Math.floor(Math.random() * 10000);
  }

  const userId = randomUserId();

  socket.on("login", ({ userName }) => {
    socket.emit("session", { userId, otherUserList: [...state.userList] });
    socket.broadcast.emit("user login", { userId, userName });

    state.userList.push({ userId, userName });
    console.log(state.userList);
  });

  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", { userId, msg });
  });

  socket.on("cameraPeer ready", ({ cameraPeerId }) => {
    // ser cameraPeer id for camera video share
    const user = state.userList.find((user) => user.userId === userId);
    if (user) {
      user.cameraPeerId = cameraPeerId;
    }

    socket.broadcast.emit("cameraPeer in", { userId, cameraPeerId });
  });

  socket.on("screenPeer ready", ({ screenPeerId }) => {
    // ser screenPeer id for camera video share
    const user = state.userList.find((user) => user.userId === userId);
    if (user) {
      user.screenPeerId = screenPeerId;
    }

    socket.broadcast.emit("screenPeer in", { userId, screenPeerId });
  });

  socket.on("disconnect", () => {
    const index = state.userList.findIndex((user) => user.userId === userId);
    if (index >= 0) {
      state.userList.splice(index, 1);
    }

    console.log(state.userList);

    socket.broadcast.emit("user logout", { userId });
  });
});

server.listen(3000, () => {
  console.log("Server listening on https://localhost:3000");
});
