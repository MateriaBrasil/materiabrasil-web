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

it('sets the correct position', () => {
  const instance = renderer.create(<ImageUpload />).getInstance()

  expect(instance.state.position).toEqual({ x: 0.5, y: 0.5 })
  instance.onPositionChange({ x: 1, y: 0.1 })
  expect(instance.state.position).toEqual({ x: 1, y: 0.1 })
})
