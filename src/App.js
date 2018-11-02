import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Auth from 'auth/Auth'
import headers from 'auth/headers'
import afterSuccess from 'auth/afterSuccess'
import Comparison from 'comparison/Comparison'
import Snackbar from 'snackbar/Snackbar'
import store from 'store/store'

import renderLoading from './renderLoading'
import renderError from './renderError'

import Screen from './Screen'
import theme from './theme'

import Providers from './Providers'

export default class extends Component {
  render() {
    return (
      <Providers>
        <Auth
          render={authProps => (
            <Comparison
              render={comparisonProps => (
                <Snackbar
                  render={snackbarProps => (
                    <Screen
                      {...authProps}
                      comparison={comparisonProps}
                      snackbar={snackbarProps}
                    />
                  )}
                />
              )}
            />
          )}
        />
      </Providers>
    )
  }
}
