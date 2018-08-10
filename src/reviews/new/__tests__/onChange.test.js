import onChange from '../onChange'

it('calls the correct function', () => {
  const change = jest.fn()
  onChange(change)('foo')
  expect(change).toHaveBeenCalledWith('rating', 'foo')
})
