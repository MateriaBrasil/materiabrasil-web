import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'

import store from './store/store'
import Auth from './auth/Auth'
import headers from './auth/headers'
import afterSuccess from './auth/afterSuccess'

import Loading from './Loading'
import renderError from './renderError'
import Screen from './Screen'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <CroodsProvider
          baseUrl={process.env.REACT_APP_API_URL}
          headers={headers}
          afterSuccess={afterSuccess}
          renderLoading={Loading}
          renderError={renderError}
        >
          <Auth render={authProps => <Screen {...authProps} />} />
        </CroodsProvider>
      </Provider>
    )
  }
}
