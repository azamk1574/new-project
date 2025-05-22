// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Update clock every second
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock(); // initial call

// Handle fake message sending
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("messageInput").value;
  console.log("You sent a message to yourself:", message);
  alert("Message sent to your future self: " + message);
  this.reset();
});
