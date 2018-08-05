import React from 'react'
import renderer from 'react-test-renderer'

import Link from '../Link'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const currentUser = { id: 1234, firstName: 'foo', lastName: 'bar' }
  const tree = renderer.create(<Link currentUser={currentUser} />)
  expect(tree).toMatchSnapshot()
})
