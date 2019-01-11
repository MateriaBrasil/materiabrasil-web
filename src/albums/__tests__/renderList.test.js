import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('@material-ui/core/List', () => props => (
  <div {...props}>List - {props.children}</div>
))

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('materials/Dialog', () => props => (
  <div {...props}>
    Dialog - {props.children} - {props.onCloseModel()}
  </div>
))

jest.mock('../renderAlbum', () => album => <div>{album.name}</div>)

const routeProps = {
  match: { params: { id: 123 } },
  history: { push: () => {} },
}
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderList(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
