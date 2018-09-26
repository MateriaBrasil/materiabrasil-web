import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'
import Filters from '../Filters'

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const props = {
    foo: 'bar',
    render: () => <div {...props}>render</div>,
  }
  const tree = renderer
    .create(
      <Provider store={store}>
        <Filters {...props} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
