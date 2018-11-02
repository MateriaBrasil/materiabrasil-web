import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../Home'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('react-media', () => props => (
  <div {...props}>Media - {props.children}</div>
))

jest.mock('../../navBar/NavBar', () => props => <div {...props}>NavBar</div>)

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

jest.mock('../Explore', () => props => <div {...props}>Explore</div>)
jest.mock('../HowToUseIt', () => props => <div {...props}>HowToUseIt</div>)
jest.mock('../Introduction', () => props => <div {...props}>Introduction</div>)
jest.mock('../Section', () => props => <div {...props}>{props.children}</div>)

let originalMatchMedia
beforeAll(() => {
  originalMatchMedia = window.matchMedia
})
afterAll(() => {
  window.matchMedia = originalMatchMedia
})

describe('when it matches', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(true)
    const props = {}
    const tree = renderer.create(<Home {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when it does not match', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const props = {}
    const tree = renderer.create(<Home {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
