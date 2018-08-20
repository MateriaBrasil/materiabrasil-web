import React from 'react'
import renderer from 'react-test-renderer'

import LinkToMaterial from '../LinkToMaterial'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<LinkToMaterial />).toJSON()
  expect(tree).toMatchSnapshot()
})
