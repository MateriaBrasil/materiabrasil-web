import React from 'react'
import renderer from 'react-test-renderer'

import Children from '../Children'

it('renders correctly', () => {
  const props = { foo: 'bar', children: 'foo-children' }
  const tree = renderer.create(<Children>{props.children}</Children>)
  expect(tree).toMatchSnapshot()
})
