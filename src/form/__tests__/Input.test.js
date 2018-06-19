import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

it('renders correctly', () => {
  const tree = renderer.create(<Input label="foo" meta={{}} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with error', () => {
  const tree = renderer
    .create(<Input label="foo" meta={{ touched: true, error: 'bar' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
