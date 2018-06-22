import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider as CroodsProvider } from 'croods'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store/store'

import Content from './Content'
import NavBar from './navBar/NavBar'
import Router from './Router'
import Loading from './Loading'
import renderError from './renderError'

import User from './user/User'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <CroodsProvider
          renderLoading={Loading}
          renderError={renderError}
          baseUrl={process.env.REACT_APP_API_URL}
        >
          <User
            render={user => (
              <BrowserRouter>
                <div style={{ flexGrow: 1 }}>
                  <CssBaseline />
                  <NavBar user={user} />
                  <Content>
                    <Router user={user} />
                  </Content>
                </div>
              </BrowserRouter>
            )}
          />
          )}
        </CroodsProvider>
      </Provider>
    )
  }
}
