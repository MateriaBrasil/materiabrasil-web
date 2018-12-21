import React from 'react'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import createStore from '../../store/createStore'
import CategoryFilled from '../CategoryFilled'

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const props = { render: () => <div /> }

  const tree = renderer
    .create(
      <Provider store={store}>
        <CategoryFilled {...props} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
