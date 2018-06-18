import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'

import renderText from './renderText'

export default ({ name, imageUrl, properties, usage }) => (
  <Grid item xs={12} sm={6} lg={7}>
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography variant="subheading" style={{ marginBottom: 8 }}>
          Propriedades do material
        </Typography>
        <Typography variant="body1">{renderText(properties)}</Typography>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <Typography variant="subheading" style={{ marginBottom: 8 }}>
          Aplicações
        </Typography>
        <Typography variant="body1">{renderText(usage)}</Typography>
      </CardContent>
    </Card>
  </Grid>
)
