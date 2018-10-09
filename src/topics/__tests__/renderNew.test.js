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

jest.mock('../new/render', () =>
  jest.fn(props => routeProps => <div {...props}>renderNew</div>),
)
jest.mock('../new/renderCreated', () =>
  jest.fn(props => routeProps => <div {...props}>renderCreated</div>),
)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { bar: 'foo' }
  const tree = renderer.create(renderNew(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
