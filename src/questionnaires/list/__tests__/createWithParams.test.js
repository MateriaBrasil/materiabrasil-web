import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)

  createWithParams(create, '123', 'Supplier', 'option123', 'question123')()

  expect(create).toHaveBeenCalledWith({
    aboutId: 123,
    aboutType: 'Supplier',
    optionId: 'option123',
    questionId: 'question123',
  })
})
