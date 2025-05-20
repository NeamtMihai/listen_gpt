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

function getLastTwoWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    const lastTwo = words.slice(-2)
    lastTwo[0] = lastTwo[0].split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return lastTwo.join(' ');
}

function createMessage(message) {
    const dice = Math.floor(Math.random() * 10);
    if (dice == 7)
        window.location.replace("https://youtu.be/E9iP8jdtYZ0?si=_p-OgRF7PHvnXoaN");

    if (dice % 2 == 0)
        return getLastTwoWords(message) + '? ' + getRandomResponse();
    return getRandomResponse();
}

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
    botMessage.textContent = createMessage(message)
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


document.addEventListener('mousemove', (event) => {
    const gradientBackground = document.body;

    const x = event.clientX;
    const y = event.clientY;
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;

    gradientBackground.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});