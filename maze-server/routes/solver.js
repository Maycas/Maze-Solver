const express = require('express')
const router = express.Router()

const findShortestPath = require('../utils/findShortestPath').shortestLengthToDestination

router.post('/solveMaze', (req, res, next) => {
  const solvedMaze = findShortestPath(req.body.grid)
  res.json({ values: solvedMaze })
})

module.exports = router
