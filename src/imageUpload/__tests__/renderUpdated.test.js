import React from 'react'
import renderer from 'react-test-renderer'

import renderUpdated from '../renderUpdated'

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

it('renders correctly', () => {
  const redirectUrl = '/foo/url'
  const tree = renderer.create(renderUpdated(redirectUrl)()).toJSON()
  expect(tree).toMatchSnapshot()
})
