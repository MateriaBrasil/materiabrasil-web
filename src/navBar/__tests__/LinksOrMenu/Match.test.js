import React from 'react'
import renderer from 'react-test-renderer'

import LinksOrMenu from '../../LinksOrMenu'

jest.mock('react-media', () => props => (
  <div {...props}>Media - {props.children(true)}</div>
))

jest.mock('@material-ui/core/Menu', () => props => (
  <div {...props}>Menu - {props.children}</div>
))
jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

describe('with initial state', () => {
  it('renders correctly', () => {
    const props = { location: { pathname: 'foo-path' } }
    const tree = renderer.create(<LinksOrMenu {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when calling handleClick', () => {
  it('it updates state correctly', () => {
    const props = { location: { pathname: 'foo-path' } }
    const instance = renderer.create(<LinksOrMenu {...props} />).getInstance()
    const event = { currentTarget: 'foo-element' }
    instance.handleClick(event)
    expect(instance.state.anchorEl).toBe('foo-element')
  })
})

describe('when calling handleClose', () => {
  it('it updates state correctly', () => {
    const props = { location: { pathname: 'foo-path' } }
    const instance = renderer.create(<LinksOrMenu {...props} />).getInstance()
    instance.handleClose()
    expect(instance.state.anchorEl).toBe(null)
  })
})
