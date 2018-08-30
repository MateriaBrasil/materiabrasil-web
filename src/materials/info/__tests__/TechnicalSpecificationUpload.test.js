import React from 'react'
import renderer from 'react-test-renderer'

import TechSpecUpload from '../TechnicalSpecificationUpload'

jest.mock('../handleUpload', () =>
  jest.fn(({ file, id, attributeName, update }) =>
    update({ file, id, attributeName }),
  ),
)

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      technicalSpecificationUrl: 'foo-url',
    }
    const tree = renderer.create(<TechSpecUpload {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when uploading', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
      technicalSpecificationUrl: 'foo-url',
    }
    const tree = renderer.create(<TechSpecUpload {...props} />)
    tree.getInstance().state.uploading = true
    tree.update(<TechSpecUpload {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('when uploading and no url', () => {
  it('renders correctly', () => {
    const props = {
      id: 1234,
    }
    const tree = renderer.create(<TechSpecUpload {...props} />)
    tree.getInstance().state.uploading = true
    tree.update(<TechSpecUpload {...props} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('When calling handleFileChange', () => {
  it('it calls update with attributes', () => {
    const props = { id: 1234, actions: { update: jest.fn() } }
    const instance = renderer
      .create(<TechSpecUpload {...props} />)
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
      attributeName: 'technicalSpecificationUrl',
    })
  })
})
