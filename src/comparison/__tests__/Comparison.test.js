import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'
import Comparison from '../Comparison'

jest.mock('../Widget', () => props => <div {...props}> {props.children} </div>)

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const props = { list: [{ foobar: 'foo' }], render: jest.fn() }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Comparison {...props} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with empty list', () => {
  it('renders correctly', () => {
    const reducer = () => ({})
    const store = createStore(reducer)
    const props = {
      list: [],
      render: jest.fn(props => <div {...props}>Empty list</div>),
    }

    const tree = renderer
      .create(
        <Provider store={store}>
          <Comparison {...props} />
        </Provider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    expect(props.render).toHaveBeenCalled()
  })
})
