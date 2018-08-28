import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../../form/Form', () => props => (
  <div {...props}>Form - {props.children}</div>
))

it('renders correctly', () => {
  const props = {
    info: 'foo-values',
    error: jest.fn(),
    updating: jest.fn(),
    update: 'foo-update',
  }
  const tree = renderer.create(render({ foo: 'bar' })(props)).toJSON()
  expect(tree).toMatchSnapshot()
})
