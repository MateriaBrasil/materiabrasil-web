import React from 'react'
import renderer from 'react-test-renderer'

import renderPay from '../renderPay'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render(() => {})} - {props.renderCreated()}
    </div>
  ),
}))

jest.mock('materials/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

jest.mock('../../payments/form/render', () =>
  jest.fn(props => routeProps => <div {...props}>render</div>),
)

jest.mock('react-router-dom/Redirect', () => props => (
  <div {...props}>Redirect</div>
))

const routeProps = { match: { params: { id: 123 } } }
const props = {
  currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
  setCurrentUser: jest.fn(),
}

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderPay(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
    expect(props.setCurrentUser).toHaveBeenCalledWith({
      ...props.currentUser,
      pendingSubscription: true,
    })
  })
})
