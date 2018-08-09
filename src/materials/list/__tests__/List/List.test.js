import React from 'react'
import renderer from 'react-test-renderer'

import List from '../../List'

jest.mock('react-router-dom/Link', () => props => <div {...props} />)
jest.mock('../../../../favorites/New', () => props => (
  <div {...props}>Favorite</div>
))

const list = [
  { name: 'foo', highlighted: true, imageUrl: 'bar', id: 123 },
  { name: 'foo', highlighted: true, imageUrl: 'bar', id: 234 },
  { name: 'foo', highlighted: false, imageUrl: 'bar', id: 345 },
]

describe('without currentUser', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<List list={list} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with ignoreHighlights', () => {
  it('renders correctly', () => {
    const props = {
      ignoreHighlights: true,
      currentUser: { id: 1234 },
    }
    const tree = renderer.create(<List list={list} {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('without ignoreHighlights', () => {
  it('renders correctly', () => {
    const props = {
      currentUser: { id: 1234 },
    }
    const tree = renderer.create(<List list={list} {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
