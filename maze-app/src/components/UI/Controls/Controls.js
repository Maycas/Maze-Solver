import React from 'react'

import styles from './Controls.module.css'

import Button from '../Button/Button'

const controls = (props) => {
  return (
    <div className={styles.Controls}>
      <Button onClick={props.onSolveClickHandler}>FIND PATH</Button>
      <Button onClick={props.onResetMazeHandler}>RESET MAZE</Button>
    </div>
  )
}

export default controls
