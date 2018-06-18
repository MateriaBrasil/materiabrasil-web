import React from 'react'
import renderer from 'react-test-renderer'

import info from '../info'

jest.mock('croods', () => ({
  Info: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../info/render', () => props => info => <div>Info</div>)

it('renders correctly', () => {
  const props = {}
  const routerProps = { match: { params: {} } }
  const tree = renderer.create(info(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with id', () => {
  const props = {}
  const routerProps = { match: { params: { id: '123' } } }
  const tree = renderer.create(info(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
