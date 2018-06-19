import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('../Router', () => props => <div {...props}>Router</div>)

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
