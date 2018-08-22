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

it('sets the correct file', () => {
  const instance = renderer.create(<ImageUpload />).getInstance()

  expect(instance.state.file).toBe(null)
  instance.onDrop(['foo'])
  expect(instance.state.file).toBe('foo')
})
