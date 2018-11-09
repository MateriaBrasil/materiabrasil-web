import React from 'react'
import renderer from 'react-test-renderer'
import Explore from '../Explore'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Explore />).toJSON()
  expect(tree).toMatchSnapshot()
})
