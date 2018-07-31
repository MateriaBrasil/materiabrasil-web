import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('../Destroy', () => props => (
  <div {...props}>Destroy - {props.children}</div>
))

const list = [
  { id: 11111, favoritable: 'favoritable-1', destroying: 'destroying-1' },
  { id: 22222, favoritable: 'favoritable-2', destroying: 'destroying-2' },
]

it('renders correctly with showDestroy as true', () => {
  const tree = renderer.create(renderList({ showDestroy: true })(list)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with showDestroy as false', () => {
  const tree = renderer
    .create(renderList({ showDestroy: false })(list))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
