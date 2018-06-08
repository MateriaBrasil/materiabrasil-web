import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ technicalSpecificationUrl }) => (
  <div>
    <Typography variant="subheading" style={{ marginBottom: 10 }}>
      <a target="_blank" href={technicalSpecificationUrl}>
        Baixar especificações técnicas
      </a>
    </Typography>
  </div>
)
