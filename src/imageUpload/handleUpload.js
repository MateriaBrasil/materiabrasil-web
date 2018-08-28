import parseCanvas from './parseCanvas'
import handleUpload from '../s3Upload/handleUpload'

export default async ({ editorImage, update, id }) => {
  const image = await parseCanvas(editorImage)

  handleUpload({
    Key: `uploads//${image.md5}.jpg`,
    Body: image.blob,
    update,
    id,
  })
}
