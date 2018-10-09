import React from 'react'
import renderer from 'react-test-renderer'
import renderSuccess from '../renderSuccess'

const props = { bar: 'foo' }
const routeProps = { foo: 'bar', match: { params: { id: 3 } } }

jest.mock('../Success', () => props => <div {...props}>Success</div>)

const tree = renderer.create(renderSuccess(props)(routeProps)).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})
