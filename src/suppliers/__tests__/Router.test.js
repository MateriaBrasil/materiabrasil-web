import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../renderNew', () => props => routeProps => <div>renderNew</div>)

describe('with /suppliers/new route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/suppliers/new']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
