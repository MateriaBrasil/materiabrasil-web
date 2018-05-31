import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('../materials/Materials', () => props => (
  <div {...props}>Materials</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
