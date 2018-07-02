import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Form', () => props => (
  <div {...props}>Form - {props.children}</div>
))

it('renders correctly', () => {
  const createProps = { create: jest.fn() }
  const props = { foo: 'bar', current: { id: 123 } }

  const tree = renderer.create(render(props)(createProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
