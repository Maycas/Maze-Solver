const express = require('express')
const router = express.Router()

const findShortestPath = require('../utils/findShortestPath').shortestLengthToDestination
const initialMaze = require('../utils/initialMaze')

router.get('/maze', (req, res, next) => {
  res.json(initialMaze)
})

router.post('/solveMaze', (req, res, next) => {
  const solvedMaze = findShortestPath(req.body.grid)
  res.json({ grid: solvedMaze })
})

module.exports = router
