import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('execute navigate when called', () => {
  const Component = renderCreated()
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
