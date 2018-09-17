import closeModal from '../closeModal'

it('calls function correctly', () => {
  const goBack = jest.fn()
  const props = { id: 1111, history: { goBack } }
  closeModal(props)()
  expect(goBack).toHaveBeenCalledWith()
})
