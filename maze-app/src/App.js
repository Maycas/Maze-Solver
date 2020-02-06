import React from 'react'
import styles from './App.module.css'

import Maze from './containers/Maze'

class App extends React.Component {
  render () {
    return (
      <div className={styles.App}>
        <Maze />
      </div>
    )
  }
}

export default App
