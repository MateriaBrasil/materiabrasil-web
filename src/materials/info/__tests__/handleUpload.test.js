import handleUpload from '../handleUpload'

import s3HandleUpload from '../../../s3Upload/handleUpload'

jest.mock('../../../s3Upload/handleUpload', () => jest.fn())

it('calls function correctly', () => {
  const update = jest.fn()
  handleUpload({
    file: { name: 'foo-name' },
    update,
    id: 1234,
    attributeName: 'foo-attr',
    snackbar: { actions: { setMessage: () => {} } },
  })
  expect(s3HandleUpload).toHaveBeenCalledWith({
    Key: `uploads//materials/1234/foo-name`,
    Body: { name: 'foo-name' },
    update,
    id: 1234,
    attributeName: 'foo-attr',
  })
})
