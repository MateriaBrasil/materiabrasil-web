import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../SignUp', () => props => <div {...props}>SignUp</div>)

it('renders correctly', () => {
  const Component = render({ foo: 'bar' })
  const tree = renderer.create(<Component bar="foo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
