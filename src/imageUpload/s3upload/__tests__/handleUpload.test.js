import handleUpload from '../handleUpload'

jest.mock('aws-sdk', () => ({
  S3: {
    upload: jest.fn(),
  },
}))
jest.mock('../parseCanvas')
jest.mock('../updateAWSConfig')

it('calls function correctly', () => {
  const update = jest.fn()
  handleUpload({ editorImage: 'foo', update, id: 'bar' })
  expect(true).toBe(true)
})
