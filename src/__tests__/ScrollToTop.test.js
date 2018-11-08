import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import ScrollToTop from '../ScrollToTop'

jest.mock('react-router-dom', () => ({ withRouter: Component => Component }))

describe('when the locations has changed', () => {
  it('scroll to top', () => {
    global.window.scrollTo = jest.fn()
    const rendered = renderer.create(
      <MemoryRouter initialEntries={[{ pathname: '/foo', key: 'testKey' }]}>
        <ScrollToTop location="foo">foo</ScrollToTop>
      </MemoryRouter>,
    )
    rendered.update(
      <MemoryRouter initialEntries={[{ pathname: '/bar', key: 'testKey' }]}>
        <ScrollToTop location="bar">foo</ScrollToTop>
      </MemoryRouter>,
    )
    expect(global.window.scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
