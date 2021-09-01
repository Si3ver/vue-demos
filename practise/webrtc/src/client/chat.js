const messages = document.getElementById("messages");

export function appendMessage(msg, isMySelf) {
  const item = document.createElement("li");
  item.textContent = msg;

  if (isMySelf) {
    item.classList.add("is-myself");
  }

  messages.appendChild(item);
}
