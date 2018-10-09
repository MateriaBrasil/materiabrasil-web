import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => <div {...props}>{props.children}</div>,
}))

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../list/render', () => props => list => <div>List</div>)

it('renders correctly', () => {
  const props = { currentUser: { foo: 'bar' } }
  const routeProps = {}
  const tree = renderer.create(renderList(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
