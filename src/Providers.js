import React from 'react'
import { Provider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { MuiThemeProvider } from '@material-ui/core/styles'

import headers from 'auth/headers'
import afterResponse from 'auth/afterResponse'
import store from 'store/store'

import renderLoading from './renderLoading'
import renderError from './renderError'

import theme from './theme'

export default props => (
  <Provider store={store}>
    <CroodsProvider
      // baseUrl={process.env.REACT_APP_API_URL}
      baseUrl={'http://localhost:3000/'}
      headers={headers}
      afterResponse={afterResponse}
      renderLoading={renderLoading}
      renderError={renderError}
    >
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </CroodsProvider>
  </Provider>
)
