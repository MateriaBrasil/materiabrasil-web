import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = { name: 'foo-name' }

  createWithParams(create, '123')(params)

  expect(create).toHaveBeenCalledWith({
    supplierId: 123,
    name: 'foo-name',
  })
})
