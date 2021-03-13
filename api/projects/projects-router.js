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

router.get('/:id/actions', (req, res) => {
  Project.getProjectActions(req.params.id)
    .then(projectActions => {
      res.status(200).json(projectActions)
    })
    .catch(() => {
      res.status(500).json([])
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

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const changes = req.body

  try {
    const updatedProject = await Project.update(id, changes)
    res.status(21).json(updatedProject)

  } catch (err) {
    res.status(400)
  }
})

router.delete('/:id', (req, res) => {
  Project.remove(req.params.id)
    .then(() => {
      res.status(200).json('Project deleted')
    })
    .catch(() => {
      res.status(404).json('No such project with id')
    })
})


module.exports = router
