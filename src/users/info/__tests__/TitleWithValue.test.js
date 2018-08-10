import React from 'react'
import renderer from 'react-test-renderer'

import TitleWithValue from '../TitleWithValue'

it('renders correctly', () => {
  const tree = renderer.create(<TitleWithValue />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with title and value', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TitleWithValue title="foo" value="bar" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
