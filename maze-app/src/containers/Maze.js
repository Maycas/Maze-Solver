import React from 'react'

import styles from './Maze.module.css'

import Cell from '../components/Cell/Cell'

class Maze extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
			// wall: -1; start: 0, others: ' '
			values: [
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
			]
		}
  }

  parseMazeToHtml = () => {
    let values = this.state.values
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
    const newMaze = [
			[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
			[-1, 14, 13, 12, -1, 12, 13, 12, 13, -1],
			[-1, 15, -1, 11, 10, 11, -1, 11, -1, -1],
			[-1, 14, -1, -1, 9, -1, -1, 10, 9, -1],
			[-1, 13, 14, -1, 8, -1, -1, -1, 8, -1],
			[-1, 12, -1, -1, 7, 6, 5, 6, 7, -1],
			[-1, 11, 10, 9, 8, -1, 4, -1, -1, -1],
			[-1, 12, -1, -1, 7, -1, 3, 2, 1, -1],
			[-1, 13, 14, -1, 6, 5, 4, -1, 0, -1],
			[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
		]
    this.setState({ values: newMaze })
  }

  render () {
    return (
			<div className={styles.Maze}>
        <h2>Maze!</h2>
				<div>{this.parseMazeToHtml()}</div>
        <button className={styles.Button} onClick={this.onClickHandler}>FIND BEST PATH</button>
			</div>
		)
  }
}

export default Maze
