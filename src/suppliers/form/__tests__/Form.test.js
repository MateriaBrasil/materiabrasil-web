import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../../store/createStore'
import Form from '../Form'

jest.mock('materials/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const onSubmit = jest.fn()
  const props = { createError: 'foo-error' }
  const tree = renderer
    .create(
      <Provider store={store}>
        <Form {...props} onSubmit={onSubmit} buttonText="foo-text" />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
