import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

it('renders correctly', () => {
  const current = {
    name: 'foo',
    imageUrl: 'bar',
    description: 'info',
    averagePrice: '100',
    code: '999',
  }
  const tree = renderer.create(<Info current={current} />).toJSON()
  expect(tree).toMatchSnapshot()
})
