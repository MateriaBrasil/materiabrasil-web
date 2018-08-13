import React from 'react'
import renderer from 'react-test-renderer'

import Links from '../Links'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../SignIn', () => props => <div {...props}>SignIn</div>)
jest.mock('../../auth/signOut/SignOut', () => props => (
  <div {...props}>SignOut</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Links />)
  expect(tree).toMatchSnapshot()
})

describe('with current user', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Links currentUser={{}} />)
    expect(tree).toMatchSnapshot()
  })

  describe('with suppliers', () => {
    it('renders correctly', () => {
      const suppliers = [{}, {}]

      const tree = renderer.create(<Links currentUser={{ suppliers }} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
