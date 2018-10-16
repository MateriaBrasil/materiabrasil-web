import React from 'react'
import renderer from 'react-test-renderer'

import Chips from '../Chips'

jest.mock('@material-ui/core/Grid', () => props => (
  <div {...props}>Grid - {props.children}</div>
))

jest.mock('@material-ui/core/Chip', () => props => (
  <div {...props}>Chip - {props.children}</div>
))

const props = {
  list: [{ id: 1, name: 'foo' }],
  remove: jest.fn(),
}

it('renders correctly', () => {
  const tree = renderer.create(<Chips {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
