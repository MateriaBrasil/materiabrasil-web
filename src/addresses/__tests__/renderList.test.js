import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const list = [{ id: 123 }, { id: 456 }]

  const props = { bar: 'foo' }
  const tree = renderer.create(renderList(props)(list)).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('without list', () => {
  it('renders correctly', () => {
    const list = null

    const props = { bar: 'foo' }
    const tree = renderer.create(renderList(props)(list)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with zip code', () => {
  it('renders correctly', () => {
    const list = [{ id: 123, zipCode: 'foo-code' }, { id: 456 }]

    const props = { bar: 'foo' }
    const tree = renderer.create(renderList(props)(list)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when address type is "manufacture"', () => {
  it('renders correctly', () => {
    const list = [{ id: 123, addressType: 'manufacture' }, { id: 456 }]

    const props = { bar: 'foo' }
    const tree = renderer.create(renderList(props)(list)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
