import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

jest.mock('../renderList', () => props => routeProps => <div>renderList</div>)

describe('with /forum route', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/forum']}>
          <Router />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
