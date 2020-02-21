# Maze Solver

A fullstack application that, with a given maze and a starting point, it defines what's the lowest cost to move from the start to any of the accessible cells in a maze, using the breadth first search algorithm.

## Client side app (Frontend)

The client side application is built in React and allows the user to:

* Edit the initial maze given back by the server, by clicking in a wall or in an empty cell to turn it into a cell or a wall, respectively
* Drag and drop the starting point (green couloured cell) to any cell inside the maze to start from a different place.
* Resolve the maze
* Reset the maze to the initial state coming from the server

### Initializing the client side app

````bash
cd maze-app
npm install
````

Initialize app with:

````bash
yarn start
````

or 

````bash
npm start
````

## Server Side app (Backend)

The server side app is built using Express and is basically an API with 2 endpoints:

* /maze - Returns the initial maze
* /solveMaze - Solves a given maze from the client side app, returning the same maze but with the cost it would take to go to a specific cell coming from the origin

### Initializing the server side app

```bash
cd maze-server
npm install
```

Initialize with:

````bash
yarn start
````

or 

````bash
npm start
````

## Technologies used

React, Node.js, Express
