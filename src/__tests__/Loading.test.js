import React from 'react'
import renderer from 'react-test-renderer'

import Loading from '../Loading'

jest.mock('@material-ui/core/CircularProgress', () =>
  jest.fn(props => <div {...props}>CircularProgress</div>),
)

it('renders correctly', () => {
  const tree = renderer.create(<Loading />).toJSON()
  expect(tree).toMatchSnapshot()
})
