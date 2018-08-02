import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('croods', () => ({
  Info: props => <div {...props}>Info - {props.render([{ foo: 'bar' }])}</div>,
}))

jest.mock('../renderInfo', () =>
  jest.fn(props => routeProps => (
    <div {...props} {...routeProps}>
      renderInfo
    </div>
  )),
)

it('renders correctly', () => {
  const props = { bar: 'foo' }
  const routeProps = { match: { params: { id: 1234 } } }
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
