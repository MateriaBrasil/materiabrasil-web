import React from 'react'

import FileUploadButton from './FileUploadButton'

export default props => {
  return (
    <FileUploadButton {...props} attributeName="certificationsUrl">
      Enviar Certificações
    </FileUploadButton>
  )
}
