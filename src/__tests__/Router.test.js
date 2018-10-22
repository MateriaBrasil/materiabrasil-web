import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../materials/renderList', () => props => routeProps => (
  <div>Materials</div>
))
jest.mock('../materials/renderInfo', () => props => routeProps => (
  <div>Material</div>
))
jest.mock('../navBar/NavBar', () => props => (
  <div {...props}>NavBar</div>
))

describe('with root route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/materials']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /materials/:id route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/materials/123']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
