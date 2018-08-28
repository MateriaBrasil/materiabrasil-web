import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../../form/Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const props = { foo: 'bar', match: { params: {} } }
  const createProps = {
    create: jest.fn(),
    creating: jest.fn(),
    error: jest.fn(),
  }
  const tree = renderer.create(render(props)(createProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
