import React from 'react'
import renderer from 'react-test-renderer'

import TextLink from '../TextLink'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<TextLink to="foo" text="bar" />).toJSON()
  expect(tree).toMatchSnapshot()
})
