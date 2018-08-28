import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const Component = renderCreated({ foo: 'bar' })
  const tree = renderer.create(<Component bar="foo" id={1234} />).toJSON()
  expect(tree).toMatchSnapshot()
})
