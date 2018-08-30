import React from 'react'
import renderer from 'react-test-renderer'

import renderImageUpload from '../renderImageUpload'

jest.mock('../../imageUpload/renderImageUpload', () => props => (
  <div {...props}>renderImageUpload</div>
))
jest.mock('../../imageUpload/renderUpdated', () => props => (
  <div {...props}>renderUpdated</div>
))
jest.mock('croods', () => ({
  Edit: ({ children, ...props }) => <div {...props}>Edit</div>,
}))

it('renders correctly', () => {
  const routeProps = { match: { params: { id: 1234 } } }
  const Component = renderImageUpload({ foo: 'bar' })

  const tree = renderer.create(<Component {...routeProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
