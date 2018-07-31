import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('../Button', () => props => (
  <div {...props}>Button - {props.children}</div>
))

it('renders correctly', () => {
  const createProps = { create: jest.fn(), creating: jest.fn() }
  const props = { foo: 'bar', id: 1234 }

  const tree = renderer.create(renderNew(props)(createProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
