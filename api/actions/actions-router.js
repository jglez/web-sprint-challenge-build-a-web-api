// Write your "actions" router here!

// Import Express
const express = require('express')

// Import Actions Model
const Action = require('./actions-model.js')

// Instantiate Router
const router = express.Router()

/***** ACTIONS ENDPOINTS *****/
router.get('/', (req, res) => {
  Action.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router