import React from 'react'
import renderer from 'react-test-renderer'

import New from '../New'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render()} - {props.renderCreated()}
    </div>
  ),
}))

jest.mock('../renderNew', () =>
  jest.fn(props => routeProps => <div {...props}>renderNew</div>),
)
jest.mock('../renderCreated', () =>
  jest.fn(props => routeProps => <div {...props}>renderCreated</div>),
)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { bar: 'foo' }
  const tree = renderer.create(New(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
