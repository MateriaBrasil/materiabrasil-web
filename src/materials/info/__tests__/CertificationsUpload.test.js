import React from 'react'
import renderer from 'react-test-renderer'

import CertificationsUpload from '../CertificationsUpload'

jest.mock('../handleUpload', () =>
  jest.fn(({ file, id, attributeName, update }) =>
    update({ file, id, attributeName }),
  ),
)

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      certificationsUrl: 'foo-url',
    }
    const tree = renderer.create(<CertificationsUpload {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when uploading', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      certificationsUrl: 'foo-url',
    }
    const tree = renderer.create(<CertificationsUpload {...props} />)
    tree.getInstance().state.uploading = true
    tree.update(<CertificationsUpload {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('when uploading and no url', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
    }
    const tree = renderer.create(<CertificationsUpload {...props} />)
    tree.getInstance().state.uploading = true
    tree.update(<CertificationsUpload {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('When calling handleFileChange', () => {
  it('it calls update with attributes', () => {
    const props = { id: 1234, actions: { update: jest.fn() } }
    const instance = renderer
      .create(<CertificationsUpload {...props} />)
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
