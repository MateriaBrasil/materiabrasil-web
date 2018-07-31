import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

it('renders correctly - as button', () => {
  const props = { onClick: jest.fn() }
  const tree = renderer.create(<Button {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly - as Icon', () => {
  const props = { onClick: jest.fn(), type: 'Icon' }
  const tree2 = renderer.create(<Button {...props} />).toJSON()
  expect(tree2).toMatchSnapshot()
})
