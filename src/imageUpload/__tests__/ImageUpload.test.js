import React from 'react'
import renderer from 'react-test-renderer'

import ImageUpload from '../ImageUpload'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))
jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))
jest.mock('react-dropzone', () => props => (
  <div {...props}>Dropzone - {props.children}</div>
))
jest.mock('react-avatar-editor', () => 'Avatar')

it('renders correctly', () => {
  const tree = renderer.create(<ImageUpload />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with file', () => {
  it('renders correctly', () => {
    const state = { file: 'foo' }
    const element = renderer.create(<ImageUpload />)
    element.getInstance().setState(state)
    const tree = element.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
