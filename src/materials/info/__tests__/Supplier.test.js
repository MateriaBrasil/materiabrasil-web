import React from 'react'
import renderer from 'react-test-renderer'

import Supplier from '../Supplier'

jest.mock('react-router-dom/Link', () => props => (
  <div {...props}>Link - {props.children}</div>
))
jest.mock('../../../auth/SignUpLink', () => props => (
  <div {...props}>SignUpLink</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Supplier location={{}} />).toJSON()

  expect(tree).toMatchSnapshot()
})

describe('with current user', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Supplier location={{}} currentUser={{}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
