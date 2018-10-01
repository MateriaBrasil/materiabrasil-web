import React from 'react'

import FileDownloadIcon from '../FileDownloadIcon'

export default ({ technicalSpecificationUrl, style }) => (
  <FileDownloadIcon
    url={technicalSpecificationUrl}
    style={style}
    tooltip="Baixar ficha técnica"
  />
)
