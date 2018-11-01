import React from 'react'
import renderer from 'react-test-renderer'

import Stepper from '../Stepper'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

jest.mock('../Explore', () => props => <div {...props}>Explore</div>)
jest.mock('../HowToUseIt', () => props => <div {...props}>HowToUseIt</div>)
jest.mock('../Drivers', () => props => <div {...props}>Drivers</div>)
jest.mock('../CuratedBy', () => props => <div {...props}>CuratedBy</div>)
jest.mock('../Section', () => props => <div {...props}>{props.children}</div>)

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
    const props = {}
    const tree = renderer.create(<Stepper {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when dont match', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const props = {}
    const tree = renderer.create(<Stepper {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
