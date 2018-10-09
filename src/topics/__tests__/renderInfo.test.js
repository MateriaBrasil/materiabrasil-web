import React from 'react'
import renderer from 'react-test-renderer'

import renderInfo from '../renderInfo'

jest.mock('croods', () => ({
  Info: props => <div {...props}>Info - {props.render()}</div>,
}))

jest.mock('../info/render', () =>
  jest.fn(props => routeProps => (
    <div {...props} {...routeProps}>
      renderInfo
    </div>
  )),
)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const routeProps = { match: { params: { id: 'foo' } } }
  const tree = renderer.create(renderInfo(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
