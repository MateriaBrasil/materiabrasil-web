import React from 'react'
import renderer from 'react-test-renderer'

import FileUploadButton from '../FileUploadButton'

jest.mock('../handleUpload', () =>
  jest.fn(({ file, id, attributeName, update }) =>
    update({ file, id, attributeName }),
  ),
)

function createNodeMock(element) {
  if (element.type === 'input') {
    return {
      click() {},
    }
  }
  return null
}

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      attributeName: 'certificationsUrl',
      certificationsUrl: 'foo-url',
    }
    const tree = renderer
      .create(<FileUploadButton {...props}>foo-text</FileUploadButton>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when uploading', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      attributeName: 'certificationsUrl',
      certificationsUrl: 'foo-url',
    }
    const tree = renderer.create(
      <FileUploadButton {...props}>foo-text</FileUploadButton>,
    )
    tree.getInstance().state.uploading = true
    tree.update(<FileUploadButton {...props}>foo-text</FileUploadButton>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('when uploading and no url', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      attributeName: 'certificationsUrl',
    }
    const tree = renderer.create(
      <FileUploadButton {...props}>foo-text</FileUploadButton>,
    )
    tree.getInstance().state.uploading = true
    tree.update(<FileUploadButton {...props}>foo-text</FileUploadButton>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('When calling handleFileChange', () => {
  it('it calls update with attributes', () => {
    const props = {
      id: 1234,
      actions: { update: jest.fn() },
      attributeName: 'certificationsUrl',
    }
    const instance = renderer
      .create(<FileUploadButton {...props}>foo-text</FileUploadButton>)
      .getInstance()

    const event = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn(),
      target: { files: ['file'] },
    }
    instance.handleFileChange(event)

    expect(props.actions.update).toHaveBeenCalledWith({
      file: 'file',
      id: 1234,
      attributeName: 'certificationsUrl',
    })
  })
})

describe('When clicking button', () => {
  it('it renders correctly', () => {
    const options = { createNodeMock }
    const props = {
      id: 1234,
      actions: { update: jest.fn() },
      attributeName: 'certificationsUrl',
    }
    const tree = renderer
      .create(<FileUploadButton {...props}>foo-name</FileUploadButton>, options)
      .toJSON()
    tree.children[0].props.onClick()
    expect(tree).toMatchSnapshot()
  })
})
