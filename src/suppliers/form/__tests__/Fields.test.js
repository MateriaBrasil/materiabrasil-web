import React from 'react'
import renderer from 'react-test-renderer'

import Fields from '../Fields'

jest.mock('../../../form/TextField', () => props => (
  <div {...props}>TextField</div>
))
jest.mock('../../../form/SelectField', () => props => (
  <div {...props}>SelectField</div>
))

it('renders correctly', () => {
  const tree = renderer.create(<Fields />).toJSON()
  expect(tree).toMatchSnapshot()
})
