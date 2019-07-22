import React from 'react'
import renderer from 'react-test-renderer'

import ForgotPassword, { passCorrectParams } from '../ForgotPassword'

jest.mock('croods', () => ({ New: props => <div {...props}>New</div> }))

it('renders correctly', () => {
  const tree = renderer.create(<ForgotPassword />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('passCorrectParams', () => {
  it('works correctly', () => {
    const mock = jest.fn()
    passCorrectParams(mock)({
      create: Function,
      creating: Boolean,
      error: String,
    })
    expect(mock).toHaveBeenCalledWith({
      create: Function,
      creating: Boolean,
      apiError: String,
    })
  })
})
