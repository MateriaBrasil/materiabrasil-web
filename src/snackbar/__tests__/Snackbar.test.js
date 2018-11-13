import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'
import Snackbar from '../Snackbar'

jest.mock('../Widget', () => props => <div {...props}> {props.children} </div>)

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const props = { list: [{ foobar: 'foo' }], render: jest.fn() }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Snackbar {...props} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
