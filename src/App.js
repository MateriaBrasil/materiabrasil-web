import React, { Component } from 'react'

import Auth from 'auth/Auth'
import Comparison from 'comparison/Comparison'
import Snackbar from 'snackbar/Snackbar'

import Screen from './Screen'
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
