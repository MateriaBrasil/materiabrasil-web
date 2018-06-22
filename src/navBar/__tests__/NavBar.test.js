import React from 'react'
import renderer from 'react-test-renderer'

import NavBar from '../NavBar'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

describe('without current user', () => {
  it('renders correctly', () => {
    const user = {}
    const tree = renderer.create(<NavBar user={user} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with current user', () => {
  it('renders correctly', () => {
    const user = { current: { name: 'Foo Bar' } }
    const tree = renderer.create(<NavBar user={user} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
