import React from 'react'
import renderer from 'react-test-renderer'

import renderAuth from '../renderAuth'

jest.mock('../Screen', () => props => (
  <div {...props}>Screen - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(renderAuth({ foo: 'bar' })).toJSON()
  expect(tree).toMatchSnapshot()
})
