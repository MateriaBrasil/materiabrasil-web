import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../Material', () => props => props.render(props))
jest.mock('../Info', () => props => <div {...props}>Info</div>)

it('renders correctly', () => {
  const Component = render({ foo: 'bar' })
  const tree = renderer.create(<Component />).toJSON()
  expect(tree).toMatchSnapshot()
})
