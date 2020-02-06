
/*
var matrix = [
  	[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, ' ', ' ', ' ', -1, ' ', ' ', ' ', ' ', -1],
  [-1, ' ', -1, ' ', ' ', ' ', -1, ' ', -1, -1],
  [-1, ' ', -1, -1, ' ', -1, -1, ' ', ' ', -1],
  [-1, ' ', ' ', -1, ' ', -1, -1, -1, ' ', -1],
  [-1, ' ', -1, -1, ' ', ' ', ' ', ' ', ' ', -1],
  [-1, ' ', ' ', ' ', ' ', -1, ' ', -1, -1, -1],
  [-1, ' ', -1, -1, ' ', -1, ' ', -1, ' ', -1],
  [-1, ' ', ' ', -1, ' ', ' ', ' ', -1, 0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
]

var start = [8, 8]
var end = [7, 7]

function findShortestWay (maze, position, end) {
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
      // Perform this check first:
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

function shortestLengthToDestnation () {

}

var path = findShortestWay(matrix, start, end)
console.log(JSON.stringify(path))

// Checks if a position in the maze matrix can be accessed or not
// Function returns either true or false if the cell has a value -1 (wall)
// or has already been visited
function isSafe(maze, visited, newMove) {
  var x = newMove[0]
  var y = newMove[1]
  return !(maze[])
}

class ShortestPath
{
	// M x N matrix
	private static final int M = 10;
	private static final int N = 10;

	// Check if it is possible to go to (x, y) from current position. The
	// function returns false if the cell has value 0 or already visited
	private static boolean isSafe(int mat[][], int visited[][], int x, int y)
	{
		return !(mat[x][y] == 0 || visited[x][y] != 0);
	}

	// if not a valid position, return false
	private static boolean isValid(int x, int y)
	{
		return (x < M && y < N && x >= 0 && y >= 0);
	}

	// Find Shortest Possible Route in a Matrix mat from source cell (0, 0)
	// to destination cell (x, y)

	// 'min_dist' stores length of longest path from source to destination
	// found so far and 'dist' maintains length of path from source cell to
	// the current cell (i, j)

	public static int findShortestPath(int mat[][], int visited[][],
					 int i, int j, int x, int y, int min_dist, int dist)
	{
		// if destination is found, update min_dist
		if (i == x && j == y)
		{
			return Integer.min(dist, min_dist);
		}

		// set (i, j) cell as visited
		visited[i][j] = 1;

		// go to bottom cell
		if (isValid(i + 1, j) && isSafe(mat, visited, i + 1, j)) {
			min_dist = findShortestPath(mat, visited, i + 1, j, x, y,
										min_dist, dist + 1);
		}

		// go to right cell
		if (isValid(i, j + 1) && isSafe(mat, visited, i, j + 1)) {
			min_dist = findShortestPath(mat, visited, i, j + 1, x, y,
										min_dist, dist + 1);
		}

		// go to top cell
		if (isValid(i - 1, j) && isSafe(mat, visited, i - 1, j)) {
			min_dist = findShortestPath(mat, visited, i - 1, j, x, y,
										min_dist, dist + 1);
		}

		// go to left cell
		if (isValid(i, j - 1) && isSafe(mat, visited, i, j - 1)) {
			min_dist = findShortestPath(mat, visited, i, j - 1, x, y,
										min_dist, dist + 1);
		}

		// Backtrack - Remove (i, j) from visited matrix
		visited[i][j] = 0;

		return min_dist;
	}

	public static void main(String[] args)
	{
		int mat[][] =
		{
				{ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 },
				{ 0, 1, 1, 1, 1, 1, 0, 1, 0, 1 },
				{ 0, 0, 1, 0, 1, 1, 1, 0, 0, 1 },
				{ 1, 0, 1, 1, 1, 0, 1, 1, 0, 1 },
				{ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1 },
				{ 1, 0, 1, 1, 1, 0, 0, 1, 1, 0 },
				{ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1 },
				{ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0 },
				{ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 },
				{ 0, 0, 1, 0, 0, 1, 1, 0, 0, 1 },
		};

		// construct a matrix to keep track of visited cells
		int[][] visited = new int[M][N];

		int min_dist = findShortestPath(mat, visited, 0, 0, 7, 5,
										Integer.MAX_VALUE, 0);

		if(min_dist != Integer.MAX_VALUE) {
			System.out.println("The shortest path from source to destination "
							  + "has length " + min_dist);
		}
		else {
			System.out.println("Destination can't be reached from source");
		}
	}
}
*/
