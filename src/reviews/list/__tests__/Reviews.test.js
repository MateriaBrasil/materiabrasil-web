import React from 'react'
import renderer from 'react-test-renderer'

import Reviews from '../Reviews'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('../../Rating', () => props => (
  <div rating={props.rating} {...props}>
    Rating - {props.children}
  </div>
))

it('renders correctly', () => {
  const list = [
    {
      id: 11111,
      user: { id: 111112, name: 'foo-name' },
      text: 'foo-text',
      rating: 5,
    },
    {
      id: 22222,
      user: { id: 222223, name: 'foo-name' },
      text: 'foo-text',
      rating: 1,
    },
  ]

  const tree = renderer.create(<Reviews list={list} />).toJSON()
  expect(tree).toMatchSnapshot()
})
