const express = require('express');
const users = require('./data/users.json');

const app = express();

app.get('/users', (req, res) => {
    res.send(users);
    console.log(`GET /users`);
})

app.listen(8000, () => {
    console.log('Express Server started');
})