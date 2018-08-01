import createWithParams from '../createWithParams'

it('executes create with merged params', () => {
  const create = jest.fn()

  createWithParams(create, 123)()

  expect(create).toHaveBeenCalledWith({
    album_id: 0,
    favoritable_id: 123,
    favoritable_type: 'Material',
  })
})
