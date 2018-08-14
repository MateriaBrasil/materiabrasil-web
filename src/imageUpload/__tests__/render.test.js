import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('croods', () => ({
  Edit: ({ children, ...props }) => <div {...props}>Edit - {children}</div>,
}))
jest.mock('../ImageUpload', () => props => <div {...props}>ImageUpload</div>)

it('renders correctly', () => {
  const props = { foo: 'bar', id: 1234, name: 'foo-name' }
  const routeProps = { bar: 'foo' }
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
