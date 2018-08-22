import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../Image'

describe('without imageUrl', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Image />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with imageUrl', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Image imageUrl="foo" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
