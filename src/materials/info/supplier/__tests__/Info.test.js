import React from 'react'
import renderer from 'react-test-renderer'

import Info from '../Info'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../../../../auth/SignUpLink', () => props => (
  <div {...props}>SignUpLink</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Info location={{}} />).toJSON()

  expect(tree).toMatchSnapshot()
})

describe('with current user', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Info location={{}} currentUser={{}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
