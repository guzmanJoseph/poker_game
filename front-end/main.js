// front-end/main.js
const socket = io();
console.log("Connected to server with ID:", socket.id);

socket.on('connect', () => {
  console.log("✅ Successfully connected to server");
});
