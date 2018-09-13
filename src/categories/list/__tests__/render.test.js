import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('categories/renderCategory', () => props => category => (
  <div key={category.id} {...props} />
))

jest.mock('filters/Filters', () => ({ render, ...props }) => (
  <div {...props}>
    Filters -
    {render({
      selectedCategories: [{ id: 123, name: 'foo-name' }],
      actions: { reset: jest.fn() },
    })}
  </div>
))

it('render correctly', () => {
  const list = [{ id: 123, name: 'foo' }, { id: 321, name: 'bar' }]
  const props = { history: { push: jest.fn() } }
  const tree = renderer.create(render(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})
