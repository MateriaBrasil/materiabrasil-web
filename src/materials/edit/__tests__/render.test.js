import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Edit', () => props => <div {...props}>Edit</div>)

it('renders correctly', () => {
  const Component = render({ foo: 'bar' })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
