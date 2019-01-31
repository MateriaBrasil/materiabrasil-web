import React from 'react'
import renderer from 'react-test-renderer'

import renderPremium from '../renderPremium'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

const routeProps = {
  match: { params: { id: 123 } },
  location: { state: { url: '/test' } },
}
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderPremium(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
