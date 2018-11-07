import React from 'react'
import renderer from 'react-test-renderer'
import ScrollToTop from '../ScrollToTop'
import { MemoryRouter } from 'react-router'

it('when the component is updated', () => {
  const event = { preventDefault: jest.fn() }
  global.window.scrollTo = jest.fn()
  const props = {
    location: [{ pathname: '/' }],
  }
  const component = renderer.create(
    <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
      <ScrollToTop {...props}>foo</ScrollToTop>
    </MemoryRouter>,
  )
  console.log(component)

  expect(action).toHaveBeenCalledWith()
})
