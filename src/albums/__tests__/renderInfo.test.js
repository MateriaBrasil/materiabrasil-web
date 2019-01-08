import React from 'react'
import renderer from 'react-test-renderer'

import renderInfo from '../renderInfo'

jest.mock('croods', () => ({
  Info: props => <div {...props}>{props.children}</div>,
}))

jest.mock('../render', () => props => info => <div>Info</div>)

it('renders correctly', () => {
  const props = {}
  const routerProps = { match: { params: {} } }
  const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with id', () => {
  const props = {}
  const routerProps = { match: { params: { id: '123' } } }
  const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
