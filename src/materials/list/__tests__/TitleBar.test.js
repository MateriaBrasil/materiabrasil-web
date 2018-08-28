import React from 'react'
import renderer from 'react-test-renderer'

import TitleBar from '../TitleBar'

jest.mock('react-router-dom/Link', () => props => <div {...props}>Link</div>)

jest.mock('../Rating', () => props => <div {...props}>Rating</div>)

it('renders correctly', () => {
  const props = { material: {} }
  const tree = renderer.create(<TitleBar {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with average rating', () => {
  it('renders correctly', () => {
    const props = { material: { averageRating: 234 } }
    const tree = renderer.create(<TitleBar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('with render icons', () => {
  it('renders correctly', () => {
    const renderIcons = jest.fn()
    const props = { material: {}, renderIcons }
    const tree = renderer.create(<TitleBar {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
