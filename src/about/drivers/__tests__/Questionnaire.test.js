import React from 'react'
import renderer from 'react-test-renderer'

import Questionnaire from '../Questionnaire'

jest.mock('@material-ui/core/Typography', () => props => (
  <div {...props}>Typography - {props.children}</div>
))

it('renders correctly', () => {
  const list = [
    {
      id: 1,
      question: 'Foo',
    },
    {
      id: 2,
      question: 'Bar',
    },
  ]
  const tree = renderer
    .create(<Questionnaire title="FooBar" list={list} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
