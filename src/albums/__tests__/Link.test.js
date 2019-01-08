import React from 'react'
import renderer from 'react-test-renderer'

import Link from '../Link'

jest.mock('@material-ui/core/Tooltip', () => props => (
  <div {...props}>Tooltip - {props.children}</div>
))

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const props = { onClick: jest.fn() }
  const tree = renderer.create(<Link {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
