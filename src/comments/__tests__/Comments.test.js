import React from 'react'
import renderer from 'react-test-renderer'

import Comments from '../Comments'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../New', () => props => <div {...props}>New - {props.children}</div>)
jest.mock('../List', () => props => (
  <div {...props}>List - {props.children}</div>
))

describe('without current user', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Comments location={{}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with current user', () => {
  it('renders correctly', () => {
    const user = { name: 'foo', email: 'foo@bar.com' }
    const props = { currentUser: user, location: {} }

    const tree = renderer.create(<Comments {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
