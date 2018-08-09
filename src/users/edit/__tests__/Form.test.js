import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../../store/createStore'

import Form from '../Form'

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const onSubmit = jest.fn()
  const props = { updateError: 'foo-error' }
  const tree = renderer
    .create(
      <Provider store={store}>
        <Form onSubmit={onSubmit} {...props} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
