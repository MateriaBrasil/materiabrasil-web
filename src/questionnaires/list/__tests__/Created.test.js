import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

const props = {
  created: { questionId: 1234, optionId: 66 },
  setAnswers: jest.fn(),
  questionnairesAnswers: [
    { id: 12, questionId: 1234, optionId: 1 },
    { id: 13, questionId: 11, optionId: 1 },
  ],
}

describe('without children', () => {
  it('calls setAnswers correctly', () => {
    renderer.create(<Created {...props} />)
    expect(props.setAnswers).toHaveBeenCalledWith([
      {
        id: 12,
        questionId: 1234,
        optionId: 66,
      },
      { id: 13, questionId: 11, optionId: 1 },
    ])
  })
})
