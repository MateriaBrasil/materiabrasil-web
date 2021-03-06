import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../drivers/withDriversQuestions', () => Component => Component)
jest.mock('../../navBar/NavBar', () => props => <div {...props}>NavBar</div>)

it('renders correctly', () => {
  const props = {}
  const routeProps = {}
  const tree = renderer.create(render(props)(routeProps)).toJSON()
  expect(tree).toMatchSnapshot()
})
