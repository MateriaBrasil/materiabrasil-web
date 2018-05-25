import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from './NavBar'
import MaterialList from './Materials/List'

class App extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <CssBaseline />
        <NavBar />
        <MaterialList />
      </div>
    )
  }
}

export default App
