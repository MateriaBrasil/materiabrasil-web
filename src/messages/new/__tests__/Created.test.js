import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const props = { foo: 'bar', toType: 'User', match: { params: { id: 3 } } }

  const tree = renderer.create(<Created {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
