import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = { text: 'foo-text', toType: 'Supplier' }

  createWithParams(create, '123')(params)

  expect(create).toHaveBeenCalledWith({
    toId: 123,
    toType: 'Supplier',
    text: 'foo-text',
  })
})
