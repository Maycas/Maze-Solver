import React from 'react'

import classes from './Button.module.css'

const button = (props) => {
  return (
    <button className={classes.Button} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default button
