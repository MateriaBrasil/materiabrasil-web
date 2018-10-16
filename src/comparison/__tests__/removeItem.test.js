import removeItem from '../removeItem'

it('remove item from comparison', () => {
  const remove = jest.fn()

  removeItem('123', remove)()
  expect(remove).toHaveBeenCalledWith({ id: '123' })
})
