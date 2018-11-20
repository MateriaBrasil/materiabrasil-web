import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('../List', () => jest.fn(props => <div {...props}>List</div>))

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { bar: 'foo' }
  const tree = renderer.create(renderNew(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
