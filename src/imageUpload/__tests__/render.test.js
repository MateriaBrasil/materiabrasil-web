import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../ImageUpload', () => props => <div {...props}>ImageUpload</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { bar: 'foo' }
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})