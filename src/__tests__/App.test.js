import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('../Router', () => props => <div {...props}>Router</div>)
jest.mock('croods', () => ({
  createReducer: () => (state = {}, action = {}) => state,
  Provider: ({ children, ...props }) => (
    <div {...props}>Provider - {children}</div>
  ),
  Info: ({ children, ...props }) => <div {...props}>Info - {children}</div>,
}))

jest.mock('auth/Auth', () => ({ render, ...props }) => render(props))

jest.mock('../Screen', () => props => <div {...props}>Screen</div>)

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
