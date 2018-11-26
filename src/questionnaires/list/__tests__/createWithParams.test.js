import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = {
    create,
    aboutId: '123',
    aboutType: 'Supplier',
    optionId: 'option123',
    questionId: 'question123',
  }

  createWithParams(params)()

  expect(create).toHaveBeenCalledWith({
    aboutId: 123,
    aboutType: 'Supplier',
    optionId: 'option123',
    questionId: 'question123',
  })
})
