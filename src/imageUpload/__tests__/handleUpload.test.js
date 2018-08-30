import handleUpload from '../handleUpload'

import s3HandleUpload from '../../s3Upload/handleUpload'

jest.mock('../../s3Upload/handleUpload', () => jest.fn())
jest.mock('../parseCanvas', () => jest.fn(props => props))

it('calls function correctly', async () => {
  const update = jest.fn()
  await handleUpload({
    editorImage: { md5: '1a79a4d', blob: 'foo-blob' },
    update,
    id: 1234,
    attributeName: 'foo-attr',
  })
  expect(s3HandleUpload).toHaveBeenCalledWith({
    Key: `uploads//1a79a4d.jpg`,
    Body: 'foo-blob',
    update,
    id: 1234,
    attributeName: 'foo-attr',
  })
})
