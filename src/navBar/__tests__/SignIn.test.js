import React from 'react'
import renderer from 'react-test-renderer'

import SignIn from '../SignIn'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const props = { location: { pathname: 'foo-path' } }
  const tree = renderer.create(<SignIn {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
