import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock(
  'categories/renderCategory',
  () => (props, handleSelect) => category => (
    <div key={category.id} {...props} />
  ),
)

it('render correctly', () => {
  const list = [{ id: 123, name: 'foo' }, { id: 321, name: 'bar' }]
  const props = { history: { push: jest.fn() } }
  const tree = renderer.create(render(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when calling handleSelect', () => {
  it('calls push correctly', () => {
    const list = [{ id: 123, name: 'foo' }, { id: 321, name: 'bar' }]
    const props = { history: { push: jest.fn() } }
    const instance = renderer.create(render(props)(list)).getInstance()
    instance.handleSelect(list[0])()
    expect(props.history.push).toHaveBeenCalledWith({ search: `selected=123` })
  })
})
