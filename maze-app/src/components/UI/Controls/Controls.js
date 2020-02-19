import React from 'react'

import styles from './Controls.module.css'

import Button from '../Button/Button'

const controls = (props) => {
  return (
    <div className={styles.Controls}>
      <Button onClick={props.onSolveClick}>FIND PATH</Button>
      <Button onClick={props.onResetMaze}>RESET MAZE</Button>
    </div>
  )
}

export default controls
