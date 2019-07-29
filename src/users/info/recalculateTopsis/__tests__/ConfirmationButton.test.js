import React from 'react'
import renderer from 'react-test-renderer'

import ConfirmationButton, { callCreate } from '../ConfirmationButton'

it('renders correctly', () => {
  const props = {
    create: jest.fn(),
    creating: false,
    error: 'foo error message',
  }
  const tree = renderer.create(<ConfirmationButton {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when it is loading', () => {
  it('renders correctly', () => {
    const props = {
      create: jest.fn(),
      creating: true,
      error: 'foo error message',
    }
    const tree = renderer.create(<ConfirmationButton {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when button is pressed', () => {
  it('works correctly', () => {
    const create = jest.fn()
    callCreate(create)()
    expect(create).toHaveBeenCalled()
  })
})
