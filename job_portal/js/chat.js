// filepath: /home/toqeer-yasir/Documents/web-design-development/job_portal/js/chat.js
// script.js
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const usernameDisplay = document.getElementById("username");

// Set the username (employer or job seeker)
const username = localStorage.getItem("username") || prompt("Enter your name:");
localStorage.setItem("username", username);
usernameDisplay.textContent = username;

// Connect to WebSocket server
const socket = new WebSocket("ws://your-websocket-server-url");

// Handle incoming messages
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  appendMessage(message.sender, message.text, "received");
});

// Send message
sendButton.addEventListener("click", sendMessage);

// Send message on Enter key press
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Send message function
function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText) {
    const message = {
      sender: username,
      text: messageText,
      timestamp: new Date().toLocaleTimeString(),
    };
    socket.send(JSON.stringify(message));
    appendMessage(username, messageText, "sent");
    messageInput.value = "";
  }
}

// Append message to chat box
function appendMessage(sender, text, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);

  const senderElement = document.createElement("span");
  senderElement.classList.add("sender");
  senderElement.textContent = sender;

  const textElement = document.createElement("span");
  textElement.classList.add("text");
  textElement.textContent = text;

  const timestampElement = document.createElement("span");
  timestampElement.classList.add("timestamp");
  timestampElement.textContent = new Date().toLocaleTimeString();

  messageElement.appendChild(senderElement);
  messageElement.appendChild(textElement);
  messageElement.appendChild(timestampElement);

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Notify when a user joins or leaves
socket.addEventListener("open", () => {
  const joinMessage = {
    sender: "System",
    text: `${username} has joined the chat.`,
    timestamp: new Date().toLocaleTimeString(),
  };
  socket.send(JSON.stringify(joinMessage));
});

socket.addEventListener("close", () => {
  const leaveMessage = {
    sender: "System",
    text: `${username} has left the chat.`,
    timestamp: new Date().toLocaleTimeString(),
  };
  socket.send(JSON.stringify(leaveMessage));
});

// Handle WebSocket errors
socket.addEventListener("error", (error) => {
  console.error("WebSocket error:", error);
  alert("An error occurred with the WebSocket connection.");
});