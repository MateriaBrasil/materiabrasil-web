import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ supplierName, manufacturingLocation, averagePrice }) => (
  <div>
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <Typography variant="caption">Fornecedor</Typography>
        <Typography variant="subheading">{supplierName}</Typography>
      </div>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <Typography variant="caption">Local de produção</Typography>
        <Typography variant="subheading">{manufacturingLocation}</Typography>
      </div>
    </div>
    <Typography variant="caption">Preço médio</Typography>
    <Typography variant="subheading">{averagePrice}</Typography>
  </div>
)
