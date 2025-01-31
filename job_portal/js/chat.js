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
sendButton.addEventListener("click", () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    const message = {
      sender: username,
      text: messageText,
    };
    socket.send(JSON.stringify(message));
    appendMessage(username, messageText, "sent");
    messageInput.value = "";
  }
});

// Append message to chat box
function appendMessage(sender, text, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.textContent = `${sender}: ${text}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// server.js
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("A new client connected!");

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  socket.on("close", () => {
    console.log("A client disconnected.");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
