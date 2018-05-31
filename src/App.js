import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store/store'

import NavBar from './NavBar'
import Materials from './materials/Materials'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ flexGrow: 1 }}>
          <CssBaseline />
          <NavBar />
          <Materials />
        </div>
      </Provider>
    )
  }
}
