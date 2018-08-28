import React from 'react'
import renderer from 'react-test-renderer'

import Rating from '../Rating'

it('renders correctly', () => {
  const tree = renderer.create(<Rating averageRating={4} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('without average rating', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Rating />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
