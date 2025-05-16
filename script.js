const responses = [
    'Te aud.'
    , 'Aud ce zici.'
    , 'Da, da, sunt aici.'
    , 'Te înțeleg.'
    , 'Da, are sens ce spui.'
    , 'Mhm, continuă.'
    , 'Sunt cu tine.'
    , 'Îți dau dreptate.'
    , 'Wow, da, înțeleg perfect.'
    , 'Da, total de acord.'
    , 'Simt și eu la fel.'
    , 'Te ascult.'
    , 'Aha, cap-coadă.'
    , 'Te urmăresc.'
    , 'Zici bine.'
    , 'Fix asta gândeam și eu.'
    , 'Da, exact!'
    , 'Îți simt vibe-ul.'
    , 'Sunt pe aceeași lungime de undă.'
    , 'Înțeleg unde vrei să ajungi.'
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
