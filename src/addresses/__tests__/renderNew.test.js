import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('../Form', () => props => (
  <div {...props}>Form - {props.children}</div>
))

it('renders correctly', () => {
  const createProps = { create: jest.fn() }
  const props = { foo: 'bar', id: 123, match: { params: { id: 123 } } }

  const tree = renderer.create(renderNew(props)(createProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
