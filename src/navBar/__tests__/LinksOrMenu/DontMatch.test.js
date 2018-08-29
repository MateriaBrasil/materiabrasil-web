import React from 'react'
import renderer from 'react-test-renderer'

import LinksOrMenu from '../../LinksOrMenu'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('react-media', () => props => (
  <div {...props}>Media - {props.children(false)}</div>
))

it('renders correctly', () => {
  const props = { location: { pathname: 'foo-path' } }
  const tree = renderer.create(<LinksOrMenu {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
