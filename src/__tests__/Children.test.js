import React from 'react'
import renderer from 'react-test-renderer'

import Children from '../Children'

it('renders correctly', () => {
  const tree = renderer.create(<Children>foo-children</Children>)
  expect(tree).toMatchSnapshot()
})
