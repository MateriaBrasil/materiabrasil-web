import handleUpload from '../handleUpload'

jest.mock('aws-sdk', () => ({
  S3: class {
    constructor() {
      this.upload = jest
        .fn()
        .mockImplementationOnce((image, callback) => callback('error', null))
    }
  },
}))

jest.mock('../updateAWSConfig')

describe('when there is an upload error', () => {
  it('does not update', async () => {
    const update = jest.fn()

    await handleUpload({
      foo: 'bar',
      update,
      id: 'bar',
    })
    expect(update).not.toHaveBeenCalled()
  })
})
