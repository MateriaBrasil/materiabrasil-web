import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const Component = renderCreated({ id: 1234, match: { params: { id: 123 } } })
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
