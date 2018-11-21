import React from 'react'
import renderer from 'react-test-renderer'

import renderQuestion from '../renderQuestion'

jest.mock('../renderOption', () => props => <div {...props}>Question</div>)

it('render correctly', () => {
  const tree = renderer
    .create(renderQuestion({ foo: 'bar' })({ questionId: 1234 }))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
