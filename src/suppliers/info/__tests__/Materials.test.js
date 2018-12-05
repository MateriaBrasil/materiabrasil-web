import React from 'react'
import renderer from 'react-test-renderer'

import Materials from '../Materials'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('../../../materials/list/Card', () => props => (
  <div {...props}>Card</div>
))

const materials = [
  { id: 11111, published: true },
  { id: 22222, published: false },
]

it('renders correctly', () => {
  const props = { current: { materials } }
  const tree = renderer.create(<Materials {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
