import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../Avatar'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>{props.children}</div>
))

jest.mock('../Image', () => props => <div {...props}>Image</div>)

describe('when editable', () => {
  it('renders correctly', () => {
    const props = { editable: true, bar: 'foo' }
    const tree = renderer.create(<Avatar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when not editable', () => {
  it('renders correctly', () => {
    const props = { editable: false, bar: 'foo' }
    const tree = renderer.create(<Avatar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
