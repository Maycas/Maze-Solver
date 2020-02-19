import React from 'react'

import styles from './Maze.module.css'

import Cell from '../Cell/Cell'

const maze = (props) => {
  return props.maze.map((row, rowId) => {
    return (
      <div className={styles.Row} key={'row-' + rowId}>
        {row.map((cellValue, colId) => {
          return (
            <div key={'col-' + colId}>
              <Cell
                value={cellValue}
                position={[rowId, colId]}
                onCellClicked={props.onCellClicked}
              />
            </div>
          )
        })}
      </div>
    )
  })
}

export default maze
