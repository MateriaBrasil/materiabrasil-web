import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../../navBar/NavBar', () => props => <div {...props}>NavBar</div>)
jest.mock('../Home', () => props => <div {...props}>Home</div>)

it('renders correctly', () => {
  const props = {}
  const routeProps = {}
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
