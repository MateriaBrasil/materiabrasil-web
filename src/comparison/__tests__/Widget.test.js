import React from 'react'
import renderer from 'react-test-renderer'

import Widget from '../Widget'

jest.mock('../Chart', () => props => (
  <div {...props}>Chart - {props.children}</div>
))

it('renders correctly when props.open == false', () => {
  const props = {
    open: false,
    actions: { open: jest.fn() },
  }
  const tree = renderer.create(<Widget {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when props.open == true', () => {
  const props = {
    open: true,
    actions: { open: jest.fn() },
  }
  const tree = renderer.create(<Widget {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
