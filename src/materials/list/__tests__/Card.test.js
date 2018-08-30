import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

let originalMatchMedia
beforeAll(() => {
  originalMatchMedia = window.matchMedia
})
afterAll(() => {
  window.matchMedia = originalMatchMedia
})

describe('when query matches', () => {
  describe('when highlighted', () => {
    it('renders correctly', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const props = {
        material: {
          name: 'foo',
          imageUrl: 'bar',
          id: 1234,
          highlighted: true,
          highlightedImageUrl: 'foo-url',
          listImageUrl: 'list',
        },
      }
      const tree = renderer.create(<Card {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('when not highlighted', () => {
    it('renders correctly', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const props = {
        material: {
          name: 'foo',
          imageUrl: 'bar',
          id: 1234,
          highlighted: false,
          highlightedImageUrl: 'foo-url',
          listImageUrl: 'list',
        },
      }
      const tree = renderer.create(<Card {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})

describe('when query doesnt match', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const props = {
      material: {
        name: 'foo',
        imageUrl: 'bar',
        id: 1234,
        highlighted: true,
        highlightedImageUrl: 'foo-url',
        listImageUrl: 'list',
      },
      ignoreHighlights: true,
    }
    const tree = renderer.create(<Card {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
