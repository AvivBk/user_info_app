const express = require('express');
const app = express();
const port = 3001;

const users = require('./db.json').users;
const products = require('./db.json').products;

// Define the /users endpoint to return all users
app.get('/users', (req, res) => {
    res.json({ users });
});

// Define the /products endpoint to return all products
app.get('/api/products', (req, res) => {
    console.log('Fetching products...');
    console.log('Products:', products);

    res.json({ products });
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});
