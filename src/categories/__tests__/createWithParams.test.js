import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = {
    match: { params: { id: '123' } },
    category: { id: 321 },
    foo: 'bar',
  }

  createWithParams(create, params)()

  expect(create).toHaveBeenCalledWith({
    materialId: 123,
    categoryId: 321,
  })
})
