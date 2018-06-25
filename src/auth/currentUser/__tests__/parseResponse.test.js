import parseResponse from '../parseResponse'

it('returns the correct object', () => {
  const response = { data: { foo: 'bar' } }
  expect(parseResponse(response)).toEqual({ info: { foo: 'bar' } })
})
