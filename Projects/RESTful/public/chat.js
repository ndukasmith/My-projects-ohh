// Chat functionality
console.log("Chat app loaded");

// Save username to localStorage
function saveUsername() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    console.log('Username saved:', username);
}

// Send message to the server
function sendMessage() {
    const username = localStorage.getItem('username');
    const message = document.getElementById('message').value;

    if (!username) {
        alert('Please enter and save your username first.');
        return;
    }

    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
        loadMessages();
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

// Load messages from the server
function loadMessages() {
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML = '';
        data.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${msg.username}: ${msg.message}`;
            chatBox.appendChild(messageElement);
        });
    })
    .catch(error => {
        console.error('Error loading messages:', error);
    });
}

// Load messages when the page loads
window.onload = loadMessages;
