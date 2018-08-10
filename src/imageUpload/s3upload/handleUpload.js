import AWS from 'aws-sdk'

import parseCanvas from './parseCanvas'
import updateAWSConfig from './updateAWSConfig'

export default async ({ editorImage, update, id }) => {
  const image = await parseCanvas(editorImage)

  updateAWSConfig()

  let s3 = new AWS.S3({
    params: { Bucket: process.env.REACT_APP_AWS_BUCKET_NAME },
  })

  s3.upload(
    {
      Key: `uploads//${image.md5}.jpg`,
      Body: image.blob,
      ACL: 'public-read',
    },
    (err, data) => err || update({ id, imageUrl: data.Location }),
  )
}
