import React from 'react'
import renderer from 'react-test-renderer'

import Search from '../Search'

jest.mock('../Form', () => props => <div {...props}>Form</div>)

it('renders correctly', () => {
  const tree = renderer.create(<Search foo="bar " />).toJSON()
  expect(tree).toMatchSnapshot()
})
