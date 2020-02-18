import React from 'react'
import axios from 'axios'

import styles from './Main.module.css'

import Maze from '../components/Maze/Maze'
import Controls from '../components/UI/Controls/Controls'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
			grid: []
		}
	}
	
	componentDidMount () {
		this.getMaze()
	}

	getMaze = () => {
		axios.get('http://localhost:8000/api/maze')
			.then(response => this.setState({ grid: response.data.grid }))
	}

  onSolveClickHandler = () => {
		axios
			.post('http://localhost:8000/api/solveMaze', {
				grid: this.state.grid
			})
			.then(response => {
				this.setState({ grid: response.data.grid })
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	onResetMazeHandler = () => {
		this.getMaze()
	}

  render () {
    return (
			<div className={styles.Main}>
        <h1>Maze Solver!</h1>
				<Maze maze={this.state.grid}></Maze>
				<Controls 
					onSolveClickHandler={this.onSolveClickHandler}
					onResetMazeHandler={this.onResetMazeHandler} 
				/>
			</div>
		)
  }
}

export default Main
