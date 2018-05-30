import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../store/createStore'

import Materials from '../Materials'

jest.mock('../List', () => props => <div>List</div>)

it('renders correctly', () => {
  const state = { materials: {} }
  const reducer = () => state
  const store = createStore(reducer)
  const response = {
    headers: { get: () => 'bar' },
    ok: true,
    text: () => '',
  }

  window.fetch = jest.fn(() => Promise.resolve(response))

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
  const response = {
    headers: { get: () => 'bar' },
    ok: true,
    text: () => '',
  }

  window.fetch = jest.fn(() => Promise.resolve(response))

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
  const response = {
    headers: { get: () => 'bar' },
    ok: true,
    text: () => '',
  }

  window.fetch = jest.fn(() => Promise.resolve(response))

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly whith errors', () => {
  const state = { materials: { listError: 'foo' } }
  const reducer = () => state
  const store = createStore(reducer)
  const response = {
    headers: { get: () => 'bar' },
    ok: true,
    text: () => '',
  }

  window.fetch = jest.fn(() => Promise.resolve(response))

  const tree = renderer
    .create(
      <Provider store={store}>
        <Materials {...state} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

// it('renders correctly while loading', () => {
//   const trip = { destination: 'foo', startDate: moment(), endDate: moment() }
//   const customer = { name: 'foo', email: 'bar', phone: 'baz', submitted: true }
//   const state = { trip, customer }
//   const reducer = () => state
//   const store = createStore(reducer)
//   const response = {
//     headers: { get: () => 'bar' },
//     ok: true,
//     text: () => '[{nome_plano: "foo"}, {nome_plano: "bar"}]',
//   }
//   const match = { params: {} }
//
//   window.fetch = jest.fn(() => Promise.resolve(response))
//
//   const tree = renderer
//     .create(
//       <Provider store={store}>
//         <Products fetching {...state} match={match} />
//       </Provider>,
//     )
//     .toJSON()
//   expect(tree).toMatchSnapshot()
// })
//
// it('renders correctly with errors', () => {
//   const trip = { destination: 'foo', startDate: moment(), endDate: moment() }
//   const customer = { name: 'foo', email: 'bar', phone: 'baz', submitted: true }
//   const state = { trip, customer }
//   const reducer = () => state
//   const store = createStore(reducer)
//   const response = {
//     headers: { get: () => 'bar' },
//     ok: true,
//     text: () => '[{nome_plano: "foo"}, {nome_plano: "bar"}]',
//   }
//   const match = { params: {} }
//
//   window.fetch = jest.fn(() => Promise.resolve(response))
//
//   const tree = renderer
//     .create(
//       <Provider store={store}>
//         <Products fetchError={'foo'} {...state} match={match} />
//       </Provider>,
//     )
//     .toJSON()
//   expect(tree).toMatchSnapshot()
// })
