import parseDestroyResponse from '../parseDestroyResponse'

it('returns the correct object', () => {
  expect(parseDestroyResponse()).toEqual({ destroyed: { id: 'currentUser' } })
})
