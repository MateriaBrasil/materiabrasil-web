import React from 'react'
import renderer from 'react-test-renderer'

import LinksOrMenu from '../LinksOrMenu'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

jest.mock('@material-ui/core/Menu', () => props => (
  <div {...props}>Menu - {props.children}</div>
))
jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
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
    const props = { location: { pathname: 'foo-path' } }
    const tree = renderer.create(<LinksOrMenu {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when dont match', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const props = { location: { pathname: 'foo-path' } }
    const tree = renderer.create(<LinksOrMenu {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when calling handleClick', () => {
  it('it updates state correctly', () => {
    window.matchMedia = createMockMediaMatcher(true)
    const props = { location: { pathname: 'foo-path' } }
    const instance = renderer.create(<LinksOrMenu {...props} />).getInstance()
    const event = { currentTarget: 'foo-element' }
    instance.handleClick(event)
    expect(instance.state.anchorEl).toBe('foo-element')
  })
})

describe('when calling handleClose', () => {
  it('it updates state correctly', () => {
    window.matchMedia = createMockMediaMatcher(true)
    const props = { location: { pathname: 'foo-path' } }
    const instance = renderer.create(<LinksOrMenu {...props} />).getInstance()
    instance.handleClose()
    expect(instance.state.anchorEl).toBe(null)
  })
})
