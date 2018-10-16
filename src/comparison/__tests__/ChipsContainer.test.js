import React from 'react'
import renderer from 'react-test-renderer'

import ChipsContainer from '../ChipsContainer'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

jest.mock('../Chips', () => props => (
  <div {...props}>Chips - {props.children}</div>
))

let originalMatchMedia
beforeAll(() => {
  originalMatchMedia = window.matchMedia
})
afterAll(() => {
  window.matchMedia = originalMatchMedia
})

describe('when matches', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(true)
    const props = {
      list: [{ id: 1, name: 'foo' }],
      remove: jest.fn(),
    }
    const tree = renderer.create(<ChipsContainer {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when dont match', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const props = {
      list: [{ id: 1, name: 'foo' }],
      remove: jest.fn(),
    }
    const tree = renderer.create(<ChipsContainer {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
