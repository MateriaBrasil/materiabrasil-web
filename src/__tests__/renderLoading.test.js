import React from 'react'
import renderer from 'react-test-renderer'
import renderLoading from '../renderLoading'

jest.mock('@material-ui/core/CircularProgress', () =>
  jest.fn(props => <div {...props}>CircularProgress</div>),
)

it('renders correctly', () => {
  const tree = renderer.create(renderLoading()).toJSON()
  expect(tree).toMatchSnapshot()
})
