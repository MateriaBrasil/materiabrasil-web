import React from 'react'
import renderer from 'react-test-renderer'
import map from 'lodash/map'

import renderList from '../renderList'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const list = [
    { id: 11111, user: { id: 111112, name: 'foo-name' }, text: 'foo-text' },
    { id: 22222, user: { id: 222223, name: 'foo-name' }, text: 'foo-text' },
  ]

  const props = { bar: 'foo' }
  const tree = renderer.create(renderList(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})
