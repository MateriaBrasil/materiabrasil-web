import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'

import Material from '../Material'

jest.mock('../actions', () => ({ info: () => ({ type: 'foo' }) }))

it('renders correctly', () => {
  const state = { material: {} }
  const reducer = () => state
  const store = createStore(reducer)
  const match = { params: { id: 1 } }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Material match={match} render={props => <div {...props} />} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly while starting up', () => {
  const state = { material: { startingUp: true } }
  const reducer = () => state
  const store = createStore(reducer)
  const match = { params: { id: 1 } }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Material
          match={match}
          {...state}
          render={props => <div {...props} />}
        />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly while loading', () => {
  const state = { material: { requestingInfo: true } }
  const reducer = () => state
  const store = createStore(reducer)
  const match = { params: { id: 1 } }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Material
          match={match}
          {...state}
          render={props => <div {...props} />}
        />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with errors', () => {
  const state = { material: { infoError: 'foo' } }
  const reducer = () => state
  const store = createStore(reducer)
  const match = { params: { id: 1 } }

  const tree = renderer
    .create(
      <Provider store={store}>
        <Material match={match} {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
