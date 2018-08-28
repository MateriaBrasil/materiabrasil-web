import handleUpload from '../../s3Upload/handleUpload'

export default async ({ file, update, id, attributeName }) => {
  handleUpload({
    Key: `uploads//materials/${id}/${file.name}`,
    Body: file,
    update,
    id,
    attributeName,
  })
}
