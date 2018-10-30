import React from 'react'

import TechnicalSpecificationIcon from '../TechnicalSpecificationIcon'

export default ({ technicalSpecificationUrl, style }) => (
  <TechnicalSpecificationIcon
    url={technicalSpecificationUrl}
    style={style}
    tooltip="Baixar ficha técnica"
  />
)
