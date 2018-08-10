import React from 'react'
import renderer from 'react-test-renderer'

import ZoomControls from '../ZoomControls'

it('renders correctly', () => {
  const tree = renderer
    .create(<ZoomControls onZoomOut={jest.fn()} onZoomIn={jest.fn()} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
