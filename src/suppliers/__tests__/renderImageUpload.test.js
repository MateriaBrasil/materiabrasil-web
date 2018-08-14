import React from 'react'
import renderer from 'react-test-renderer'

import renderImageupload from '../renderImageUpload'

jest.mock('croods', () => ({
  Edit: ({ children, render, ...props }) => (
    <div {...props}>Edit - {render}</div>
  ),
}))

jest.mock('../../imageUpload/render', () => props => (
  <div {...props}>renderImageupload</div>
))

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { match: { params: { id: 1234 } } }

  const tree = renderer.create(renderImageupload(props)(routeProps))
  expect(tree).toMatchSnapshot()
})
