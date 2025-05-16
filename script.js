const responses = [
    "That's interesting!",
    "Tell me more.",
    "Why do you think that?",
    "Hmm... let me think.",
    "Can you explain that further?",
    "I'm here to help!",
    "Absolutely!",
    "Sounds good!",
    "Okay!",
    "I'm not sure, but I'll try my best!"
  ];
  
  function getRandomResponse() {
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
  }
  
  function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;
  
    const messagesDiv = document.getElementById("messages");
  
    const userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.textContent = message;
    messagesDiv.appendChild(userMessage);
  
    const botMessage = document.createElement("div");
    botMessage.className = "message";
    botMessage.textContent = getRandomResponse();
    messagesDiv.appendChild(botMessage);
  
    input.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  document.getElementById("chatInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
  