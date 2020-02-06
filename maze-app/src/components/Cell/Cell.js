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
    default:
      break
  }

  return (<div className={classes.join(' ')}>{props.value}</div>)
}

export default cell
