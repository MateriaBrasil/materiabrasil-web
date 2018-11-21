import findAnswer from '../findAnswer'

describe('when children matches', () => {
  it('returns children', () => {
    const answers = [
      { id: 4321, questionId: 123 },
      { id: 4321, questionId: 543 },
    ]
    expect(findAnswer(answers, { id: 123 })).toEqual({
      id: 4321,
      questionId: 123,
    })
  })
})
