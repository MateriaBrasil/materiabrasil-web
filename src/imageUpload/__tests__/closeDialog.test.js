import closeDialog from '../closeDialog'

it('calls function correctly', () => {
  const push = jest.fn()
  const props = { history: { push } }
  closeDialog(props)()
  expect(push).toHaveBeenCalledWith(`/profile`)
})
