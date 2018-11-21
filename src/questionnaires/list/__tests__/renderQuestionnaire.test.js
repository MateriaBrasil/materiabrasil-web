import React from 'react'
import renderer from 'react-test-renderer'

import renderQuestionnaire from '../renderQuestionnaire'

jest.mock('../renderQuestion', () => props => <div {...props}>Question</div>)

it('render correctly', () => {
  const tree = renderer
    .create(renderQuestionnaire({ foo: 'bar' })({ questionId: 1234 }))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
