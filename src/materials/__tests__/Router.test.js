import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../../reviews/render', () => props => routeProps => (
  <div>renderReviews</div>
))
jest.mock('../renderList', () => props => routeProps => <div>renderList</div>)
jest.mock('../renderInfo', () => props => routeProps => <div>renderInfo</div>)

describe('with root route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /:id route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/123']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /:id/reviews route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/123/reviews']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
