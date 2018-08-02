import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../../../materials/list/List', () => props => (
  <div {...props}>List</div>
))

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const list = ['foo', 'foo2']
  const listProps = { bar: 'foo' }
  const tree = renderer.create(render(props)(list, listProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
