import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../../../addresses/Addresses', () => props => (
  <div {...props}>Addresses</div>
))

jest.mock('../../../imageUpload/Avatar', () => props => (
  <div {...props}>Avatar</div>
))

it('renders correctly', () => {
  const current = {
    id: 1234,
    name: 'foo-name',
    description: 'foo-description',
    phone: '0000-0000',
    userId: 1234,
    imageUrl: '/foo/url',
  }
  const location = { pathname: '/foo' }
  const props = { currentUser: { id: 1234 }, current, location }
  const tree = renderer.create(<Info {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('without currentUser', () => {
  it('renders correctly', () => {
    const current = {
      id: 1234,
      name: 'foo-name',
      description: 'foo-description',
      phone: '0000-0000',
      userId: 1234,
      imageUrl: '/foo/url',
    }
    const location = { pathname: '/foo' }
    const props = { current, location }
    const tree = renderer.create(<Info {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with materials', () => {
  it('renders correctly', () => {
    const current = {
      id: 1234,
      name: 'foo-name',
      description: 'foo-description',
      phone: '0000-0000',
      userId: 1234,
      imageUrl: '/foo/url',
      materials: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }
    const location = { pathname: '/foo' }
    const props = { current, location }
    const tree = renderer.create(<Info {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
