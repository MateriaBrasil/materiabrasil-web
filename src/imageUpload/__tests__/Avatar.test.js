import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../Avatar'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

describe('when editable', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar editable="foo/:id/avatar" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when not editable', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
