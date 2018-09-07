import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('croods', () => ({
  List: props => <div {...props}>List -{props.render()}</div>,
}))

jest.mock('../renderList', () => props => list => (
  <div {...props} list={list}>
    renderList
  </div>
))

jest.mock('materials/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

it('render correctly', () => {
  const routeProps = { match: { params: { id: '1234' } } }
  const tree = renderer.create(render({ bar: 'foo' })(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
