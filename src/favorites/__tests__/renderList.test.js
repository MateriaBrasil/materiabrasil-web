import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))


jest.mock('../Destroy', () => props => (
  <div {...props}>Destroy - {props.children}</div>
))

// Missing TitleBar mock?

it('renders correctly', () => {
  const list = [
    { id: 11111, favoritable: 'favoritable-1', destroying: "destroying-1" },
    { id: 22222, favoritable: 'favoritable-2', destroying: "destroying-2" },
  ]
  // Missing assertion about showDestroy when true and when false
  const props = { showDestroy: true }
  const tree = renderer.create(renderList(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})
