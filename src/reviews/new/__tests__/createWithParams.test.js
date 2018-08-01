import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = { rating: '5', text: 'foo-text' }

  createWithParams(create, '123')(params)

  expect(create).toHaveBeenCalledWith({
    reviewable_id: 123,
    reviewable_type: 'Material',
    rating: 5,
    text: 'foo-text',
  })
})
