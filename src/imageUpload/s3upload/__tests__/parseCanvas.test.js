import parseCanvas from '../parseCanvas'

jest.mock('md5', () => param => param)
jest.mock('blob-util', () => ({
  canvasToBlob: param => param,
  blobToBinaryString: param => param,
}))

it('calls function correctly', () => {
  expect(parseCanvas('foo')).resolves.toEqual({ blob: 'foo', md5: 'foo' })
})
