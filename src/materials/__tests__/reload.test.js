import React from 'react'
import renderer from 'react-test-renderer'

import reload from '../reload'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const Component = reload({ match: { params: { id: 1234 } } })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
