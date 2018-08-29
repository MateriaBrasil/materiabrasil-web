import React from 'react'
import renderer from 'react-test-renderer'

import Menu from '../Menu'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('@material-ui/core/Menu', () => props => (
  <div {...props}>Menu - {props.children}</div>
))
jest.mock('@material-ui/core/MenuItem', () => props => (
  <div {...props}>MenuItem - {props.children}</div>
))

jest.mock('../SignIn', () => props => <div {...props}>SignIn</div>)
jest.mock('../../auth/signOut/SignOut', () => props => (
  <div {...props}>SignOut</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Menu />)
  expect(tree).toMatchSnapshot()
})

describe('with current user', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Menu currentUser={{}} />)
    expect(tree).toMatchSnapshot()
  })

  describe('with suppliers', () => {
    it('renders correctly', () => {
      const suppliers = [{}, {}]

      const tree = renderer.create(<Menu currentUser={{ suppliers }} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
