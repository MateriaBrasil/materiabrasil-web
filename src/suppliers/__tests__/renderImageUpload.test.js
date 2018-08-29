import React from 'react'
import renderer from 'react-test-renderer'

import renderImageupload from '../renderImageUpload'

jest.mock('croods', () => ({
  Edit: ({ children, render, ...props }) => (
    <div {...props}>Edit - {render({ foo: 'bar' })}</div>
  ),
}))

jest.mock('../../imageUpload/renderImageUpload', () => props => editProps => (
  <div {...props} {...editProps}>
    renderImageupload
  </div>
))

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { match: { params: { id: 1234 } } }

  const tree = renderer.create(renderImageupload(props)(routeProps))
  expect(tree).toMatchSnapshot()
})
