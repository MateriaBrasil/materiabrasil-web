import React from 'react'
import renderer from 'react-test-renderer'
import Screen from '../Screen'

jest.mock('../Router', () => props => <div {...props}>Router</div>)

it('renders correctly', () => {
  const tree = renderer.create(<Screen />).toJSON()
  expect(tree).toMatchSnapshot()
})
