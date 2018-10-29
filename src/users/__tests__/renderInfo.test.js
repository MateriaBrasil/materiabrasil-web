import React from 'react'
import renderer from 'react-test-renderer'

import renderInfo from '../renderInfo'

jest.mock('croods', () => ({
  Info: props => (
    <div {...props}>
      {props.children}
      {props.render()}
    </div>
  ),
}))

jest.mock('../info/render', () => props => info => <div {...props}>Info</div>)

describe('without id', () => {
  it('renders correctly', () => {
    const props = {}
    const routerProps = { match: { params: {} } }
    const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with id', () => {
  it('renders correctly', () => {
    const props = { foo: 'bar' }
    const routerProps = { match: { params: { id: '123' } } }
    const tree = renderer.create(renderInfo(props)(routerProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
