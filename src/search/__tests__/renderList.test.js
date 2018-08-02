import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => (
    <div {...props}>List - {props.renderError({ error: 'foo-error' })}</div>
  ),
}))
jest.mock('../../Error', () =>
  jest.fn(props => <div {...props}>{props.children.error}</div>),
)
jest.mock('../Search', () => props => <div {...props}>Search</div>)
jest.mock('../list/render', () =>
  jest.fn(props => <div {...props}>renderList</div>),
)

const props = { bar: 'foo' }
const routeProps = {
  history: jest.fn(),
  match: { params: { term: 'foo-term' } },
}

describe('with term', () => {
  it('renders correctly', () => {
    const tree = renderer.create(renderList(props)(routeProps)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('without term', () => {
  it('renders correctly', () => {
    routeProps.match.params.term = ''
    const tree = renderer.create(renderList(props)(routeProps))
    expect(tree).toMatchSnapshot()
  })
})
