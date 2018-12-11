import AWS from 'aws-sdk'

import updateAWSConfig from './updateAWSConfig'

export default async ({ id, update, snackbar, ...options }) => {
  updateAWSConfig()

  let s3 = new AWS.S3({
    params: { Bucket: process.env.REACT_APP_AWS_BUCKET_NAME },
  })

  const attributeName = options.attributeName || 'imageUrl'

  s3.upload({ ACL: 'public-read', ...options }, (err, data) => {
    if (err) {
      snackbar.actions.setMessage(
        'Erro ao salvar imagem. Por favor, tente novamente.',
      )
    } else {
      update({ id, [attributeName]: data.Location })
      snackbar.actions.setMessage('Imagem atualizada com sucesso.')
    }
  })
}
