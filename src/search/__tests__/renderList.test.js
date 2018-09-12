import React from 'react'
import renderer from 'react-test-renderer'

import renderList from '../renderList'

jest.mock('croods', () => ({
  List: props => (
    <div {...props}>
      List - {props.render([{ foo: 'bar' }])} -
      {props.renderError ? props.renderError('foo-error') : null}
    </div>
  ),
}))
jest.mock('../../Error', () =>
  jest.fn(props => <div {...props}>{props.children}</div>),
)
jest.mock('../Search', () => props => <div {...props}>Search</div>)

jest.mock('../list/render', () => props => list => (
  <div {...props} list={list}>
    renderList
  </div>
))

jest.mock('categories/list/render', () => props => list => (
  <div {...props} list={list}>
    renderCategoriesList
  </div>
))

jest.mock('filters/Filters', () => ({ render, ...props }) => (
  <div {...props}>
    Filters -
    {render({
      selectedCategories: [{ id: 123, name: 'foo-name' }],
    })}
  </div>
))
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
