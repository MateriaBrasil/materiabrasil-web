import React from 'react'
import renderer from 'react-test-renderer'

import renderImageUpload from '../renderImageUpload'

jest.mock('../ImageUpload', () => props => <div {...props}>ImageUpload</div>)

it('renders correctly', () => {
  const tree = renderer.create(renderImageUpload()()).toJSON()
  expect(tree).toMatchSnapshot()
})
