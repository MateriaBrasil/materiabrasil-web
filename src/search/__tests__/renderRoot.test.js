import React from 'react'
import renderer from 'react-test-renderer'

import renderRoot from '../renderRoot'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>List</div>
))

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(renderRoot(props)())
  expect(tree).toMatchSnapshot()
})
