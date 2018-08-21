import React from 'react'
import renderer from 'react-test-renderer'
import ImageUpload from '../../ImageUpload'

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

it('increases the scale', () => {
  const instance = renderer.create(<ImageUpload />).getInstance()

  expect(instance.state.scale).toBe(1)
  instance.onZoomIn()

  expect(instance.state.scale).toBe(1.1)
})
