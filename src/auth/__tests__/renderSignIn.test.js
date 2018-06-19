import React from 'react'
import renderer from 'react-test-renderer'

import renderSignIn from '../renderSignIn'

jest.mock('../SignIn', () => props => <div {...props}>SignIn</div>)

it('renders correctly', () => {
  const Component = renderSignIn({ foo: 'bar' })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
