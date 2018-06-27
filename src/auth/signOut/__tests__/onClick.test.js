import onClick from '../onClick'

it('fires the action', () => {
  const event = { preventDefault: jest.fn() }
  const action = jest.fn()

  onClick(action)(event)
  expect(event.preventDefault).toHaveBeenCalledWith()
  expect(action).toHaveBeenCalledWith()
})
