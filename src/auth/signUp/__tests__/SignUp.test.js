import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../../store/createStore'

import SignUp from '../SignUp'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <SignUp location={{}} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
