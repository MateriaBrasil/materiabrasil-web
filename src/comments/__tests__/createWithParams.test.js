import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn(params => params)
  const params = { foo: 'bar', text: 'comment' }

  createWithParams(create, { id: '123', type: 'materials' })(params)

  expect(create).toHaveBeenCalledWith({
    commentable_id: 123,
    commentable_type: 'Material',
    foo: 'bar',
    text: 'comment',
  })
  expect(params.text).toEqual('')
})
