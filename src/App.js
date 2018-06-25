import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'

import store from './store/store'
import CurrentUser from './auth/currentUser/CurrentUser'

import Loading from './Loading'
import renderError from './renderError'
import Screen from './Screen'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <CroodsProvider
          renderLoading={Loading}
          renderError={renderError}
          baseUrl={process.env.REACT_APP_API_URL}
        >
          <CurrentUser
            render={(currentUser, { actions: { setInfo: setCurrentUser } }) => (
              <Screen
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
        </CroodsProvider>
      </Provider>
    )
  }
}
