// Write your "projects" router here!
const express = require('express')

// Instantiate Router
const router = express.Router()

// Import Projects Model
const Project = require('./projects-model.js')

/***** PROJECTS ENDPOINTS*****/
router.get('/', (req, res) => {
  Project.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


module.exports = router
