import React from 'react'
import styles from './App.module.css'

import Main from './containers/Main'

class App extends React.Component {
  render () {
    return (
      <div className={styles.App}>
        <Main />
      </div>
    )
  }
}

export default App
