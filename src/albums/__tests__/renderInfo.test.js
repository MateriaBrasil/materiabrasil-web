import React from 'react'
import renderer from 'react-test-renderer'

import renderInfo from '../renderInfo'

jest.mock('../../users/info/Album', () => props => <div {...props}>Album</div>)

jest.mock('croods', () => ({
  Info: props => (
    <div>
      {props.children}
      {props.render({})}
    </div>
  ),
  Edit: props => (
    <div>
      {props.children}
      {props.render({
        info: { id: 1, user_id: 1, private: false },
        update: () => {},
      })}
      {props.renderUpdated()}
    </div>
  ),
}))

jest.mock('../render', () => props => info => <div>Info</div>)

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('@material-ui/core/Switch', () => props => (
  <div {...props}>
    Dialog - {props.children} - {props.onChange()}
  </div>
))

it('renders correctly', () => {
  const props = {
    currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
  }
  const routerProps = {
    match: { params: {} },
  }
  const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with id', () => {
  const props = {
    currentUser: { albums: [{ id: 1, name: '123' }, { id: 2, name: '345' }] },
  }
  const routerProps = {
    match: { params: { id: '123' } },
  }
  const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
