const socket = io();
let username = '';

function joinChat() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'flex';
        socket.emit('join', { username: username });
    } else {
        alert('Please enter a username');
    }
}

function sendMessage() {
    const message = document.getElementById('message-input').value;
    if (message) {
        socket.send({ text: message, sender: username });
        document.getElementById('message-input').value = '';
    }
}

function leaveChat() {
    socket.emit('leave', { username: username });
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('messages').innerHTML = '';  // Clear chat messages
    username = '';  // Reset username
}

socket.on('message', (msg) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = msg;  // Directly display the string message
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

socket.on('user_left', (msg) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = `${msg.username} has left the chat`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
