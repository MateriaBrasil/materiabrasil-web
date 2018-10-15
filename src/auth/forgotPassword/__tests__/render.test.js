import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../ForgotPassword', props => routeProps => (
  <div {...props} {...routeProps}>
    ForgotPassword
  </div>
))

it('renders correctly with list filled', () => {
  const props = { foo: 'bar' }
  const Component = render(props)
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
