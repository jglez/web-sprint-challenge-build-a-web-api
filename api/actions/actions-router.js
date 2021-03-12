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

router.get('/:id', (req, res) => {
  const id = req.params.id

  Action.get(id)
    .then(action => {

      if (action === null) {
        res.status(404).json('Action not found on server')
      } else {
        res.status(200).json(action)
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router