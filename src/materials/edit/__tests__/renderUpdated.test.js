import React from 'react'
import renderer from 'react-test-renderer'

import renderUpdated from '../renderUpdated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const Component = renderUpdated({ match: { params: { id: 1234 } } })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
