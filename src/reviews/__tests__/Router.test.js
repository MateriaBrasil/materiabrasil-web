import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../renderList', () => props => routeProps => <div>renderNew</div>)
jest.mock('../renderNew', () => props => routeProps => <div>renderList</div>)

describe('with /:id/reviews route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/123/reviews/new']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('with /:id/reviews/new route', () => {
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
