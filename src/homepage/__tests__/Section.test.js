import React from 'react'
import renderer from 'react-test-renderer'
import Section from '../Section'

it('renders correctly', () => {
  const tree = renderer.create(<Section />).toJSON()
  expect(tree).toMatchSnapshot()
})
