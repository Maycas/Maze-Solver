import React from 'react'

import styles from './Cell.module.css'

const cell = (props) => {
  let classes = [styles.Cell]

  switch (props.value) {
    case -1:
      classes.push(styles.Wall)
      break
    case 0:
      classes.push(styles.Start)
      break
    case 'X':
      classes.push(styles.Unreachable)
      break
    default:
      break
  }

  return (
    <div
      className={classes.join(' ')}
      position={props.position}
      draggable={props.value === 0}
      onClick={event => props.onCellClicked(event, props.position)}
      onDrag={event => props.onCellDragged(event, props.position)}
      onDragOver={event => event.preventDefault()}
      onDrop={event => props.onCellDropped(event, props.position)}
    >
      {props.value}
    </div>
  )
}

export default cell
