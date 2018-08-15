import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../Avatar'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

describe('with editPath', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar editPath="foo/:id/avatar" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('without editPath', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Avatar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
