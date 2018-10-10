import React from 'react'
import renderer from 'react-test-renderer'

import renderCreated from '../renderCreated'

it('renders correctly', () => {
  const Component = renderCreated({ bar: 'foo' })
  const tree = renderer.create(<Component foo="bar" />).toJSON()
  expect(tree).toMatchSnapshot()
})
