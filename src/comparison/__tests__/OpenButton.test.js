import React from 'react'
import renderer from 'react-test-renderer'

import OpenButton from '../OpenButton'

it('renders correctly', () => {
  const tree = renderer.create(<OpenButton foobar={'foo'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
