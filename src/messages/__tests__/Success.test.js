import React from 'react'
import renderer from 'react-test-renderer'

import Success from '../Success'

jest.mock('@material-ui/core/Dialog', () => props => (
  <div {...props}>Dialog - {props.children}</div>
))

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = { match: { params: { id: 1234 } }, title: 'foo-title' }
    const tree = renderer.create(<Success {...props}>Foo</Success>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
