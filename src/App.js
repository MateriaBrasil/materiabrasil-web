import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store/store'

import Content from './Content'
import NavBar from './NavBar'
import Router from './Router'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{ flexGrow: 1 }}>
            <CssBaseline />
            <NavBar />
            <Content>
              <Router />
            </Content>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
