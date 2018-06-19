import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../renderSignIn', () => props => routeProps => <div>Sign In</div>)
jest.mock('../renderSignUp', () => props => routeProps => <div>Sign up</div>)

describe('with /auth route', () => {
  it('renders sign-in', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/auth']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /auth/sign-in route', () => {
  it('renders sign-in', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/auth/sign-in']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /auth/sign-up route', () => {
  it('renders sign-up', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/auth/sign-up']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
