import React from 'react'
import renderer from 'react-test-renderer'

import renderAuth from '../renderAuth'

jest.mock('../comparisons/Comparison', () => props => (
  <div {...props}>Comparison - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(renderAuth({ foo: 'bar' })).toJSON()
  expect(tree).toMatchSnapshot()
})
