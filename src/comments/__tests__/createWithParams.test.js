import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = { foo: 'bar' }

  createWithParams(create, '123')(params)

  expect(create).toHaveBeenCalledWith({
    commentable_id: 123,
    commentable_type: 'Material',
    foo: 'bar',
  })
})
