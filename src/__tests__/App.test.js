import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

const OLD_ENV = process.env
beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})
afterEach(() => {
  process.env = OLD_ENV
})

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
  process.env.REACT_APP_API_URL = 'https://foo-api.com'
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
