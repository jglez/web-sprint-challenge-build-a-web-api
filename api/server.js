// Import Express
const express = require('express');

// Import Actions Router
const actionsRouter = require('./actions/actions-router.js')

// Instantiate Express application
const server = express();

// Enable the server to parse JSON bodies
server.use(express.json())

// Funnel Actions requests to Actions Router
server.use('/api/actions', actionsRouter)

module.exports = server;
