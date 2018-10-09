import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Info', () => props => <div {...props}>Info</div>)

it('renders correctly', () => {
  const Component = render({ foo: 'bar' })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
