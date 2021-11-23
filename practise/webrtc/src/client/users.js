const users = document.getElementById("users");

export function appendAvatar({ userId, userName, isMySelf }) {
  const item = document.createElement("li");

  item.setAttribute("data-id", userId);
  item.textContent = userName;

  if (isMySelf) {
    item.classList.add("is-myself");
  }

  users.appendChild(item);
}

export function removeAvatar({ userId }) {
  const item = users.querySelector(`[data-id="${userId}"]`);

  if (item) {
    users.removeChild(item);
  }
}

export function addUserVideo(userId, stream) {
  const userAvatar = users.querySelector(`[data-id="${userId}"]`);

  const video = document.createElement("video");
  video.srcObject = stream;
  userAvatar.innerHTML = "";
  userAvatar.appendChild(video);

  video.play();
}
