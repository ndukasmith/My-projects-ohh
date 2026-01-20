const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

// Create a new message
app.post('/messages', (req, res) => {
    const newMessage = { id: messages.length + 1, ...req.body };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Retrieve all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
