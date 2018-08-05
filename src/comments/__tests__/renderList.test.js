import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const list = [
    {
      id: 11111,
      user: { id: 111112, firstName: 'foo', lastName: 'bar' },
      text: 'foo-text',
    },
    {
      id: 2222,
      user: { id: 1222, firstName: 'foo', lastName: 'bar' },
      text: 'foo-text',
    },
  ]

  const props = { bar: 'foo' }
  const tree = renderer.create(renderList(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})
