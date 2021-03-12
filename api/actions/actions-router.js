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

router.post('/', (req, res) => {
  Action.insert(req.body)
    .then(() => {
      res.status(200).json(req.body)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

// router.put()

// router.delete('/:id', (req, res) => {
//   Action.remove(req.params.id)
//     .then(test => {
//       res.status(200).json(test)
//     })
// })

module.exports = router