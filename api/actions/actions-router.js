// Write your "actions" router here!

// Import Express
const express = require('express')

// Import Actions Model
const Action = require('./actions-model.js')

// Instantiate Router
const router = express.Router()

/***** ACTIONS ENDPOINTS *****/
router.get('/', (req, res) => {
  res.status(200).json('Hello from the ether')
})

module.exports = router