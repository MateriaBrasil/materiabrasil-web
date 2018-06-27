import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../../store/createStore'

import SignOut from '../SignOut'

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <SignOut />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
