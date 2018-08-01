import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

describe('with default type (button)', () => {
  it('renders correctly', () => {
    const props = { onClick: jest.fn() }
    const tree = renderer.create(<Button {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('without default type', () => {
  it('renders correctly', () => {
    const props = { onClick: jest.fn(), type: 'Icon', style: 'color:white' }
    const tree2 = renderer.create(<Button {...props} />).toJSON()
    expect(tree2).toMatchSnapshot()
  })
})
