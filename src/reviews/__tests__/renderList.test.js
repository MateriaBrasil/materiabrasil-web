import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'
import render from '../list/render'

jest.mock('../list/render', () =>
  jest.fn(props => list => (
    <div {...props} list={list}>
      ../list/render
    </div>
  )),
)

jest.mock('croods', () => ({
  List: props => <div {...props}>List - {props.render([{ foo: 'bar' }])}</div>,
}))

const props = { bar: 'foo' }
const routeProps = { match: { params: { id: 1111 } } }
const tree = renderer.create(renderList(props)(routeProps)).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('calls render prop', () => {
  expect(render).toHaveBeenCalledWith({ ...props, ...routeProps, id: 1111 })
})
