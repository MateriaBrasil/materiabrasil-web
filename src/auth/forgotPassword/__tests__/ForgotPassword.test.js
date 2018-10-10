import React from 'react'
import renderer from 'react-test-renderer'

import ForgotPassword from '../ForgotPassword'

jest.mock('../../New', () => props => <div {...props}>New</div>)
jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const tree = renderer.create(<ForgotPassword />).toJSON()
  expect(tree).toMatchSnapshot()
})
