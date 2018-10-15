import React from 'react'
import renderer from 'react-test-renderer'

import ForgotPassword from '../ForgotPassword'

jest.mock('croods', () => ({ New: props => <div {...props}>New</div> }))

it('renders correctly', () => {
  const tree = renderer.create(<ForgotPassword />).toJSON()
  expect(tree).toMatchSnapshot()
})
