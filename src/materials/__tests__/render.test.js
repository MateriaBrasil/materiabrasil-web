import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('croods', () => ({
  List: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../renderList', () => props => list => <div>List</div>)

it('renders correctly', () => {
  const props = {}
  const routeProps = {}
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
