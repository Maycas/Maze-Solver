import React from 'react'
import styles from './App.module.css'

import Main from './containers/Main/Main'

class App extends React.Component {
  render () {
    return (
      <div className={styles.App}>
        <h1>Maze Solver!</h1>
        <Main />
      </div>
    )
  }
}

export default App
