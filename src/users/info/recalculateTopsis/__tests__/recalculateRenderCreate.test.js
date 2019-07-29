import React from 'react'
import renderer from 'react-test-renderer'

import recalculateRenderCreate from '../recalculateRenderCreate'

jest.mock('../CreatedMessage', () => props => (
  <div {...props}>CreatedMessage - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(recalculateRenderCreate({ id: 1 })()).toJSON()
  expect(tree).toMatchSnapshot()
})
