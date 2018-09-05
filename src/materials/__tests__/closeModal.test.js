import closeModal from '../closeModal'

it('calls function correctly', () => {
  const push = jest.fn()
  const props = { id: 1111, history: { push } }
  closeModal(props)()
  expect(push).toHaveBeenCalledWith(`/${props.id}`)
})
