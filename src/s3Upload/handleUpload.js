import AWS from 'aws-sdk'

import updateAWSConfig from './updateAWSConfig'

export default async ({ id, update, ...options }) => {
  updateAWSConfig()

  let s3 = new AWS.S3({
    params: { Bucket: process.env.REACT_APP_AWS_BUCKET_NAME },
  })

  const attributeName = options.attributeName || 'imageUrl'

  s3.upload(
    { ACL: 'public-read', ...options },
    (err, data) => err || update({ id, [attributeName]: data.Location }),
  )
}
