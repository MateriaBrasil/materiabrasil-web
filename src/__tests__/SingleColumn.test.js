import React from 'react'
import renderer from 'react-test-renderer'

import SingleColumn from '../SingleColumn'

it('renders correctly', () => {
  const tree = renderer.create(<SingleColumn>Foo</SingleColumn>).toJSON()
  expect(tree).toMatchSnapshot()
})
