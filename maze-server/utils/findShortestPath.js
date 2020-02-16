// Breadth first search
const findShortestPath = (maze, position, end) => {
  var queue = []

  maze[position[0]][position[1]] = 1
  queue.push([position]) // store a path, not just a position

  while (queue.length > 0) {
    var path = queue.shift() // get the path out of the queue
    var pos = path[path.length - 1] // ... and then the last position from it
    var direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ]

    for (var i = 0; i < direction.length; i++) {
      // perform this check first:
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        // return the path that led to the find
        return path.concat([end])
      }

      if (direction[i][0] < 0 || direction[i][0] >= maze[0].length ||
          direction[i][1] < 0 || direction[i][1] >= maze[0].length ||
          maze[direction[i][0]][direction[i][1]] != 0) {
        continue
      }

      maze[direction[i][0]][direction[i][1]] = 1
      // extend and push the path on the queue
      queue.push(path.concat([direction[i]]))
    }
  }
}

const getStartingSquare = (maze) => {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 0) {
        return [row, col]
      }
    }
  }
  return undefined
}

const shortestLengthToDestination = (maze) => {
  let start = getStartingSquare(maze)
  let costMaze = JSON.parse(JSON.stringify(maze)) // matrix deep clone
  let currentRoutePath = []
  let iterableMaze = []

  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === ' ') {
        // reset the iterableMaze by deep cloning the maze
        iterableMaze = JSON.parse(JSON.stringify(maze))
        // set value in cost maze
        currentRoutePath = findShortestPath(iterableMaze, start, [row, col])
        if (currentRoutePath) {
          costMaze[row][col] = currentRoutePath.length - 1 // the algorithm returns the origin in the path
        } else {
          costMaze[row][col] = 'X'
        }
      }
    }
  }
  return costMaze
}

module.exports.shortestLengthToDestination = shortestLengthToDestination
