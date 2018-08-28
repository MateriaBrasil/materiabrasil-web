import React from 'react'
import renderer from 'react-test-renderer'

import Materials from '../Materials'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

jest.mock('../../../materials/list/Card', () => props => (
  <div {...props}>Card</div>
))

const list = [{ id: 11111 }, { id: 22222 }]

it('renders correctly', () => {
  const tree = renderer.create(<Materials list={list} />).toJSON()
  expect(tree).toMatchSnapshot()
})
