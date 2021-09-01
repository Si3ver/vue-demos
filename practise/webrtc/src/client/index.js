import { appendAvatar, removeAvatar, addUserVideo } from "./users.js";
import { appendMessage } from "./chat.js";

const form = document.getElementById("form");
const input = document.getElementById("input");

let state = {
  userId: null,
  userName: prompt("Enter you name: "),
  cameraPeerId: null,
  screenPeerId: null,
  cameraOpened: false,
  screenShared: false,
  otherUserList: [],
};

const socket = io("/");
const cameraPeer = new Peer(undefined, {
  host: "/",
  path: "/peerjs",
  port: 3001,
});
const screenPeer = new Peer(undefined, {
  host: "/",
  path: "/peerjs",
  port: 3001,
});

socket.emit("login", { userName: state.userName });

let myCameraStream = null;
let myScreenStream = null;

socket.on("session", ({ userId, otherUserList }) => {
  state.userId = userId;
  state.otherUserList = otherUserList;

  console.log(state.otherUserList);

  // append my self avatar
  appendAvatar({ userId, userName: state.userName, isMySelf: true });
  // append other users avatar
  for (let user of otherUserList) {
    appendAvatar(user);
  }
});

socket.on("chat message", ({ userId, msg }) => {
  const item = document.createElement("li");
  const userName = state.otherUserList.find(
    (user) => user.userId === userId
  )?.userName;
  item.textContent = userName + ": " + msg;
  messages.appendChild(item);
});

socket.on("user login", ({ userId, userName }) => {
  // add new user to user list
  state.otherUserList.push({ userId, userName });
  appendAvatar({ userId, userName });
  appendMessage(`${userName} connected`, false);

  if (state.cameraOpened) {
    // TODO
  }
});

socket.on("user logout", ({ userId }) => {
  // remove user from user list
  const index = state.otherUserList.findIndex((user) => user.userId === userId);
  const userName = state.otherUserList[index]?.userName;
  if (index >= 0) {
    state.otherUserList.splice(index, 1);
  }

  removeAvatar({ userId });
  appendMessage(`${userName} disconnected`, false);
});

socket.on("cameraPeer in", ({ userId, cameraPeerId }) => {
  // ser cameraPeer id for camera video share
  const user = state.otherUserList.find((user) => user.userId === userId);
  if (user) {
    user.cameraPeerId = cameraPeerId;
  }
});

socket.on("screenPeer in", ({ userId, screenPeerId }) => {
  // ser screenPeer id for camera video share
  const user = state.otherUserList.find((user) => user.userId === userId);
  if (user) {
    user.screenPeerId = screenPeerId;
  }
});

function addScreenShareVideo(stream) {
  const shareVideo = document.getElementById("screen-video-player");
  shareVideo.srcObject = stream;
  shareVideo.play();
}

cameraPeer.on("open", (id) => {
  console.log("cameraPeer ready", id);
  state.cameraPeerId = id;
  socket.emit("cameraPeer ready", { cameraPeerId: id });
});

cameraPeer.on("call", (call) => {
  console.log("call", call);

  const cameraPeerId = call.peer;
  const user = state.otherUserList.find(
    (user) => user.cameraPeerId === cameraPeerId
  );

  call.answer(myCameraStream);

  call.on("stream", (stream) => {
    console.log("top on stream");
    addUserVideo(user.userId, stream);
  });

  appendMessage(`${user.userName} opened camera`, false);
});

screenPeer.on("open", (id) => {
  console.log("screenPeer ready", id);
  state.screenPeerId = id;
  socket.emit("screenPeer ready", { screenPeerId: id });
});

screenPeer.on("call", (call) => {
  console.log("screen called");
  const cameraPeerId = call.peer;
  const user = state.otherUserList.find(
    (user) => user.screenPeerId === cameraPeerId
  );

  call.answer(myScreenStream);
  call.on("stream", (stream) => {
    console.log("on screen share stream");
    addScreenShareVideo(stream);
  });

  appendMessage(`${user.userName} shared screen`, false);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    socket.emit("chat message", input.value);
    appendMessage(input.value, true);
    input.value = "";
  }
});

document
  .getElementById("share-screen-btn")
  .addEventListener("click", async () => {
    myScreenStream = await navigator.mediaDevices.getDisplayMedia();

    addScreenShareVideo(myScreenStream);

    state.screenShared = true;

    // call peer
    console.log(state.otherUserList);
    for (let user of state.otherUserList) {
      // connect to user
      console.log("share screen to ", user);
      const call = screenPeer.call(user.screenPeerId, myScreenStream);
    }
  });

document
  .getElementById("share-video-btn")
  .addEventListener("click", async () => {
    myCameraStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // add my self
    addUserVideo(state.userId, myCameraStream);

    state.cameraOpened = true;

    // call peer
    console.log(state.otherUserList);
    for (let user of state.otherUserList) {
      // connect to user
      console.log("share camera to ", user);
      const call = cameraPeer.call(user.cameraPeerId, myCameraStream);

      call.on("stream", (stream) => {
        console.log("bottom on stream");
        addUserVideo(user.userId, stream);
      });
    }
  });
