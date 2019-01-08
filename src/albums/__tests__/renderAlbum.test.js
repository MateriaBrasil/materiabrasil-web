import React from 'react'
import renderer from 'react-test-renderer'

import renderAlbum from '../renderAlbum'

jest.mock('@material-ui/core/ListItem', () => props => (
  <div {...props}>ListItem - {props.children}</div>
))

jest.mock('../../favorites/New', () => props => (
  <div {...props}>New - {props.children}</div>
))

const album = { id: 11111, name: 'name-1' }
const props = { match: { params: { id: 123 } } }

describe('render', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderAlbum(props)(album)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
