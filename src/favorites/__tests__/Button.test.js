import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

it('renders correctly', () => {
  const props = { onClick: jest.fn() }
  const tree = renderer.create(<Button {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('when creating', () => {
  it('renders correctly', () => {
    const props = { onClick: jest.fn() }
    const tree = renderer.create(<Button {...props} creating />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
