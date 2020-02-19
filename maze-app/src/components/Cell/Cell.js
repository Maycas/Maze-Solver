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
      onClick={(event) => props.onCellClicked(event, props.position)}
    >{props.value}</div>
  )
}

export default cell
