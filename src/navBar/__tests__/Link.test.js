import React from 'react'
import renderer from 'react-test-renderer'

import Link from '../Link'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Link to="/foo" text="foo bar" />)
  expect(tree).toMatchSnapshot()
})
