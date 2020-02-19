import React from 'react'
import axios from 'axios'

import styles from './Main.module.css'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import Maze from '../../components/Maze/Maze'
import Controls from '../../components/UI/Controls/Controls'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
			grid: [],
			solved: false
		}
	}
	
	componentDidMount () {
		this.getMaze()
	}

	getMaze = () => {
		axios.get('http://localhost:8000/api/maze')
			.then(response => this.setState({ grid: response.data.grid, solved: false }))
			.catch(error => console.error(error))
	}

  onSolveClickHandler = () => {
		axios
			.post('http://localhost:8000/api/solveMaze', {
				grid: this.state.grid
			})
			.then(response => this.setState({ grid: response.data.grid, solved: true }))
			.catch(error => console.error(error))
	}
	
	onCellClickedHandler = (event, cellPosition) => {
		const value = event.target.innerText
		const pos = cellPosition
		const grid = JSON.parse(JSON.stringify(this.state.grid))		
		if(!this.state.solved) {
			switch (value) {
				case '':
					grid[pos[0]][pos[1]] = -1
					break
				case '-1':
					console.log("clicked")
					grid[pos[0]][pos[1]] = ' '
					break
				default:
					break
			}
		}
		this.setState({ grid: grid })
	}

	onResetMazeHandler = () => {
		this.getMaze()
	}

  render () {
    return (
			<div className={styles.Main}>
				<Maze 
					maze={this.state.grid}
					onCellClicked={this.onCellClickedHandler}
				/>
				<Controls 
					onSolveClick={this.onSolveClickHandler}
					onResetMaze={this.onResetMazeHandler} 
				/>
			</div>
		)
  }
}

export default withErrorHandler(Main, axios)
