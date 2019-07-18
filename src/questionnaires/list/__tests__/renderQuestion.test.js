import React from 'react'
import renderer from 'react-test-renderer'

import renderQuestion from '../renderQuestion'

jest.mock('../renderOption', () => props => <div {...props}>Question</div>)

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

describe('when it page are displayed on a desktop screen', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(true)
    const question = {
      options: {},
      description: 'FooBar foo bar',
      helperText: 'helper foo bar',
    }
    const tree = renderer
      .create(renderQuestion({ foo: 'bar' })(question))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when it page are displayed on a mobile screen', () => {
  it('renders correctly', () => {
    window.matchMedia = createMockMediaMatcher(false)
    const question = {
      options: {},
      description: 'FooBar foo bar',
      helperText: 'helper foo bar',
    }
    const tree = renderer
      .create(renderQuestion({ foo: 'bar' })(question))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
