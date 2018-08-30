import React from 'react'
import renderer from 'react-test-renderer'
import Screen from '../Screen'

jest.mock('../Router', () => props => <div {...props}>Router</div>)

jest.mock('react-media', () => props => (
  <div {...props}>Media - {props.children(true)}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Screen />).toJSON()
  expect(tree).toMatchSnapshot()
})
