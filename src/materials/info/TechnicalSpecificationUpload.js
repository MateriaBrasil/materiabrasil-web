import React from 'react'

import FileUploadButton from './FileUploadButton'

export default props => {
  const { technicalSpecificationUrl } = props
  return (
    <FileUploadButton {...props} attributeName="technicalSpecificationUrl">
      Enviar
      {technicalSpecificationUrl ? ' nova' : ''} ficha técnica
    </FileUploadButton>
  )
}
