import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from './NavBar'
import List from './materials/List'

export default class extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <CssBaseline />
        <NavBar />
        <List />
      </div>
    )
  }
}
