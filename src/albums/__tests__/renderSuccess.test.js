import React from 'react'
import renderer from 'react-test-renderer'

import renderSuccess from '../renderSuccess'

jest.mock('materials/Dialog', () => props => (
  <div {...props}>
    Dialog - {props.children}- {props.onCloseModel()}
  </div>
))

const routeProps = {
  match: { params: { id: 123 } },
  history: { push: jest.fn() },
  location: {
    state: {
      title: 'test',
      message: 'foo',
    },
  },
}
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderSuccess(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
