import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const created = { foo: 'bar' }
  const setCurrentUser = jest.fn()
  const props = { created, setCurrentUser, location: {} }

  const tree = renderer.create(<Created {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(setCurrentUser).toHaveBeenCalledWith(created)
})

describe('with referrer', () => {
  it('renders correctly', () => {
    const created = { foo: 'bar' }
    const setCurrentUser = jest.fn()
    const state = { referer: 'foo-ref' }
    const props = { created, setCurrentUser, location: { state } }

    const tree = renderer.create(<Created {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(setCurrentUser).toHaveBeenCalledWith(created)
  })
})
