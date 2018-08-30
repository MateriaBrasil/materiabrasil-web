import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import createStore from '../../../store/createStore'

import Form from '../Form'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../form/TextField', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../Error', () => jest.fn(props => <div {...props} />))

it('renders correctly', () => {
  const reducer = () => ({})
  const store = createStore(reducer)
  const onSubmit = jest.fn()

  const tree = renderer
    .create(
      <Provider store={store}>
        <Form onSubmit={onSubmit} />
      </Provider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with error', () => {
  it('renders correctly', () => {
    const reducer = () => ({})
    const store = createStore(reducer)
    const onSubmit = jest.fn()

    const tree = renderer
      .create(
        <Provider store={store}>
          <Form onSubmit={onSubmit} updateError="foo error" />
        </Provider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
