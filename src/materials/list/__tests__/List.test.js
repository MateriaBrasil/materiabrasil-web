import React from 'react'
import renderer from 'react-test-renderer'

import List from '../List'

jest.mock('react-router-dom/Link', () => props => <div {...props} />)
jest.mock('../../../favorites/New', () => props => (
  <div {...props}>Favorite</div>
))

it('renders correctly', () => {
  const list = [
    { name: 'foo', imageUrl: 'bar' },
    { name: 'foo', imageUrl: 'bar' },
    { name: 'foo', imageUrl: 'bar' },
  ]
  const tree = renderer.create(<List list={list} />).toJSON()
  expect(tree).toMatchSnapshot()
})
