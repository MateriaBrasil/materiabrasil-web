import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const tree = renderer.create(renderCreated()).toJSON()
  expect(tree).toMatchSnapshot()
})
