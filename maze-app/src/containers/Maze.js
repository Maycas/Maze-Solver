import React from 'react'
import axios from 'axios'

import styles from './Maze.module.css'

import Cell from '../components/Cell/Cell'
import Button from '../components/UI/Button/Button'

class Maze extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
			// wall: -1; start: 0, path cells: ' '
			grid: [
				[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
				[-1, ' ', ' ', ' ', -1, ' ', ' ', ' ', ' ', -1],
				[-1, ' ', -1, ' ', ' ', ' ', -1, ' ', -1, -1],
				[-1, ' ', -1, -1, ' ', -1, -1, ' ', ' ', -1],
				[-1, ' ', ' ', -1, ' ', -1, -1, -1, ' ', -1],
				[-1, ' ', -1, -1, ' ', ' ', ' ', ' ', ' ', -1],
				[-1, ' ', ' ', ' ', ' ', -1, ' ', -1, -1, -1],
				[-1, ' ', -1, -1, ' ', -1, ' ', ' ', ' ', -1],
				[-1, ' ', ' ', -1, ' ', ' ', ' ', -1, 0, -1],
				[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
			],
		}
  }

  parseMazeToHtml = () => {
    let values = this.state.grid
    return values.map((row, rowId) => {
      return (
				<div className={styles.Row} key={'row' + rowId}>
					{row.map((cellValue, colId) => { 
            return (
              <div key={'col-' + colId}>
                <Cell value={cellValue} />
              </div>
            )
          })}
				</div>
			)
    })
  }

  onClickHandler = () => {
		axios
			.post('http://localhost:8000/api/solveMaze', {
				grid: this.state.grid
			})
			.then(response => {
				this.setState({ grid: response.data.values})
			})
			.catch(error => {
				console.log(error)
			})
  }

  render () {
    return (
			<div className={styles.Maze}>
        <h1>Maze Solver!</h1>
				<div>{this.parseMazeToHtml()}</div>
        <Button onClick={this.onClickHandler}>FIND BEST PATH</Button>
			</div>
		)
  }
}

export default Maze
