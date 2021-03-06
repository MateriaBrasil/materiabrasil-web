import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../Private', () => props => <div {...props}>{props.children}</div>)

jest.mock('../../../imageUpload/Avatar', () => props => (
  <div {...props}>Avatar</div>
))
jest.mock('../Album', () => props => <div {...props}>Album</div>)
jest.mock('../../../PropertyWithValue', () => props => (
  <div {...props}>PropertyWithValue</div>
))

describe('when user looks at her own profile', () => {
  it('renders correctly', () => {
    const props = { currentUser: { id: 1234 } }
    const infoProps = {
      id: 1234,
      firstName: 'foo-name',
      lastName: 'foo-last',
      albums: [1, 2, 3],
      sharedAlbums: [1, 2, 3],
    }
    const tree = renderer.create(render(props)(infoProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when user looks at another user profile', () => {
  it('renders correctly', () => {
    const props = { currentUser: { id: 1234 } }
    const infoProps = {
      id: 4321,
      firstName: 'foo-name',
      lastName: 'foo-last',
      albums: [1, 2, 3],
      sharedAlbums: [1, 2, 3],
    }
    const tree = renderer.create(render(props)(infoProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
