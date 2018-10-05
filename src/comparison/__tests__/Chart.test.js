import React from 'react'
import renderer from 'react-test-renderer'

import Chart from '../Chart'

const props = {
  list: [{ id: 1, name: 'foo' }],
  actions: { close: jest.fn() },
}

it('renders correctly', () => {
  const tree = renderer.create(<Chart {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
