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

describe('when scale is 1', () => {
  it('returns the scale', () => {
    const instance = renderer.create(<ImageUpload />).getInstance()

    expect(instance.state.scale).toBe(1)
    instance.onZoomOut()

    expect(instance.state.scale).toBe(1)
  })
})

describe('when scale is less than 1', () => {
  it('returns the scale', () => {
    const instance = renderer.create(<ImageUpload />).getInstance()

    instance.state.scale = 0.5
    instance.onZoomOut()

    expect(instance.state.scale).toBe(0.5)
  })
})

describe('when scale is greater than 1', () => {
  it('reduces the scale by 0.1', () => {
    const instance = renderer.create(<ImageUpload />).getInstance()

    instance.state.scale = 2
    instance.onZoomOut()

    expect(instance.state.scale).toBe(1.9)
  })
})
