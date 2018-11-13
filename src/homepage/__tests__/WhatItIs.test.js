import React from 'react'
import renderer from 'react-test-renderer'
import WhatItIs from '../WhatItIs'

it('renders correctly', () => {
  const tree = renderer.create(<WhatItIs />).toJSON()
  expect(tree).toMatchSnapshot()
})
