const express = require('express');
const app = express();
const port = 3001;

const users = require('./db.json').users; // Load users from db.json

// Define the /users endpoint to return all users
app.get('/users', (req, res) => {
    res.json({ users });
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});
