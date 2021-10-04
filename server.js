const express = require('express');
const players = require('./data/players.json');
const teams = require('./data/teams.json');

const app = express();

app.get('/players', (req, res) => {
    res.send(players);
    console.log(`GET /users`);
})

app.get('/players/:id', (req, res) => {
    const playerId = req.params.id;
    const player = players.find(p => p.id == playerId);
    if(player) res.send(player)
    else res.send(null);
    console.log(`GET /players/${playerId}`);
})

app.get('/teams/:id', (req, res) => {
    const teamId = req.params.id;
    const team = teams.find(team => team.id == teamId);
    if(team) res.send(team);
    else res.send(null);
    console.log(`GET /teams/${teamId}`);
})

app.listen(8000, () => {
    console.log('Express Server started');
})