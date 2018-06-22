import parseCreateResponse from '../parseCreateResponse'

it('returns the correct object', () => {
  const response = { status: 123, data: { foo: 'bar' } }
  expect(parseCreateResponse(response)).toEqual({ created: { foo: 'bar' } })
})
