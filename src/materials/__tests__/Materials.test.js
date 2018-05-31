import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'

import Materials from '../Materials'

jest.mock('../List', () => props => <div>List</div>)
jest.mock('../actions', () => ({
  startUp: () => ({ type: 'foo' }),
  list: () => ({ type: 'foo' }),
}))

it('renders correctly', () => {
  const state = { materials: {} }
  const reducer = () => state
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly while starting up', () => {
  const state = { materials: { startingUp: true } }
  const reducer = () => state
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly while loading', () => {
  const state = { materials: { listing: true } }
  const reducer = () => state
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with errors', () => {
  const state = { materials: { listError: 'foo' } }
  const reducer = () => state
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with a list', () => {
  const state = { materials: { list: 'foo' } }
  const reducer = () => state
  const store = createStore(reducer)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
