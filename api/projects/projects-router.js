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

router.get('/:id', (req, res) => {
  Project.get(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json('Project not found')
      } else {
        res.status(200).json(project)
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  Project.insert(req.body)
    .then(() => {
      if (!req.body) {
        res.status(400).json('Invalid Request')
      } else {
        res.status(200).json(req.body)
      }
    })
    .catch(err => {
      res.status(400).json(err)
    })
})


module.exports = router
