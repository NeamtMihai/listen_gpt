function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;
  
    const messagesDiv = document.getElementById("messages");
  
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = message;
    messagesDiv.appendChild(userMessage);
  
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = "This is a fake bot response.";
    messagesDiv.appendChild(botMessage);
  
    input.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  document.getElementById("chatInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // prevents newline
      sendMessage();
    }
  });  