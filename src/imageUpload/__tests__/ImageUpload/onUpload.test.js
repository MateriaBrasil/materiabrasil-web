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

it('sets loading and calls handleUpload', () => {
  const editor = { getImage: jest.fn(() => 'foo') }
  const update = jest.fn()
  const id = '123'
  const props = { update, id }
  const instance = renderer.create(<ImageUpload {...props} />).getInstance()

  instance.handleUpload = jest.fn()
  instance.editor = editor
  instance.onUpload()

  expect(editor.getImage).toHaveBeenCalledWith()
  expect(instance.handleUpload).toHaveBeenCalledWith({
    editorImage: 'foo',
    id,
    update,
  })
})
