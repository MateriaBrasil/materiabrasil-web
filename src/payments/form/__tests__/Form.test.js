import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('../Field', () => props => <div {...props}>Field</div>)

jest.mock('formik', () => ({
  Form: props => <div {...props}>{props.children}</div>,
  Field: props => <div {...props}>{props.children}</div>,
}))

jest.mock('@reach/router', () => ({
  Link: props => <div>{props.children}</div>,
}))

jest.mock('../../Installments', () => props => <div {...props}>Field</div>)

const values = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
  installments: '3',
}

const props = {
  id: 1,
  token: 'abababa',
  channel: 'whatsapp',
  text: 'paga nois',
  list: [],
  offer: {
    consumer: {
      fullName: 'foo',
    },
    discount: 50,
    valueToPay: 200.0,
    originalValue: 250,
    valueWithInterest: 350,
    contractNumber: '123',
    maxInstallments: 12,
  },
  actions: {
    setNumberOfCards: jest.fn(),
  },
  setValues: jest.fn(),
  total: 50.2,
}

const tree = renderer.create(
  <Form {...props} values={values} numberOfCards={'one'} />,
)
it('renders correctly with one card', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

it('renders correctly with many cards', () => {
  const tree = renderer.create(
    <Form {...props} values={values} numberOfCards={'many'} />,
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

it('constructor puts focused as a state property', () => {
  expect(tree.getInstance().state).toHaveProperty('focused')
})

it('binded onFocus change his state', () => {
  const target = { id: 'powpow' }
  let instance = tree.getInstance()
  expect(instance.state.focused).toEqual('')
  instance.commonProperties().onFocus({ target })
  expect(instance.state.focused).toEqual(target.id)
})

it('binded setNumberOfCards when called, calls action and setValues', () => {
  let instance = tree.getInstance()
  instance.setNumberOfCards({ target: { value: 'one' } })
  expect(props.actions.setNumberOfCards).toBeCalled()
  expect(props.setValues).toBeCalledWith({ ...values, value: '149,80' })
})

it('binded setNumberOfCards when called, calls action and setValues as "" when isnt only one card', () => {
  let instance = tree.getInstance()
  instance.setNumberOfCards({ target: { value: 'many' } })
  expect(props.actions.setNumberOfCards).toBeCalled()
  expect(props.setValues).toBeCalledWith({ ...values, value: '' })
})
