import React from 'react'
import renderer from 'react-test-renderer'

import renderUpdated from '../renderUpdated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const tree = renderer.create(renderUpdated()).toJSON()
  expect(tree).toMatchSnapshot()
})
