import React from 'react'

import CaptionWithText from './CaptionWithText'

export default ({ supplierName, manufacturingLocation, averagePrice }) => (
  <div>
    <div style={{ marginBottom: 8 }}>
      <CaptionWithText
        style={{ display: 'inline-block', width: '50%' }}
        caption="Fornecedor"
        text={supplierName}
      />
      <CaptionWithText
        style={{ display: 'inline-block', width: '50%' }}
        caption="Local de produção"
        text={manufacturingLocation}
      />
    </div>
    <CaptionWithText caption="Preço médio" text={averagePrice} />
  </div>
)
