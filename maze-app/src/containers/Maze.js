import React from 'react'
import axios from 'axios'

import styles from './Maze.module.css'

import Cell from '../components/Cell/Cell'
import Controls from '../components/UI/Controls/Controls'

class Maze extends React.Component {
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

  parseMaze = () => {
    let values = this.state.grid
    return values.map((row, rowId) => {
      return (
				<div>
					<div className={styles.Row} key={'row' + rowId}>
						{row.map((cellValue, colId) => { 
							return (
								<div key={'col-' + colId}>
									<Cell value={cellValue} />
								</div>
							)
						})}
					</div>
				</div>
			)
    })
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
			<div className={styles.Maze}>
        <h1>Maze Solver!</h1>
				{this.parseMaze()}
				<Controls 
					onSolveClickHandler={this.onSolveClickHandler}
					onResetMazeHandler={this.onResetMazeHandler} 
				/>
			</div>
		)
  }
}

export default Maze
