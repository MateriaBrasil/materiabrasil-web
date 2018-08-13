import React from 'react'
import renderer from 'react-test-renderer'

import Reviews from '../Reviews'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../../../reviews/Rating', () => props => (
  <div {...props}>Rating</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Reviews />).toJSON()

  expect(tree).toMatchSnapshot()
})

describe('with current user', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Reviews currentUser={{}} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with averageRating', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Reviews averageRating={'123'} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
