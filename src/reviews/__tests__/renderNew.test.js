import React from 'react'
import renderer from 'react-test-renderer'

import renderNew from '../renderNew'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render()} - {props.renderCreated()}
    </div>
  ),
}))

jest.mock('../../materials/reload', () =>
  jest.fn(props => routeProps => <div {...props}>reload</div>),
)
jest.mock('../new/render', () =>
  jest.fn(props => routeProps => <div {...props}>renderNew</div>),
)

const props = { bar: 'foo' }
const routeProps = { foo: 'bar' }
const tree = renderer.create(renderNew(props)(routeProps)).toJSON()

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})
