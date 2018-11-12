import React from 'react'
import renderer from 'react-test-renderer'

import CurrentUser from '../CurrentUser'

jest.mock('croods', () => ({
  Info: props => <div {...props}>Info</div>,
}))

it('renders correctly', () => {
  const tree = renderer.create(<CurrentUser />).toJSON()
  expect(tree).toMatchSnapshot()
})
