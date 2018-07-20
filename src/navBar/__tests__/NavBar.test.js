import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import NavBar from '../NavBar'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))
jest.mock('../../auth/signOut/SignOut', () => props => (
  <div {...props}>SignOut</div>
))

describe('without current user', () => {
  it('renders correctly', () => {
    const currentUser = {}
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
          <NavBar currentUser={currentUser} />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with current user', () => {
  it('renders correctly', () => {
    const currentUser = { name: 'Foo Bar' }
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
          <NavBar currentUser={currentUser} />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
