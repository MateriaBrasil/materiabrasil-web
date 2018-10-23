import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Router', () => props => <div {...props}>Router</div>)

jest.mock('../../navBar/NavBar', () => props => <div {...props}>NavBar</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(render(props)()).toJSON()
  expect(tree).toMatchSnapshot()
})
