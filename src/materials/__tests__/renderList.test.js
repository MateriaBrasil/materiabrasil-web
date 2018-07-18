import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../list/render', () => props => list => <div>List</div>)
jest.mock('../../explore/Explore', () => props => (
  <div {...props}>Explore - {props.children}</div>
))

it('renders correctly', () => {
  const props = {}
  const routeProps = {}
  const tree = renderer.create(renderList(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
