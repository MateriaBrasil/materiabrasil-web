import React from 'react'
import Grid from '@material-ui/core/Grid'

import Card from '../../materials/list/Card'

export default ({ list }) => (
  <Grid container spacing={8} cellHeight={360}>
    {list.map((material, index) => (
      <Card key={index} ignoreHighlights material={material} />
    ))}
  </Grid>
)
