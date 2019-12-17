import React, { Component } from 'react';

import Auth from 'auth/Auth';
import Comparison from 'comparison/Comparison';
import Snackbar from 'snackbar/Snackbar';
import CategoryFilled from 'categories/CategoryFilled';
import ReactGA from 'react-ga';

import Screen from './Screen';
import Providers from './Providers';

export default class extends Component {
  componentDidMount() {
    ReactGA.initialize(process.env.REACT_APP_UA_GOOGLE_ANALYTICS);
    console.log(process.env.REACT_APP_UA_GOOGLE_ANALYTICS);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <Providers>
        <Auth
          render={authProps => (
            <Comparison
              render={comparisonProps => (
                <Snackbar
                  render={snackbarProps => (
                    <CategoryFilled
                      render={categoryFilledProps => (
                        <Screen
                          {...authProps}
                          comparison={comparisonProps}
                          snackbar={snackbarProps}
                          categoryFilled={categoryFilledProps}
                        />
                      )}
                    />
                  )}
                />
              )}
            />
          )}
        />
      </Providers>
    );
  }
}
