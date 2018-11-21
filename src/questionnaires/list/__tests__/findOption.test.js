import findOption from '../findOption'

describe('when children matches', () => {
  it('returns children', () => {
    const answer = { id: 4321, questionId: 432, optionId: 123 }

    const question = {
      options: [{ id: 123 }],
    }
    expect(findOption(answer, question)).toEqual({
      id: 123,
    })
  })
})
