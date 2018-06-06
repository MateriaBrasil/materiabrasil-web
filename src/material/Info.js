import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Description from './Description'
import renderText from './renderText'

export default ({ current }) => {
  const { name, imageUrl, properties, usage } = current

  return (
    <Grid container spacing={24} justify="center">
      <Grid item xs={12}>
        <Typography variant="display1">{name}</Typography>
      </Grid>

      <Grid item xs={12} sm={6} lg={7}>
        <img src={imageUrl} alt={name} style={{ width: '100%' }} />
        <Paper style={{ marginTop: 16, padding: 24 }}>
          <Typography variant="subheading">Propriedades do material</Typography>
          <Typography variant="body1">{renderText(properties)}</Typography>
        </Paper>
        <Paper style={{ marginTop: 16, marginBottom: 24, padding: 24 }}>
          <Typography variant="subheading">Aplicações</Typography>
          <Typography variant="body1">{renderText(usage)}</Typography>
        </Paper>
      </Grid>

      <Description {...current} />
    </Grid>
  )
}
