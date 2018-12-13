import handleUpload from '../handleUpload'

jest.mock('aws-sdk', () => ({
  S3: class {
    constructor() {
      this.upload = jest
        .fn()
        .mockImplementationOnce((image, callback) =>
          callback(null, { Location: 'foobar' }),
        )
    }
  },
}))

jest.mock('../updateAWSConfig')

it('calls function correctly', async () => {
  const update = jest.fn()

  await handleUpload({
    foo: 'bar',
    update,
    id: 'bar',
  })
  expect(update).toHaveBeenCalledWith({ id: 'bar', imageUrl: 'foobar' })
})
